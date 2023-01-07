import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'Password123!',
  database: 'postgres',
  entities: [],
  synchronize: true
}

export default config;
