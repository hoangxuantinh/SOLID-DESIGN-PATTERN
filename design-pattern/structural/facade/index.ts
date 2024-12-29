class Grinder {
    grindBeans() {
    console.log("Grinding beans...");
    }
}

class Boiler {
    boilWater() {
    console.log("Boiling water...");
    }
}

class Brewer {
    brewCoffee() {
    console.log("Brewing coffee...");
    }
}


class CoffeeMakerFacade {
    private grinder: Grinder;
    private boiler: Boiler;
    private brewer: Brewer;
  
    constructor(grinder: Grinder, boiler: Boiler, brewer: Brewer) {
      this.grinder = grinder;
      this.boiler = boiler;
      this.brewer = brewer;
    }
  
    makeCoffee() {
      this.grinder.grindBeans();
      this.boiler.boilWater();
      this.brewer.brewCoffee();
      console.log("Coffee is ready!");
    }
}


let grinder = new Grinder();
let boiler = new Boiler();
let brewer = new Brewer();

let coffeeMaker = new CoffeeMakerFacade(grinder, boiler, brewer);
coffeeMaker.makeCoffee();