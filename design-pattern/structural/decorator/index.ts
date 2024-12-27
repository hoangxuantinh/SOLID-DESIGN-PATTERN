/* 
### Decorator Pattern Concept
  It is used to add new functionality to an existing object, without altering its structure.
  It's a structural pattern as it involves a set of decorator classes that are used to wrap concrete classes.
  A concrete class is a class that has an implementation for all of its methods. 
  They cannot have any unimplemented methods. It can also extend an abstract class or 
  implement an interface as long as it implements all their methods. It is a complete class and can be instantiated.

### Components of the Decorator Pattern
  1 Component: This is the base interface or abstract class, which defines the methods that will be implemented.
  2 ConcreteComponent: This is a class which implements the Component interface.
  3 Decorator: This is also an interface or an abstract class which implements the Component interface.
  4 ConcreteDecorator: This is a class which implements the Decorator. It extends the Decorator to decorate the Component.

*/


// 1 Component
interface Coffee {
  cost(): number;
  description(): string;
}

class SimpleCoffee implements Coffee {
  cost(): number {
    return 10;
  }

  description(): string {
    return 'Simple Coffee';
  }
}


abstract class DecoratorCoffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  cost(): number {
    return this.coffee.cost();
  }

  description(): string {
    return this.coffee.description();
  }
}


class MilkDecorator extends DecoratorCoffee {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  cost(): number {
    return this.coffee.cost() + 5;
  }

  description(): string {
    return this.coffee.description() + ', Milk';
  }
}
const a = new MilkDecorator(new SimpleCoffee());
console.log(a.cost(), a.description()); // 15, Simple Coffee, Milk




