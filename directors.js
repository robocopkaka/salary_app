function salaryCalculator(level, noOfYears){
	
	var directors  = 1200000;
	this.level     = level;
	this.noOfYears = noOfYears;
	
	if (noOfYears===1){
		directors = 1200000 + (0.1*1200000);
		return directors;
	}
	
	if (noOfYears === 2){
		directors= 1200000 + (0.2*1200000);
		return directors;
	}
	
	if (noOfYears === 3){
		directors = 1200000 + (0.3*1200000);
		return directors;
	}
	
	if (noOfYears===4){
		directors = 1200000 + (0.4*1200000);
		return directors;
	}
	
	if (noOfYears === 5){
		directors = 1200000 + (0.5*1200000);
		return directors;
	}
	
	if (noOfYears > 5){
		directors = 1200000 + (0.6*1200000);
		return directors;
	}
}

salaryCalculator("level",6);