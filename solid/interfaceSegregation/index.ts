/* No client should be forced to depend on interfaces they do not use. */

// Not used Interface Segregation Principle
interface Machine {
    print(document: Document): void;
  
    scan(document: Document): void;
  
    fax(document: Document): void;
  }
  
class MultiFunctionPrinter implements Machine {
    print(document: Document): void {
        // actual implementation
    }

    scan(document: Document): void {
        // actual implementation
    }

    fax(document: Document): void {
        // actual implementation
    }
}


// USED Interface Segregation Principle
interface Printer {
    print(document: Document): void;
  }
  
  interface Scanner {
    scan(document: Document): void;
  }
  
  interface FaxMachine {
    fax(document: Document): void;
  }
  
  class SimplePrinter implements Printer {
    print(document: Document): void {
      // actual implementation
    }
  }
  
  class MultiFunctionMachine implements Printer, Scanner, FaxMachine {
    print(document: Document): void {
      // actual implementation
    }
  
    scan(document: Document): void {
      // actual implementation
    }
  
    fax(document: Document): void {
      // actual implementation
    }
}