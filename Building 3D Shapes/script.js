// General_____________________________________________
var checkButton = document.getElementById('checkButton');
var solveButton = document.getElementById('solveButton');
var startButton = document.getElementById('startButton');
var resetButton = document.getElementById('resetButton');
var startPanel = document.getElementById('startPanel');

resetButton.addEventListener("click", function () {
	window.location.reload();
	return false;
})

function check() {
	console.log('check initiated');
}

function solve() {
	console.log('solve initiated');
}
// Bespoke functions_____________________________________
"use strict";

(function () {
	// ======== private vars ========
	var scr,
		canvas,
		cubes,
		faces,
		nx,
		ny,
		nw,
		nh,
		xm = 0,
		ym = 0,
		cx = 50,
		cy = 50,
		cz = 0,
		cxb = 0,
		cyb = 0;
	var white,
	test = '#444',
		ncube,
		faceOver,
		drag,
		moved,
		startX = 0,
		startY = 0;
	var cosY,
		sinY,
		cosX,
		sinX,
		cosZ,
		sinZ,
		minZ,
		angleY = 0,
		angleX = 0,
		angleZ = 0;
	var bkgColor1 = "white";
	var bkgColor2 = "white";
		destroy = false,
		running = true;
	// ---- fov ----
	var fl = 125;
	var zoom = 0;;
	// ======== canvas constructor ========
	var Canvas = function (id) {
		this.container = document.getElementById(id);
		this.ctx = this.container.getContext("2d");
		this.resize = function (w, h) {
			this.container.width = w;
			this.container.height = h;
		};
	};
	// ======== vertex constructor ========
	var Point = function (parent, xyz, project) {
		this.project = project;
		this.xo = xyz[0];
		this.yo = xyz[1];
		this.zo = xyz[2];
		this.cube = parent;
	};

	Point.prototype.projection = function () {
		// ---- 3D rotation ----
		var x = cosY * (sinZ * this.yo + cosZ * this.xo) - sinY * this.zo;
		var y =
			sinX * (cosY * this.zo + sinY * (sinZ * this.yo + cosZ * this.xo)) +
			cosX * (cosZ * this.yo - sinZ * this.xo);
		var z =
			cosX * (cosY * this.zo + sinY * (sinZ * this.yo + cosZ * this.xo)) -
			sinX * (cosZ * this.yo - sinZ * this.xo);
		this.x = x;
		this.y = y;
		this.z = z;
		if (this.project) {
			// ---- point visible ----
			if (z < minZ) minZ = z;
			this.visible = zoom + z > 0;
			// ---- 3D to 2D projection ----
			this.X = nw * 0.5 + x * (fl / (z + zoom));
			this.Y = nh * 0.5 + y * (fl / (z + zoom));
		}
	};
	// ======= polygon constructor ========
	var Face = function (cube, index, normalVector) {
		// ---- parent cube ----
		this.cube = cube;
		// ---- coordinates ----
		this.p0 = cube.points[index[0]];
		this.p1 = cube.points[index[1]];
		this.p2 = cube.points[index[2]];
		this.p3 = cube.points[index[3]];
		// ---- normal vector ----
		this.normal = new Point(this, normalVector, false);
	};

	Face.prototype.pointerInside = function () {
		// ---- Is Point Inside Triangle? ----
		// http://2000clicks.com/mathhelp/GeometryPointAndTriangle2.aspx
		var fAB = function (p1, p2, p3) {
			return (ym - p1.Y) * (p2.X - p1.X) - (xm - p1.X) * (p2.Y - p1.Y);
		};
		var fCA = function (p1, p2, p3) {
			return (ym - p3.Y) * (p1.X - p3.X) - (xm - p3.X) * (p1.Y - p3.Y);
		};
		var fBC = function (p1, p2, p3) {
			return (ym - p2.Y) * (p3.X - p2.X) - (xm - p2.X) * (p3.Y - p2.Y);
		};
		if (
			fAB(this.p0, this.p1, this.p3) * fBC(this.p0, this.p1, this.p3) > 0 &&
			fBC(this.p0, this.p1, this.p3) * fCA(this.p0, this.p1, this.p3) > 0
		)
			return true;
		if (
			fAB(this.p1, this.p2, this.p3) * fBC(this.p1, this.p2, this.p3) > 0 &&
			fBC(this.p1, this.p2, this.p3) * fCA(this.p1, this.p2, this.p3) > 0
		)
			return true;
		// ----
		return false;
	};

	Face.prototype.faceVisible = function () {
		// ---- points visible ----
		if (
			this.p0.visible &&
			this.p1.visible &&
			this.p2.visible &&
			this.p3.visible
		) {
			// ---- back face culling ----
			if (
				((this.p1.Y - this.p0.Y) / (this.p1.X - this.p0.X) <
					(this.p2.Y - this.p0.Y) / (this.p2.X - this.p0.X)) ^
				(this.p0.X < this.p1.X == this.p0.X > this.p2.X)
			) {
				// ---- face visible ----
				this.visible = true;
				return true;
			}
		}
		// ---- face hidden ----
		this.visible = false;
		this.distance = -99999;
		return false;
	};

	Face.prototype.distanceToCamera = function () {
		// ---- distance to camera ----
		var dx = (this.p0.x + this.p1.x + this.p2.x + this.p3.x) * 0.25;
		var dy = (this.p0.y + this.p1.y + this.p2.y + this.p3.y) * 0.25;
		var dz = zoom + fl + (this.p0.z + this.p1.z + this.p2.z + this.p3.z) * 0.25;
		this.distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
	};

	Face.prototype.draw = function () {
		// ---- shape face ----
		canvas.ctx.beginPath();
		canvas.ctx.moveTo(this.p0.X, this.p0.Y);
		canvas.ctx.lineTo(this.p1.X, this.p1.Y);
		canvas.ctx.lineTo(this.p2.X, this.p2.Y);
		canvas.ctx.lineTo(this.p3.X, this.p3.Y);
		canvas.ctx.closePath();
		// ---- fill ----
		canvas.ctx.fillStyle = test;
		canvas.ctx.fill();
	};
	// ======== Cube constructor ========
	var Cube = function (parent, nx, ny, nz, x, y, z, w) {
		if (parent) {
			// ---- translate parent points ----
			this.w = parent.w;
			this.points = [];
			var i = 0,
				p;
			while ((p = parent.points[i++])) {
				this.points.push(
					new Point(parent, [p.xo + nx, p.yo + ny, p.zo + nz], true)
				);
			}
		} else {
			// ---- create points ----
			this.w = w;
			this.points = [];
			var p = [
				[x - w, y - w, z - w],
				[x + w, y - w, z - w],
				[x + w, y + w, z - w],
				[x - w, y + w, z - w],
				[x - w, y - w, z + w],
				[x + w, y - w, z + w],
				[x + w, y + w, z + w],
				[x - w, y + w, z + w]
			];
			for (var i in p) this.points.push(new Point(this, p[i], true));
		}
		// ---- faces coordinates ----
		var f = [
			[0, 1, 2, 3],
			[0, 4, 5, 1],
			[3, 2, 6, 7],
			[0, 3, 7, 4],
			[1, 5, 6, 2],
			[5, 4, 7, 6]
		];
		// ---- faces normals ----
		var nv = [
			[0, 0, 1],
			[0, 1, 0],
			[0, -1, 0],
			[1, 0, 0],
			[-1, 0, 0],
			[0, 0, -1]
		];
		// ---- push faces ----
		for (var i in f) {
			faces.push(new Face(this, f[i], nv[i]));
		}
		ncube++;
	};
	////////////////////////////////////////////////////////////////////////////
	var resize = function () {
		// ---- screen resize ----
		nw = scr.offsetWidth;
		nh = scr.offsetHeight;
		var o = scr;
		for (nx = 0, ny = 0; o != null; o = o.offsetParent) {
			nx += o.offsetLeft;
			ny += o.offsetTop;
		}
		canvas.resize(nw, nh);
	};

	var reset = function () {
		// ---- create first cube ----
		cubes = [];
		faces = [];
		ncube = 0;
		cubes.push(new Cube(false, 0, 0, 0, 0, 0, 0, 50));
	};

	var detectFaceOver = function () {
		// ---- detect pointer over face ----
		var j = 0,
			f;
		faceOver = false;
		while ((f = faces[j++])) {
			if (f.visible) {
				if (f.pointerInside()) {
					faceOver = f;
				}
			} else break;
		}
	};

	var click = function () {
		// ---- click cube ----
		detectFaceOver();
		if (faceOver) {
			if (destroy) {
				if (ncube > 1) {
					var c = faceOver.cube;
					faceOver.clicked = false;
					// ---- destroy faces ----
					var i = 0,
						f;
					while ((f = faces[i++])) {
						if (f.cube == c) {
							faces.splice(--i, 1);
						}
					}
					// ---- destroy cube ----
					var i = 0,
						o;
					while ((o = cubes[i++])) {
						if (o == c) {
							cubes.splice(--i, 1);
							ncube--;
							break;
						}
					}
				}
			} else {
				if (!faceOver.clicked) {
					// ---- create new cube ----
					faceOver.clicked = true;
					var w = -2.25 * faceOver.cube.w;
					cubes.push(
						new Cube(
							faceOver.cube,
							w * faceOver.normal.xo,
							w * faceOver.normal.yo,
							w * faceOver.normal.zo
						)
					);
					detectFaceOver();
				}
			}
		}
	};
	////////////////////////////////////////////////////////////////////////////
	var init = function () {
		// ---- init script ----
		scr = document.getElementById("monitor");
		canvas = new Canvas("canvas");
		// ======== unified touch/mouse events handler ========
		scr.ontouchstart = scr.onmousedown = function (e) {
			if (!running) return true;
			// ---- touchstart ----
			if (e.target !== canvas.container) return;
			e.preventDefault(); // prevents scrolling
			if (scr.setCapture) scr.setCapture();
			moved = false;
			drag = true;
			startX = (e.clientX !== undefined ? e.clientX : e.touches[0].clientX) - nx;
			startY = (e.clientY !== undefined ? e.clientY : e.touches[0].clientY) - ny;
		};

		scr.ontouchmove = scr.onmousemove = function (e) {
			if (!running) return true;
			// ---- touchmove ----
			e.preventDefault();
			xm = (e.clientX !== undefined ? e.clientX : e.touches[0].clientX) - nx;
			ym = (e.clientY !== undefined ? e.clientY : e.touches[0].clientY) - ny;
			detectFaceOver();
			if (drag) {
				cx = cxb + (xm - startX);
				cy = cyb - (ym - startY);
			}
			if (Math.abs(xm - startX) > 10 || Math.abs(ym - startY) > 10) {
				// ---- if pointer moves then cancel the tap/click ----
				moved = true;
			}
		};

		scr.ontouchend = scr.onmouseup = function (e) {
			if (!running) return true;
			// ---- touchend ----
			e.preventDefault();
			if (scr.releaseCapture) scr.releaseCapture();
			drag = false;
			cxb = cx;
			cyb = cy;
			if (!moved) {
				// ---- click/tap ----
				xm = startX;
				ym = startY;
				click();
			}
		};

		scr.ontouchcancel = function (e) {
			if (!running) return true;
			// ---- reset ----
			if (scr.releaseCapture) scr.releaseCapture();
			moved = false;
			drag = false;
			cxb = cx;
			cyb = cy;
			startX = 0;
			startY = 0;
		};
		// ---- Z axis rotation (mouse wheel) ----
		scr.addEventListener("DOMMouseScroll", function (e) {
			if (!running) return true;
			cz += e.detail * 12;
			return false;
		}, false);

		scr.onmousewheel = function () {
			if (!running) return true;
			cz += event.wheelDelta / 5;
			return false;
		};
		// ---- multi-touch gestures ----
		document.addEventListener(
			"gesturechange",
			function (e) {
				if (!running) return true;
				e.preventDefault();
				// ---- Z axis rotation ----
				cz = event.rotation;
			},
			false
		);
		// ---- screen size ----
		resize();
		window.addEventListener("resize", resize, false);

		// Check one checkbox only:
		$('input[type="checkbox"]').click(function () {
			if ($(this).prop("checked") == true) {
				$('input[type="checkbox"]').not(this).prop('checked', false);
			}
		});

		// Changing cube colors:
		document.getElementById("green").onchange = function () {
			green = this.checked;
			if (green) {
				test = 'rgb(0,86,0)';
			} else {
				test = '#444'
			}
			canvas.ctx.fill();
		}

		document.getElementById("red").onchange = function () {
			red = this.checked;
			if (red) {
				test = 'rgb(255,0,0)';
			} else {
				test = '#444'
			}
			canvas.ctx.fill();
		}

		document.getElementById("blue").onchange = function () {
			blue = this.checked;
			if (blue) {
				test = 'rgb(0,0,128)';
			} else {
				test = '#444';
			}
			canvas.ctx.fill();
		}

		document.getElementById("purple").onchange = function () {
			purple = this.checked;
			if (purple) {
				test = 'rgb(103,0,103)';
			} else {
				test = '#444'
			}
			canvas.ctx.fill();
		}

		// Remove a cube
		document.getElementById("destroy").onchange = function () {
			destroy = this.checked;
		};
		// ---- engine start ----
		reset();
		run();
	};
	////////////////////////////////////////////////////////////////////////////
	// ======== main loop ========
	var run = function () {
		// ---- screen background ----
		canvas.ctx.fillStyle = bkgColor1;
		canvas.ctx.fillRect(0, Math.floor(nh * 0.15), nw, Math.ceil(nh * 0.7));
		canvas.ctx.fillStyle = bkgColor2;
		canvas.ctx.fillRect(0, 0, nw, Math.ceil(nh * 0.15));
		canvas.ctx.fillStyle = bkgColor2;
		canvas.ctx.fillRect(0, Math.floor(nh * 0.85), nw, Math.ceil(nh * 0.15));
		// ---- easing rotations ----
		angleX += (cy - angleX) * 0.05;
		angleY += (cx - angleY) * 0.05;
		angleZ += (cz - angleZ) * 0.05;
		// ---- pre-calculating trigo ----
		cosY = Math.cos(angleY * 0.01);
		sinY = Math.sin(angleY * 0.01);
		cosX = Math.cos(angleX * 0.01);
		sinX = Math.sin(angleX * 0.01);
		cosZ = Math.cos(angleZ * 0.01);
		sinZ = Math.sin(angleZ * 0.01);
		// ---- points projection ----
		minZ = 0;
		var i = 0,
			c;
		while ((c = cubes[i++])) {
			var j = 0,
				p;
			while ((p = c.points[j++])) {
				p.projection();
			}
		}
		// ---- adapt zoom ----
		var d = -minZ + 100 - zoom;
		zoom += d * (d > 0 ? 0.05 : 0.01);
		// ---- faces light ----
		var j = 0,
			f;
		while ((f = faces[j++])) {
			if (f.faceVisible()) {
				f.distanceToCamera();
			}
		}
		// ---- faces depth sorting ----
		faces.sort(function (p0, p1) {
			return p1.distance - p0.distance;
		});
		// ---- painting faces ----
		j = 0;
		while ((f = faces[j++])) {
			if (f.visible) {
				f.draw();
			} else break;
		}
		// ---- animation loop ----
		if (running) setTimeout(run, 16);
	};

	return {
		////////////////////////////////////////////////////////////////////////////
		// ---- onload event ----
		load: function () {
			window.addEventListener(
				"load",
				function () {
					init();
				},
				false
			);
		}
	};
})().load();