// Convert with http://www.professorcloud.com/svg-to-canvas/

var svg = require('./svg')
	, primitives = {
			sun: require('./primitives/sunPrimitive'),
			moon: require('./primitives/moonPrimitive'),
			cloud: require('./primitives/cloudPrimitive'),
			raindrop: require('./primitives/raindropPrimitive'),
			sleet: require('./primitives/sleetPrimitive'),
			snowflake: require('./primitives/snowflakePrimitive'),
			fog: require('./primitives/fogPrimitive'),
			lightning: require('./primitives/lightningPrimitive')
		}
	, formula = require('../../resources/weatherSymbols.json')

	, DEFAULT_BG = '#ffffff'
	, SVG = 'svg'
	, CANVAS = 'canvas'
	, IMG = 'img';


module.exports = function (container, options) {
	if (!container) return;

	options = options || {};
	var type = options.svg
				? SVG
				: (options.canvas
					? CANVAS
					: IMG)
		, element = createElement(type)
		, id = options.id || container.getAttribute('data-id')
		, w = container.offsetWidth
		, h = container.offsetHeight
		, scale = options.scale || 1
		, tScale = (type == CANVAS) ? (w/100) * scale : 1
		, bgContainer = getStyle(container, 'background-color')
		, bg = bgContainer && bgContainer !== 'rgba(0, 0, 0, 0)' ? bgContainer : DEFAULT_BG
		, f = formula[id]
		, layer, opts;

	if (type == SVG || type == CANVAS) {
		if (type == CANVAS) {
			if (w != 0) {
				element.width = w * scale;
				element.height = h * scale;
			}
		}

		if (f) {
			for (var i = 0, n = f.length; i < n; i++) {
				layer = f[i];
				opts = {
					type: type,
					x: Math.round(layer.x * tScale),
					y: Math.round(layer.y * tScale),
					scale: (layer.scale || 1) * tScale,
					small: layer.small,
					flip: layer.flip,
					tint: layer.tint,
					winter: layer.winter,
					width: w * scale,
					height: h * scale,
					bg: bg
				};

				primitives[layer.primitive].render(element, opts);
			}
		}
	// Load images
	} else {
		element.src = options.imagePath + id + '.png';
	}

	container.appendChild(element);
};

function getStyle (element, prop) {
	return window.getComputedStyle(element).getPropertyValue(prop);
}

function createElement (type) {
	var el;

	if (type == SVG) {
		el = document.createElementNS(svg.NS, type);
		el.setAttribute('x', '0px');
		el.setAttribute('y', '0px');
		el.setAttribute('viewBox', '0 0 100 100');
	} else {
		el = document.createElement(type);
	}

	return el;
}