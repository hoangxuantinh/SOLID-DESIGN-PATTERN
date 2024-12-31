interface ICustomer {
  firstName: string;
  lastname: string;
  email: string;
  phoneNumber: string;
}

interface ICustomerBuilder {
  setFirstName(firstName: string): ICustomerBuilder;
  setLastName(lastName: string): ICustomerBuilder;
  setEmail(email: string): ICustomerBuilder;
  setPhoneNumber(phoneNumber: string): ICustomerBuilder;
  build(): ICustomer;
}

class CustomerBuilder implements ICustomerBuilder {
  private customer: ICustomer;

  constructor() {
    this.customer = {
      firstName: "",
      lastname: "",
      email: "",
      phoneNumber: "",
    };
  }

  setFirstName(firstName: string): ICustomerBuilder {
    this.customer.firstName = firstName;
    return this;
  }

  setLastName(lastName: string): ICustomerBuilder {
    this.customer.lastname = lastName;
    return this;
  }

  setEmail(email: string): ICustomerBuilder {
    this.customer.email = email;
    return this;
  }

  setPhoneNumber(phoneNumber: string): ICustomerBuilder {
    this.customer.phoneNumber = phoneNumber;
    return this;
  }

  build(): ICustomer {
    return this.customer;
  }
}

class CustomerDirector {
  private customerBuilder: ICustomerBuilder;

  constructor(customerBuilder: ICustomerBuilder) {
    this.customerBuilder = customerBuilder;
  }

  build(firstName: string, lastName: string, email: string): ICustomer {
    return this.customerBuilder
      .setFirstName(firstName)
      .setLastName(lastName)
      .setEmail(email)
      .setPhoneNumber("")
      .build();
  }
}

const builder: ICustomerBuilder = new CustomerBuilder();
const director: CustomerDirector = new CustomerDirector(builder);
const customer: ICustomer = director.build(
  "John",
  "Doe",
  "john.doe@example.com",
);

console.log(customer);
