/* The Open-Closed Principle states that "software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.
   In other words, you should be able to add new functionality to an object or method without altering its structure.
   
### Detailed Explanation:
+ Open for extension: This means that the behavior of the software entity can be extended, that is, we should be able to add new features or behavior to it.
+ Closed for modification: This means that once the software entity is developed and it has been reviewed and tested, 
    the code should not be touched (to correct the software behavior)
*/

// without open-closed principle
class Discount {
  giveDiscount(customerType: string): number {
    if (customerType === "Regular") {
      return 10;
    } else if (customerType === "Premium") {
      return 20;
    }
  }
}

// add a new type customer -> violates the open-closed principle
class Discount {
    giveDiscount(customer: Customer): number {
      if (customer.type === "Regular") {
        return 10;
      } else if (customer.type === "Premium") {
        return 20;
      } else if (customer.type === "Gold") {
        return 30;
      }
      return 0;
    }
  }


// with open-closed principle
interface Customer {
    giveDiscount(): number;
  }
  
  class RegularCustomer implements Customer {
    giveDiscount(): number {
      return 10;
    }
  }
  
  class PremiumCustomer implements Customer {
    giveDiscount(): number {
      return 20;
    }
  }
  
  class Discount {
    giveDiscount(customer: Customer): number {
      return customer.giveDiscount();
    }
  }