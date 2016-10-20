function salaryCalculator(level, noOfYears){
	
	var associate  = 70000;
	this.level     = level;
	this.noOfYears = noOfYears;
	
	if (noOfYears===1){
		associate = 70000 + (0.1*70000);
		return associate;
	}
	
	if (noOfYears === 2){
		associate= 70000 + (0.2*70000);
		return associate;
	}
	
	if (noOfYears === 3){
		associate = 70000 + (0.3*70000);
		return associate;
	}
	
	if (noOfYears===4){
		associate = 70000 + (0.4*70000);
		return associate;
	}
	
	if (noOfYears === 5){
		associate = 70000 + (0.5*70000);
		return associate;
	}
	
	if (noOfYears > 5){
		associate = 70000 + (0.6*70000);
		return associate;
	}
}

salaryCalculator("level",6);