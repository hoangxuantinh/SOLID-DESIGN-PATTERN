class Database {
  private static instance: Database;

  private constructor() {
    Database.instance = new Database();
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}