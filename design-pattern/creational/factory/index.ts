abstract class DatabaseConnection {
   abstract connect(): void;
   abstract disconnect(): void;
   abstract query(sql: string): void;
}

class MySqlConnection extends DatabaseConnection {
   connect(): void {
      console.log("Connecting to MySQL database...");
   }

   disconnect(): void {
      console.log("Disconnecting from MySQL database...");
   }

   query(sql: string): void {
      console.log(`Executing query: ${sql}`);
   }
}


class PostgresConnection extends DatabaseConnection {
   connect(): void {
      console.log("Connecting to PostgreSQL database...");
   }

   disconnect(): void {
      console.log("Disconnecting from PostgreSQL database...");
   }

   query(sql: string): void {
      console.log(`Executing query: ${sql}`);
   }
}


class DatabaseConnectionFactory {
   static createConnection(type: 'mysql' | 'postgres'): DatabaseConnection {
      switch (type) {
         case "mysql":
            return new MySqlConnection();
         case "postgres":
            return new PostgresConnection();
         default:
            throw new Error("Invalid database type");
      }
   }
}



const mysqlConnection: DatabaseConnection = DatabaseConnectionFactory.createConnection("mysql");