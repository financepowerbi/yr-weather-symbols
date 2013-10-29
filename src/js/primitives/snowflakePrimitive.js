var TWO_PI = Math.PI * 2
	, BG_COLOUR = '#ffffff'
	, FILL_COLOUR = '#6fc6e3';

exports.render = function(ctx, options) {
	// Stroke
	ctx.save();
	ctx.fillStyle = BG_COLOUR;
	ctx.translate(options.x, options.y)
	ctx.scale(options.scale, options.scale);
	ctx.fillStyle = BG_COLOUR;
	ctx.beginPath();
	ctx.arc(7,2.875,8,0,TWO_PI,true);
	ctx.closePath();
	ctx.fill();

	// Fill
	ctx.fillStyle = FILL_COLOUR;
	ctx.beginPath();
	ctx.moveTo(11.393,1.906);
	ctx.lineTo(9.326,3.979);
	ctx.bezierCurveTo(9.055,3.849,8.783,3.728,8.48,3.637);
	ctx.bezierCurveTo(8.188,3.567,7.897,3.536,7.605,3.527);
	ctx.lineTo(6.842,0.688);
	ctx.bezierCurveTo(6.681,0.105,6.077,-0.247,5.494,-0.086);
	ctx.bezierCurveTo(4.91,0.065,4.549,0.668,4.719,1.268);
	ctx.lineTo(5.474,4.096);
	ctx.bezierCurveTo(4.966,4.412,4.539,4.845,4.222,5.353);
	ctx.lineTo(1.391,4.604);
	ctx.bezierCurveTo(0.803,4.4430000000000005,0.19399999999999995,4.795,0.04299999999999993,5.3740000000000006);
	ctx.bezierCurveTo(-0.12900000000000006,5.978000000000001,0.22899999999999993,6.5760000000000005,0.822,6.737);
	ctx.lineTo(3.648,7.488);
	ctx.bezierCurveTo(3.668,8.092,3.8240000000000003,8.690000000000001,4.101,9.218);
	ctx.lineTo(2.034,11.286);
	ctx.bezierCurveTo(1.6009999999999998,11.708,1.6109999999999998,12.407,2.045,12.841);
	ctx.bezierCurveTo(2.477,13.273,3.171,13.283,3.598,12.841);
	ctx.lineTo(5.664,10.767);
	ctx.bezierCurveTo(5.926,10.918999999999999,6.202999999999999,11.045,6.5,11.120999999999999);
	ctx.bezierCurveTo(6.807,11.190999999999999,7.093,11.225999999999999,7.384,11.225999999999999);
	ctx.lineTo(8.144,14.062999999999999);
	ctx.bezierCurveTo(8.3,14.646999999999998,8.915000000000001,14.994,9.498000000000001,14.838);
	ctx.bezierCurveTo(10.092,14.677,10.434000000000001,14.081999999999999,10.272000000000002,13.488999999999999);
	ctx.lineTo(9.518000000000002,10.661);
	ctx.bezierCurveTo(10.031000000000002,10.344999999999999,10.458000000000002,9.907,10.765000000000002,9.394);
	ctx.lineTo(13.611000000000002,10.158);
	ctx.bezierCurveTo(14.194000000000003,10.304,14.807000000000002,9.956999999999999,14.964000000000002,9.373999999999999);
	ctx.bezierCurveTo(15.120000000000003,8.78,14.773000000000001,8.177,14.180000000000001,8.024999999999999);
	ctx.lineTo(11.344000000000001,7.259999999999999);
	ctx.bezierCurveTo(11.323,6.655999999999999,11.173000000000002,6.071999999999999,10.891000000000002,5.5379999999999985);
	ctx.lineTo(12.958000000000002,3.4759999999999986);
	ctx.bezierCurveTo(13.390000000000002,3.042999999999999,13.390000000000002,2.3379999999999987,12.968000000000002,1.9059999999999986);
	ctx.bezierCurveTo(12.524,1.484,11.815,1.484,11.393,1.906);
	ctx.closePath();
	ctx.fill();

	// Center
	ctx.fillStyle = BG_COLOUR;
	ctx.beginPath();
	ctx.arc(7.5,7.375,2,0,TWO_PI,true);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
};