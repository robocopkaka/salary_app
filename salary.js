function salary(level, yearsOfExperience){
    this.level = level;
    this.yearsOfExperience = yearsOfExperience;

    var manager = 500000
    var executive = 1000000
    

    

    if(this.level === "manager"){
    	if(this.yearsOfExperience === 1){
    		this.salary = ((manager * 0.1) + manager);
    		return this.salary;
    	}
    	else if(yearsOfExperience === 2){
    		this.salary = ((manager * 0.2) + manager);
    		return this.salary;
    	}
    	else if(yearsOfExperience === 3){
    		this.salary = ((manager * 0.3) + manager);
    		return this.salary;
    	}

    	else if(yearsOfExperience === 4){
    		this.salary = ((manager * 0.4) + manager)
    		return this.salary;
    	}
    	else if(yearsOfExperience >= 5){
    		this.salary = ((manager * 0.5) + manager)
    		return this.salary;
    	}
    }

    if(this.level === "executive"){
    	if(this.yearsOfExperience === 1){
    		this.salary = ((executive * 0.1) + executive)
    		return this.salary;
    	}
    	else if(yearsOfExperience === 2){
    		this.salary = ((executive * 0.2) + executive)
    		return this.salary;
    	}
    	else if(yearsOfExperience === 3){
    		this.salary = ((executive * 0.3) + executive)
    		return this.salary;
    	}

    	else if(yearsOfExperience === 4){
    		this.salary = ((executive * 0.4) + executive)
    		return this.salary;
    	}
    	else if(yearsOfExperience >= 5){
    		this.salary = ((executive * 0.5) + executive)
    		return this.salary;
    	}
    }
}