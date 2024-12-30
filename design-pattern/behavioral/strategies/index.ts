interface PaymentStrategy {
    pay(amount: number): void;
}

class CreditCardStrategy implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using Credit Card`);
    }
}

class PayPalStrategy implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using PayPal`);
    }
}

class BitcoinStrategy implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using BitCoin`);
    }
}


class ShoppingCart {
    private amount: number;
    private strategy: PaymentStrategy;
  
    constructor(strategy: PaymentStrategy) {
      this.amount = 0;
      this.strategy = strategy;
    }
  
    setPaymentStrategy(strategy: PaymentStrategy): void {
      this.strategy = strategy;
    }
  
    addToCart(value: number): void {
      this.amount += value;
    }
  
    checkout(): void {
      this.strategy.pay(this.amount);
      this.amount = 0;
    }
}


let cart = new ShoppingCart(new PayPalStrategy());
cart.addToCart(100);
cart.addToCart(200);
cart.checkout(); // Output: Paid 300 using PayPal.

cart.setPaymentStrategy(new CreditCardStrategy());
cart.addToCart(100);
cart.checkout(); // Output: Paid 100 using Credit Card.

cart.setPaymentStrategy(new BitcoinStrategy());
cart.addToCart(500);
cart.checkout(); // Output: Paid 500 using Bitcoin.