import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  uniqueIndex,
  varchar,
  longtext,
  datetime,
  text,
  decimal,
  index,
  mysqlEnum,
  tinyint,
  foreignKey,
  date,
  double,
  timestamp,
  bigint,
  int,
  boolean,
} from 'drizzle-orm/mysql-core';
import {
  // AnyColumnBuilder,
  InferModel,
  relations,
  sql,
  ColumnBuilder,
  AnyTable,
} from 'drizzle-orm';

export const drizzleRepro = mysqlTable(
  'drizzleRepro',
  {
    id: varchar('id', { length: 21 }).primaryKey().notNull(),
    someField: varchar('someField', { length: 255 }).notNull(),
  }
);
