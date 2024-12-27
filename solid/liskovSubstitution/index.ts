/* Concept: Liskov Substitution Principle
 - If S is a subtype of T, then objects of type T in a program may be replaced with objects of type S without altering any of the desirable properties of that program.
 - Đảm bảo các object của lớp con có thể thay thế bằng object của lớp cha mà không làm thay đổi bất kỳ thuộc tính, hành vi nào của chương trình.
    Các lớp con không được thay đổi hành vi của lớp cha.
 */


abstract class PaymentProcessor {
    abstract processPayment(amount: number): void;
}


class CreditCardPaymentProcessor extends PaymentProcessor {
    processPayment(amount: number): void {
        console.log('Processing credit card payment ' + amount);
    }
}

class DebitCardPaymentProcessor extends PaymentProcessor {
    processPayment(amount: number): void { 
        console.log('Processing debit card payment ' + amount);
    }
}

class VisaCardPaymentProcessor extends PaymentProcessor {
    processPayment(amount: number): void { 
        console.log('Processing visa card payment ' + amount);
    }
}


// client code
function processPayment(paymentProcessor: PaymentProcessor, amount: number) {
    paymentProcessor.processPayment(amount);
}

const creditCardPaymentProcessor = new CreditCardPaymentProcessor();
const pay = processPayment(creditCardPaymentProcessor, 100)
