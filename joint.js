Joint = function(body1, body2, collideConnected) {
	if (arguments.length == 0)
		return;

    if (Joint.id_counter == undefined)
        Joint.id_counter = 0;
    
    this.id = Joint.id_counter++;

	this.body1 = body1;
	this.body2 = body2;

	// allow collision between to cennected body
	this.collideConnected = collideConnected;

	// constraint force limit
	this.max_force = Infinity;

	// max linear correction
	this.max_linear_correction = Infinity;

	// max angular correction
	this.max_angular_correction = Infinity;//Math.PI * (8 / 180);

	// is breakable ?
	this.breakable = false;
}

Joint.LINEAR_SLOP = 0.05;
Joint.ANGULAR_SLOP = deg2rad(1);