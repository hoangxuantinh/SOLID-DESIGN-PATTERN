/**
 * High-level modules should not depend on low-level modules. Both should depend on abstractions.
 * Abstractions should not depend on details. Details should depend on abstractions
 */

// Without Dependency Inversion:
class MySQLDatabase {
  save(data: string): void {
    // logic to save data to a MySQL database
  }
}

class HighLevelModule {
  private database: MySQLDatabase;

  constructor() {
    this.database = new MySQLDatabase();
  }

  execute(data: string): void {
    // high-level logic
    this.database.save(data);
  }
}

// With Dependency Inversion:

interface IDatabase {
  save(data: string): void;
}

class MySQLDatabase implements IDatabase {
  save(data: string): void {
    // logic to save data to a MySQL database
  }
}

class MongoDBDatabase implements IDatabase {
  save(data: string): void {
    // logic to save data to a MongoDB database
  }
}

class HighLevelModule {
  private database: IDatabase;

  constructor(database: IDatabase) {
    this.database = database;
  }

  execute(data: string): void {
    // high-level logic
    this.database.save(data);
  }
}

/* 
Inversion of Control (IoC)
  Nhắc đến nguyên tắc Đảo ngược sự phụ thuộc thì không thể không nhắc tới nguyên lý Inversion of Control hay IoC. Đối với IoC, 
  thay vì flow thông thường là chính ứng dụng khởi tạo và gọi đến các thành phần khác, trong IoC,flow của ứng dụng được điều khiển bởi một framework hay một Container bên ngoài.
  Hiểu một cách đơn giản, class của bạn sẽ trao quyền điều khiển ra bên ngoài, qua việc tiêm (inject) các phụ thuộc (dependency). Đối với mô hình thông thưởng, 
  class sẽ tự khởi tạo các phụ thuộc bên trong để sử dụng.
  Đối với Laravel, bạn sẽ không xa lạ gì với bộ IoC được gọi là “Service Container”. Trên SpringBoot, bộ IoC sẽ khởi tạo các “Bean”. Chúng đều tuân theo nguyên tắc: các đối tượng, 
  dịch vụ được đưa vào quản lý bởi một trung tâm được gọi là Service Locator, từ trung tâm đăng ký (registry) này các lớp muốn sử dụng dịch vụ nào thì Locator sẽ cung cấp (khởi tạo nếu chưa, 
  và trả về dịch vụ cho đối tượng sử dụng). Những lợi thế mà IoC sẽ cung cấp cho ứng dụng của bạn:
      ● Ứng dụng được điều khiển linh hoạt từ bên ngoài thông qua Service Locator. Bạn có thể binding các instance tại thời điểm chạy ứng dụng (Runtime). Ví dụ inject một Interface, 
      mình có thể hoán đổi các class implement interface đó và inject vào class chính bất kỳ lúc nào.
      ● Tách rời việc khởi tạo và thực thi giúp cấu trúc linh hoạt, dễ dàng thay thế và bảo trì.
      ● Dễ dàng testing thông qua mocking các dependency.
Cách thực hiện IoC phổ biến nhất hiện nay là kết hợp giữa Service Locator (cung cấp bởi các Framework) và Dependency Injection --> Composition over Inheritance.
 
*/
