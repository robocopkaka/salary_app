function salary(level, yearsOfExperience){
    this.level = level;
    this.yearsOfExperience = yearsOfExperience;

    var manager = 500000
    var executive = 1000000

    this.calcManager = function(){
    	if(this.yearsOfExperience === 1){
    		return this.salary = ((manager * 0.1) + manager)
    	}
    	else if(yearsOfExperience === 2){
    		return this.salary = ((manager * 0.2) + manager)
    	}
    	else if(yearsOfExperience === 3){
    		return this.salary = ((manager * 0.3) + manager)
    	}

    	else if(yearsOfExperience === 4){
    		return this.salary = ((manager * 0.4) + manager)
    	}
    	else if(yearsOfExperience >= 5){
    		return this.salary = ((manager * 0.5) + manager)
    	}
    }

    this.calcExecutive = function(){
    	if(this.yearsOfExperience === 1){
    		return this.salary = ((executive * 0.1) + executive)
    	}
    	else if(yearsOfExperience === 2){
    		return this.salary = ((executive * 0.2) + executive)
    	}
    	else if(yearsOfExperience === 3){
    		return this.salary = ((executive * 0.3) + executive)
    	}

    	else if(yearsOfExperience === 4){
    		return this.salary = ((executive * 0.4) + executive)
    	}
    	else if(yearsOfExperience >= 5){
    		return this.salary = ((executive * 0.5) + executive)
    	}
    }

    this

};