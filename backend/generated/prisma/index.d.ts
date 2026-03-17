
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ShoppingList
 * 
 */
export type ShoppingList = $Result.DefaultSelection<Prisma.$ShoppingListPayload>
/**
 * Model UserListAccess
 * 
 */
export type UserListAccess = $Result.DefaultSelection<Prisma.$UserListAccessPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model ListItem
 * 
 */
export type ListItem = $Result.DefaultSelection<Prisma.$ListItemPayload>
/**
 * Model Receipt
 * 
 */
export type Receipt = $Result.DefaultSelection<Prisma.$ReceiptPayload>
/**
 * Model ReceiptItem
 * 
 */
export type ReceiptItem = $Result.DefaultSelection<Prisma.$ReceiptItemPayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>
/**
 * Model ShoppingListShare
 * 
 */
export type ShoppingListShare = $Result.DefaultSelection<Prisma.$ShoppingListSharePayload>
/**
 * Model ListInvitation
 * 
 */
export type ListInvitation = $Result.DefaultSelection<Prisma.$ListInvitationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  owner: 'owner',
  editor: 'editor',
  viewer: 'viewer'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Source: {
  manual: 'manual',
  ocr: 'ocr'
};

export type Source = (typeof Source)[keyof typeof Source]


export const PaymentMethod: {
  cash: 'cash',
  card: 'card',
  other: 'other'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Source = $Enums.Source

export const Source: typeof $Enums.Source

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shoppingList`: Exposes CRUD operations for the **ShoppingList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShoppingLists
    * const shoppingLists = await prisma.shoppingList.findMany()
    * ```
    */
  get shoppingList(): Prisma.ShoppingListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userListAccess`: Exposes CRUD operations for the **UserListAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserListAccesses
    * const userListAccesses = await prisma.userListAccess.findMany()
    * ```
    */
  get userListAccess(): Prisma.UserListAccessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listItem`: Exposes CRUD operations for the **ListItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListItems
    * const listItems = await prisma.listItem.findMany()
    * ```
    */
  get listItem(): Prisma.ListItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receipt`: Exposes CRUD operations for the **Receipt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Receipts
    * const receipts = await prisma.receipt.findMany()
    * ```
    */
  get receipt(): Prisma.ReceiptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receiptItem`: Exposes CRUD operations for the **ReceiptItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReceiptItems
    * const receiptItems = await prisma.receiptItem.findMany()
    * ```
    */
  get receiptItem(): Prisma.ReceiptItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shoppingListShare`: Exposes CRUD operations for the **ShoppingListShare** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShoppingListShares
    * const shoppingListShares = await prisma.shoppingListShare.findMany()
    * ```
    */
  get shoppingListShare(): Prisma.ShoppingListShareDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listInvitation`: Exposes CRUD operations for the **ListInvitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListInvitations
    * const listInvitations = await prisma.listInvitation.findMany()
    * ```
    */
  get listInvitation(): Prisma.ListInvitationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ShoppingList: 'ShoppingList',
    UserListAccess: 'UserListAccess',
    Category: 'Category',
    ListItem: 'ListItem',
    Receipt: 'Receipt',
    ReceiptItem: 'ReceiptItem',
    Expense: 'Expense',
    ShoppingListShare: 'ShoppingListShare',
    ListInvitation: 'ListInvitation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "shoppingList" | "userListAccess" | "category" | "listItem" | "receipt" | "receiptItem" | "expense" | "shoppingListShare" | "listInvitation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ShoppingList: {
        payload: Prisma.$ShoppingListPayload<ExtArgs>
        fields: Prisma.ShoppingListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShoppingListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShoppingListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>
          }
          findFirst: {
            args: Prisma.ShoppingListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShoppingListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>
          }
          findMany: {
            args: Prisma.ShoppingListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>[]
          }
          create: {
            args: Prisma.ShoppingListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>
          }
          createMany: {
            args: Prisma.ShoppingListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShoppingListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>[]
          }
          delete: {
            args: Prisma.ShoppingListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>
          }
          update: {
            args: Prisma.ShoppingListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>
          }
          deleteMany: {
            args: Prisma.ShoppingListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShoppingListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShoppingListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>[]
          }
          upsert: {
            args: Prisma.ShoppingListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>
          }
          aggregate: {
            args: Prisma.ShoppingListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShoppingList>
          }
          groupBy: {
            args: Prisma.ShoppingListGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShoppingListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShoppingListCountArgs<ExtArgs>
            result: $Utils.Optional<ShoppingListCountAggregateOutputType> | number
          }
        }
      }
      UserListAccess: {
        payload: Prisma.$UserListAccessPayload<ExtArgs>
        fields: Prisma.UserListAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserListAccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserListAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserListAccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserListAccessPayload>
          }
          findFirst: {
            args: Prisma.UserListAccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserListAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserListAccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserListAccessPayload>
          }
          findMany: {
            args: Prisma.UserListAccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserListAccessPayload>[]
          }
          create: {
            args: Prisma.UserListAccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserListAccessPayload>
          }
          createMany: {
            args: Prisma.UserListAccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserListAccessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserListAccessPayload>[]
          }
          delete: {
            args: Prisma.UserListAccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserListAccessPayload>
          }
          update: {
            args: Prisma.UserListAccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserListAccessPayload>
          }
          deleteMany: {
            args: Prisma.UserListAccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserListAccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserListAccessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserListAccessPayload>[]
          }
          upsert: {
            args: Prisma.UserListAccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserListAccessPayload>
          }
          aggregate: {
            args: Prisma.UserListAccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserListAccess>
          }
          groupBy: {
            args: Prisma.UserListAccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserListAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserListAccessCountArgs<ExtArgs>
            result: $Utils.Optional<UserListAccessCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      ListItem: {
        payload: Prisma.$ListItemPayload<ExtArgs>
        fields: Prisma.ListItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>
          }
          findFirst: {
            args: Prisma.ListItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>
          }
          findMany: {
            args: Prisma.ListItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>[]
          }
          create: {
            args: Prisma.ListItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>
          }
          createMany: {
            args: Prisma.ListItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>[]
          }
          delete: {
            args: Prisma.ListItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>
          }
          update: {
            args: Prisma.ListItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>
          }
          deleteMany: {
            args: Prisma.ListItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>[]
          }
          upsert: {
            args: Prisma.ListItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>
          }
          aggregate: {
            args: Prisma.ListItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListItem>
          }
          groupBy: {
            args: Prisma.ListItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListItemCountArgs<ExtArgs>
            result: $Utils.Optional<ListItemCountAggregateOutputType> | number
          }
        }
      }
      Receipt: {
        payload: Prisma.$ReceiptPayload<ExtArgs>
        fields: Prisma.ReceiptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceiptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceiptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptPayload>
          }
          findFirst: {
            args: Prisma.ReceiptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceiptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptPayload>
          }
          findMany: {
            args: Prisma.ReceiptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptPayload>[]
          }
          create: {
            args: Prisma.ReceiptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptPayload>
          }
          createMany: {
            args: Prisma.ReceiptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReceiptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptPayload>[]
          }
          delete: {
            args: Prisma.ReceiptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptPayload>
          }
          update: {
            args: Prisma.ReceiptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptPayload>
          }
          deleteMany: {
            args: Prisma.ReceiptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceiptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReceiptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptPayload>[]
          }
          upsert: {
            args: Prisma.ReceiptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptPayload>
          }
          aggregate: {
            args: Prisma.ReceiptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceipt>
          }
          groupBy: {
            args: Prisma.ReceiptGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceiptGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceiptCountArgs<ExtArgs>
            result: $Utils.Optional<ReceiptCountAggregateOutputType> | number
          }
        }
      }
      ReceiptItem: {
        payload: Prisma.$ReceiptItemPayload<ExtArgs>
        fields: Prisma.ReceiptItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceiptItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceiptItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptItemPayload>
          }
          findFirst: {
            args: Prisma.ReceiptItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceiptItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptItemPayload>
          }
          findMany: {
            args: Prisma.ReceiptItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptItemPayload>[]
          }
          create: {
            args: Prisma.ReceiptItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptItemPayload>
          }
          createMany: {
            args: Prisma.ReceiptItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReceiptItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptItemPayload>[]
          }
          delete: {
            args: Prisma.ReceiptItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptItemPayload>
          }
          update: {
            args: Prisma.ReceiptItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptItemPayload>
          }
          deleteMany: {
            args: Prisma.ReceiptItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceiptItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReceiptItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptItemPayload>[]
          }
          upsert: {
            args: Prisma.ReceiptItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptItemPayload>
          }
          aggregate: {
            args: Prisma.ReceiptItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceiptItem>
          }
          groupBy: {
            args: Prisma.ReceiptItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceiptItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceiptItemCountArgs<ExtArgs>
            result: $Utils.Optional<ReceiptItemCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      ShoppingListShare: {
        payload: Prisma.$ShoppingListSharePayload<ExtArgs>
        fields: Prisma.ShoppingListShareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShoppingListShareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListSharePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShoppingListShareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListSharePayload>
          }
          findFirst: {
            args: Prisma.ShoppingListShareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListSharePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShoppingListShareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListSharePayload>
          }
          findMany: {
            args: Prisma.ShoppingListShareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListSharePayload>[]
          }
          create: {
            args: Prisma.ShoppingListShareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListSharePayload>
          }
          createMany: {
            args: Prisma.ShoppingListShareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShoppingListShareCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListSharePayload>[]
          }
          delete: {
            args: Prisma.ShoppingListShareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListSharePayload>
          }
          update: {
            args: Prisma.ShoppingListShareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListSharePayload>
          }
          deleteMany: {
            args: Prisma.ShoppingListShareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShoppingListShareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShoppingListShareUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListSharePayload>[]
          }
          upsert: {
            args: Prisma.ShoppingListShareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListSharePayload>
          }
          aggregate: {
            args: Prisma.ShoppingListShareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShoppingListShare>
          }
          groupBy: {
            args: Prisma.ShoppingListShareGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShoppingListShareGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShoppingListShareCountArgs<ExtArgs>
            result: $Utils.Optional<ShoppingListShareCountAggregateOutputType> | number
          }
        }
      }
      ListInvitation: {
        payload: Prisma.$ListInvitationPayload<ExtArgs>
        fields: Prisma.ListInvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListInvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListInvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListInvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListInvitationPayload>
          }
          findFirst: {
            args: Prisma.ListInvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListInvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListInvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListInvitationPayload>
          }
          findMany: {
            args: Prisma.ListInvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListInvitationPayload>[]
          }
          create: {
            args: Prisma.ListInvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListInvitationPayload>
          }
          createMany: {
            args: Prisma.ListInvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListInvitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListInvitationPayload>[]
          }
          delete: {
            args: Prisma.ListInvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListInvitationPayload>
          }
          update: {
            args: Prisma.ListInvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListInvitationPayload>
          }
          deleteMany: {
            args: Prisma.ListInvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListInvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListInvitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListInvitationPayload>[]
          }
          upsert: {
            args: Prisma.ListInvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListInvitationPayload>
          }
          aggregate: {
            args: Prisma.ListInvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListInvitation>
          }
          groupBy: {
            args: Prisma.ListInvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListInvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListInvitationCountArgs<ExtArgs>
            result: $Utils.Optional<ListInvitationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    shoppingList?: ShoppingListOmit
    userListAccess?: UserListAccessOmit
    category?: CategoryOmit
    listItem?: ListItemOmit
    receipt?: ReceiptOmit
    receiptItem?: ReceiptItemOmit
    expense?: ExpenseOmit
    shoppingListShare?: ShoppingListShareOmit
    listInvitation?: ListInvitationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    lists: number
    accesses: number
    invitedAccess: number
    receipts: number
    expenses: number
    checkedItems: number
    sharedLists: number
    createdInvitations: number
    usedInvitations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lists?: boolean | UserCountOutputTypeCountListsArgs
    accesses?: boolean | UserCountOutputTypeCountAccessesArgs
    invitedAccess?: boolean | UserCountOutputTypeCountInvitedAccessArgs
    receipts?: boolean | UserCountOutputTypeCountReceiptsArgs
    expenses?: boolean | UserCountOutputTypeCountExpensesArgs
    checkedItems?: boolean | UserCountOutputTypeCountCheckedItemsArgs
    sharedLists?: boolean | UserCountOutputTypeCountSharedListsArgs
    createdInvitations?: boolean | UserCountOutputTypeCountCreatedInvitationsArgs
    usedInvitations?: boolean | UserCountOutputTypeCountUsedInvitationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingListWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserListAccessWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvitedAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserListAccessWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceiptWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCheckedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSharedListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingListShareWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListInvitationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUsedInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListInvitationWhereInput
  }


  /**
   * Count Type ShoppingListCountOutputType
   */

  export type ShoppingListCountOutputType = {
    items: number
    receipts: number
    accesses: number
    sharedWith: number
    invitations: number
  }

  export type ShoppingListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ShoppingListCountOutputTypeCountItemsArgs
    receipts?: boolean | ShoppingListCountOutputTypeCountReceiptsArgs
    accesses?: boolean | ShoppingListCountOutputTypeCountAccessesArgs
    sharedWith?: boolean | ShoppingListCountOutputTypeCountSharedWithArgs
    invitations?: boolean | ShoppingListCountOutputTypeCountInvitationsArgs
  }

  // Custom InputTypes
  /**
   * ShoppingListCountOutputType without action
   */
  export type ShoppingListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListCountOutputType
     */
    select?: ShoppingListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShoppingListCountOutputType without action
   */
  export type ShoppingListCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListItemWhereInput
  }

  /**
   * ShoppingListCountOutputType without action
   */
  export type ShoppingListCountOutputTypeCountReceiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceiptWhereInput
  }

  /**
   * ShoppingListCountOutputType without action
   */
  export type ShoppingListCountOutputTypeCountAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserListAccessWhereInput
  }

  /**
   * ShoppingListCountOutputType without action
   */
  export type ShoppingListCountOutputTypeCountSharedWithArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingListShareWhereInput
  }

  /**
   * ShoppingListCountOutputType without action
   */
  export type ShoppingListCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListInvitationWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    items: number
    expenses: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CategoryCountOutputTypeCountItemsArgs
    expenses?: boolean | CategoryCountOutputTypeCountExpensesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListItemWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }


  /**
   * Count Type ReceiptCountOutputType
   */

  export type ReceiptCountOutputType = {
    items: number
  }

  export type ReceiptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ReceiptCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ReceiptCountOutputType without action
   */
  export type ReceiptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptCountOutputType
     */
    select?: ReceiptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReceiptCountOutputType without action
   */
  export type ReceiptCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceiptItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    name: string | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    name: string | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    name: number
    email: number
    password_hash: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password_hash?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password_hash?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password_hash?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    name: string
    email: string
    password_hash: string
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
    lists?: boolean | User$listsArgs<ExtArgs>
    accesses?: boolean | User$accessesArgs<ExtArgs>
    invitedAccess?: boolean | User$invitedAccessArgs<ExtArgs>
    receipts?: boolean | User$receiptsArgs<ExtArgs>
    expenses?: boolean | User$expensesArgs<ExtArgs>
    checkedItems?: boolean | User$checkedItemsArgs<ExtArgs>
    sharedLists?: boolean | User$sharedListsArgs<ExtArgs>
    createdInvitations?: boolean | User$createdInvitationsArgs<ExtArgs>
    usedInvitations?: boolean | User$usedInvitationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "name" | "email" | "password_hash" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lists?: boolean | User$listsArgs<ExtArgs>
    accesses?: boolean | User$accessesArgs<ExtArgs>
    invitedAccess?: boolean | User$invitedAccessArgs<ExtArgs>
    receipts?: boolean | User$receiptsArgs<ExtArgs>
    expenses?: boolean | User$expensesArgs<ExtArgs>
    checkedItems?: boolean | User$checkedItemsArgs<ExtArgs>
    sharedLists?: boolean | User$sharedListsArgs<ExtArgs>
    createdInvitations?: boolean | User$createdInvitationsArgs<ExtArgs>
    usedInvitations?: boolean | User$usedInvitationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      lists: Prisma.$ShoppingListPayload<ExtArgs>[]
      accesses: Prisma.$UserListAccessPayload<ExtArgs>[]
      invitedAccess: Prisma.$UserListAccessPayload<ExtArgs>[]
      receipts: Prisma.$ReceiptPayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
      checkedItems: Prisma.$ListItemPayload<ExtArgs>[]
      sharedLists: Prisma.$ShoppingListSharePayload<ExtArgs>[]
      createdInvitations: Prisma.$ListInvitationPayload<ExtArgs>[]
      usedInvitations: Prisma.$ListInvitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      name: string
      email: string
      password_hash: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lists<T extends User$listsArgs<ExtArgs> = {}>(args?: Subset<T, User$listsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accesses<T extends User$accessesArgs<ExtArgs> = {}>(args?: Subset<T, User$accessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserListAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitedAccess<T extends User$invitedAccessArgs<ExtArgs> = {}>(args?: Subset<T, User$invitedAccessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserListAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receipts<T extends User$receiptsArgs<ExtArgs> = {}>(args?: Subset<T, User$receiptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends User$expensesArgs<ExtArgs> = {}>(args?: Subset<T, User$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    checkedItems<T extends User$checkedItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$checkedItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sharedLists<T extends User$sharedListsArgs<ExtArgs> = {}>(args?: Subset<T, User$sharedListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdInvitations<T extends User$createdInvitationsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdInvitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usedInvitations<T extends User$usedInvitationsArgs<ExtArgs> = {}>(args?: Subset<T, User$usedInvitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.lists
   */
  export type User$listsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    where?: ShoppingListWhereInput
    orderBy?: ShoppingListOrderByWithRelationInput | ShoppingListOrderByWithRelationInput[]
    cursor?: ShoppingListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShoppingListScalarFieldEnum | ShoppingListScalarFieldEnum[]
  }

  /**
   * User.accesses
   */
  export type User$accessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListAccess
     */
    select?: UserListAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserListAccess
     */
    omit?: UserListAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListAccessInclude<ExtArgs> | null
    where?: UserListAccessWhereInput
    orderBy?: UserListAccessOrderByWithRelationInput | UserListAccessOrderByWithRelationInput[]
    cursor?: UserListAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserListAccessScalarFieldEnum | UserListAccessScalarFieldEnum[]
  }

  /**
   * User.invitedAccess
   */
  export type User$invitedAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListAccess
     */
    select?: UserListAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserListAccess
     */
    omit?: UserListAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListAccessInclude<ExtArgs> | null
    where?: UserListAccessWhereInput
    orderBy?: UserListAccessOrderByWithRelationInput | UserListAccessOrderByWithRelationInput[]
    cursor?: UserListAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserListAccessScalarFieldEnum | UserListAccessScalarFieldEnum[]
  }

  /**
   * User.receipts
   */
  export type User$receiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptInclude<ExtArgs> | null
    where?: ReceiptWhereInput
    orderBy?: ReceiptOrderByWithRelationInput | ReceiptOrderByWithRelationInput[]
    cursor?: ReceiptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceiptScalarFieldEnum | ReceiptScalarFieldEnum[]
  }

  /**
   * User.expenses
   */
  export type User$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * User.checkedItems
   */
  export type User$checkedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    where?: ListItemWhereInput
    orderBy?: ListItemOrderByWithRelationInput | ListItemOrderByWithRelationInput[]
    cursor?: ListItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListItemScalarFieldEnum | ListItemScalarFieldEnum[]
  }

  /**
   * User.sharedLists
   */
  export type User$sharedListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListShare
     */
    select?: ShoppingListShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListShare
     */
    omit?: ShoppingListShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListShareInclude<ExtArgs> | null
    where?: ShoppingListShareWhereInput
    orderBy?: ShoppingListShareOrderByWithRelationInput | ShoppingListShareOrderByWithRelationInput[]
    cursor?: ShoppingListShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShoppingListShareScalarFieldEnum | ShoppingListShareScalarFieldEnum[]
  }

  /**
   * User.createdInvitations
   */
  export type User$createdInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListInvitation
     */
    select?: ListInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListInvitation
     */
    omit?: ListInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInvitationInclude<ExtArgs> | null
    where?: ListInvitationWhereInput
    orderBy?: ListInvitationOrderByWithRelationInput | ListInvitationOrderByWithRelationInput[]
    cursor?: ListInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListInvitationScalarFieldEnum | ListInvitationScalarFieldEnum[]
  }

  /**
   * User.usedInvitations
   */
  export type User$usedInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListInvitation
     */
    select?: ListInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListInvitation
     */
    omit?: ListInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInvitationInclude<ExtArgs> | null
    where?: ListInvitationWhereInput
    orderBy?: ListInvitationOrderByWithRelationInput | ListInvitationOrderByWithRelationInput[]
    cursor?: ListInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListInvitationScalarFieldEnum | ListInvitationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ShoppingList
   */

  export type AggregateShoppingList = {
    _count: ShoppingListCountAggregateOutputType | null
    _avg: ShoppingListAvgAggregateOutputType | null
    _sum: ShoppingListSumAggregateOutputType | null
    _min: ShoppingListMinAggregateOutputType | null
    _max: ShoppingListMaxAggregateOutputType | null
  }

  export type ShoppingListAvgAggregateOutputType = {
    list_id: number | null
    owner_id: number | null
  }

  export type ShoppingListSumAggregateOutputType = {
    list_id: number | null
    owner_id: number | null
  }

  export type ShoppingListMinAggregateOutputType = {
    list_id: number | null
    owner_id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    is_shared: boolean | null
  }

  export type ShoppingListMaxAggregateOutputType = {
    list_id: number | null
    owner_id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    is_shared: boolean | null
  }

  export type ShoppingListCountAggregateOutputType = {
    list_id: number
    owner_id: number
    name: number
    created_at: number
    updated_at: number
    is_shared: number
    _all: number
  }


  export type ShoppingListAvgAggregateInputType = {
    list_id?: true
    owner_id?: true
  }

  export type ShoppingListSumAggregateInputType = {
    list_id?: true
    owner_id?: true
  }

  export type ShoppingListMinAggregateInputType = {
    list_id?: true
    owner_id?: true
    name?: true
    created_at?: true
    updated_at?: true
    is_shared?: true
  }

  export type ShoppingListMaxAggregateInputType = {
    list_id?: true
    owner_id?: true
    name?: true
    created_at?: true
    updated_at?: true
    is_shared?: true
  }

  export type ShoppingListCountAggregateInputType = {
    list_id?: true
    owner_id?: true
    name?: true
    created_at?: true
    updated_at?: true
    is_shared?: true
    _all?: true
  }

  export type ShoppingListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingList to aggregate.
     */
    where?: ShoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingLists to fetch.
     */
    orderBy?: ShoppingListOrderByWithRelationInput | ShoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShoppingLists
    **/
    _count?: true | ShoppingListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShoppingListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShoppingListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShoppingListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShoppingListMaxAggregateInputType
  }

  export type GetShoppingListAggregateType<T extends ShoppingListAggregateArgs> = {
        [P in keyof T & keyof AggregateShoppingList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShoppingList[P]>
      : GetScalarType<T[P], AggregateShoppingList[P]>
  }




  export type ShoppingListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingListWhereInput
    orderBy?: ShoppingListOrderByWithAggregationInput | ShoppingListOrderByWithAggregationInput[]
    by: ShoppingListScalarFieldEnum[] | ShoppingListScalarFieldEnum
    having?: ShoppingListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShoppingListCountAggregateInputType | true
    _avg?: ShoppingListAvgAggregateInputType
    _sum?: ShoppingListSumAggregateInputType
    _min?: ShoppingListMinAggregateInputType
    _max?: ShoppingListMaxAggregateInputType
  }

  export type ShoppingListGroupByOutputType = {
    list_id: number
    owner_id: number
    name: string | null
    created_at: Date
    updated_at: Date
    is_shared: boolean
    _count: ShoppingListCountAggregateOutputType | null
    _avg: ShoppingListAvgAggregateOutputType | null
    _sum: ShoppingListSumAggregateOutputType | null
    _min: ShoppingListMinAggregateOutputType | null
    _max: ShoppingListMaxAggregateOutputType | null
  }

  type GetShoppingListGroupByPayload<T extends ShoppingListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShoppingListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShoppingListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShoppingListGroupByOutputType[P]>
            : GetScalarType<T[P], ShoppingListGroupByOutputType[P]>
        }
      >
    >


  export type ShoppingListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    list_id?: boolean
    owner_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_shared?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | ShoppingList$itemsArgs<ExtArgs>
    receipts?: boolean | ShoppingList$receiptsArgs<ExtArgs>
    accesses?: boolean | ShoppingList$accessesArgs<ExtArgs>
    sharedWith?: boolean | ShoppingList$sharedWithArgs<ExtArgs>
    invitations?: boolean | ShoppingList$invitationsArgs<ExtArgs>
    _count?: boolean | ShoppingListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingList"]>

  export type ShoppingListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    list_id?: boolean
    owner_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_shared?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingList"]>

  export type ShoppingListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    list_id?: boolean
    owner_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_shared?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingList"]>

  export type ShoppingListSelectScalar = {
    list_id?: boolean
    owner_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_shared?: boolean
  }

  export type ShoppingListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"list_id" | "owner_id" | "name" | "created_at" | "updated_at" | "is_shared", ExtArgs["result"]["shoppingList"]>
  export type ShoppingListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | ShoppingList$itemsArgs<ExtArgs>
    receipts?: boolean | ShoppingList$receiptsArgs<ExtArgs>
    accesses?: boolean | ShoppingList$accessesArgs<ExtArgs>
    sharedWith?: boolean | ShoppingList$sharedWithArgs<ExtArgs>
    invitations?: boolean | ShoppingList$invitationsArgs<ExtArgs>
    _count?: boolean | ShoppingListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShoppingListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShoppingListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ShoppingListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShoppingList"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$ListItemPayload<ExtArgs>[]
      receipts: Prisma.$ReceiptPayload<ExtArgs>[]
      accesses: Prisma.$UserListAccessPayload<ExtArgs>[]
      sharedWith: Prisma.$ShoppingListSharePayload<ExtArgs>[]
      invitations: Prisma.$ListInvitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      list_id: number
      owner_id: number
      name: string | null
      created_at: Date
      updated_at: Date
      is_shared: boolean
    }, ExtArgs["result"]["shoppingList"]>
    composites: {}
  }

  type ShoppingListGetPayload<S extends boolean | null | undefined | ShoppingListDefaultArgs> = $Result.GetResult<Prisma.$ShoppingListPayload, S>

  type ShoppingListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShoppingListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShoppingListCountAggregateInputType | true
    }

  export interface ShoppingListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShoppingList'], meta: { name: 'ShoppingList' } }
    /**
     * Find zero or one ShoppingList that matches the filter.
     * @param {ShoppingListFindUniqueArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShoppingListFindUniqueArgs>(args: SelectSubset<T, ShoppingListFindUniqueArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShoppingList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShoppingListFindUniqueOrThrowArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShoppingListFindUniqueOrThrowArgs>(args: SelectSubset<T, ShoppingListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListFindFirstArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShoppingListFindFirstArgs>(args?: SelectSubset<T, ShoppingListFindFirstArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListFindFirstOrThrowArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShoppingListFindFirstOrThrowArgs>(args?: SelectSubset<T, ShoppingListFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShoppingLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShoppingLists
     * const shoppingLists = await prisma.shoppingList.findMany()
     * 
     * // Get first 10 ShoppingLists
     * const shoppingLists = await prisma.shoppingList.findMany({ take: 10 })
     * 
     * // Only select the `list_id`
     * const shoppingListWithList_idOnly = await prisma.shoppingList.findMany({ select: { list_id: true } })
     * 
     */
    findMany<T extends ShoppingListFindManyArgs>(args?: SelectSubset<T, ShoppingListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShoppingList.
     * @param {ShoppingListCreateArgs} args - Arguments to create a ShoppingList.
     * @example
     * // Create one ShoppingList
     * const ShoppingList = await prisma.shoppingList.create({
     *   data: {
     *     // ... data to create a ShoppingList
     *   }
     * })
     * 
     */
    create<T extends ShoppingListCreateArgs>(args: SelectSubset<T, ShoppingListCreateArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShoppingLists.
     * @param {ShoppingListCreateManyArgs} args - Arguments to create many ShoppingLists.
     * @example
     * // Create many ShoppingLists
     * const shoppingList = await prisma.shoppingList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShoppingListCreateManyArgs>(args?: SelectSubset<T, ShoppingListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShoppingLists and returns the data saved in the database.
     * @param {ShoppingListCreateManyAndReturnArgs} args - Arguments to create many ShoppingLists.
     * @example
     * // Create many ShoppingLists
     * const shoppingList = await prisma.shoppingList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShoppingLists and only return the `list_id`
     * const shoppingListWithList_idOnly = await prisma.shoppingList.createManyAndReturn({
     *   select: { list_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShoppingListCreateManyAndReturnArgs>(args?: SelectSubset<T, ShoppingListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShoppingList.
     * @param {ShoppingListDeleteArgs} args - Arguments to delete one ShoppingList.
     * @example
     * // Delete one ShoppingList
     * const ShoppingList = await prisma.shoppingList.delete({
     *   where: {
     *     // ... filter to delete one ShoppingList
     *   }
     * })
     * 
     */
    delete<T extends ShoppingListDeleteArgs>(args: SelectSubset<T, ShoppingListDeleteArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShoppingList.
     * @param {ShoppingListUpdateArgs} args - Arguments to update one ShoppingList.
     * @example
     * // Update one ShoppingList
     * const shoppingList = await prisma.shoppingList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShoppingListUpdateArgs>(args: SelectSubset<T, ShoppingListUpdateArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShoppingLists.
     * @param {ShoppingListDeleteManyArgs} args - Arguments to filter ShoppingLists to delete.
     * @example
     * // Delete a few ShoppingLists
     * const { count } = await prisma.shoppingList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShoppingListDeleteManyArgs>(args?: SelectSubset<T, ShoppingListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShoppingLists
     * const shoppingList = await prisma.shoppingList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShoppingListUpdateManyArgs>(args: SelectSubset<T, ShoppingListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingLists and returns the data updated in the database.
     * @param {ShoppingListUpdateManyAndReturnArgs} args - Arguments to update many ShoppingLists.
     * @example
     * // Update many ShoppingLists
     * const shoppingList = await prisma.shoppingList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShoppingLists and only return the `list_id`
     * const shoppingListWithList_idOnly = await prisma.shoppingList.updateManyAndReturn({
     *   select: { list_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShoppingListUpdateManyAndReturnArgs>(args: SelectSubset<T, ShoppingListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShoppingList.
     * @param {ShoppingListUpsertArgs} args - Arguments to update or create a ShoppingList.
     * @example
     * // Update or create a ShoppingList
     * const shoppingList = await prisma.shoppingList.upsert({
     *   create: {
     *     // ... data to create a ShoppingList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShoppingList we want to update
     *   }
     * })
     */
    upsert<T extends ShoppingListUpsertArgs>(args: SelectSubset<T, ShoppingListUpsertArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShoppingLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListCountArgs} args - Arguments to filter ShoppingLists to count.
     * @example
     * // Count the number of ShoppingLists
     * const count = await prisma.shoppingList.count({
     *   where: {
     *     // ... the filter for the ShoppingLists we want to count
     *   }
     * })
    **/
    count<T extends ShoppingListCountArgs>(
      args?: Subset<T, ShoppingListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShoppingListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShoppingList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShoppingListAggregateArgs>(args: Subset<T, ShoppingListAggregateArgs>): Prisma.PrismaPromise<GetShoppingListAggregateType<T>>

    /**
     * Group by ShoppingList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShoppingListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShoppingListGroupByArgs['orderBy'] }
        : { orderBy?: ShoppingListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShoppingListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShoppingListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShoppingList model
   */
  readonly fields: ShoppingListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShoppingList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShoppingListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends ShoppingList$itemsArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingList$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receipts<T extends ShoppingList$receiptsArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingList$receiptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accesses<T extends ShoppingList$accessesArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingList$accessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserListAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sharedWith<T extends ShoppingList$sharedWithArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingList$sharedWithArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitations<T extends ShoppingList$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingList$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShoppingList model
   */
  interface ShoppingListFieldRefs {
    readonly list_id: FieldRef<"ShoppingList", 'Int'>
    readonly owner_id: FieldRef<"ShoppingList", 'Int'>
    readonly name: FieldRef<"ShoppingList", 'String'>
    readonly created_at: FieldRef<"ShoppingList", 'DateTime'>
    readonly updated_at: FieldRef<"ShoppingList", 'DateTime'>
    readonly is_shared: FieldRef<"ShoppingList", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ShoppingList findUnique
   */
  export type ShoppingListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingList to fetch.
     */
    where: ShoppingListWhereUniqueInput
  }

  /**
   * ShoppingList findUniqueOrThrow
   */
  export type ShoppingListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingList to fetch.
     */
    where: ShoppingListWhereUniqueInput
  }

  /**
   * ShoppingList findFirst
   */
  export type ShoppingListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingList to fetch.
     */
    where?: ShoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingLists to fetch.
     */
    orderBy?: ShoppingListOrderByWithRelationInput | ShoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingLists.
     */
    cursor?: ShoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingLists.
     */
    distinct?: ShoppingListScalarFieldEnum | ShoppingListScalarFieldEnum[]
  }

  /**
   * ShoppingList findFirstOrThrow
   */
  export type ShoppingListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingList to fetch.
     */
    where?: ShoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingLists to fetch.
     */
    orderBy?: ShoppingListOrderByWithRelationInput | ShoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingLists.
     */
    cursor?: ShoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingLists.
     */
    distinct?: ShoppingListScalarFieldEnum | ShoppingListScalarFieldEnum[]
  }

  /**
   * ShoppingList findMany
   */
  export type ShoppingListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingLists to fetch.
     */
    where?: ShoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingLists to fetch.
     */
    orderBy?: ShoppingListOrderByWithRelationInput | ShoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShoppingLists.
     */
    cursor?: ShoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingLists.
     */
    skip?: number
    distinct?: ShoppingListScalarFieldEnum | ShoppingListScalarFieldEnum[]
  }

  /**
   * ShoppingList create
   */
  export type ShoppingListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * The data needed to create a ShoppingList.
     */
    data: XOR<ShoppingListCreateInput, ShoppingListUncheckedCreateInput>
  }

  /**
   * ShoppingList createMany
   */
  export type ShoppingListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShoppingLists.
     */
    data: ShoppingListCreateManyInput | ShoppingListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShoppingList createManyAndReturn
   */
  export type ShoppingListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * The data used to create many ShoppingLists.
     */
    data: ShoppingListCreateManyInput | ShoppingListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShoppingList update
   */
  export type ShoppingListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * The data needed to update a ShoppingList.
     */
    data: XOR<ShoppingListUpdateInput, ShoppingListUncheckedUpdateInput>
    /**
     * Choose, which ShoppingList to update.
     */
    where: ShoppingListWhereUniqueInput
  }

  /**
   * ShoppingList updateMany
   */
  export type ShoppingListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShoppingLists.
     */
    data: XOR<ShoppingListUpdateManyMutationInput, ShoppingListUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingLists to update
     */
    where?: ShoppingListWhereInput
    /**
     * Limit how many ShoppingLists to update.
     */
    limit?: number
  }

  /**
   * ShoppingList updateManyAndReturn
   */
  export type ShoppingListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * The data used to update ShoppingLists.
     */
    data: XOR<ShoppingListUpdateManyMutationInput, ShoppingListUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingLists to update
     */
    where?: ShoppingListWhereInput
    /**
     * Limit how many ShoppingLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShoppingList upsert
   */
  export type ShoppingListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * The filter to search for the ShoppingList to update in case it exists.
     */
    where: ShoppingListWhereUniqueInput
    /**
     * In case the ShoppingList found by the `where` argument doesn't exist, create a new ShoppingList with this data.
     */
    create: XOR<ShoppingListCreateInput, ShoppingListUncheckedCreateInput>
    /**
     * In case the ShoppingList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShoppingListUpdateInput, ShoppingListUncheckedUpdateInput>
  }

  /**
   * ShoppingList delete
   */
  export type ShoppingListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * Filter which ShoppingList to delete.
     */
    where: ShoppingListWhereUniqueInput
  }

  /**
   * ShoppingList deleteMany
   */
  export type ShoppingListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingLists to delete
     */
    where?: ShoppingListWhereInput
    /**
     * Limit how many ShoppingLists to delete.
     */
    limit?: number
  }

  /**
   * ShoppingList.items
   */
  export type ShoppingList$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    where?: ListItemWhereInput
    orderBy?: ListItemOrderByWithRelationInput | ListItemOrderByWithRelationInput[]
    cursor?: ListItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListItemScalarFieldEnum | ListItemScalarFieldEnum[]
  }

  /**
   * ShoppingList.receipts
   */
  export type ShoppingList$receiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptInclude<ExtArgs> | null
    where?: ReceiptWhereInput
    orderBy?: ReceiptOrderByWithRelationInput | ReceiptOrderByWithRelationInput[]
    cursor?: ReceiptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceiptScalarFieldEnum | ReceiptScalarFieldEnum[]
  }

  /**
   * ShoppingList.accesses
   */
  export type ShoppingList$accessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListAccess
     */
    select?: UserListAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserListAccess
     */
    omit?: UserListAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListAccessInclude<ExtArgs> | null
    where?: UserListAccessWhereInput
    orderBy?: UserListAccessOrderByWithRelationInput | UserListAccessOrderByWithRelationInput[]
    cursor?: UserListAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserListAccessScalarFieldEnum | UserListAccessScalarFieldEnum[]
  }

  /**
   * ShoppingList.sharedWith
   */
  export type ShoppingList$sharedWithArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListShare
     */
    select?: ShoppingListShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListShare
     */
    omit?: ShoppingListShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListShareInclude<ExtArgs> | null
    where?: ShoppingListShareWhereInput
    orderBy?: ShoppingListShareOrderByWithRelationInput | ShoppingListShareOrderByWithRelationInput[]
    cursor?: ShoppingListShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShoppingListShareScalarFieldEnum | ShoppingListShareScalarFieldEnum[]
  }

  /**
   * ShoppingList.invitations
   */
  export type ShoppingList$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListInvitation
     */
    select?: ListInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListInvitation
     */
    omit?: ListInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInvitationInclude<ExtArgs> | null
    where?: ListInvitationWhereInput
    orderBy?: ListInvitationOrderByWithRelationInput | ListInvitationOrderByWithRelationInput[]
    cursor?: ListInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListInvitationScalarFieldEnum | ListInvitationScalarFieldEnum[]
  }

  /**
   * ShoppingList without action
   */
  export type ShoppingListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
  }


  /**
   * Model UserListAccess
   */

  export type AggregateUserListAccess = {
    _count: UserListAccessCountAggregateOutputType | null
    _avg: UserListAccessAvgAggregateOutputType | null
    _sum: UserListAccessSumAggregateOutputType | null
    _min: UserListAccessMinAggregateOutputType | null
    _max: UserListAccessMaxAggregateOutputType | null
  }

  export type UserListAccessAvgAggregateOutputType = {
    access_id: number | null
    user_id: number | null
    list_id: number | null
    invited_by: number | null
  }

  export type UserListAccessSumAggregateOutputType = {
    access_id: number | null
    user_id: number | null
    list_id: number | null
    invited_by: number | null
  }

  export type UserListAccessMinAggregateOutputType = {
    access_id: number | null
    user_id: number | null
    list_id: number | null
    role: $Enums.Role | null
    invited_by: number | null
    joined_at: Date | null
  }

  export type UserListAccessMaxAggregateOutputType = {
    access_id: number | null
    user_id: number | null
    list_id: number | null
    role: $Enums.Role | null
    invited_by: number | null
    joined_at: Date | null
  }

  export type UserListAccessCountAggregateOutputType = {
    access_id: number
    user_id: number
    list_id: number
    role: number
    invited_by: number
    joined_at: number
    _all: number
  }


  export type UserListAccessAvgAggregateInputType = {
    access_id?: true
    user_id?: true
    list_id?: true
    invited_by?: true
  }

  export type UserListAccessSumAggregateInputType = {
    access_id?: true
    user_id?: true
    list_id?: true
    invited_by?: true
  }

  export type UserListAccessMinAggregateInputType = {
    access_id?: true
    user_id?: true
    list_id?: true
    role?: true
    invited_by?: true
    joined_at?: true
  }

  export type UserListAccessMaxAggregateInputType = {
    access_id?: true
    user_id?: true
    list_id?: true
    role?: true
    invited_by?: true
    joined_at?: true
  }

  export type UserListAccessCountAggregateInputType = {
    access_id?: true
    user_id?: true
    list_id?: true
    role?: true
    invited_by?: true
    joined_at?: true
    _all?: true
  }

  export type UserListAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserListAccess to aggregate.
     */
    where?: UserListAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserListAccesses to fetch.
     */
    orderBy?: UserListAccessOrderByWithRelationInput | UserListAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserListAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserListAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserListAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserListAccesses
    **/
    _count?: true | UserListAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserListAccessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserListAccessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserListAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserListAccessMaxAggregateInputType
  }

  export type GetUserListAccessAggregateType<T extends UserListAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateUserListAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserListAccess[P]>
      : GetScalarType<T[P], AggregateUserListAccess[P]>
  }




  export type UserListAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserListAccessWhereInput
    orderBy?: UserListAccessOrderByWithAggregationInput | UserListAccessOrderByWithAggregationInput[]
    by: UserListAccessScalarFieldEnum[] | UserListAccessScalarFieldEnum
    having?: UserListAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserListAccessCountAggregateInputType | true
    _avg?: UserListAccessAvgAggregateInputType
    _sum?: UserListAccessSumAggregateInputType
    _min?: UserListAccessMinAggregateInputType
    _max?: UserListAccessMaxAggregateInputType
  }

  export type UserListAccessGroupByOutputType = {
    access_id: number
    user_id: number
    list_id: number
    role: $Enums.Role
    invited_by: number | null
    joined_at: Date
    _count: UserListAccessCountAggregateOutputType | null
    _avg: UserListAccessAvgAggregateOutputType | null
    _sum: UserListAccessSumAggregateOutputType | null
    _min: UserListAccessMinAggregateOutputType | null
    _max: UserListAccessMaxAggregateOutputType | null
  }

  type GetUserListAccessGroupByPayload<T extends UserListAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserListAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserListAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserListAccessGroupByOutputType[P]>
            : GetScalarType<T[P], UserListAccessGroupByOutputType[P]>
        }
      >
    >


  export type UserListAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    access_id?: boolean
    user_id?: boolean
    list_id?: boolean
    role?: boolean
    invited_by?: boolean
    joined_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    invitedBy?: boolean | UserListAccess$invitedByArgs<ExtArgs>
  }, ExtArgs["result"]["userListAccess"]>

  export type UserListAccessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    access_id?: boolean
    user_id?: boolean
    list_id?: boolean
    role?: boolean
    invited_by?: boolean
    joined_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    invitedBy?: boolean | UserListAccess$invitedByArgs<ExtArgs>
  }, ExtArgs["result"]["userListAccess"]>

  export type UserListAccessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    access_id?: boolean
    user_id?: boolean
    list_id?: boolean
    role?: boolean
    invited_by?: boolean
    joined_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    invitedBy?: boolean | UserListAccess$invitedByArgs<ExtArgs>
  }, ExtArgs["result"]["userListAccess"]>

  export type UserListAccessSelectScalar = {
    access_id?: boolean
    user_id?: boolean
    list_id?: boolean
    role?: boolean
    invited_by?: boolean
    joined_at?: boolean
  }

  export type UserListAccessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"access_id" | "user_id" | "list_id" | "role" | "invited_by" | "joined_at", ExtArgs["result"]["userListAccess"]>
  export type UserListAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    invitedBy?: boolean | UserListAccess$invitedByArgs<ExtArgs>
  }
  export type UserListAccessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    invitedBy?: boolean | UserListAccess$invitedByArgs<ExtArgs>
  }
  export type UserListAccessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    invitedBy?: boolean | UserListAccess$invitedByArgs<ExtArgs>
  }

  export type $UserListAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserListAccess"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      list: Prisma.$ShoppingListPayload<ExtArgs>
      invitedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      access_id: number
      user_id: number
      list_id: number
      role: $Enums.Role
      invited_by: number | null
      joined_at: Date
    }, ExtArgs["result"]["userListAccess"]>
    composites: {}
  }

  type UserListAccessGetPayload<S extends boolean | null | undefined | UserListAccessDefaultArgs> = $Result.GetResult<Prisma.$UserListAccessPayload, S>

  type UserListAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserListAccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserListAccessCountAggregateInputType | true
    }

  export interface UserListAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserListAccess'], meta: { name: 'UserListAccess' } }
    /**
     * Find zero or one UserListAccess that matches the filter.
     * @param {UserListAccessFindUniqueArgs} args - Arguments to find a UserListAccess
     * @example
     * // Get one UserListAccess
     * const userListAccess = await prisma.userListAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserListAccessFindUniqueArgs>(args: SelectSubset<T, UserListAccessFindUniqueArgs<ExtArgs>>): Prisma__UserListAccessClient<$Result.GetResult<Prisma.$UserListAccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserListAccess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserListAccessFindUniqueOrThrowArgs} args - Arguments to find a UserListAccess
     * @example
     * // Get one UserListAccess
     * const userListAccess = await prisma.userListAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserListAccessFindUniqueOrThrowArgs>(args: SelectSubset<T, UserListAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserListAccessClient<$Result.GetResult<Prisma.$UserListAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserListAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserListAccessFindFirstArgs} args - Arguments to find a UserListAccess
     * @example
     * // Get one UserListAccess
     * const userListAccess = await prisma.userListAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserListAccessFindFirstArgs>(args?: SelectSubset<T, UserListAccessFindFirstArgs<ExtArgs>>): Prisma__UserListAccessClient<$Result.GetResult<Prisma.$UserListAccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserListAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserListAccessFindFirstOrThrowArgs} args - Arguments to find a UserListAccess
     * @example
     * // Get one UserListAccess
     * const userListAccess = await prisma.userListAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserListAccessFindFirstOrThrowArgs>(args?: SelectSubset<T, UserListAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserListAccessClient<$Result.GetResult<Prisma.$UserListAccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserListAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserListAccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserListAccesses
     * const userListAccesses = await prisma.userListAccess.findMany()
     * 
     * // Get first 10 UserListAccesses
     * const userListAccesses = await prisma.userListAccess.findMany({ take: 10 })
     * 
     * // Only select the `access_id`
     * const userListAccessWithAccess_idOnly = await prisma.userListAccess.findMany({ select: { access_id: true } })
     * 
     */
    findMany<T extends UserListAccessFindManyArgs>(args?: SelectSubset<T, UserListAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserListAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserListAccess.
     * @param {UserListAccessCreateArgs} args - Arguments to create a UserListAccess.
     * @example
     * // Create one UserListAccess
     * const UserListAccess = await prisma.userListAccess.create({
     *   data: {
     *     // ... data to create a UserListAccess
     *   }
     * })
     * 
     */
    create<T extends UserListAccessCreateArgs>(args: SelectSubset<T, UserListAccessCreateArgs<ExtArgs>>): Prisma__UserListAccessClient<$Result.GetResult<Prisma.$UserListAccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserListAccesses.
     * @param {UserListAccessCreateManyArgs} args - Arguments to create many UserListAccesses.
     * @example
     * // Create many UserListAccesses
     * const userListAccess = await prisma.userListAccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserListAccessCreateManyArgs>(args?: SelectSubset<T, UserListAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserListAccesses and returns the data saved in the database.
     * @param {UserListAccessCreateManyAndReturnArgs} args - Arguments to create many UserListAccesses.
     * @example
     * // Create many UserListAccesses
     * const userListAccess = await prisma.userListAccess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserListAccesses and only return the `access_id`
     * const userListAccessWithAccess_idOnly = await prisma.userListAccess.createManyAndReturn({
     *   select: { access_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserListAccessCreateManyAndReturnArgs>(args?: SelectSubset<T, UserListAccessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserListAccessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserListAccess.
     * @param {UserListAccessDeleteArgs} args - Arguments to delete one UserListAccess.
     * @example
     * // Delete one UserListAccess
     * const UserListAccess = await prisma.userListAccess.delete({
     *   where: {
     *     // ... filter to delete one UserListAccess
     *   }
     * })
     * 
     */
    delete<T extends UserListAccessDeleteArgs>(args: SelectSubset<T, UserListAccessDeleteArgs<ExtArgs>>): Prisma__UserListAccessClient<$Result.GetResult<Prisma.$UserListAccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserListAccess.
     * @param {UserListAccessUpdateArgs} args - Arguments to update one UserListAccess.
     * @example
     * // Update one UserListAccess
     * const userListAccess = await prisma.userListAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserListAccessUpdateArgs>(args: SelectSubset<T, UserListAccessUpdateArgs<ExtArgs>>): Prisma__UserListAccessClient<$Result.GetResult<Prisma.$UserListAccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserListAccesses.
     * @param {UserListAccessDeleteManyArgs} args - Arguments to filter UserListAccesses to delete.
     * @example
     * // Delete a few UserListAccesses
     * const { count } = await prisma.userListAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserListAccessDeleteManyArgs>(args?: SelectSubset<T, UserListAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserListAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserListAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserListAccesses
     * const userListAccess = await prisma.userListAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserListAccessUpdateManyArgs>(args: SelectSubset<T, UserListAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserListAccesses and returns the data updated in the database.
     * @param {UserListAccessUpdateManyAndReturnArgs} args - Arguments to update many UserListAccesses.
     * @example
     * // Update many UserListAccesses
     * const userListAccess = await prisma.userListAccess.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserListAccesses and only return the `access_id`
     * const userListAccessWithAccess_idOnly = await prisma.userListAccess.updateManyAndReturn({
     *   select: { access_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserListAccessUpdateManyAndReturnArgs>(args: SelectSubset<T, UserListAccessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserListAccessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserListAccess.
     * @param {UserListAccessUpsertArgs} args - Arguments to update or create a UserListAccess.
     * @example
     * // Update or create a UserListAccess
     * const userListAccess = await prisma.userListAccess.upsert({
     *   create: {
     *     // ... data to create a UserListAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserListAccess we want to update
     *   }
     * })
     */
    upsert<T extends UserListAccessUpsertArgs>(args: SelectSubset<T, UserListAccessUpsertArgs<ExtArgs>>): Prisma__UserListAccessClient<$Result.GetResult<Prisma.$UserListAccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserListAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserListAccessCountArgs} args - Arguments to filter UserListAccesses to count.
     * @example
     * // Count the number of UserListAccesses
     * const count = await prisma.userListAccess.count({
     *   where: {
     *     // ... the filter for the UserListAccesses we want to count
     *   }
     * })
    **/
    count<T extends UserListAccessCountArgs>(
      args?: Subset<T, UserListAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserListAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserListAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserListAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserListAccessAggregateArgs>(args: Subset<T, UserListAccessAggregateArgs>): Prisma.PrismaPromise<GetUserListAccessAggregateType<T>>

    /**
     * Group by UserListAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserListAccessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserListAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserListAccessGroupByArgs['orderBy'] }
        : { orderBy?: UserListAccessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserListAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserListAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserListAccess model
   */
  readonly fields: UserListAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserListAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserListAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    list<T extends ShoppingListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingListDefaultArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invitedBy<T extends UserListAccess$invitedByArgs<ExtArgs> = {}>(args?: Subset<T, UserListAccess$invitedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserListAccess model
   */
  interface UserListAccessFieldRefs {
    readonly access_id: FieldRef<"UserListAccess", 'Int'>
    readonly user_id: FieldRef<"UserListAccess", 'Int'>
    readonly list_id: FieldRef<"UserListAccess", 'Int'>
    readonly role: FieldRef<"UserListAccess", 'Role'>
    readonly invited_by: FieldRef<"UserListAccess", 'Int'>
    readonly joined_at: FieldRef<"UserListAccess", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserListAccess findUnique
   */
  export type UserListAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListAccess
     */
    select?: UserListAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserListAccess
     */
    omit?: UserListAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserListAccess to fetch.
     */
    where: UserListAccessWhereUniqueInput
  }

  /**
   * UserListAccess findUniqueOrThrow
   */
  export type UserListAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListAccess
     */
    select?: UserListAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserListAccess
     */
    omit?: UserListAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserListAccess to fetch.
     */
    where: UserListAccessWhereUniqueInput
  }

  /**
   * UserListAccess findFirst
   */
  export type UserListAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListAccess
     */
    select?: UserListAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserListAccess
     */
    omit?: UserListAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserListAccess to fetch.
     */
    where?: UserListAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserListAccesses to fetch.
     */
    orderBy?: UserListAccessOrderByWithRelationInput | UserListAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserListAccesses.
     */
    cursor?: UserListAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserListAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserListAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserListAccesses.
     */
    distinct?: UserListAccessScalarFieldEnum | UserListAccessScalarFieldEnum[]
  }

  /**
   * UserListAccess findFirstOrThrow
   */
  export type UserListAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListAccess
     */
    select?: UserListAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserListAccess
     */
    omit?: UserListAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserListAccess to fetch.
     */
    where?: UserListAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserListAccesses to fetch.
     */
    orderBy?: UserListAccessOrderByWithRelationInput | UserListAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserListAccesses.
     */
    cursor?: UserListAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserListAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserListAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserListAccesses.
     */
    distinct?: UserListAccessScalarFieldEnum | UserListAccessScalarFieldEnum[]
  }

  /**
   * UserListAccess findMany
   */
  export type UserListAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListAccess
     */
    select?: UserListAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserListAccess
     */
    omit?: UserListAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserListAccesses to fetch.
     */
    where?: UserListAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserListAccesses to fetch.
     */
    orderBy?: UserListAccessOrderByWithRelationInput | UserListAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserListAccesses.
     */
    cursor?: UserListAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserListAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserListAccesses.
     */
    skip?: number
    distinct?: UserListAccessScalarFieldEnum | UserListAccessScalarFieldEnum[]
  }

  /**
   * UserListAccess create
   */
  export type UserListAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListAccess
     */
    select?: UserListAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserListAccess
     */
    omit?: UserListAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a UserListAccess.
     */
    data: XOR<UserListAccessCreateInput, UserListAccessUncheckedCreateInput>
  }

  /**
   * UserListAccess createMany
   */
  export type UserListAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserListAccesses.
     */
    data: UserListAccessCreateManyInput | UserListAccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserListAccess createManyAndReturn
   */
  export type UserListAccessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListAccess
     */
    select?: UserListAccessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserListAccess
     */
    omit?: UserListAccessOmit<ExtArgs> | null
    /**
     * The data used to create many UserListAccesses.
     */
    data: UserListAccessCreateManyInput | UserListAccessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListAccessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserListAccess update
   */
  export type UserListAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListAccess
     */
    select?: UserListAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserListAccess
     */
    omit?: UserListAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a UserListAccess.
     */
    data: XOR<UserListAccessUpdateInput, UserListAccessUncheckedUpdateInput>
    /**
     * Choose, which UserListAccess to update.
     */
    where: UserListAccessWhereUniqueInput
  }

  /**
   * UserListAccess updateMany
   */
  export type UserListAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserListAccesses.
     */
    data: XOR<UserListAccessUpdateManyMutationInput, UserListAccessUncheckedUpdateManyInput>
    /**
     * Filter which UserListAccesses to update
     */
    where?: UserListAccessWhereInput
    /**
     * Limit how many UserListAccesses to update.
     */
    limit?: number
  }

  /**
   * UserListAccess updateManyAndReturn
   */
  export type UserListAccessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListAccess
     */
    select?: UserListAccessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserListAccess
     */
    omit?: UserListAccessOmit<ExtArgs> | null
    /**
     * The data used to update UserListAccesses.
     */
    data: XOR<UserListAccessUpdateManyMutationInput, UserListAccessUncheckedUpdateManyInput>
    /**
     * Filter which UserListAccesses to update
     */
    where?: UserListAccessWhereInput
    /**
     * Limit how many UserListAccesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListAccessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserListAccess upsert
   */
  export type UserListAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListAccess
     */
    select?: UserListAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserListAccess
     */
    omit?: UserListAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the UserListAccess to update in case it exists.
     */
    where: UserListAccessWhereUniqueInput
    /**
     * In case the UserListAccess found by the `where` argument doesn't exist, create a new UserListAccess with this data.
     */
    create: XOR<UserListAccessCreateInput, UserListAccessUncheckedCreateInput>
    /**
     * In case the UserListAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserListAccessUpdateInput, UserListAccessUncheckedUpdateInput>
  }

  /**
   * UserListAccess delete
   */
  export type UserListAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListAccess
     */
    select?: UserListAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserListAccess
     */
    omit?: UserListAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListAccessInclude<ExtArgs> | null
    /**
     * Filter which UserListAccess to delete.
     */
    where: UserListAccessWhereUniqueInput
  }

  /**
   * UserListAccess deleteMany
   */
  export type UserListAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserListAccesses to delete
     */
    where?: UserListAccessWhereInput
    /**
     * Limit how many UserListAccesses to delete.
     */
    limit?: number
  }

  /**
   * UserListAccess.invitedBy
   */
  export type UserListAccess$invitedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * UserListAccess without action
   */
  export type UserListAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListAccess
     */
    select?: UserListAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserListAccess
     */
    omit?: UserListAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListAccessInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    category_id: number | null
  }

  export type CategorySumAggregateOutputType = {
    category_id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    category_id: number | null
    name: string | null
    color_code: string | null
    created_at: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    category_id: number | null
    name: string | null
    color_code: string | null
    created_at: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    category_id: number
    name: number
    color_code: number
    created_at: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    category_id?: true
  }

  export type CategorySumAggregateInputType = {
    category_id?: true
  }

  export type CategoryMinAggregateInputType = {
    category_id?: true
    name?: true
    color_code?: true
    created_at?: true
  }

  export type CategoryMaxAggregateInputType = {
    category_id?: true
    name?: true
    color_code?: true
    created_at?: true
  }

  export type CategoryCountAggregateInputType = {
    category_id?: true
    name?: true
    color_code?: true
    created_at?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    category_id: number
    name: string
    color_code: string | null
    created_at: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    name?: boolean
    color_code?: boolean
    created_at?: boolean
    items?: boolean | Category$itemsArgs<ExtArgs>
    expenses?: boolean | Category$expensesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    name?: boolean
    color_code?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    name?: boolean
    color_code?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    category_id?: boolean
    name?: boolean
    color_code?: boolean
    created_at?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"category_id" | "name" | "color_code" | "created_at", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Category$itemsArgs<ExtArgs>
    expenses?: boolean | Category$expensesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      items: Prisma.$ListItemPayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category_id: number
      name: string
      color_code: string | null
      created_at: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `category_id`
     * const categoryWithCategory_idOnly = await prisma.category.findMany({ select: { category_id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `category_id`
     * const categoryWithCategory_idOnly = await prisma.category.createManyAndReturn({
     *   select: { category_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `category_id`
     * const categoryWithCategory_idOnly = await prisma.category.updateManyAndReturn({
     *   select: { category_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Category$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Category$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends Category$expensesArgs<ExtArgs> = {}>(args?: Subset<T, Category$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly category_id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly color_code: FieldRef<"Category", 'String'>
    readonly created_at: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.items
   */
  export type Category$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    where?: ListItemWhereInput
    orderBy?: ListItemOrderByWithRelationInput | ListItemOrderByWithRelationInput[]
    cursor?: ListItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListItemScalarFieldEnum | ListItemScalarFieldEnum[]
  }

  /**
   * Category.expenses
   */
  export type Category$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model ListItem
   */

  export type AggregateListItem = {
    _count: ListItemCountAggregateOutputType | null
    _avg: ListItemAvgAggregateOutputType | null
    _sum: ListItemSumAggregateOutputType | null
    _min: ListItemMinAggregateOutputType | null
    _max: ListItemMaxAggregateOutputType | null
  }

  export type ListItemAvgAggregateOutputType = {
    item_id: number | null
    list_id: number | null
    category_id: number | null
    quantity: number | null
    price: Decimal | null
    checkedById: number | null
  }

  export type ListItemSumAggregateOutputType = {
    item_id: number | null
    list_id: number | null
    category_id: number | null
    quantity: number | null
    price: Decimal | null
    checkedById: number | null
  }

  export type ListItemMinAggregateOutputType = {
    item_id: number | null
    list_id: number | null
    category_id: number | null
    name: string | null
    quantity: number | null
    price: Decimal | null
    source: $Enums.Source | null
    is_checked: boolean | null
    created_at: Date | null
    checkedById: number | null
    checkedAt: Date | null
  }

  export type ListItemMaxAggregateOutputType = {
    item_id: number | null
    list_id: number | null
    category_id: number | null
    name: string | null
    quantity: number | null
    price: Decimal | null
    source: $Enums.Source | null
    is_checked: boolean | null
    created_at: Date | null
    checkedById: number | null
    checkedAt: Date | null
  }

  export type ListItemCountAggregateOutputType = {
    item_id: number
    list_id: number
    category_id: number
    name: number
    quantity: number
    price: number
    source: number
    is_checked: number
    created_at: number
    checkedById: number
    checkedAt: number
    _all: number
  }


  export type ListItemAvgAggregateInputType = {
    item_id?: true
    list_id?: true
    category_id?: true
    quantity?: true
    price?: true
    checkedById?: true
  }

  export type ListItemSumAggregateInputType = {
    item_id?: true
    list_id?: true
    category_id?: true
    quantity?: true
    price?: true
    checkedById?: true
  }

  export type ListItemMinAggregateInputType = {
    item_id?: true
    list_id?: true
    category_id?: true
    name?: true
    quantity?: true
    price?: true
    source?: true
    is_checked?: true
    created_at?: true
    checkedById?: true
    checkedAt?: true
  }

  export type ListItemMaxAggregateInputType = {
    item_id?: true
    list_id?: true
    category_id?: true
    name?: true
    quantity?: true
    price?: true
    source?: true
    is_checked?: true
    created_at?: true
    checkedById?: true
    checkedAt?: true
  }

  export type ListItemCountAggregateInputType = {
    item_id?: true
    list_id?: true
    category_id?: true
    name?: true
    quantity?: true
    price?: true
    source?: true
    is_checked?: true
    created_at?: true
    checkedById?: true
    checkedAt?: true
    _all?: true
  }

  export type ListItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListItem to aggregate.
     */
    where?: ListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListItems to fetch.
     */
    orderBy?: ListItemOrderByWithRelationInput | ListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListItems
    **/
    _count?: true | ListItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListItemMaxAggregateInputType
  }

  export type GetListItemAggregateType<T extends ListItemAggregateArgs> = {
        [P in keyof T & keyof AggregateListItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListItem[P]>
      : GetScalarType<T[P], AggregateListItem[P]>
  }




  export type ListItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListItemWhereInput
    orderBy?: ListItemOrderByWithAggregationInput | ListItemOrderByWithAggregationInput[]
    by: ListItemScalarFieldEnum[] | ListItemScalarFieldEnum
    having?: ListItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListItemCountAggregateInputType | true
    _avg?: ListItemAvgAggregateInputType
    _sum?: ListItemSumAggregateInputType
    _min?: ListItemMinAggregateInputType
    _max?: ListItemMaxAggregateInputType
  }

  export type ListItemGroupByOutputType = {
    item_id: number
    list_id: number
    category_id: number | null
    name: string
    quantity: number
    price: Decimal | null
    source: $Enums.Source | null
    is_checked: boolean
    created_at: Date
    checkedById: number | null
    checkedAt: Date | null
    _count: ListItemCountAggregateOutputType | null
    _avg: ListItemAvgAggregateOutputType | null
    _sum: ListItemSumAggregateOutputType | null
    _min: ListItemMinAggregateOutputType | null
    _max: ListItemMaxAggregateOutputType | null
  }

  type GetListItemGroupByPayload<T extends ListItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListItemGroupByOutputType[P]>
            : GetScalarType<T[P], ListItemGroupByOutputType[P]>
        }
      >
    >


  export type ListItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_id?: boolean
    list_id?: boolean
    category_id?: boolean
    name?: boolean
    quantity?: boolean
    price?: boolean
    source?: boolean
    is_checked?: boolean
    created_at?: boolean
    checkedById?: boolean
    checkedAt?: boolean
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    category?: boolean | ListItem$categoryArgs<ExtArgs>
    checkedBy?: boolean | ListItem$checkedByArgs<ExtArgs>
  }, ExtArgs["result"]["listItem"]>

  export type ListItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_id?: boolean
    list_id?: boolean
    category_id?: boolean
    name?: boolean
    quantity?: boolean
    price?: boolean
    source?: boolean
    is_checked?: boolean
    created_at?: boolean
    checkedById?: boolean
    checkedAt?: boolean
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    category?: boolean | ListItem$categoryArgs<ExtArgs>
    checkedBy?: boolean | ListItem$checkedByArgs<ExtArgs>
  }, ExtArgs["result"]["listItem"]>

  export type ListItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_id?: boolean
    list_id?: boolean
    category_id?: boolean
    name?: boolean
    quantity?: boolean
    price?: boolean
    source?: boolean
    is_checked?: boolean
    created_at?: boolean
    checkedById?: boolean
    checkedAt?: boolean
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    category?: boolean | ListItem$categoryArgs<ExtArgs>
    checkedBy?: boolean | ListItem$checkedByArgs<ExtArgs>
  }, ExtArgs["result"]["listItem"]>

  export type ListItemSelectScalar = {
    item_id?: boolean
    list_id?: boolean
    category_id?: boolean
    name?: boolean
    quantity?: boolean
    price?: boolean
    source?: boolean
    is_checked?: boolean
    created_at?: boolean
    checkedById?: boolean
    checkedAt?: boolean
  }

  export type ListItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"item_id" | "list_id" | "category_id" | "name" | "quantity" | "price" | "source" | "is_checked" | "created_at" | "checkedById" | "checkedAt", ExtArgs["result"]["listItem"]>
  export type ListItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    category?: boolean | ListItem$categoryArgs<ExtArgs>
    checkedBy?: boolean | ListItem$checkedByArgs<ExtArgs>
  }
  export type ListItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    category?: boolean | ListItem$categoryArgs<ExtArgs>
    checkedBy?: boolean | ListItem$checkedByArgs<ExtArgs>
  }
  export type ListItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    category?: boolean | ListItem$categoryArgs<ExtArgs>
    checkedBy?: boolean | ListItem$checkedByArgs<ExtArgs>
  }

  export type $ListItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListItem"
    objects: {
      list: Prisma.$ShoppingListPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs> | null
      checkedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      item_id: number
      list_id: number
      category_id: number | null
      name: string
      quantity: number
      price: Prisma.Decimal | null
      source: $Enums.Source | null
      is_checked: boolean
      created_at: Date
      checkedById: number | null
      checkedAt: Date | null
    }, ExtArgs["result"]["listItem"]>
    composites: {}
  }

  type ListItemGetPayload<S extends boolean | null | undefined | ListItemDefaultArgs> = $Result.GetResult<Prisma.$ListItemPayload, S>

  type ListItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListItemCountAggregateInputType | true
    }

  export interface ListItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListItem'], meta: { name: 'ListItem' } }
    /**
     * Find zero or one ListItem that matches the filter.
     * @param {ListItemFindUniqueArgs} args - Arguments to find a ListItem
     * @example
     * // Get one ListItem
     * const listItem = await prisma.listItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListItemFindUniqueArgs>(args: SelectSubset<T, ListItemFindUniqueArgs<ExtArgs>>): Prisma__ListItemClient<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListItemFindUniqueOrThrowArgs} args - Arguments to find a ListItem
     * @example
     * // Get one ListItem
     * const listItem = await prisma.listItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ListItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListItemClient<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemFindFirstArgs} args - Arguments to find a ListItem
     * @example
     * // Get one ListItem
     * const listItem = await prisma.listItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListItemFindFirstArgs>(args?: SelectSubset<T, ListItemFindFirstArgs<ExtArgs>>): Prisma__ListItemClient<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemFindFirstOrThrowArgs} args - Arguments to find a ListItem
     * @example
     * // Get one ListItem
     * const listItem = await prisma.listItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ListItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListItemClient<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListItems
     * const listItems = await prisma.listItem.findMany()
     * 
     * // Get first 10 ListItems
     * const listItems = await prisma.listItem.findMany({ take: 10 })
     * 
     * // Only select the `item_id`
     * const listItemWithItem_idOnly = await prisma.listItem.findMany({ select: { item_id: true } })
     * 
     */
    findMany<T extends ListItemFindManyArgs>(args?: SelectSubset<T, ListItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListItem.
     * @param {ListItemCreateArgs} args - Arguments to create a ListItem.
     * @example
     * // Create one ListItem
     * const ListItem = await prisma.listItem.create({
     *   data: {
     *     // ... data to create a ListItem
     *   }
     * })
     * 
     */
    create<T extends ListItemCreateArgs>(args: SelectSubset<T, ListItemCreateArgs<ExtArgs>>): Prisma__ListItemClient<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListItems.
     * @param {ListItemCreateManyArgs} args - Arguments to create many ListItems.
     * @example
     * // Create many ListItems
     * const listItem = await prisma.listItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListItemCreateManyArgs>(args?: SelectSubset<T, ListItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListItems and returns the data saved in the database.
     * @param {ListItemCreateManyAndReturnArgs} args - Arguments to create many ListItems.
     * @example
     * // Create many ListItems
     * const listItem = await prisma.listItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListItems and only return the `item_id`
     * const listItemWithItem_idOnly = await prisma.listItem.createManyAndReturn({
     *   select: { item_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ListItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ListItem.
     * @param {ListItemDeleteArgs} args - Arguments to delete one ListItem.
     * @example
     * // Delete one ListItem
     * const ListItem = await prisma.listItem.delete({
     *   where: {
     *     // ... filter to delete one ListItem
     *   }
     * })
     * 
     */
    delete<T extends ListItemDeleteArgs>(args: SelectSubset<T, ListItemDeleteArgs<ExtArgs>>): Prisma__ListItemClient<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListItem.
     * @param {ListItemUpdateArgs} args - Arguments to update one ListItem.
     * @example
     * // Update one ListItem
     * const listItem = await prisma.listItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListItemUpdateArgs>(args: SelectSubset<T, ListItemUpdateArgs<ExtArgs>>): Prisma__ListItemClient<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListItems.
     * @param {ListItemDeleteManyArgs} args - Arguments to filter ListItems to delete.
     * @example
     * // Delete a few ListItems
     * const { count } = await prisma.listItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListItemDeleteManyArgs>(args?: SelectSubset<T, ListItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListItems
     * const listItem = await prisma.listItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListItemUpdateManyArgs>(args: SelectSubset<T, ListItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListItems and returns the data updated in the database.
     * @param {ListItemUpdateManyAndReturnArgs} args - Arguments to update many ListItems.
     * @example
     * // Update many ListItems
     * const listItem = await prisma.listItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ListItems and only return the `item_id`
     * const listItemWithItem_idOnly = await prisma.listItem.updateManyAndReturn({
     *   select: { item_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ListItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ListItem.
     * @param {ListItemUpsertArgs} args - Arguments to update or create a ListItem.
     * @example
     * // Update or create a ListItem
     * const listItem = await prisma.listItem.upsert({
     *   create: {
     *     // ... data to create a ListItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListItem we want to update
     *   }
     * })
     */
    upsert<T extends ListItemUpsertArgs>(args: SelectSubset<T, ListItemUpsertArgs<ExtArgs>>): Prisma__ListItemClient<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemCountArgs} args - Arguments to filter ListItems to count.
     * @example
     * // Count the number of ListItems
     * const count = await prisma.listItem.count({
     *   where: {
     *     // ... the filter for the ListItems we want to count
     *   }
     * })
    **/
    count<T extends ListItemCountArgs>(
      args?: Subset<T, ListItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListItemAggregateArgs>(args: Subset<T, ListItemAggregateArgs>): Prisma.PrismaPromise<GetListItemAggregateType<T>>

    /**
     * Group by ListItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListItemGroupByArgs['orderBy'] }
        : { orderBy?: ListItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListItem model
   */
  readonly fields: ListItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    list<T extends ShoppingListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingListDefaultArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends ListItem$categoryArgs<ExtArgs> = {}>(args?: Subset<T, ListItem$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    checkedBy<T extends ListItem$checkedByArgs<ExtArgs> = {}>(args?: Subset<T, ListItem$checkedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ListItem model
   */
  interface ListItemFieldRefs {
    readonly item_id: FieldRef<"ListItem", 'Int'>
    readonly list_id: FieldRef<"ListItem", 'Int'>
    readonly category_id: FieldRef<"ListItem", 'Int'>
    readonly name: FieldRef<"ListItem", 'String'>
    readonly quantity: FieldRef<"ListItem", 'Int'>
    readonly price: FieldRef<"ListItem", 'Decimal'>
    readonly source: FieldRef<"ListItem", 'Source'>
    readonly is_checked: FieldRef<"ListItem", 'Boolean'>
    readonly created_at: FieldRef<"ListItem", 'DateTime'>
    readonly checkedById: FieldRef<"ListItem", 'Int'>
    readonly checkedAt: FieldRef<"ListItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ListItem findUnique
   */
  export type ListItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * Filter, which ListItem to fetch.
     */
    where: ListItemWhereUniqueInput
  }

  /**
   * ListItem findUniqueOrThrow
   */
  export type ListItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * Filter, which ListItem to fetch.
     */
    where: ListItemWhereUniqueInput
  }

  /**
   * ListItem findFirst
   */
  export type ListItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * Filter, which ListItem to fetch.
     */
    where?: ListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListItems to fetch.
     */
    orderBy?: ListItemOrderByWithRelationInput | ListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListItems.
     */
    cursor?: ListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListItems.
     */
    distinct?: ListItemScalarFieldEnum | ListItemScalarFieldEnum[]
  }

  /**
   * ListItem findFirstOrThrow
   */
  export type ListItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * Filter, which ListItem to fetch.
     */
    where?: ListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListItems to fetch.
     */
    orderBy?: ListItemOrderByWithRelationInput | ListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListItems.
     */
    cursor?: ListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListItems.
     */
    distinct?: ListItemScalarFieldEnum | ListItemScalarFieldEnum[]
  }

  /**
   * ListItem findMany
   */
  export type ListItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * Filter, which ListItems to fetch.
     */
    where?: ListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListItems to fetch.
     */
    orderBy?: ListItemOrderByWithRelationInput | ListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListItems.
     */
    cursor?: ListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListItems.
     */
    skip?: number
    distinct?: ListItemScalarFieldEnum | ListItemScalarFieldEnum[]
  }

  /**
   * ListItem create
   */
  export type ListItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ListItem.
     */
    data: XOR<ListItemCreateInput, ListItemUncheckedCreateInput>
  }

  /**
   * ListItem createMany
   */
  export type ListItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListItems.
     */
    data: ListItemCreateManyInput | ListItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListItem createManyAndReturn
   */
  export type ListItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * The data used to create many ListItems.
     */
    data: ListItemCreateManyInput | ListItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListItem update
   */
  export type ListItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ListItem.
     */
    data: XOR<ListItemUpdateInput, ListItemUncheckedUpdateInput>
    /**
     * Choose, which ListItem to update.
     */
    where: ListItemWhereUniqueInput
  }

  /**
   * ListItem updateMany
   */
  export type ListItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListItems.
     */
    data: XOR<ListItemUpdateManyMutationInput, ListItemUncheckedUpdateManyInput>
    /**
     * Filter which ListItems to update
     */
    where?: ListItemWhereInput
    /**
     * Limit how many ListItems to update.
     */
    limit?: number
  }

  /**
   * ListItem updateManyAndReturn
   */
  export type ListItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * The data used to update ListItems.
     */
    data: XOR<ListItemUpdateManyMutationInput, ListItemUncheckedUpdateManyInput>
    /**
     * Filter which ListItems to update
     */
    where?: ListItemWhereInput
    /**
     * Limit how many ListItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListItem upsert
   */
  export type ListItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ListItem to update in case it exists.
     */
    where: ListItemWhereUniqueInput
    /**
     * In case the ListItem found by the `where` argument doesn't exist, create a new ListItem with this data.
     */
    create: XOR<ListItemCreateInput, ListItemUncheckedCreateInput>
    /**
     * In case the ListItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListItemUpdateInput, ListItemUncheckedUpdateInput>
  }

  /**
   * ListItem delete
   */
  export type ListItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * Filter which ListItem to delete.
     */
    where: ListItemWhereUniqueInput
  }

  /**
   * ListItem deleteMany
   */
  export type ListItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListItems to delete
     */
    where?: ListItemWhereInput
    /**
     * Limit how many ListItems to delete.
     */
    limit?: number
  }

  /**
   * ListItem.category
   */
  export type ListItem$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * ListItem.checkedBy
   */
  export type ListItem$checkedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ListItem without action
   */
  export type ListItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
  }


  /**
   * Model Receipt
   */

  export type AggregateReceipt = {
    _count: ReceiptCountAggregateOutputType | null
    _avg: ReceiptAvgAggregateOutputType | null
    _sum: ReceiptSumAggregateOutputType | null
    _min: ReceiptMinAggregateOutputType | null
    _max: ReceiptMaxAggregateOutputType | null
  }

  export type ReceiptAvgAggregateOutputType = {
    receipt_id: number | null
    list_id: number | null
    user_id: number | null
    total_amount: Decimal | null
    subtotal: Decimal | null
    tax_rate: Decimal | null
    tax_amount: Decimal | null
  }

  export type ReceiptSumAggregateOutputType = {
    receipt_id: number | null
    list_id: number | null
    user_id: number | null
    total_amount: Decimal | null
    subtotal: Decimal | null
    tax_rate: Decimal | null
    tax_amount: Decimal | null
  }

  export type ReceiptMinAggregateOutputType = {
    receipt_id: number | null
    list_id: number | null
    user_id: number | null
    store_name: string | null
    total_amount: Decimal | null
    subtotal: Decimal | null
    receipt_date: Date | null
    payment_method: $Enums.PaymentMethod | null
    tax_rate: Decimal | null
    tax_amount: Decimal | null
    currency: string | null
    image_url: string | null
    ocr_text: string | null
    processed: boolean | null
    uploaded_at: Date | null
  }

  export type ReceiptMaxAggregateOutputType = {
    receipt_id: number | null
    list_id: number | null
    user_id: number | null
    store_name: string | null
    total_amount: Decimal | null
    subtotal: Decimal | null
    receipt_date: Date | null
    payment_method: $Enums.PaymentMethod | null
    tax_rate: Decimal | null
    tax_amount: Decimal | null
    currency: string | null
    image_url: string | null
    ocr_text: string | null
    processed: boolean | null
    uploaded_at: Date | null
  }

  export type ReceiptCountAggregateOutputType = {
    receipt_id: number
    list_id: number
    user_id: number
    store_name: number
    total_amount: number
    subtotal: number
    receipt_date: number
    payment_method: number
    tax_rate: number
    tax_amount: number
    currency: number
    image_url: number
    ocr_text: number
    processed: number
    uploaded_at: number
    _all: number
  }


  export type ReceiptAvgAggregateInputType = {
    receipt_id?: true
    list_id?: true
    user_id?: true
    total_amount?: true
    subtotal?: true
    tax_rate?: true
    tax_amount?: true
  }

  export type ReceiptSumAggregateInputType = {
    receipt_id?: true
    list_id?: true
    user_id?: true
    total_amount?: true
    subtotal?: true
    tax_rate?: true
    tax_amount?: true
  }

  export type ReceiptMinAggregateInputType = {
    receipt_id?: true
    list_id?: true
    user_id?: true
    store_name?: true
    total_amount?: true
    subtotal?: true
    receipt_date?: true
    payment_method?: true
    tax_rate?: true
    tax_amount?: true
    currency?: true
    image_url?: true
    ocr_text?: true
    processed?: true
    uploaded_at?: true
  }

  export type ReceiptMaxAggregateInputType = {
    receipt_id?: true
    list_id?: true
    user_id?: true
    store_name?: true
    total_amount?: true
    subtotal?: true
    receipt_date?: true
    payment_method?: true
    tax_rate?: true
    tax_amount?: true
    currency?: true
    image_url?: true
    ocr_text?: true
    processed?: true
    uploaded_at?: true
  }

  export type ReceiptCountAggregateInputType = {
    receipt_id?: true
    list_id?: true
    user_id?: true
    store_name?: true
    total_amount?: true
    subtotal?: true
    receipt_date?: true
    payment_method?: true
    tax_rate?: true
    tax_amount?: true
    currency?: true
    image_url?: true
    ocr_text?: true
    processed?: true
    uploaded_at?: true
    _all?: true
  }

  export type ReceiptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receipt to aggregate.
     */
    where?: ReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receipts to fetch.
     */
    orderBy?: ReceiptOrderByWithRelationInput | ReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Receipts
    **/
    _count?: true | ReceiptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceiptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceiptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceiptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceiptMaxAggregateInputType
  }

  export type GetReceiptAggregateType<T extends ReceiptAggregateArgs> = {
        [P in keyof T & keyof AggregateReceipt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceipt[P]>
      : GetScalarType<T[P], AggregateReceipt[P]>
  }




  export type ReceiptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceiptWhereInput
    orderBy?: ReceiptOrderByWithAggregationInput | ReceiptOrderByWithAggregationInput[]
    by: ReceiptScalarFieldEnum[] | ReceiptScalarFieldEnum
    having?: ReceiptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceiptCountAggregateInputType | true
    _avg?: ReceiptAvgAggregateInputType
    _sum?: ReceiptSumAggregateInputType
    _min?: ReceiptMinAggregateInputType
    _max?: ReceiptMaxAggregateInputType
  }

  export type ReceiptGroupByOutputType = {
    receipt_id: number
    list_id: number | null
    user_id: number
    store_name: string | null
    total_amount: Decimal | null
    subtotal: Decimal | null
    receipt_date: Date | null
    payment_method: $Enums.PaymentMethod | null
    tax_rate: Decimal | null
    tax_amount: Decimal | null
    currency: string
    image_url: string | null
    ocr_text: string | null
    processed: boolean
    uploaded_at: Date
    _count: ReceiptCountAggregateOutputType | null
    _avg: ReceiptAvgAggregateOutputType | null
    _sum: ReceiptSumAggregateOutputType | null
    _min: ReceiptMinAggregateOutputType | null
    _max: ReceiptMaxAggregateOutputType | null
  }

  type GetReceiptGroupByPayload<T extends ReceiptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceiptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceiptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceiptGroupByOutputType[P]>
            : GetScalarType<T[P], ReceiptGroupByOutputType[P]>
        }
      >
    >


  export type ReceiptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    receipt_id?: boolean
    list_id?: boolean
    user_id?: boolean
    store_name?: boolean
    total_amount?: boolean
    subtotal?: boolean
    receipt_date?: boolean
    payment_method?: boolean
    tax_rate?: boolean
    tax_amount?: boolean
    currency?: boolean
    image_url?: boolean
    ocr_text?: boolean
    processed?: boolean
    uploaded_at?: boolean
    list?: boolean | Receipt$listArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Receipt$itemsArgs<ExtArgs>
    _count?: boolean | ReceiptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receipt"]>

  export type ReceiptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    receipt_id?: boolean
    list_id?: boolean
    user_id?: boolean
    store_name?: boolean
    total_amount?: boolean
    subtotal?: boolean
    receipt_date?: boolean
    payment_method?: boolean
    tax_rate?: boolean
    tax_amount?: boolean
    currency?: boolean
    image_url?: boolean
    ocr_text?: boolean
    processed?: boolean
    uploaded_at?: boolean
    list?: boolean | Receipt$listArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receipt"]>

  export type ReceiptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    receipt_id?: boolean
    list_id?: boolean
    user_id?: boolean
    store_name?: boolean
    total_amount?: boolean
    subtotal?: boolean
    receipt_date?: boolean
    payment_method?: boolean
    tax_rate?: boolean
    tax_amount?: boolean
    currency?: boolean
    image_url?: boolean
    ocr_text?: boolean
    processed?: boolean
    uploaded_at?: boolean
    list?: boolean | Receipt$listArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receipt"]>

  export type ReceiptSelectScalar = {
    receipt_id?: boolean
    list_id?: boolean
    user_id?: boolean
    store_name?: boolean
    total_amount?: boolean
    subtotal?: boolean
    receipt_date?: boolean
    payment_method?: boolean
    tax_rate?: boolean
    tax_amount?: boolean
    currency?: boolean
    image_url?: boolean
    ocr_text?: boolean
    processed?: boolean
    uploaded_at?: boolean
  }

  export type ReceiptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"receipt_id" | "list_id" | "user_id" | "store_name" | "total_amount" | "subtotal" | "receipt_date" | "payment_method" | "tax_rate" | "tax_amount" | "currency" | "image_url" | "ocr_text" | "processed" | "uploaded_at", ExtArgs["result"]["receipt"]>
  export type ReceiptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | Receipt$listArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Receipt$itemsArgs<ExtArgs>
    _count?: boolean | ReceiptCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReceiptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | Receipt$listArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReceiptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | Receipt$listArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReceiptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Receipt"
    objects: {
      list: Prisma.$ShoppingListPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$ReceiptItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      receipt_id: number
      list_id: number | null
      user_id: number
      store_name: string | null
      total_amount: Prisma.Decimal | null
      subtotal: Prisma.Decimal | null
      receipt_date: Date | null
      payment_method: $Enums.PaymentMethod | null
      tax_rate: Prisma.Decimal | null
      tax_amount: Prisma.Decimal | null
      currency: string
      image_url: string | null
      ocr_text: string | null
      processed: boolean
      uploaded_at: Date
    }, ExtArgs["result"]["receipt"]>
    composites: {}
  }

  type ReceiptGetPayload<S extends boolean | null | undefined | ReceiptDefaultArgs> = $Result.GetResult<Prisma.$ReceiptPayload, S>

  type ReceiptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceiptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceiptCountAggregateInputType | true
    }

  export interface ReceiptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Receipt'], meta: { name: 'Receipt' } }
    /**
     * Find zero or one Receipt that matches the filter.
     * @param {ReceiptFindUniqueArgs} args - Arguments to find a Receipt
     * @example
     * // Get one Receipt
     * const receipt = await prisma.receipt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceiptFindUniqueArgs>(args: SelectSubset<T, ReceiptFindUniqueArgs<ExtArgs>>): Prisma__ReceiptClient<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Receipt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceiptFindUniqueOrThrowArgs} args - Arguments to find a Receipt
     * @example
     * // Get one Receipt
     * const receipt = await prisma.receipt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceiptFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceiptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceiptClient<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receipt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptFindFirstArgs} args - Arguments to find a Receipt
     * @example
     * // Get one Receipt
     * const receipt = await prisma.receipt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceiptFindFirstArgs>(args?: SelectSubset<T, ReceiptFindFirstArgs<ExtArgs>>): Prisma__ReceiptClient<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receipt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptFindFirstOrThrowArgs} args - Arguments to find a Receipt
     * @example
     * // Get one Receipt
     * const receipt = await prisma.receipt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceiptFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceiptFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceiptClient<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Receipts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Receipts
     * const receipts = await prisma.receipt.findMany()
     * 
     * // Get first 10 Receipts
     * const receipts = await prisma.receipt.findMany({ take: 10 })
     * 
     * // Only select the `receipt_id`
     * const receiptWithReceipt_idOnly = await prisma.receipt.findMany({ select: { receipt_id: true } })
     * 
     */
    findMany<T extends ReceiptFindManyArgs>(args?: SelectSubset<T, ReceiptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Receipt.
     * @param {ReceiptCreateArgs} args - Arguments to create a Receipt.
     * @example
     * // Create one Receipt
     * const Receipt = await prisma.receipt.create({
     *   data: {
     *     // ... data to create a Receipt
     *   }
     * })
     * 
     */
    create<T extends ReceiptCreateArgs>(args: SelectSubset<T, ReceiptCreateArgs<ExtArgs>>): Prisma__ReceiptClient<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Receipts.
     * @param {ReceiptCreateManyArgs} args - Arguments to create many Receipts.
     * @example
     * // Create many Receipts
     * const receipt = await prisma.receipt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceiptCreateManyArgs>(args?: SelectSubset<T, ReceiptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Receipts and returns the data saved in the database.
     * @param {ReceiptCreateManyAndReturnArgs} args - Arguments to create many Receipts.
     * @example
     * // Create many Receipts
     * const receipt = await prisma.receipt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Receipts and only return the `receipt_id`
     * const receiptWithReceipt_idOnly = await prisma.receipt.createManyAndReturn({
     *   select: { receipt_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReceiptCreateManyAndReturnArgs>(args?: SelectSubset<T, ReceiptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Receipt.
     * @param {ReceiptDeleteArgs} args - Arguments to delete one Receipt.
     * @example
     * // Delete one Receipt
     * const Receipt = await prisma.receipt.delete({
     *   where: {
     *     // ... filter to delete one Receipt
     *   }
     * })
     * 
     */
    delete<T extends ReceiptDeleteArgs>(args: SelectSubset<T, ReceiptDeleteArgs<ExtArgs>>): Prisma__ReceiptClient<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Receipt.
     * @param {ReceiptUpdateArgs} args - Arguments to update one Receipt.
     * @example
     * // Update one Receipt
     * const receipt = await prisma.receipt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceiptUpdateArgs>(args: SelectSubset<T, ReceiptUpdateArgs<ExtArgs>>): Prisma__ReceiptClient<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Receipts.
     * @param {ReceiptDeleteManyArgs} args - Arguments to filter Receipts to delete.
     * @example
     * // Delete a few Receipts
     * const { count } = await prisma.receipt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceiptDeleteManyArgs>(args?: SelectSubset<T, ReceiptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Receipts
     * const receipt = await prisma.receipt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceiptUpdateManyArgs>(args: SelectSubset<T, ReceiptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receipts and returns the data updated in the database.
     * @param {ReceiptUpdateManyAndReturnArgs} args - Arguments to update many Receipts.
     * @example
     * // Update many Receipts
     * const receipt = await prisma.receipt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Receipts and only return the `receipt_id`
     * const receiptWithReceipt_idOnly = await prisma.receipt.updateManyAndReturn({
     *   select: { receipt_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReceiptUpdateManyAndReturnArgs>(args: SelectSubset<T, ReceiptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Receipt.
     * @param {ReceiptUpsertArgs} args - Arguments to update or create a Receipt.
     * @example
     * // Update or create a Receipt
     * const receipt = await prisma.receipt.upsert({
     *   create: {
     *     // ... data to create a Receipt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Receipt we want to update
     *   }
     * })
     */
    upsert<T extends ReceiptUpsertArgs>(args: SelectSubset<T, ReceiptUpsertArgs<ExtArgs>>): Prisma__ReceiptClient<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Receipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptCountArgs} args - Arguments to filter Receipts to count.
     * @example
     * // Count the number of Receipts
     * const count = await prisma.receipt.count({
     *   where: {
     *     // ... the filter for the Receipts we want to count
     *   }
     * })
    **/
    count<T extends ReceiptCountArgs>(
      args?: Subset<T, ReceiptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceiptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Receipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReceiptAggregateArgs>(args: Subset<T, ReceiptAggregateArgs>): Prisma.PrismaPromise<GetReceiptAggregateType<T>>

    /**
     * Group by Receipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReceiptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceiptGroupByArgs['orderBy'] }
        : { orderBy?: ReceiptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReceiptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceiptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Receipt model
   */
  readonly fields: ReceiptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Receipt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceiptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    list<T extends Receipt$listArgs<ExtArgs> = {}>(args?: Subset<T, Receipt$listArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Receipt$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Receipt$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiptItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Receipt model
   */
  interface ReceiptFieldRefs {
    readonly receipt_id: FieldRef<"Receipt", 'Int'>
    readonly list_id: FieldRef<"Receipt", 'Int'>
    readonly user_id: FieldRef<"Receipt", 'Int'>
    readonly store_name: FieldRef<"Receipt", 'String'>
    readonly total_amount: FieldRef<"Receipt", 'Decimal'>
    readonly subtotal: FieldRef<"Receipt", 'Decimal'>
    readonly receipt_date: FieldRef<"Receipt", 'DateTime'>
    readonly payment_method: FieldRef<"Receipt", 'PaymentMethod'>
    readonly tax_rate: FieldRef<"Receipt", 'Decimal'>
    readonly tax_amount: FieldRef<"Receipt", 'Decimal'>
    readonly currency: FieldRef<"Receipt", 'String'>
    readonly image_url: FieldRef<"Receipt", 'String'>
    readonly ocr_text: FieldRef<"Receipt", 'String'>
    readonly processed: FieldRef<"Receipt", 'Boolean'>
    readonly uploaded_at: FieldRef<"Receipt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Receipt findUnique
   */
  export type ReceiptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptInclude<ExtArgs> | null
    /**
     * Filter, which Receipt to fetch.
     */
    where: ReceiptWhereUniqueInput
  }

  /**
   * Receipt findUniqueOrThrow
   */
  export type ReceiptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptInclude<ExtArgs> | null
    /**
     * Filter, which Receipt to fetch.
     */
    where: ReceiptWhereUniqueInput
  }

  /**
   * Receipt findFirst
   */
  export type ReceiptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptInclude<ExtArgs> | null
    /**
     * Filter, which Receipt to fetch.
     */
    where?: ReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receipts to fetch.
     */
    orderBy?: ReceiptOrderByWithRelationInput | ReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Receipts.
     */
    cursor?: ReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receipts.
     */
    distinct?: ReceiptScalarFieldEnum | ReceiptScalarFieldEnum[]
  }

  /**
   * Receipt findFirstOrThrow
   */
  export type ReceiptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptInclude<ExtArgs> | null
    /**
     * Filter, which Receipt to fetch.
     */
    where?: ReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receipts to fetch.
     */
    orderBy?: ReceiptOrderByWithRelationInput | ReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Receipts.
     */
    cursor?: ReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receipts.
     */
    distinct?: ReceiptScalarFieldEnum | ReceiptScalarFieldEnum[]
  }

  /**
   * Receipt findMany
   */
  export type ReceiptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptInclude<ExtArgs> | null
    /**
     * Filter, which Receipts to fetch.
     */
    where?: ReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receipts to fetch.
     */
    orderBy?: ReceiptOrderByWithRelationInput | ReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Receipts.
     */
    cursor?: ReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receipts.
     */
    skip?: number
    distinct?: ReceiptScalarFieldEnum | ReceiptScalarFieldEnum[]
  }

  /**
   * Receipt create
   */
  export type ReceiptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptInclude<ExtArgs> | null
    /**
     * The data needed to create a Receipt.
     */
    data: XOR<ReceiptCreateInput, ReceiptUncheckedCreateInput>
  }

  /**
   * Receipt createMany
   */
  export type ReceiptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Receipts.
     */
    data: ReceiptCreateManyInput | ReceiptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Receipt createManyAndReturn
   */
  export type ReceiptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * The data used to create many Receipts.
     */
    data: ReceiptCreateManyInput | ReceiptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Receipt update
   */
  export type ReceiptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptInclude<ExtArgs> | null
    /**
     * The data needed to update a Receipt.
     */
    data: XOR<ReceiptUpdateInput, ReceiptUncheckedUpdateInput>
    /**
     * Choose, which Receipt to update.
     */
    where: ReceiptWhereUniqueInput
  }

  /**
   * Receipt updateMany
   */
  export type ReceiptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Receipts.
     */
    data: XOR<ReceiptUpdateManyMutationInput, ReceiptUncheckedUpdateManyInput>
    /**
     * Filter which Receipts to update
     */
    where?: ReceiptWhereInput
    /**
     * Limit how many Receipts to update.
     */
    limit?: number
  }

  /**
   * Receipt updateManyAndReturn
   */
  export type ReceiptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * The data used to update Receipts.
     */
    data: XOR<ReceiptUpdateManyMutationInput, ReceiptUncheckedUpdateManyInput>
    /**
     * Filter which Receipts to update
     */
    where?: ReceiptWhereInput
    /**
     * Limit how many Receipts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Receipt upsert
   */
  export type ReceiptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptInclude<ExtArgs> | null
    /**
     * The filter to search for the Receipt to update in case it exists.
     */
    where: ReceiptWhereUniqueInput
    /**
     * In case the Receipt found by the `where` argument doesn't exist, create a new Receipt with this data.
     */
    create: XOR<ReceiptCreateInput, ReceiptUncheckedCreateInput>
    /**
     * In case the Receipt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceiptUpdateInput, ReceiptUncheckedUpdateInput>
  }

  /**
   * Receipt delete
   */
  export type ReceiptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptInclude<ExtArgs> | null
    /**
     * Filter which Receipt to delete.
     */
    where: ReceiptWhereUniqueInput
  }

  /**
   * Receipt deleteMany
   */
  export type ReceiptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receipts to delete
     */
    where?: ReceiptWhereInput
    /**
     * Limit how many Receipts to delete.
     */
    limit?: number
  }

  /**
   * Receipt.list
   */
  export type Receipt$listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    where?: ShoppingListWhereInput
  }

  /**
   * Receipt.items
   */
  export type Receipt$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemInclude<ExtArgs> | null
    where?: ReceiptItemWhereInput
    orderBy?: ReceiptItemOrderByWithRelationInput | ReceiptItemOrderByWithRelationInput[]
    cursor?: ReceiptItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceiptItemScalarFieldEnum | ReceiptItemScalarFieldEnum[]
  }

  /**
   * Receipt without action
   */
  export type ReceiptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptInclude<ExtArgs> | null
  }


  /**
   * Model ReceiptItem
   */

  export type AggregateReceiptItem = {
    _count: ReceiptItemCountAggregateOutputType | null
    _avg: ReceiptItemAvgAggregateOutputType | null
    _sum: ReceiptItemSumAggregateOutputType | null
    _min: ReceiptItemMinAggregateOutputType | null
    _max: ReceiptItemMaxAggregateOutputType | null
  }

  export type ReceiptItemAvgAggregateOutputType = {
    id: number | null
    receiptId: number | null
    price: Decimal | null
    quantity: Decimal | null
    pricePerUnit: Decimal | null
    taxRate: Decimal | null
  }

  export type ReceiptItemSumAggregateOutputType = {
    id: number | null
    receiptId: number | null
    price: Decimal | null
    quantity: Decimal | null
    pricePerUnit: Decimal | null
    taxRate: Decimal | null
  }

  export type ReceiptItemMinAggregateOutputType = {
    id: number | null
    receiptId: number | null
    productName: string | null
    price: Decimal | null
    quantity: Decimal | null
    unit: string | null
    pricePerUnit: Decimal | null
    taxRate: Decimal | null
  }

  export type ReceiptItemMaxAggregateOutputType = {
    id: number | null
    receiptId: number | null
    productName: string | null
    price: Decimal | null
    quantity: Decimal | null
    unit: string | null
    pricePerUnit: Decimal | null
    taxRate: Decimal | null
  }

  export type ReceiptItemCountAggregateOutputType = {
    id: number
    receiptId: number
    productName: number
    price: number
    quantity: number
    unit: number
    pricePerUnit: number
    taxRate: number
    _all: number
  }


  export type ReceiptItemAvgAggregateInputType = {
    id?: true
    receiptId?: true
    price?: true
    quantity?: true
    pricePerUnit?: true
    taxRate?: true
  }

  export type ReceiptItemSumAggregateInputType = {
    id?: true
    receiptId?: true
    price?: true
    quantity?: true
    pricePerUnit?: true
    taxRate?: true
  }

  export type ReceiptItemMinAggregateInputType = {
    id?: true
    receiptId?: true
    productName?: true
    price?: true
    quantity?: true
    unit?: true
    pricePerUnit?: true
    taxRate?: true
  }

  export type ReceiptItemMaxAggregateInputType = {
    id?: true
    receiptId?: true
    productName?: true
    price?: true
    quantity?: true
    unit?: true
    pricePerUnit?: true
    taxRate?: true
  }

  export type ReceiptItemCountAggregateInputType = {
    id?: true
    receiptId?: true
    productName?: true
    price?: true
    quantity?: true
    unit?: true
    pricePerUnit?: true
    taxRate?: true
    _all?: true
  }

  export type ReceiptItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceiptItem to aggregate.
     */
    where?: ReceiptItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceiptItems to fetch.
     */
    orderBy?: ReceiptItemOrderByWithRelationInput | ReceiptItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceiptItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceiptItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceiptItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReceiptItems
    **/
    _count?: true | ReceiptItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceiptItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceiptItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceiptItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceiptItemMaxAggregateInputType
  }

  export type GetReceiptItemAggregateType<T extends ReceiptItemAggregateArgs> = {
        [P in keyof T & keyof AggregateReceiptItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceiptItem[P]>
      : GetScalarType<T[P], AggregateReceiptItem[P]>
  }




  export type ReceiptItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceiptItemWhereInput
    orderBy?: ReceiptItemOrderByWithAggregationInput | ReceiptItemOrderByWithAggregationInput[]
    by: ReceiptItemScalarFieldEnum[] | ReceiptItemScalarFieldEnum
    having?: ReceiptItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceiptItemCountAggregateInputType | true
    _avg?: ReceiptItemAvgAggregateInputType
    _sum?: ReceiptItemSumAggregateInputType
    _min?: ReceiptItemMinAggregateInputType
    _max?: ReceiptItemMaxAggregateInputType
  }

  export type ReceiptItemGroupByOutputType = {
    id: number
    receiptId: number
    productName: string
    price: Decimal
    quantity: Decimal
    unit: string
    pricePerUnit: Decimal | null
    taxRate: Decimal | null
    _count: ReceiptItemCountAggregateOutputType | null
    _avg: ReceiptItemAvgAggregateOutputType | null
    _sum: ReceiptItemSumAggregateOutputType | null
    _min: ReceiptItemMinAggregateOutputType | null
    _max: ReceiptItemMaxAggregateOutputType | null
  }

  type GetReceiptItemGroupByPayload<T extends ReceiptItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceiptItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceiptItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceiptItemGroupByOutputType[P]>
            : GetScalarType<T[P], ReceiptItemGroupByOutputType[P]>
        }
      >
    >


  export type ReceiptItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receiptId?: boolean
    productName?: boolean
    price?: boolean
    quantity?: boolean
    unit?: boolean
    pricePerUnit?: boolean
    taxRate?: boolean
    receipt?: boolean | ReceiptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receiptItem"]>

  export type ReceiptItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receiptId?: boolean
    productName?: boolean
    price?: boolean
    quantity?: boolean
    unit?: boolean
    pricePerUnit?: boolean
    taxRate?: boolean
    receipt?: boolean | ReceiptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receiptItem"]>

  export type ReceiptItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receiptId?: boolean
    productName?: boolean
    price?: boolean
    quantity?: boolean
    unit?: boolean
    pricePerUnit?: boolean
    taxRate?: boolean
    receipt?: boolean | ReceiptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receiptItem"]>

  export type ReceiptItemSelectScalar = {
    id?: boolean
    receiptId?: boolean
    productName?: boolean
    price?: boolean
    quantity?: boolean
    unit?: boolean
    pricePerUnit?: boolean
    taxRate?: boolean
  }

  export type ReceiptItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "receiptId" | "productName" | "price" | "quantity" | "unit" | "pricePerUnit" | "taxRate", ExtArgs["result"]["receiptItem"]>
  export type ReceiptItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipt?: boolean | ReceiptDefaultArgs<ExtArgs>
  }
  export type ReceiptItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipt?: boolean | ReceiptDefaultArgs<ExtArgs>
  }
  export type ReceiptItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipt?: boolean | ReceiptDefaultArgs<ExtArgs>
  }

  export type $ReceiptItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReceiptItem"
    objects: {
      receipt: Prisma.$ReceiptPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      receiptId: number
      productName: string
      price: Prisma.Decimal
      quantity: Prisma.Decimal
      unit: string
      pricePerUnit: Prisma.Decimal | null
      taxRate: Prisma.Decimal | null
    }, ExtArgs["result"]["receiptItem"]>
    composites: {}
  }

  type ReceiptItemGetPayload<S extends boolean | null | undefined | ReceiptItemDefaultArgs> = $Result.GetResult<Prisma.$ReceiptItemPayload, S>

  type ReceiptItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceiptItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceiptItemCountAggregateInputType | true
    }

  export interface ReceiptItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReceiptItem'], meta: { name: 'ReceiptItem' } }
    /**
     * Find zero or one ReceiptItem that matches the filter.
     * @param {ReceiptItemFindUniqueArgs} args - Arguments to find a ReceiptItem
     * @example
     * // Get one ReceiptItem
     * const receiptItem = await prisma.receiptItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceiptItemFindUniqueArgs>(args: SelectSubset<T, ReceiptItemFindUniqueArgs<ExtArgs>>): Prisma__ReceiptItemClient<$Result.GetResult<Prisma.$ReceiptItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReceiptItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceiptItemFindUniqueOrThrowArgs} args - Arguments to find a ReceiptItem
     * @example
     * // Get one ReceiptItem
     * const receiptItem = await prisma.receiptItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceiptItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceiptItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceiptItemClient<$Result.GetResult<Prisma.$ReceiptItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceiptItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptItemFindFirstArgs} args - Arguments to find a ReceiptItem
     * @example
     * // Get one ReceiptItem
     * const receiptItem = await prisma.receiptItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceiptItemFindFirstArgs>(args?: SelectSubset<T, ReceiptItemFindFirstArgs<ExtArgs>>): Prisma__ReceiptItemClient<$Result.GetResult<Prisma.$ReceiptItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceiptItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptItemFindFirstOrThrowArgs} args - Arguments to find a ReceiptItem
     * @example
     * // Get one ReceiptItem
     * const receiptItem = await prisma.receiptItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceiptItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceiptItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceiptItemClient<$Result.GetResult<Prisma.$ReceiptItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReceiptItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReceiptItems
     * const receiptItems = await prisma.receiptItem.findMany()
     * 
     * // Get first 10 ReceiptItems
     * const receiptItems = await prisma.receiptItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receiptItemWithIdOnly = await prisma.receiptItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReceiptItemFindManyArgs>(args?: SelectSubset<T, ReceiptItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiptItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReceiptItem.
     * @param {ReceiptItemCreateArgs} args - Arguments to create a ReceiptItem.
     * @example
     * // Create one ReceiptItem
     * const ReceiptItem = await prisma.receiptItem.create({
     *   data: {
     *     // ... data to create a ReceiptItem
     *   }
     * })
     * 
     */
    create<T extends ReceiptItemCreateArgs>(args: SelectSubset<T, ReceiptItemCreateArgs<ExtArgs>>): Prisma__ReceiptItemClient<$Result.GetResult<Prisma.$ReceiptItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReceiptItems.
     * @param {ReceiptItemCreateManyArgs} args - Arguments to create many ReceiptItems.
     * @example
     * // Create many ReceiptItems
     * const receiptItem = await prisma.receiptItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceiptItemCreateManyArgs>(args?: SelectSubset<T, ReceiptItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReceiptItems and returns the data saved in the database.
     * @param {ReceiptItemCreateManyAndReturnArgs} args - Arguments to create many ReceiptItems.
     * @example
     * // Create many ReceiptItems
     * const receiptItem = await prisma.receiptItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReceiptItems and only return the `id`
     * const receiptItemWithIdOnly = await prisma.receiptItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReceiptItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ReceiptItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiptItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReceiptItem.
     * @param {ReceiptItemDeleteArgs} args - Arguments to delete one ReceiptItem.
     * @example
     * // Delete one ReceiptItem
     * const ReceiptItem = await prisma.receiptItem.delete({
     *   where: {
     *     // ... filter to delete one ReceiptItem
     *   }
     * })
     * 
     */
    delete<T extends ReceiptItemDeleteArgs>(args: SelectSubset<T, ReceiptItemDeleteArgs<ExtArgs>>): Prisma__ReceiptItemClient<$Result.GetResult<Prisma.$ReceiptItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReceiptItem.
     * @param {ReceiptItemUpdateArgs} args - Arguments to update one ReceiptItem.
     * @example
     * // Update one ReceiptItem
     * const receiptItem = await prisma.receiptItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceiptItemUpdateArgs>(args: SelectSubset<T, ReceiptItemUpdateArgs<ExtArgs>>): Prisma__ReceiptItemClient<$Result.GetResult<Prisma.$ReceiptItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReceiptItems.
     * @param {ReceiptItemDeleteManyArgs} args - Arguments to filter ReceiptItems to delete.
     * @example
     * // Delete a few ReceiptItems
     * const { count } = await prisma.receiptItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceiptItemDeleteManyArgs>(args?: SelectSubset<T, ReceiptItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceiptItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReceiptItems
     * const receiptItem = await prisma.receiptItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceiptItemUpdateManyArgs>(args: SelectSubset<T, ReceiptItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceiptItems and returns the data updated in the database.
     * @param {ReceiptItemUpdateManyAndReturnArgs} args - Arguments to update many ReceiptItems.
     * @example
     * // Update many ReceiptItems
     * const receiptItem = await prisma.receiptItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReceiptItems and only return the `id`
     * const receiptItemWithIdOnly = await prisma.receiptItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReceiptItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ReceiptItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiptItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReceiptItem.
     * @param {ReceiptItemUpsertArgs} args - Arguments to update or create a ReceiptItem.
     * @example
     * // Update or create a ReceiptItem
     * const receiptItem = await prisma.receiptItem.upsert({
     *   create: {
     *     // ... data to create a ReceiptItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReceiptItem we want to update
     *   }
     * })
     */
    upsert<T extends ReceiptItemUpsertArgs>(args: SelectSubset<T, ReceiptItemUpsertArgs<ExtArgs>>): Prisma__ReceiptItemClient<$Result.GetResult<Prisma.$ReceiptItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReceiptItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptItemCountArgs} args - Arguments to filter ReceiptItems to count.
     * @example
     * // Count the number of ReceiptItems
     * const count = await prisma.receiptItem.count({
     *   where: {
     *     // ... the filter for the ReceiptItems we want to count
     *   }
     * })
    **/
    count<T extends ReceiptItemCountArgs>(
      args?: Subset<T, ReceiptItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceiptItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReceiptItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReceiptItemAggregateArgs>(args: Subset<T, ReceiptItemAggregateArgs>): Prisma.PrismaPromise<GetReceiptItemAggregateType<T>>

    /**
     * Group by ReceiptItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReceiptItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceiptItemGroupByArgs['orderBy'] }
        : { orderBy?: ReceiptItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReceiptItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceiptItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReceiptItem model
   */
  readonly fields: ReceiptItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReceiptItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceiptItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receipt<T extends ReceiptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReceiptDefaultArgs<ExtArgs>>): Prisma__ReceiptClient<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReceiptItem model
   */
  interface ReceiptItemFieldRefs {
    readonly id: FieldRef<"ReceiptItem", 'Int'>
    readonly receiptId: FieldRef<"ReceiptItem", 'Int'>
    readonly productName: FieldRef<"ReceiptItem", 'String'>
    readonly price: FieldRef<"ReceiptItem", 'Decimal'>
    readonly quantity: FieldRef<"ReceiptItem", 'Decimal'>
    readonly unit: FieldRef<"ReceiptItem", 'String'>
    readonly pricePerUnit: FieldRef<"ReceiptItem", 'Decimal'>
    readonly taxRate: FieldRef<"ReceiptItem", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * ReceiptItem findUnique
   */
  export type ReceiptItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemInclude<ExtArgs> | null
    /**
     * Filter, which ReceiptItem to fetch.
     */
    where: ReceiptItemWhereUniqueInput
  }

  /**
   * ReceiptItem findUniqueOrThrow
   */
  export type ReceiptItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemInclude<ExtArgs> | null
    /**
     * Filter, which ReceiptItem to fetch.
     */
    where: ReceiptItemWhereUniqueInput
  }

  /**
   * ReceiptItem findFirst
   */
  export type ReceiptItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemInclude<ExtArgs> | null
    /**
     * Filter, which ReceiptItem to fetch.
     */
    where?: ReceiptItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceiptItems to fetch.
     */
    orderBy?: ReceiptItemOrderByWithRelationInput | ReceiptItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceiptItems.
     */
    cursor?: ReceiptItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceiptItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceiptItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceiptItems.
     */
    distinct?: ReceiptItemScalarFieldEnum | ReceiptItemScalarFieldEnum[]
  }

  /**
   * ReceiptItem findFirstOrThrow
   */
  export type ReceiptItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemInclude<ExtArgs> | null
    /**
     * Filter, which ReceiptItem to fetch.
     */
    where?: ReceiptItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceiptItems to fetch.
     */
    orderBy?: ReceiptItemOrderByWithRelationInput | ReceiptItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceiptItems.
     */
    cursor?: ReceiptItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceiptItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceiptItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceiptItems.
     */
    distinct?: ReceiptItemScalarFieldEnum | ReceiptItemScalarFieldEnum[]
  }

  /**
   * ReceiptItem findMany
   */
  export type ReceiptItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemInclude<ExtArgs> | null
    /**
     * Filter, which ReceiptItems to fetch.
     */
    where?: ReceiptItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceiptItems to fetch.
     */
    orderBy?: ReceiptItemOrderByWithRelationInput | ReceiptItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReceiptItems.
     */
    cursor?: ReceiptItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceiptItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceiptItems.
     */
    skip?: number
    distinct?: ReceiptItemScalarFieldEnum | ReceiptItemScalarFieldEnum[]
  }

  /**
   * ReceiptItem create
   */
  export type ReceiptItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ReceiptItem.
     */
    data: XOR<ReceiptItemCreateInput, ReceiptItemUncheckedCreateInput>
  }

  /**
   * ReceiptItem createMany
   */
  export type ReceiptItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReceiptItems.
     */
    data: ReceiptItemCreateManyInput | ReceiptItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReceiptItem createManyAndReturn
   */
  export type ReceiptItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * The data used to create many ReceiptItems.
     */
    data: ReceiptItemCreateManyInput | ReceiptItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReceiptItem update
   */
  export type ReceiptItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ReceiptItem.
     */
    data: XOR<ReceiptItemUpdateInput, ReceiptItemUncheckedUpdateInput>
    /**
     * Choose, which ReceiptItem to update.
     */
    where: ReceiptItemWhereUniqueInput
  }

  /**
   * ReceiptItem updateMany
   */
  export type ReceiptItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReceiptItems.
     */
    data: XOR<ReceiptItemUpdateManyMutationInput, ReceiptItemUncheckedUpdateManyInput>
    /**
     * Filter which ReceiptItems to update
     */
    where?: ReceiptItemWhereInput
    /**
     * Limit how many ReceiptItems to update.
     */
    limit?: number
  }

  /**
   * ReceiptItem updateManyAndReturn
   */
  export type ReceiptItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * The data used to update ReceiptItems.
     */
    data: XOR<ReceiptItemUpdateManyMutationInput, ReceiptItemUncheckedUpdateManyInput>
    /**
     * Filter which ReceiptItems to update
     */
    where?: ReceiptItemWhereInput
    /**
     * Limit how many ReceiptItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReceiptItem upsert
   */
  export type ReceiptItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ReceiptItem to update in case it exists.
     */
    where: ReceiptItemWhereUniqueInput
    /**
     * In case the ReceiptItem found by the `where` argument doesn't exist, create a new ReceiptItem with this data.
     */
    create: XOR<ReceiptItemCreateInput, ReceiptItemUncheckedCreateInput>
    /**
     * In case the ReceiptItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceiptItemUpdateInput, ReceiptItemUncheckedUpdateInput>
  }

  /**
   * ReceiptItem delete
   */
  export type ReceiptItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemInclude<ExtArgs> | null
    /**
     * Filter which ReceiptItem to delete.
     */
    where: ReceiptItemWhereUniqueInput
  }

  /**
   * ReceiptItem deleteMany
   */
  export type ReceiptItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceiptItems to delete
     */
    where?: ReceiptItemWhereInput
    /**
     * Limit how many ReceiptItems to delete.
     */
    limit?: number
  }

  /**
   * ReceiptItem without action
   */
  export type ReceiptItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemInclude<ExtArgs> | null
  }


  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    expense_id: number | null
    user_id: number | null
    category_id: number | null
    total_amount: Decimal | null
    month: number | null
    year: number | null
  }

  export type ExpenseSumAggregateOutputType = {
    expense_id: number | null
    user_id: number | null
    category_id: number | null
    total_amount: Decimal | null
    month: number | null
    year: number | null
  }

  export type ExpenseMinAggregateOutputType = {
    expense_id: number | null
    user_id: number | null
    category_id: number | null
    total_amount: Decimal | null
    month: number | null
    year: number | null
    created_at: Date | null
  }

  export type ExpenseMaxAggregateOutputType = {
    expense_id: number | null
    user_id: number | null
    category_id: number | null
    total_amount: Decimal | null
    month: number | null
    year: number | null
    created_at: Date | null
  }

  export type ExpenseCountAggregateOutputType = {
    expense_id: number
    user_id: number
    category_id: number
    total_amount: number
    month: number
    year: number
    created_at: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    expense_id?: true
    user_id?: true
    category_id?: true
    total_amount?: true
    month?: true
    year?: true
  }

  export type ExpenseSumAggregateInputType = {
    expense_id?: true
    user_id?: true
    category_id?: true
    total_amount?: true
    month?: true
    year?: true
  }

  export type ExpenseMinAggregateInputType = {
    expense_id?: true
    user_id?: true
    category_id?: true
    total_amount?: true
    month?: true
    year?: true
    created_at?: true
  }

  export type ExpenseMaxAggregateInputType = {
    expense_id?: true
    user_id?: true
    category_id?: true
    total_amount?: true
    month?: true
    year?: true
    created_at?: true
  }

  export type ExpenseCountAggregateInputType = {
    expense_id?: true
    user_id?: true
    category_id?: true
    total_amount?: true
    month?: true
    year?: true
    created_at?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    expense_id: number
    user_id: number
    category_id: number | null
    total_amount: Decimal
    month: number
    year: number
    created_at: Date
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expense_id?: boolean
    user_id?: boolean
    category_id?: boolean
    total_amount?: boolean
    month?: boolean
    year?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Expense$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expense_id?: boolean
    user_id?: boolean
    category_id?: boolean
    total_amount?: boolean
    month?: boolean
    year?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Expense$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expense_id?: boolean
    user_id?: boolean
    category_id?: boolean
    total_amount?: boolean
    month?: boolean
    year?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Expense$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    expense_id?: boolean
    user_id?: boolean
    category_id?: boolean
    total_amount?: boolean
    month?: boolean
    year?: boolean
    created_at?: boolean
  }

  export type ExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"expense_id" | "user_id" | "category_id" | "total_amount" | "month" | "year" | "created_at", ExtArgs["result"]["expense"]>
  export type ExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Expense$categoryArgs<ExtArgs>
  }
  export type ExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Expense$categoryArgs<ExtArgs>
  }
  export type ExpenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Expense$categoryArgs<ExtArgs>
  }

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      expense_id: number
      user_id: number
      category_id: number | null
      total_amount: Prisma.Decimal
      month: number
      year: number
      created_at: Date
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `expense_id`
     * const expenseWithExpense_idOnly = await prisma.expense.findMany({ select: { expense_id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `expense_id`
     * const expenseWithExpense_idOnly = await prisma.expense.createManyAndReturn({
     *   select: { expense_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {ExpenseUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `expense_id`
     * const expenseWithExpense_idOnly = await prisma.expense.updateManyAndReturn({
     *   select: { expense_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends Expense$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Expense$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expense model
   */
  interface ExpenseFieldRefs {
    readonly expense_id: FieldRef<"Expense", 'Int'>
    readonly user_id: FieldRef<"Expense", 'Int'>
    readonly category_id: FieldRef<"Expense", 'Int'>
    readonly total_amount: FieldRef<"Expense", 'Decimal'>
    readonly month: FieldRef<"Expense", 'Int'>
    readonly year: FieldRef<"Expense", 'Int'>
    readonly created_at: FieldRef<"Expense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense createManyAndReturn
   */
  export type ExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense updateManyAndReturn
   */
  export type ExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number
  }

  /**
   * Expense.category
   */
  export type Expense$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
  }


  /**
   * Model ShoppingListShare
   */

  export type AggregateShoppingListShare = {
    _count: ShoppingListShareCountAggregateOutputType | null
    _avg: ShoppingListShareAvgAggregateOutputType | null
    _sum: ShoppingListShareSumAggregateOutputType | null
    _min: ShoppingListShareMinAggregateOutputType | null
    _max: ShoppingListShareMaxAggregateOutputType | null
  }

  export type ShoppingListShareAvgAggregateOutputType = {
    id: number | null
    list_id: number | null
    user_id: number | null
  }

  export type ShoppingListShareSumAggregateOutputType = {
    id: number | null
    list_id: number | null
    user_id: number | null
  }

  export type ShoppingListShareMinAggregateOutputType = {
    id: number | null
    list_id: number | null
    user_id: number | null
    role: $Enums.Role | null
  }

  export type ShoppingListShareMaxAggregateOutputType = {
    id: number | null
    list_id: number | null
    user_id: number | null
    role: $Enums.Role | null
  }

  export type ShoppingListShareCountAggregateOutputType = {
    id: number
    list_id: number
    user_id: number
    role: number
    _all: number
  }


  export type ShoppingListShareAvgAggregateInputType = {
    id?: true
    list_id?: true
    user_id?: true
  }

  export type ShoppingListShareSumAggregateInputType = {
    id?: true
    list_id?: true
    user_id?: true
  }

  export type ShoppingListShareMinAggregateInputType = {
    id?: true
    list_id?: true
    user_id?: true
    role?: true
  }

  export type ShoppingListShareMaxAggregateInputType = {
    id?: true
    list_id?: true
    user_id?: true
    role?: true
  }

  export type ShoppingListShareCountAggregateInputType = {
    id?: true
    list_id?: true
    user_id?: true
    role?: true
    _all?: true
  }

  export type ShoppingListShareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingListShare to aggregate.
     */
    where?: ShoppingListShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingListShares to fetch.
     */
    orderBy?: ShoppingListShareOrderByWithRelationInput | ShoppingListShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShoppingListShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingListShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingListShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShoppingListShares
    **/
    _count?: true | ShoppingListShareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShoppingListShareAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShoppingListShareSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShoppingListShareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShoppingListShareMaxAggregateInputType
  }

  export type GetShoppingListShareAggregateType<T extends ShoppingListShareAggregateArgs> = {
        [P in keyof T & keyof AggregateShoppingListShare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShoppingListShare[P]>
      : GetScalarType<T[P], AggregateShoppingListShare[P]>
  }




  export type ShoppingListShareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingListShareWhereInput
    orderBy?: ShoppingListShareOrderByWithAggregationInput | ShoppingListShareOrderByWithAggregationInput[]
    by: ShoppingListShareScalarFieldEnum[] | ShoppingListShareScalarFieldEnum
    having?: ShoppingListShareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShoppingListShareCountAggregateInputType | true
    _avg?: ShoppingListShareAvgAggregateInputType
    _sum?: ShoppingListShareSumAggregateInputType
    _min?: ShoppingListShareMinAggregateInputType
    _max?: ShoppingListShareMaxAggregateInputType
  }

  export type ShoppingListShareGroupByOutputType = {
    id: number
    list_id: number
    user_id: number
    role: $Enums.Role
    _count: ShoppingListShareCountAggregateOutputType | null
    _avg: ShoppingListShareAvgAggregateOutputType | null
    _sum: ShoppingListShareSumAggregateOutputType | null
    _min: ShoppingListShareMinAggregateOutputType | null
    _max: ShoppingListShareMaxAggregateOutputType | null
  }

  type GetShoppingListShareGroupByPayload<T extends ShoppingListShareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShoppingListShareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShoppingListShareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShoppingListShareGroupByOutputType[P]>
            : GetScalarType<T[P], ShoppingListShareGroupByOutputType[P]>
        }
      >
    >


  export type ShoppingListShareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    list_id?: boolean
    user_id?: boolean
    role?: boolean
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingListShare"]>

  export type ShoppingListShareSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    list_id?: boolean
    user_id?: boolean
    role?: boolean
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingListShare"]>

  export type ShoppingListShareSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    list_id?: boolean
    user_id?: boolean
    role?: boolean
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingListShare"]>

  export type ShoppingListShareSelectScalar = {
    id?: boolean
    list_id?: boolean
    user_id?: boolean
    role?: boolean
  }

  export type ShoppingListShareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "list_id" | "user_id" | "role", ExtArgs["result"]["shoppingListShare"]>
  export type ShoppingListShareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShoppingListShareIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShoppingListShareIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ShoppingListSharePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShoppingListShare"
    objects: {
      list: Prisma.$ShoppingListPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      list_id: number
      user_id: number
      role: $Enums.Role
    }, ExtArgs["result"]["shoppingListShare"]>
    composites: {}
  }

  type ShoppingListShareGetPayload<S extends boolean | null | undefined | ShoppingListShareDefaultArgs> = $Result.GetResult<Prisma.$ShoppingListSharePayload, S>

  type ShoppingListShareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShoppingListShareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShoppingListShareCountAggregateInputType | true
    }

  export interface ShoppingListShareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShoppingListShare'], meta: { name: 'ShoppingListShare' } }
    /**
     * Find zero or one ShoppingListShare that matches the filter.
     * @param {ShoppingListShareFindUniqueArgs} args - Arguments to find a ShoppingListShare
     * @example
     * // Get one ShoppingListShare
     * const shoppingListShare = await prisma.shoppingListShare.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShoppingListShareFindUniqueArgs>(args: SelectSubset<T, ShoppingListShareFindUniqueArgs<ExtArgs>>): Prisma__ShoppingListShareClient<$Result.GetResult<Prisma.$ShoppingListSharePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShoppingListShare that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShoppingListShareFindUniqueOrThrowArgs} args - Arguments to find a ShoppingListShare
     * @example
     * // Get one ShoppingListShare
     * const shoppingListShare = await prisma.shoppingListShare.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShoppingListShareFindUniqueOrThrowArgs>(args: SelectSubset<T, ShoppingListShareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShoppingListShareClient<$Result.GetResult<Prisma.$ShoppingListSharePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingListShare that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListShareFindFirstArgs} args - Arguments to find a ShoppingListShare
     * @example
     * // Get one ShoppingListShare
     * const shoppingListShare = await prisma.shoppingListShare.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShoppingListShareFindFirstArgs>(args?: SelectSubset<T, ShoppingListShareFindFirstArgs<ExtArgs>>): Prisma__ShoppingListShareClient<$Result.GetResult<Prisma.$ShoppingListSharePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingListShare that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListShareFindFirstOrThrowArgs} args - Arguments to find a ShoppingListShare
     * @example
     * // Get one ShoppingListShare
     * const shoppingListShare = await prisma.shoppingListShare.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShoppingListShareFindFirstOrThrowArgs>(args?: SelectSubset<T, ShoppingListShareFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShoppingListShareClient<$Result.GetResult<Prisma.$ShoppingListSharePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShoppingListShares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListShareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShoppingListShares
     * const shoppingListShares = await prisma.shoppingListShare.findMany()
     * 
     * // Get first 10 ShoppingListShares
     * const shoppingListShares = await prisma.shoppingListShare.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shoppingListShareWithIdOnly = await prisma.shoppingListShare.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShoppingListShareFindManyArgs>(args?: SelectSubset<T, ShoppingListShareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShoppingListShare.
     * @param {ShoppingListShareCreateArgs} args - Arguments to create a ShoppingListShare.
     * @example
     * // Create one ShoppingListShare
     * const ShoppingListShare = await prisma.shoppingListShare.create({
     *   data: {
     *     // ... data to create a ShoppingListShare
     *   }
     * })
     * 
     */
    create<T extends ShoppingListShareCreateArgs>(args: SelectSubset<T, ShoppingListShareCreateArgs<ExtArgs>>): Prisma__ShoppingListShareClient<$Result.GetResult<Prisma.$ShoppingListSharePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShoppingListShares.
     * @param {ShoppingListShareCreateManyArgs} args - Arguments to create many ShoppingListShares.
     * @example
     * // Create many ShoppingListShares
     * const shoppingListShare = await prisma.shoppingListShare.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShoppingListShareCreateManyArgs>(args?: SelectSubset<T, ShoppingListShareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShoppingListShares and returns the data saved in the database.
     * @param {ShoppingListShareCreateManyAndReturnArgs} args - Arguments to create many ShoppingListShares.
     * @example
     * // Create many ShoppingListShares
     * const shoppingListShare = await prisma.shoppingListShare.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShoppingListShares and only return the `id`
     * const shoppingListShareWithIdOnly = await prisma.shoppingListShare.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShoppingListShareCreateManyAndReturnArgs>(args?: SelectSubset<T, ShoppingListShareCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListSharePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShoppingListShare.
     * @param {ShoppingListShareDeleteArgs} args - Arguments to delete one ShoppingListShare.
     * @example
     * // Delete one ShoppingListShare
     * const ShoppingListShare = await prisma.shoppingListShare.delete({
     *   where: {
     *     // ... filter to delete one ShoppingListShare
     *   }
     * })
     * 
     */
    delete<T extends ShoppingListShareDeleteArgs>(args: SelectSubset<T, ShoppingListShareDeleteArgs<ExtArgs>>): Prisma__ShoppingListShareClient<$Result.GetResult<Prisma.$ShoppingListSharePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShoppingListShare.
     * @param {ShoppingListShareUpdateArgs} args - Arguments to update one ShoppingListShare.
     * @example
     * // Update one ShoppingListShare
     * const shoppingListShare = await prisma.shoppingListShare.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShoppingListShareUpdateArgs>(args: SelectSubset<T, ShoppingListShareUpdateArgs<ExtArgs>>): Prisma__ShoppingListShareClient<$Result.GetResult<Prisma.$ShoppingListSharePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShoppingListShares.
     * @param {ShoppingListShareDeleteManyArgs} args - Arguments to filter ShoppingListShares to delete.
     * @example
     * // Delete a few ShoppingListShares
     * const { count } = await prisma.shoppingListShare.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShoppingListShareDeleteManyArgs>(args?: SelectSubset<T, ShoppingListShareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingListShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListShareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShoppingListShares
     * const shoppingListShare = await prisma.shoppingListShare.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShoppingListShareUpdateManyArgs>(args: SelectSubset<T, ShoppingListShareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingListShares and returns the data updated in the database.
     * @param {ShoppingListShareUpdateManyAndReturnArgs} args - Arguments to update many ShoppingListShares.
     * @example
     * // Update many ShoppingListShares
     * const shoppingListShare = await prisma.shoppingListShare.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShoppingListShares and only return the `id`
     * const shoppingListShareWithIdOnly = await prisma.shoppingListShare.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShoppingListShareUpdateManyAndReturnArgs>(args: SelectSubset<T, ShoppingListShareUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListSharePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShoppingListShare.
     * @param {ShoppingListShareUpsertArgs} args - Arguments to update or create a ShoppingListShare.
     * @example
     * // Update or create a ShoppingListShare
     * const shoppingListShare = await prisma.shoppingListShare.upsert({
     *   create: {
     *     // ... data to create a ShoppingListShare
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShoppingListShare we want to update
     *   }
     * })
     */
    upsert<T extends ShoppingListShareUpsertArgs>(args: SelectSubset<T, ShoppingListShareUpsertArgs<ExtArgs>>): Prisma__ShoppingListShareClient<$Result.GetResult<Prisma.$ShoppingListSharePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShoppingListShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListShareCountArgs} args - Arguments to filter ShoppingListShares to count.
     * @example
     * // Count the number of ShoppingListShares
     * const count = await prisma.shoppingListShare.count({
     *   where: {
     *     // ... the filter for the ShoppingListShares we want to count
     *   }
     * })
    **/
    count<T extends ShoppingListShareCountArgs>(
      args?: Subset<T, ShoppingListShareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShoppingListShareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShoppingListShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListShareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShoppingListShareAggregateArgs>(args: Subset<T, ShoppingListShareAggregateArgs>): Prisma.PrismaPromise<GetShoppingListShareAggregateType<T>>

    /**
     * Group by ShoppingListShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListShareGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShoppingListShareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShoppingListShareGroupByArgs['orderBy'] }
        : { orderBy?: ShoppingListShareGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShoppingListShareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShoppingListShareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShoppingListShare model
   */
  readonly fields: ShoppingListShareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShoppingListShare.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShoppingListShareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    list<T extends ShoppingListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingListDefaultArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShoppingListShare model
   */
  interface ShoppingListShareFieldRefs {
    readonly id: FieldRef<"ShoppingListShare", 'Int'>
    readonly list_id: FieldRef<"ShoppingListShare", 'Int'>
    readonly user_id: FieldRef<"ShoppingListShare", 'Int'>
    readonly role: FieldRef<"ShoppingListShare", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * ShoppingListShare findUnique
   */
  export type ShoppingListShareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListShare
     */
    select?: ShoppingListShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListShare
     */
    omit?: ShoppingListShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListShareInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingListShare to fetch.
     */
    where: ShoppingListShareWhereUniqueInput
  }

  /**
   * ShoppingListShare findUniqueOrThrow
   */
  export type ShoppingListShareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListShare
     */
    select?: ShoppingListShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListShare
     */
    omit?: ShoppingListShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListShareInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingListShare to fetch.
     */
    where: ShoppingListShareWhereUniqueInput
  }

  /**
   * ShoppingListShare findFirst
   */
  export type ShoppingListShareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListShare
     */
    select?: ShoppingListShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListShare
     */
    omit?: ShoppingListShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListShareInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingListShare to fetch.
     */
    where?: ShoppingListShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingListShares to fetch.
     */
    orderBy?: ShoppingListShareOrderByWithRelationInput | ShoppingListShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingListShares.
     */
    cursor?: ShoppingListShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingListShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingListShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingListShares.
     */
    distinct?: ShoppingListShareScalarFieldEnum | ShoppingListShareScalarFieldEnum[]
  }

  /**
   * ShoppingListShare findFirstOrThrow
   */
  export type ShoppingListShareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListShare
     */
    select?: ShoppingListShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListShare
     */
    omit?: ShoppingListShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListShareInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingListShare to fetch.
     */
    where?: ShoppingListShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingListShares to fetch.
     */
    orderBy?: ShoppingListShareOrderByWithRelationInput | ShoppingListShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingListShares.
     */
    cursor?: ShoppingListShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingListShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingListShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingListShares.
     */
    distinct?: ShoppingListShareScalarFieldEnum | ShoppingListShareScalarFieldEnum[]
  }

  /**
   * ShoppingListShare findMany
   */
  export type ShoppingListShareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListShare
     */
    select?: ShoppingListShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListShare
     */
    omit?: ShoppingListShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListShareInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingListShares to fetch.
     */
    where?: ShoppingListShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingListShares to fetch.
     */
    orderBy?: ShoppingListShareOrderByWithRelationInput | ShoppingListShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShoppingListShares.
     */
    cursor?: ShoppingListShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingListShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingListShares.
     */
    skip?: number
    distinct?: ShoppingListShareScalarFieldEnum | ShoppingListShareScalarFieldEnum[]
  }

  /**
   * ShoppingListShare create
   */
  export type ShoppingListShareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListShare
     */
    select?: ShoppingListShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListShare
     */
    omit?: ShoppingListShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListShareInclude<ExtArgs> | null
    /**
     * The data needed to create a ShoppingListShare.
     */
    data: XOR<ShoppingListShareCreateInput, ShoppingListShareUncheckedCreateInput>
  }

  /**
   * ShoppingListShare createMany
   */
  export type ShoppingListShareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShoppingListShares.
     */
    data: ShoppingListShareCreateManyInput | ShoppingListShareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShoppingListShare createManyAndReturn
   */
  export type ShoppingListShareCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListShare
     */
    select?: ShoppingListShareSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListShare
     */
    omit?: ShoppingListShareOmit<ExtArgs> | null
    /**
     * The data used to create many ShoppingListShares.
     */
    data: ShoppingListShareCreateManyInput | ShoppingListShareCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListShareIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShoppingListShare update
   */
  export type ShoppingListShareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListShare
     */
    select?: ShoppingListShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListShare
     */
    omit?: ShoppingListShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListShareInclude<ExtArgs> | null
    /**
     * The data needed to update a ShoppingListShare.
     */
    data: XOR<ShoppingListShareUpdateInput, ShoppingListShareUncheckedUpdateInput>
    /**
     * Choose, which ShoppingListShare to update.
     */
    where: ShoppingListShareWhereUniqueInput
  }

  /**
   * ShoppingListShare updateMany
   */
  export type ShoppingListShareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShoppingListShares.
     */
    data: XOR<ShoppingListShareUpdateManyMutationInput, ShoppingListShareUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingListShares to update
     */
    where?: ShoppingListShareWhereInput
    /**
     * Limit how many ShoppingListShares to update.
     */
    limit?: number
  }

  /**
   * ShoppingListShare updateManyAndReturn
   */
  export type ShoppingListShareUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListShare
     */
    select?: ShoppingListShareSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListShare
     */
    omit?: ShoppingListShareOmit<ExtArgs> | null
    /**
     * The data used to update ShoppingListShares.
     */
    data: XOR<ShoppingListShareUpdateManyMutationInput, ShoppingListShareUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingListShares to update
     */
    where?: ShoppingListShareWhereInput
    /**
     * Limit how many ShoppingListShares to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListShareIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShoppingListShare upsert
   */
  export type ShoppingListShareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListShare
     */
    select?: ShoppingListShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListShare
     */
    omit?: ShoppingListShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListShareInclude<ExtArgs> | null
    /**
     * The filter to search for the ShoppingListShare to update in case it exists.
     */
    where: ShoppingListShareWhereUniqueInput
    /**
     * In case the ShoppingListShare found by the `where` argument doesn't exist, create a new ShoppingListShare with this data.
     */
    create: XOR<ShoppingListShareCreateInput, ShoppingListShareUncheckedCreateInput>
    /**
     * In case the ShoppingListShare was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShoppingListShareUpdateInput, ShoppingListShareUncheckedUpdateInput>
  }

  /**
   * ShoppingListShare delete
   */
  export type ShoppingListShareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListShare
     */
    select?: ShoppingListShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListShare
     */
    omit?: ShoppingListShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListShareInclude<ExtArgs> | null
    /**
     * Filter which ShoppingListShare to delete.
     */
    where: ShoppingListShareWhereUniqueInput
  }

  /**
   * ShoppingListShare deleteMany
   */
  export type ShoppingListShareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingListShares to delete
     */
    where?: ShoppingListShareWhereInput
    /**
     * Limit how many ShoppingListShares to delete.
     */
    limit?: number
  }

  /**
   * ShoppingListShare without action
   */
  export type ShoppingListShareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListShare
     */
    select?: ShoppingListShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListShare
     */
    omit?: ShoppingListShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListShareInclude<ExtArgs> | null
  }


  /**
   * Model ListInvitation
   */

  export type AggregateListInvitation = {
    _count: ListInvitationCountAggregateOutputType | null
    _avg: ListInvitationAvgAggregateOutputType | null
    _sum: ListInvitationSumAggregateOutputType | null
    _min: ListInvitationMinAggregateOutputType | null
    _max: ListInvitationMaxAggregateOutputType | null
  }

  export type ListInvitationAvgAggregateOutputType = {
    invitation_id: number | null
    list_id: number | null
    invited_by: number | null
    used_by: number | null
    max_uses: number | null
    uses_count: number | null
  }

  export type ListInvitationSumAggregateOutputType = {
    invitation_id: number | null
    list_id: number | null
    invited_by: number | null
    used_by: number | null
    max_uses: number | null
    uses_count: number | null
  }

  export type ListInvitationMinAggregateOutputType = {
    invitation_id: number | null
    list_id: number | null
    invited_by: number | null
    invite_code: string | null
    role: $Enums.Role | null
    expires_at: Date | null
    is_used: boolean | null
    used_by: number | null
    created_at: Date | null
    used_at: Date | null
    max_uses: number | null
    uses_count: number | null
  }

  export type ListInvitationMaxAggregateOutputType = {
    invitation_id: number | null
    list_id: number | null
    invited_by: number | null
    invite_code: string | null
    role: $Enums.Role | null
    expires_at: Date | null
    is_used: boolean | null
    used_by: number | null
    created_at: Date | null
    used_at: Date | null
    max_uses: number | null
    uses_count: number | null
  }

  export type ListInvitationCountAggregateOutputType = {
    invitation_id: number
    list_id: number
    invited_by: number
    invite_code: number
    role: number
    expires_at: number
    is_used: number
    used_by: number
    created_at: number
    used_at: number
    max_uses: number
    uses_count: number
    _all: number
  }


  export type ListInvitationAvgAggregateInputType = {
    invitation_id?: true
    list_id?: true
    invited_by?: true
    used_by?: true
    max_uses?: true
    uses_count?: true
  }

  export type ListInvitationSumAggregateInputType = {
    invitation_id?: true
    list_id?: true
    invited_by?: true
    used_by?: true
    max_uses?: true
    uses_count?: true
  }

  export type ListInvitationMinAggregateInputType = {
    invitation_id?: true
    list_id?: true
    invited_by?: true
    invite_code?: true
    role?: true
    expires_at?: true
    is_used?: true
    used_by?: true
    created_at?: true
    used_at?: true
    max_uses?: true
    uses_count?: true
  }

  export type ListInvitationMaxAggregateInputType = {
    invitation_id?: true
    list_id?: true
    invited_by?: true
    invite_code?: true
    role?: true
    expires_at?: true
    is_used?: true
    used_by?: true
    created_at?: true
    used_at?: true
    max_uses?: true
    uses_count?: true
  }

  export type ListInvitationCountAggregateInputType = {
    invitation_id?: true
    list_id?: true
    invited_by?: true
    invite_code?: true
    role?: true
    expires_at?: true
    is_used?: true
    used_by?: true
    created_at?: true
    used_at?: true
    max_uses?: true
    uses_count?: true
    _all?: true
  }

  export type ListInvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListInvitation to aggregate.
     */
    where?: ListInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListInvitations to fetch.
     */
    orderBy?: ListInvitationOrderByWithRelationInput | ListInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListInvitations
    **/
    _count?: true | ListInvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListInvitationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListInvitationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListInvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListInvitationMaxAggregateInputType
  }

  export type GetListInvitationAggregateType<T extends ListInvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateListInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListInvitation[P]>
      : GetScalarType<T[P], AggregateListInvitation[P]>
  }




  export type ListInvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListInvitationWhereInput
    orderBy?: ListInvitationOrderByWithAggregationInput | ListInvitationOrderByWithAggregationInput[]
    by: ListInvitationScalarFieldEnum[] | ListInvitationScalarFieldEnum
    having?: ListInvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListInvitationCountAggregateInputType | true
    _avg?: ListInvitationAvgAggregateInputType
    _sum?: ListInvitationSumAggregateInputType
    _min?: ListInvitationMinAggregateInputType
    _max?: ListInvitationMaxAggregateInputType
  }

  export type ListInvitationGroupByOutputType = {
    invitation_id: number
    list_id: number
    invited_by: number
    invite_code: string
    role: $Enums.Role
    expires_at: Date
    is_used: boolean
    used_by: number | null
    created_at: Date
    used_at: Date | null
    max_uses: number
    uses_count: number
    _count: ListInvitationCountAggregateOutputType | null
    _avg: ListInvitationAvgAggregateOutputType | null
    _sum: ListInvitationSumAggregateOutputType | null
    _min: ListInvitationMinAggregateOutputType | null
    _max: ListInvitationMaxAggregateOutputType | null
  }

  type GetListInvitationGroupByPayload<T extends ListInvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListInvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListInvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListInvitationGroupByOutputType[P]>
            : GetScalarType<T[P], ListInvitationGroupByOutputType[P]>
        }
      >
    >


  export type ListInvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    invitation_id?: boolean
    list_id?: boolean
    invited_by?: boolean
    invite_code?: boolean
    role?: boolean
    expires_at?: boolean
    is_used?: boolean
    used_by?: boolean
    created_at?: boolean
    used_at?: boolean
    max_uses?: boolean
    uses_count?: boolean
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    usedByUser?: boolean | ListInvitation$usedByUserArgs<ExtArgs>
  }, ExtArgs["result"]["listInvitation"]>

  export type ListInvitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    invitation_id?: boolean
    list_id?: boolean
    invited_by?: boolean
    invite_code?: boolean
    role?: boolean
    expires_at?: boolean
    is_used?: boolean
    used_by?: boolean
    created_at?: boolean
    used_at?: boolean
    max_uses?: boolean
    uses_count?: boolean
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    usedByUser?: boolean | ListInvitation$usedByUserArgs<ExtArgs>
  }, ExtArgs["result"]["listInvitation"]>

  export type ListInvitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    invitation_id?: boolean
    list_id?: boolean
    invited_by?: boolean
    invite_code?: boolean
    role?: boolean
    expires_at?: boolean
    is_used?: boolean
    used_by?: boolean
    created_at?: boolean
    used_at?: boolean
    max_uses?: boolean
    uses_count?: boolean
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    usedByUser?: boolean | ListInvitation$usedByUserArgs<ExtArgs>
  }, ExtArgs["result"]["listInvitation"]>

  export type ListInvitationSelectScalar = {
    invitation_id?: boolean
    list_id?: boolean
    invited_by?: boolean
    invite_code?: boolean
    role?: boolean
    expires_at?: boolean
    is_used?: boolean
    used_by?: boolean
    created_at?: boolean
    used_at?: boolean
    max_uses?: boolean
    uses_count?: boolean
  }

  export type ListInvitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"invitation_id" | "list_id" | "invited_by" | "invite_code" | "role" | "expires_at" | "is_used" | "used_by" | "created_at" | "used_at" | "max_uses" | "uses_count", ExtArgs["result"]["listInvitation"]>
  export type ListInvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    usedByUser?: boolean | ListInvitation$usedByUserArgs<ExtArgs>
  }
  export type ListInvitationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    usedByUser?: boolean | ListInvitation$usedByUserArgs<ExtArgs>
  }
  export type ListInvitationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    usedByUser?: boolean | ListInvitation$usedByUserArgs<ExtArgs>
  }

  export type $ListInvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListInvitation"
    objects: {
      list: Prisma.$ShoppingListPayload<ExtArgs>
      inviter: Prisma.$UserPayload<ExtArgs>
      usedByUser: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      invitation_id: number
      list_id: number
      invited_by: number
      invite_code: string
      role: $Enums.Role
      expires_at: Date
      is_used: boolean
      used_by: number | null
      created_at: Date
      used_at: Date | null
      max_uses: number
      uses_count: number
    }, ExtArgs["result"]["listInvitation"]>
    composites: {}
  }

  type ListInvitationGetPayload<S extends boolean | null | undefined | ListInvitationDefaultArgs> = $Result.GetResult<Prisma.$ListInvitationPayload, S>

  type ListInvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListInvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListInvitationCountAggregateInputType | true
    }

  export interface ListInvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListInvitation'], meta: { name: 'ListInvitation' } }
    /**
     * Find zero or one ListInvitation that matches the filter.
     * @param {ListInvitationFindUniqueArgs} args - Arguments to find a ListInvitation
     * @example
     * // Get one ListInvitation
     * const listInvitation = await prisma.listInvitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListInvitationFindUniqueArgs>(args: SelectSubset<T, ListInvitationFindUniqueArgs<ExtArgs>>): Prisma__ListInvitationClient<$Result.GetResult<Prisma.$ListInvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListInvitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListInvitationFindUniqueOrThrowArgs} args - Arguments to find a ListInvitation
     * @example
     * // Get one ListInvitation
     * const listInvitation = await prisma.listInvitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListInvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, ListInvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListInvitationClient<$Result.GetResult<Prisma.$ListInvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListInvitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListInvitationFindFirstArgs} args - Arguments to find a ListInvitation
     * @example
     * // Get one ListInvitation
     * const listInvitation = await prisma.listInvitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListInvitationFindFirstArgs>(args?: SelectSubset<T, ListInvitationFindFirstArgs<ExtArgs>>): Prisma__ListInvitationClient<$Result.GetResult<Prisma.$ListInvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListInvitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListInvitationFindFirstOrThrowArgs} args - Arguments to find a ListInvitation
     * @example
     * // Get one ListInvitation
     * const listInvitation = await prisma.listInvitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListInvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, ListInvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListInvitationClient<$Result.GetResult<Prisma.$ListInvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListInvitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListInvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListInvitations
     * const listInvitations = await prisma.listInvitation.findMany()
     * 
     * // Get first 10 ListInvitations
     * const listInvitations = await prisma.listInvitation.findMany({ take: 10 })
     * 
     * // Only select the `invitation_id`
     * const listInvitationWithInvitation_idOnly = await prisma.listInvitation.findMany({ select: { invitation_id: true } })
     * 
     */
    findMany<T extends ListInvitationFindManyArgs>(args?: SelectSubset<T, ListInvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListInvitation.
     * @param {ListInvitationCreateArgs} args - Arguments to create a ListInvitation.
     * @example
     * // Create one ListInvitation
     * const ListInvitation = await prisma.listInvitation.create({
     *   data: {
     *     // ... data to create a ListInvitation
     *   }
     * })
     * 
     */
    create<T extends ListInvitationCreateArgs>(args: SelectSubset<T, ListInvitationCreateArgs<ExtArgs>>): Prisma__ListInvitationClient<$Result.GetResult<Prisma.$ListInvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListInvitations.
     * @param {ListInvitationCreateManyArgs} args - Arguments to create many ListInvitations.
     * @example
     * // Create many ListInvitations
     * const listInvitation = await prisma.listInvitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListInvitationCreateManyArgs>(args?: SelectSubset<T, ListInvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListInvitations and returns the data saved in the database.
     * @param {ListInvitationCreateManyAndReturnArgs} args - Arguments to create many ListInvitations.
     * @example
     * // Create many ListInvitations
     * const listInvitation = await prisma.listInvitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListInvitations and only return the `invitation_id`
     * const listInvitationWithInvitation_idOnly = await prisma.listInvitation.createManyAndReturn({
     *   select: { invitation_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListInvitationCreateManyAndReturnArgs>(args?: SelectSubset<T, ListInvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListInvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ListInvitation.
     * @param {ListInvitationDeleteArgs} args - Arguments to delete one ListInvitation.
     * @example
     * // Delete one ListInvitation
     * const ListInvitation = await prisma.listInvitation.delete({
     *   where: {
     *     // ... filter to delete one ListInvitation
     *   }
     * })
     * 
     */
    delete<T extends ListInvitationDeleteArgs>(args: SelectSubset<T, ListInvitationDeleteArgs<ExtArgs>>): Prisma__ListInvitationClient<$Result.GetResult<Prisma.$ListInvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListInvitation.
     * @param {ListInvitationUpdateArgs} args - Arguments to update one ListInvitation.
     * @example
     * // Update one ListInvitation
     * const listInvitation = await prisma.listInvitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListInvitationUpdateArgs>(args: SelectSubset<T, ListInvitationUpdateArgs<ExtArgs>>): Prisma__ListInvitationClient<$Result.GetResult<Prisma.$ListInvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListInvitations.
     * @param {ListInvitationDeleteManyArgs} args - Arguments to filter ListInvitations to delete.
     * @example
     * // Delete a few ListInvitations
     * const { count } = await prisma.listInvitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListInvitationDeleteManyArgs>(args?: SelectSubset<T, ListInvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListInvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListInvitations
     * const listInvitation = await prisma.listInvitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListInvitationUpdateManyArgs>(args: SelectSubset<T, ListInvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListInvitations and returns the data updated in the database.
     * @param {ListInvitationUpdateManyAndReturnArgs} args - Arguments to update many ListInvitations.
     * @example
     * // Update many ListInvitations
     * const listInvitation = await prisma.listInvitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ListInvitations and only return the `invitation_id`
     * const listInvitationWithInvitation_idOnly = await prisma.listInvitation.updateManyAndReturn({
     *   select: { invitation_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListInvitationUpdateManyAndReturnArgs>(args: SelectSubset<T, ListInvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListInvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ListInvitation.
     * @param {ListInvitationUpsertArgs} args - Arguments to update or create a ListInvitation.
     * @example
     * // Update or create a ListInvitation
     * const listInvitation = await prisma.listInvitation.upsert({
     *   create: {
     *     // ... data to create a ListInvitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListInvitation we want to update
     *   }
     * })
     */
    upsert<T extends ListInvitationUpsertArgs>(args: SelectSubset<T, ListInvitationUpsertArgs<ExtArgs>>): Prisma__ListInvitationClient<$Result.GetResult<Prisma.$ListInvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListInvitationCountArgs} args - Arguments to filter ListInvitations to count.
     * @example
     * // Count the number of ListInvitations
     * const count = await prisma.listInvitation.count({
     *   where: {
     *     // ... the filter for the ListInvitations we want to count
     *   }
     * })
    **/
    count<T extends ListInvitationCountArgs>(
      args?: Subset<T, ListInvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListInvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListInvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListInvitationAggregateArgs>(args: Subset<T, ListInvitationAggregateArgs>): Prisma.PrismaPromise<GetListInvitationAggregateType<T>>

    /**
     * Group by ListInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListInvitationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListInvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListInvitationGroupByArgs['orderBy'] }
        : { orderBy?: ListInvitationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListInvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListInvitation model
   */
  readonly fields: ListInvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListInvitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListInvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    list<T extends ShoppingListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingListDefaultArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inviter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usedByUser<T extends ListInvitation$usedByUserArgs<ExtArgs> = {}>(args?: Subset<T, ListInvitation$usedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ListInvitation model
   */
  interface ListInvitationFieldRefs {
    readonly invitation_id: FieldRef<"ListInvitation", 'Int'>
    readonly list_id: FieldRef<"ListInvitation", 'Int'>
    readonly invited_by: FieldRef<"ListInvitation", 'Int'>
    readonly invite_code: FieldRef<"ListInvitation", 'String'>
    readonly role: FieldRef<"ListInvitation", 'Role'>
    readonly expires_at: FieldRef<"ListInvitation", 'DateTime'>
    readonly is_used: FieldRef<"ListInvitation", 'Boolean'>
    readonly used_by: FieldRef<"ListInvitation", 'Int'>
    readonly created_at: FieldRef<"ListInvitation", 'DateTime'>
    readonly used_at: FieldRef<"ListInvitation", 'DateTime'>
    readonly max_uses: FieldRef<"ListInvitation", 'Int'>
    readonly uses_count: FieldRef<"ListInvitation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ListInvitation findUnique
   */
  export type ListInvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListInvitation
     */
    select?: ListInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListInvitation
     */
    omit?: ListInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInvitationInclude<ExtArgs> | null
    /**
     * Filter, which ListInvitation to fetch.
     */
    where: ListInvitationWhereUniqueInput
  }

  /**
   * ListInvitation findUniqueOrThrow
   */
  export type ListInvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListInvitation
     */
    select?: ListInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListInvitation
     */
    omit?: ListInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInvitationInclude<ExtArgs> | null
    /**
     * Filter, which ListInvitation to fetch.
     */
    where: ListInvitationWhereUniqueInput
  }

  /**
   * ListInvitation findFirst
   */
  export type ListInvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListInvitation
     */
    select?: ListInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListInvitation
     */
    omit?: ListInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInvitationInclude<ExtArgs> | null
    /**
     * Filter, which ListInvitation to fetch.
     */
    where?: ListInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListInvitations to fetch.
     */
    orderBy?: ListInvitationOrderByWithRelationInput | ListInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListInvitations.
     */
    cursor?: ListInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListInvitations.
     */
    distinct?: ListInvitationScalarFieldEnum | ListInvitationScalarFieldEnum[]
  }

  /**
   * ListInvitation findFirstOrThrow
   */
  export type ListInvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListInvitation
     */
    select?: ListInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListInvitation
     */
    omit?: ListInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInvitationInclude<ExtArgs> | null
    /**
     * Filter, which ListInvitation to fetch.
     */
    where?: ListInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListInvitations to fetch.
     */
    orderBy?: ListInvitationOrderByWithRelationInput | ListInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListInvitations.
     */
    cursor?: ListInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListInvitations.
     */
    distinct?: ListInvitationScalarFieldEnum | ListInvitationScalarFieldEnum[]
  }

  /**
   * ListInvitation findMany
   */
  export type ListInvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListInvitation
     */
    select?: ListInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListInvitation
     */
    omit?: ListInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInvitationInclude<ExtArgs> | null
    /**
     * Filter, which ListInvitations to fetch.
     */
    where?: ListInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListInvitations to fetch.
     */
    orderBy?: ListInvitationOrderByWithRelationInput | ListInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListInvitations.
     */
    cursor?: ListInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListInvitations.
     */
    skip?: number
    distinct?: ListInvitationScalarFieldEnum | ListInvitationScalarFieldEnum[]
  }

  /**
   * ListInvitation create
   */
  export type ListInvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListInvitation
     */
    select?: ListInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListInvitation
     */
    omit?: ListInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInvitationInclude<ExtArgs> | null
    /**
     * The data needed to create a ListInvitation.
     */
    data: XOR<ListInvitationCreateInput, ListInvitationUncheckedCreateInput>
  }

  /**
   * ListInvitation createMany
   */
  export type ListInvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListInvitations.
     */
    data: ListInvitationCreateManyInput | ListInvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListInvitation createManyAndReturn
   */
  export type ListInvitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListInvitation
     */
    select?: ListInvitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListInvitation
     */
    omit?: ListInvitationOmit<ExtArgs> | null
    /**
     * The data used to create many ListInvitations.
     */
    data: ListInvitationCreateManyInput | ListInvitationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInvitationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListInvitation update
   */
  export type ListInvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListInvitation
     */
    select?: ListInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListInvitation
     */
    omit?: ListInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInvitationInclude<ExtArgs> | null
    /**
     * The data needed to update a ListInvitation.
     */
    data: XOR<ListInvitationUpdateInput, ListInvitationUncheckedUpdateInput>
    /**
     * Choose, which ListInvitation to update.
     */
    where: ListInvitationWhereUniqueInput
  }

  /**
   * ListInvitation updateMany
   */
  export type ListInvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListInvitations.
     */
    data: XOR<ListInvitationUpdateManyMutationInput, ListInvitationUncheckedUpdateManyInput>
    /**
     * Filter which ListInvitations to update
     */
    where?: ListInvitationWhereInput
    /**
     * Limit how many ListInvitations to update.
     */
    limit?: number
  }

  /**
   * ListInvitation updateManyAndReturn
   */
  export type ListInvitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListInvitation
     */
    select?: ListInvitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListInvitation
     */
    omit?: ListInvitationOmit<ExtArgs> | null
    /**
     * The data used to update ListInvitations.
     */
    data: XOR<ListInvitationUpdateManyMutationInput, ListInvitationUncheckedUpdateManyInput>
    /**
     * Filter which ListInvitations to update
     */
    where?: ListInvitationWhereInput
    /**
     * Limit how many ListInvitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInvitationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListInvitation upsert
   */
  export type ListInvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListInvitation
     */
    select?: ListInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListInvitation
     */
    omit?: ListInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInvitationInclude<ExtArgs> | null
    /**
     * The filter to search for the ListInvitation to update in case it exists.
     */
    where: ListInvitationWhereUniqueInput
    /**
     * In case the ListInvitation found by the `where` argument doesn't exist, create a new ListInvitation with this data.
     */
    create: XOR<ListInvitationCreateInput, ListInvitationUncheckedCreateInput>
    /**
     * In case the ListInvitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListInvitationUpdateInput, ListInvitationUncheckedUpdateInput>
  }

  /**
   * ListInvitation delete
   */
  export type ListInvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListInvitation
     */
    select?: ListInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListInvitation
     */
    omit?: ListInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInvitationInclude<ExtArgs> | null
    /**
     * Filter which ListInvitation to delete.
     */
    where: ListInvitationWhereUniqueInput
  }

  /**
   * ListInvitation deleteMany
   */
  export type ListInvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListInvitations to delete
     */
    where?: ListInvitationWhereInput
    /**
     * Limit how many ListInvitations to delete.
     */
    limit?: number
  }

  /**
   * ListInvitation.usedByUser
   */
  export type ListInvitation$usedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ListInvitation without action
   */
  export type ListInvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListInvitation
     */
    select?: ListInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListInvitation
     */
    omit?: ListInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInvitationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    name: 'name',
    email: 'email',
    password_hash: 'password_hash',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ShoppingListScalarFieldEnum: {
    list_id: 'list_id',
    owner_id: 'owner_id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_shared: 'is_shared'
  };

  export type ShoppingListScalarFieldEnum = (typeof ShoppingListScalarFieldEnum)[keyof typeof ShoppingListScalarFieldEnum]


  export const UserListAccessScalarFieldEnum: {
    access_id: 'access_id',
    user_id: 'user_id',
    list_id: 'list_id',
    role: 'role',
    invited_by: 'invited_by',
    joined_at: 'joined_at'
  };

  export type UserListAccessScalarFieldEnum = (typeof UserListAccessScalarFieldEnum)[keyof typeof UserListAccessScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    category_id: 'category_id',
    name: 'name',
    color_code: 'color_code',
    created_at: 'created_at'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ListItemScalarFieldEnum: {
    item_id: 'item_id',
    list_id: 'list_id',
    category_id: 'category_id',
    name: 'name',
    quantity: 'quantity',
    price: 'price',
    source: 'source',
    is_checked: 'is_checked',
    created_at: 'created_at',
    checkedById: 'checkedById',
    checkedAt: 'checkedAt'
  };

  export type ListItemScalarFieldEnum = (typeof ListItemScalarFieldEnum)[keyof typeof ListItemScalarFieldEnum]


  export const ReceiptScalarFieldEnum: {
    receipt_id: 'receipt_id',
    list_id: 'list_id',
    user_id: 'user_id',
    store_name: 'store_name',
    total_amount: 'total_amount',
    subtotal: 'subtotal',
    receipt_date: 'receipt_date',
    payment_method: 'payment_method',
    tax_rate: 'tax_rate',
    tax_amount: 'tax_amount',
    currency: 'currency',
    image_url: 'image_url',
    ocr_text: 'ocr_text',
    processed: 'processed',
    uploaded_at: 'uploaded_at'
  };

  export type ReceiptScalarFieldEnum = (typeof ReceiptScalarFieldEnum)[keyof typeof ReceiptScalarFieldEnum]


  export const ReceiptItemScalarFieldEnum: {
    id: 'id',
    receiptId: 'receiptId',
    productName: 'productName',
    price: 'price',
    quantity: 'quantity',
    unit: 'unit',
    pricePerUnit: 'pricePerUnit',
    taxRate: 'taxRate'
  };

  export type ReceiptItemScalarFieldEnum = (typeof ReceiptItemScalarFieldEnum)[keyof typeof ReceiptItemScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    expense_id: 'expense_id',
    user_id: 'user_id',
    category_id: 'category_id',
    total_amount: 'total_amount',
    month: 'month',
    year: 'year',
    created_at: 'created_at'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const ShoppingListShareScalarFieldEnum: {
    id: 'id',
    list_id: 'list_id',
    user_id: 'user_id',
    role: 'role'
  };

  export type ShoppingListShareScalarFieldEnum = (typeof ShoppingListShareScalarFieldEnum)[keyof typeof ShoppingListShareScalarFieldEnum]


  export const ListInvitationScalarFieldEnum: {
    invitation_id: 'invitation_id',
    list_id: 'list_id',
    invited_by: 'invited_by',
    invite_code: 'invite_code',
    role: 'role',
    expires_at: 'expires_at',
    is_used: 'is_used',
    used_by: 'used_by',
    created_at: 'created_at',
    used_at: 'used_at',
    max_uses: 'max_uses',
    uses_count: 'uses_count'
  };

  export type ListInvitationScalarFieldEnum = (typeof ListInvitationScalarFieldEnum)[keyof typeof ListInvitationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Source'
   */
  export type EnumSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Source'>
    


  /**
   * Reference to a field of type 'Source[]'
   */
  export type ListEnumSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Source[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    lists?: ShoppingListListRelationFilter
    accesses?: UserListAccessListRelationFilter
    invitedAccess?: UserListAccessListRelationFilter
    receipts?: ReceiptListRelationFilter
    expenses?: ExpenseListRelationFilter
    checkedItems?: ListItemListRelationFilter
    sharedLists?: ShoppingListShareListRelationFilter
    createdInvitations?: ListInvitationListRelationFilter
    usedInvitations?: ListInvitationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    lists?: ShoppingListOrderByRelationAggregateInput
    accesses?: UserListAccessOrderByRelationAggregateInput
    invitedAccess?: UserListAccessOrderByRelationAggregateInput
    receipts?: ReceiptOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
    checkedItems?: ListItemOrderByRelationAggregateInput
    sharedLists?: ShoppingListShareOrderByRelationAggregateInput
    createdInvitations?: ListInvitationOrderByRelationAggregateInput
    usedInvitations?: ListInvitationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    lists?: ShoppingListListRelationFilter
    accesses?: UserListAccessListRelationFilter
    invitedAccess?: UserListAccessListRelationFilter
    receipts?: ReceiptListRelationFilter
    expenses?: ExpenseListRelationFilter
    checkedItems?: ListItemListRelationFilter
    sharedLists?: ShoppingListShareListRelationFilter
    createdInvitations?: ListInvitationListRelationFilter
    usedInvitations?: ListInvitationListRelationFilter
  }, "user_id" | "email">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password_hash?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ShoppingListWhereInput = {
    AND?: ShoppingListWhereInput | ShoppingListWhereInput[]
    OR?: ShoppingListWhereInput[]
    NOT?: ShoppingListWhereInput | ShoppingListWhereInput[]
    list_id?: IntFilter<"ShoppingList"> | number
    owner_id?: IntFilter<"ShoppingList"> | number
    name?: StringNullableFilter<"ShoppingList"> | string | null
    created_at?: DateTimeFilter<"ShoppingList"> | Date | string
    updated_at?: DateTimeFilter<"ShoppingList"> | Date | string
    is_shared?: BoolFilter<"ShoppingList"> | boolean
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: ListItemListRelationFilter
    receipts?: ReceiptListRelationFilter
    accesses?: UserListAccessListRelationFilter
    sharedWith?: ShoppingListShareListRelationFilter
    invitations?: ListInvitationListRelationFilter
  }

  export type ShoppingListOrderByWithRelationInput = {
    list_id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_shared?: SortOrder
    owner?: UserOrderByWithRelationInput
    items?: ListItemOrderByRelationAggregateInput
    receipts?: ReceiptOrderByRelationAggregateInput
    accesses?: UserListAccessOrderByRelationAggregateInput
    sharedWith?: ShoppingListShareOrderByRelationAggregateInput
    invitations?: ListInvitationOrderByRelationAggregateInput
  }

  export type ShoppingListWhereUniqueInput = Prisma.AtLeast<{
    list_id?: number
    AND?: ShoppingListWhereInput | ShoppingListWhereInput[]
    OR?: ShoppingListWhereInput[]
    NOT?: ShoppingListWhereInput | ShoppingListWhereInput[]
    owner_id?: IntFilter<"ShoppingList"> | number
    name?: StringNullableFilter<"ShoppingList"> | string | null
    created_at?: DateTimeFilter<"ShoppingList"> | Date | string
    updated_at?: DateTimeFilter<"ShoppingList"> | Date | string
    is_shared?: BoolFilter<"ShoppingList"> | boolean
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: ListItemListRelationFilter
    receipts?: ReceiptListRelationFilter
    accesses?: UserListAccessListRelationFilter
    sharedWith?: ShoppingListShareListRelationFilter
    invitations?: ListInvitationListRelationFilter
  }, "list_id">

  export type ShoppingListOrderByWithAggregationInput = {
    list_id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_shared?: SortOrder
    _count?: ShoppingListCountOrderByAggregateInput
    _avg?: ShoppingListAvgOrderByAggregateInput
    _max?: ShoppingListMaxOrderByAggregateInput
    _min?: ShoppingListMinOrderByAggregateInput
    _sum?: ShoppingListSumOrderByAggregateInput
  }

  export type ShoppingListScalarWhereWithAggregatesInput = {
    AND?: ShoppingListScalarWhereWithAggregatesInput | ShoppingListScalarWhereWithAggregatesInput[]
    OR?: ShoppingListScalarWhereWithAggregatesInput[]
    NOT?: ShoppingListScalarWhereWithAggregatesInput | ShoppingListScalarWhereWithAggregatesInput[]
    list_id?: IntWithAggregatesFilter<"ShoppingList"> | number
    owner_id?: IntWithAggregatesFilter<"ShoppingList"> | number
    name?: StringNullableWithAggregatesFilter<"ShoppingList"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"ShoppingList"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ShoppingList"> | Date | string
    is_shared?: BoolWithAggregatesFilter<"ShoppingList"> | boolean
  }

  export type UserListAccessWhereInput = {
    AND?: UserListAccessWhereInput | UserListAccessWhereInput[]
    OR?: UserListAccessWhereInput[]
    NOT?: UserListAccessWhereInput | UserListAccessWhereInput[]
    access_id?: IntFilter<"UserListAccess"> | number
    user_id?: IntFilter<"UserListAccess"> | number
    list_id?: IntFilter<"UserListAccess"> | number
    role?: EnumRoleFilter<"UserListAccess"> | $Enums.Role
    invited_by?: IntNullableFilter<"UserListAccess"> | number | null
    joined_at?: DateTimeFilter<"UserListAccess"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    list?: XOR<ShoppingListScalarRelationFilter, ShoppingListWhereInput>
    invitedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type UserListAccessOrderByWithRelationInput = {
    access_id?: SortOrder
    user_id?: SortOrder
    list_id?: SortOrder
    role?: SortOrder
    invited_by?: SortOrderInput | SortOrder
    joined_at?: SortOrder
    user?: UserOrderByWithRelationInput
    list?: ShoppingListOrderByWithRelationInput
    invitedBy?: UserOrderByWithRelationInput
  }

  export type UserListAccessWhereUniqueInput = Prisma.AtLeast<{
    access_id?: number
    user_id_list_id?: UserListAccessUser_idList_idCompoundUniqueInput
    AND?: UserListAccessWhereInput | UserListAccessWhereInput[]
    OR?: UserListAccessWhereInput[]
    NOT?: UserListAccessWhereInput | UserListAccessWhereInput[]
    user_id?: IntFilter<"UserListAccess"> | number
    list_id?: IntFilter<"UserListAccess"> | number
    role?: EnumRoleFilter<"UserListAccess"> | $Enums.Role
    invited_by?: IntNullableFilter<"UserListAccess"> | number | null
    joined_at?: DateTimeFilter<"UserListAccess"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    list?: XOR<ShoppingListScalarRelationFilter, ShoppingListWhereInput>
    invitedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "access_id" | "user_id_list_id">

  export type UserListAccessOrderByWithAggregationInput = {
    access_id?: SortOrder
    user_id?: SortOrder
    list_id?: SortOrder
    role?: SortOrder
    invited_by?: SortOrderInput | SortOrder
    joined_at?: SortOrder
    _count?: UserListAccessCountOrderByAggregateInput
    _avg?: UserListAccessAvgOrderByAggregateInput
    _max?: UserListAccessMaxOrderByAggregateInput
    _min?: UserListAccessMinOrderByAggregateInput
    _sum?: UserListAccessSumOrderByAggregateInput
  }

  export type UserListAccessScalarWhereWithAggregatesInput = {
    AND?: UserListAccessScalarWhereWithAggregatesInput | UserListAccessScalarWhereWithAggregatesInput[]
    OR?: UserListAccessScalarWhereWithAggregatesInput[]
    NOT?: UserListAccessScalarWhereWithAggregatesInput | UserListAccessScalarWhereWithAggregatesInput[]
    access_id?: IntWithAggregatesFilter<"UserListAccess"> | number
    user_id?: IntWithAggregatesFilter<"UserListAccess"> | number
    list_id?: IntWithAggregatesFilter<"UserListAccess"> | number
    role?: EnumRoleWithAggregatesFilter<"UserListAccess"> | $Enums.Role
    invited_by?: IntNullableWithAggregatesFilter<"UserListAccess"> | number | null
    joined_at?: DateTimeWithAggregatesFilter<"UserListAccess"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    category_id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    color_code?: StringNullableFilter<"Category"> | string | null
    created_at?: DateTimeFilter<"Category"> | Date | string
    items?: ListItemListRelationFilter
    expenses?: ExpenseListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    category_id?: SortOrder
    name?: SortOrder
    color_code?: SortOrderInput | SortOrder
    created_at?: SortOrder
    items?: ListItemOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    category_id?: number
    name?: string
    color_code?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    created_at?: DateTimeFilter<"Category"> | Date | string
    items?: ListItemListRelationFilter
    expenses?: ExpenseListRelationFilter
  }, "category_id" | "name" | "color_code">

  export type CategoryOrderByWithAggregationInput = {
    category_id?: SortOrder
    name?: SortOrder
    color_code?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    category_id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    color_code?: StringNullableWithAggregatesFilter<"Category"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type ListItemWhereInput = {
    AND?: ListItemWhereInput | ListItemWhereInput[]
    OR?: ListItemWhereInput[]
    NOT?: ListItemWhereInput | ListItemWhereInput[]
    item_id?: IntFilter<"ListItem"> | number
    list_id?: IntFilter<"ListItem"> | number
    category_id?: IntNullableFilter<"ListItem"> | number | null
    name?: StringFilter<"ListItem"> | string
    quantity?: IntFilter<"ListItem"> | number
    price?: DecimalNullableFilter<"ListItem"> | Decimal | DecimalJsLike | number | string | null
    source?: EnumSourceNullableFilter<"ListItem"> | $Enums.Source | null
    is_checked?: BoolFilter<"ListItem"> | boolean
    created_at?: DateTimeFilter<"ListItem"> | Date | string
    checkedById?: IntNullableFilter<"ListItem"> | number | null
    checkedAt?: DateTimeNullableFilter<"ListItem"> | Date | string | null
    list?: XOR<ShoppingListScalarRelationFilter, ShoppingListWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    checkedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ListItemOrderByWithRelationInput = {
    item_id?: SortOrder
    list_id?: SortOrder
    category_id?: SortOrderInput | SortOrder
    name?: SortOrder
    quantity?: SortOrder
    price?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    is_checked?: SortOrder
    created_at?: SortOrder
    checkedById?: SortOrderInput | SortOrder
    checkedAt?: SortOrderInput | SortOrder
    list?: ShoppingListOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    checkedBy?: UserOrderByWithRelationInput
  }

  export type ListItemWhereUniqueInput = Prisma.AtLeast<{
    item_id?: number
    AND?: ListItemWhereInput | ListItemWhereInput[]
    OR?: ListItemWhereInput[]
    NOT?: ListItemWhereInput | ListItemWhereInput[]
    list_id?: IntFilter<"ListItem"> | number
    category_id?: IntNullableFilter<"ListItem"> | number | null
    name?: StringFilter<"ListItem"> | string
    quantity?: IntFilter<"ListItem"> | number
    price?: DecimalNullableFilter<"ListItem"> | Decimal | DecimalJsLike | number | string | null
    source?: EnumSourceNullableFilter<"ListItem"> | $Enums.Source | null
    is_checked?: BoolFilter<"ListItem"> | boolean
    created_at?: DateTimeFilter<"ListItem"> | Date | string
    checkedById?: IntNullableFilter<"ListItem"> | number | null
    checkedAt?: DateTimeNullableFilter<"ListItem"> | Date | string | null
    list?: XOR<ShoppingListScalarRelationFilter, ShoppingListWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    checkedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "item_id">

  export type ListItemOrderByWithAggregationInput = {
    item_id?: SortOrder
    list_id?: SortOrder
    category_id?: SortOrderInput | SortOrder
    name?: SortOrder
    quantity?: SortOrder
    price?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    is_checked?: SortOrder
    created_at?: SortOrder
    checkedById?: SortOrderInput | SortOrder
    checkedAt?: SortOrderInput | SortOrder
    _count?: ListItemCountOrderByAggregateInput
    _avg?: ListItemAvgOrderByAggregateInput
    _max?: ListItemMaxOrderByAggregateInput
    _min?: ListItemMinOrderByAggregateInput
    _sum?: ListItemSumOrderByAggregateInput
  }

  export type ListItemScalarWhereWithAggregatesInput = {
    AND?: ListItemScalarWhereWithAggregatesInput | ListItemScalarWhereWithAggregatesInput[]
    OR?: ListItemScalarWhereWithAggregatesInput[]
    NOT?: ListItemScalarWhereWithAggregatesInput | ListItemScalarWhereWithAggregatesInput[]
    item_id?: IntWithAggregatesFilter<"ListItem"> | number
    list_id?: IntWithAggregatesFilter<"ListItem"> | number
    category_id?: IntNullableWithAggregatesFilter<"ListItem"> | number | null
    name?: StringWithAggregatesFilter<"ListItem"> | string
    quantity?: IntWithAggregatesFilter<"ListItem"> | number
    price?: DecimalNullableWithAggregatesFilter<"ListItem"> | Decimal | DecimalJsLike | number | string | null
    source?: EnumSourceNullableWithAggregatesFilter<"ListItem"> | $Enums.Source | null
    is_checked?: BoolWithAggregatesFilter<"ListItem"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"ListItem"> | Date | string
    checkedById?: IntNullableWithAggregatesFilter<"ListItem"> | number | null
    checkedAt?: DateTimeNullableWithAggregatesFilter<"ListItem"> | Date | string | null
  }

  export type ReceiptWhereInput = {
    AND?: ReceiptWhereInput | ReceiptWhereInput[]
    OR?: ReceiptWhereInput[]
    NOT?: ReceiptWhereInput | ReceiptWhereInput[]
    receipt_id?: IntFilter<"Receipt"> | number
    list_id?: IntNullableFilter<"Receipt"> | number | null
    user_id?: IntFilter<"Receipt"> | number
    store_name?: StringNullableFilter<"Receipt"> | string | null
    total_amount?: DecimalNullableFilter<"Receipt"> | Decimal | DecimalJsLike | number | string | null
    subtotal?: DecimalNullableFilter<"Receipt"> | Decimal | DecimalJsLike | number | string | null
    receipt_date?: DateTimeNullableFilter<"Receipt"> | Date | string | null
    payment_method?: EnumPaymentMethodNullableFilter<"Receipt"> | $Enums.PaymentMethod | null
    tax_rate?: DecimalNullableFilter<"Receipt"> | Decimal | DecimalJsLike | number | string | null
    tax_amount?: DecimalNullableFilter<"Receipt"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringFilter<"Receipt"> | string
    image_url?: StringNullableFilter<"Receipt"> | string | null
    ocr_text?: StringNullableFilter<"Receipt"> | string | null
    processed?: BoolFilter<"Receipt"> | boolean
    uploaded_at?: DateTimeFilter<"Receipt"> | Date | string
    list?: XOR<ShoppingListNullableScalarRelationFilter, ShoppingListWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: ReceiptItemListRelationFilter
  }

  export type ReceiptOrderByWithRelationInput = {
    receipt_id?: SortOrder
    list_id?: SortOrderInput | SortOrder
    user_id?: SortOrder
    store_name?: SortOrderInput | SortOrder
    total_amount?: SortOrderInput | SortOrder
    subtotal?: SortOrderInput | SortOrder
    receipt_date?: SortOrderInput | SortOrder
    payment_method?: SortOrderInput | SortOrder
    tax_rate?: SortOrderInput | SortOrder
    tax_amount?: SortOrderInput | SortOrder
    currency?: SortOrder
    image_url?: SortOrderInput | SortOrder
    ocr_text?: SortOrderInput | SortOrder
    processed?: SortOrder
    uploaded_at?: SortOrder
    list?: ShoppingListOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    items?: ReceiptItemOrderByRelationAggregateInput
  }

  export type ReceiptWhereUniqueInput = Prisma.AtLeast<{
    receipt_id?: number
    AND?: ReceiptWhereInput | ReceiptWhereInput[]
    OR?: ReceiptWhereInput[]
    NOT?: ReceiptWhereInput | ReceiptWhereInput[]
    list_id?: IntNullableFilter<"Receipt"> | number | null
    user_id?: IntFilter<"Receipt"> | number
    store_name?: StringNullableFilter<"Receipt"> | string | null
    total_amount?: DecimalNullableFilter<"Receipt"> | Decimal | DecimalJsLike | number | string | null
    subtotal?: DecimalNullableFilter<"Receipt"> | Decimal | DecimalJsLike | number | string | null
    receipt_date?: DateTimeNullableFilter<"Receipt"> | Date | string | null
    payment_method?: EnumPaymentMethodNullableFilter<"Receipt"> | $Enums.PaymentMethod | null
    tax_rate?: DecimalNullableFilter<"Receipt"> | Decimal | DecimalJsLike | number | string | null
    tax_amount?: DecimalNullableFilter<"Receipt"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringFilter<"Receipt"> | string
    image_url?: StringNullableFilter<"Receipt"> | string | null
    ocr_text?: StringNullableFilter<"Receipt"> | string | null
    processed?: BoolFilter<"Receipt"> | boolean
    uploaded_at?: DateTimeFilter<"Receipt"> | Date | string
    list?: XOR<ShoppingListNullableScalarRelationFilter, ShoppingListWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: ReceiptItemListRelationFilter
  }, "receipt_id">

  export type ReceiptOrderByWithAggregationInput = {
    receipt_id?: SortOrder
    list_id?: SortOrderInput | SortOrder
    user_id?: SortOrder
    store_name?: SortOrderInput | SortOrder
    total_amount?: SortOrderInput | SortOrder
    subtotal?: SortOrderInput | SortOrder
    receipt_date?: SortOrderInput | SortOrder
    payment_method?: SortOrderInput | SortOrder
    tax_rate?: SortOrderInput | SortOrder
    tax_amount?: SortOrderInput | SortOrder
    currency?: SortOrder
    image_url?: SortOrderInput | SortOrder
    ocr_text?: SortOrderInput | SortOrder
    processed?: SortOrder
    uploaded_at?: SortOrder
    _count?: ReceiptCountOrderByAggregateInput
    _avg?: ReceiptAvgOrderByAggregateInput
    _max?: ReceiptMaxOrderByAggregateInput
    _min?: ReceiptMinOrderByAggregateInput
    _sum?: ReceiptSumOrderByAggregateInput
  }

  export type ReceiptScalarWhereWithAggregatesInput = {
    AND?: ReceiptScalarWhereWithAggregatesInput | ReceiptScalarWhereWithAggregatesInput[]
    OR?: ReceiptScalarWhereWithAggregatesInput[]
    NOT?: ReceiptScalarWhereWithAggregatesInput | ReceiptScalarWhereWithAggregatesInput[]
    receipt_id?: IntWithAggregatesFilter<"Receipt"> | number
    list_id?: IntNullableWithAggregatesFilter<"Receipt"> | number | null
    user_id?: IntWithAggregatesFilter<"Receipt"> | number
    store_name?: StringNullableWithAggregatesFilter<"Receipt"> | string | null
    total_amount?: DecimalNullableWithAggregatesFilter<"Receipt"> | Decimal | DecimalJsLike | number | string | null
    subtotal?: DecimalNullableWithAggregatesFilter<"Receipt"> | Decimal | DecimalJsLike | number | string | null
    receipt_date?: DateTimeNullableWithAggregatesFilter<"Receipt"> | Date | string | null
    payment_method?: EnumPaymentMethodNullableWithAggregatesFilter<"Receipt"> | $Enums.PaymentMethod | null
    tax_rate?: DecimalNullableWithAggregatesFilter<"Receipt"> | Decimal | DecimalJsLike | number | string | null
    tax_amount?: DecimalNullableWithAggregatesFilter<"Receipt"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringWithAggregatesFilter<"Receipt"> | string
    image_url?: StringNullableWithAggregatesFilter<"Receipt"> | string | null
    ocr_text?: StringNullableWithAggregatesFilter<"Receipt"> | string | null
    processed?: BoolWithAggregatesFilter<"Receipt"> | boolean
    uploaded_at?: DateTimeWithAggregatesFilter<"Receipt"> | Date | string
  }

  export type ReceiptItemWhereInput = {
    AND?: ReceiptItemWhereInput | ReceiptItemWhereInput[]
    OR?: ReceiptItemWhereInput[]
    NOT?: ReceiptItemWhereInput | ReceiptItemWhereInput[]
    id?: IntFilter<"ReceiptItem"> | number
    receiptId?: IntFilter<"ReceiptItem"> | number
    productName?: StringFilter<"ReceiptItem"> | string
    price?: DecimalFilter<"ReceiptItem"> | Decimal | DecimalJsLike | number | string
    quantity?: DecimalFilter<"ReceiptItem"> | Decimal | DecimalJsLike | number | string
    unit?: StringFilter<"ReceiptItem"> | string
    pricePerUnit?: DecimalNullableFilter<"ReceiptItem"> | Decimal | DecimalJsLike | number | string | null
    taxRate?: DecimalNullableFilter<"ReceiptItem"> | Decimal | DecimalJsLike | number | string | null
    receipt?: XOR<ReceiptScalarRelationFilter, ReceiptWhereInput>
  }

  export type ReceiptItemOrderByWithRelationInput = {
    id?: SortOrder
    receiptId?: SortOrder
    productName?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    pricePerUnit?: SortOrderInput | SortOrder
    taxRate?: SortOrderInput | SortOrder
    receipt?: ReceiptOrderByWithRelationInput
  }

  export type ReceiptItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReceiptItemWhereInput | ReceiptItemWhereInput[]
    OR?: ReceiptItemWhereInput[]
    NOT?: ReceiptItemWhereInput | ReceiptItemWhereInput[]
    receiptId?: IntFilter<"ReceiptItem"> | number
    productName?: StringFilter<"ReceiptItem"> | string
    price?: DecimalFilter<"ReceiptItem"> | Decimal | DecimalJsLike | number | string
    quantity?: DecimalFilter<"ReceiptItem"> | Decimal | DecimalJsLike | number | string
    unit?: StringFilter<"ReceiptItem"> | string
    pricePerUnit?: DecimalNullableFilter<"ReceiptItem"> | Decimal | DecimalJsLike | number | string | null
    taxRate?: DecimalNullableFilter<"ReceiptItem"> | Decimal | DecimalJsLike | number | string | null
    receipt?: XOR<ReceiptScalarRelationFilter, ReceiptWhereInput>
  }, "id">

  export type ReceiptItemOrderByWithAggregationInput = {
    id?: SortOrder
    receiptId?: SortOrder
    productName?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    pricePerUnit?: SortOrderInput | SortOrder
    taxRate?: SortOrderInput | SortOrder
    _count?: ReceiptItemCountOrderByAggregateInput
    _avg?: ReceiptItemAvgOrderByAggregateInput
    _max?: ReceiptItemMaxOrderByAggregateInput
    _min?: ReceiptItemMinOrderByAggregateInput
    _sum?: ReceiptItemSumOrderByAggregateInput
  }

  export type ReceiptItemScalarWhereWithAggregatesInput = {
    AND?: ReceiptItemScalarWhereWithAggregatesInput | ReceiptItemScalarWhereWithAggregatesInput[]
    OR?: ReceiptItemScalarWhereWithAggregatesInput[]
    NOT?: ReceiptItemScalarWhereWithAggregatesInput | ReceiptItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReceiptItem"> | number
    receiptId?: IntWithAggregatesFilter<"ReceiptItem"> | number
    productName?: StringWithAggregatesFilter<"ReceiptItem"> | string
    price?: DecimalWithAggregatesFilter<"ReceiptItem"> | Decimal | DecimalJsLike | number | string
    quantity?: DecimalWithAggregatesFilter<"ReceiptItem"> | Decimal | DecimalJsLike | number | string
    unit?: StringWithAggregatesFilter<"ReceiptItem"> | string
    pricePerUnit?: DecimalNullableWithAggregatesFilter<"ReceiptItem"> | Decimal | DecimalJsLike | number | string | null
    taxRate?: DecimalNullableWithAggregatesFilter<"ReceiptItem"> | Decimal | DecimalJsLike | number | string | null
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    expense_id?: IntFilter<"Expense"> | number
    user_id?: IntFilter<"Expense"> | number
    category_id?: IntNullableFilter<"Expense"> | number | null
    total_amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    month?: IntFilter<"Expense"> | number
    year?: IntFilter<"Expense"> | number
    created_at?: DateTimeFilter<"Expense"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
  }

  export type ExpenseOrderByWithRelationInput = {
    expense_id?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrderInput | SortOrder
    total_amount?: SortOrder
    month?: SortOrder
    year?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    expense_id?: number
    user_id_category_id_month_year?: ExpenseUser_idCategory_idMonthYearCompoundUniqueInput
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    user_id?: IntFilter<"Expense"> | number
    category_id?: IntNullableFilter<"Expense"> | number | null
    total_amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    month?: IntFilter<"Expense"> | number
    year?: IntFilter<"Expense"> | number
    created_at?: DateTimeFilter<"Expense"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
  }, "expense_id" | "user_id_category_id_month_year">

  export type ExpenseOrderByWithAggregationInput = {
    expense_id?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrderInput | SortOrder
    total_amount?: SortOrder
    month?: SortOrder
    year?: SortOrder
    created_at?: SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    expense_id?: IntWithAggregatesFilter<"Expense"> | number
    user_id?: IntWithAggregatesFilter<"Expense"> | number
    category_id?: IntNullableWithAggregatesFilter<"Expense"> | number | null
    total_amount?: DecimalWithAggregatesFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    month?: IntWithAggregatesFilter<"Expense"> | number
    year?: IntWithAggregatesFilter<"Expense"> | number
    created_at?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
  }

  export type ShoppingListShareWhereInput = {
    AND?: ShoppingListShareWhereInput | ShoppingListShareWhereInput[]
    OR?: ShoppingListShareWhereInput[]
    NOT?: ShoppingListShareWhereInput | ShoppingListShareWhereInput[]
    id?: IntFilter<"ShoppingListShare"> | number
    list_id?: IntFilter<"ShoppingListShare"> | number
    user_id?: IntFilter<"ShoppingListShare"> | number
    role?: EnumRoleFilter<"ShoppingListShare"> | $Enums.Role
    list?: XOR<ShoppingListScalarRelationFilter, ShoppingListWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ShoppingListShareOrderByWithRelationInput = {
    id?: SortOrder
    list_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    list?: ShoppingListOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ShoppingListShareWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    list_id_user_id?: ShoppingListShareList_idUser_idCompoundUniqueInput
    AND?: ShoppingListShareWhereInput | ShoppingListShareWhereInput[]
    OR?: ShoppingListShareWhereInput[]
    NOT?: ShoppingListShareWhereInput | ShoppingListShareWhereInput[]
    list_id?: IntFilter<"ShoppingListShare"> | number
    user_id?: IntFilter<"ShoppingListShare"> | number
    role?: EnumRoleFilter<"ShoppingListShare"> | $Enums.Role
    list?: XOR<ShoppingListScalarRelationFilter, ShoppingListWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "list_id_user_id">

  export type ShoppingListShareOrderByWithAggregationInput = {
    id?: SortOrder
    list_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    _count?: ShoppingListShareCountOrderByAggregateInput
    _avg?: ShoppingListShareAvgOrderByAggregateInput
    _max?: ShoppingListShareMaxOrderByAggregateInput
    _min?: ShoppingListShareMinOrderByAggregateInput
    _sum?: ShoppingListShareSumOrderByAggregateInput
  }

  export type ShoppingListShareScalarWhereWithAggregatesInput = {
    AND?: ShoppingListShareScalarWhereWithAggregatesInput | ShoppingListShareScalarWhereWithAggregatesInput[]
    OR?: ShoppingListShareScalarWhereWithAggregatesInput[]
    NOT?: ShoppingListShareScalarWhereWithAggregatesInput | ShoppingListShareScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ShoppingListShare"> | number
    list_id?: IntWithAggregatesFilter<"ShoppingListShare"> | number
    user_id?: IntWithAggregatesFilter<"ShoppingListShare"> | number
    role?: EnumRoleWithAggregatesFilter<"ShoppingListShare"> | $Enums.Role
  }

  export type ListInvitationWhereInput = {
    AND?: ListInvitationWhereInput | ListInvitationWhereInput[]
    OR?: ListInvitationWhereInput[]
    NOT?: ListInvitationWhereInput | ListInvitationWhereInput[]
    invitation_id?: IntFilter<"ListInvitation"> | number
    list_id?: IntFilter<"ListInvitation"> | number
    invited_by?: IntFilter<"ListInvitation"> | number
    invite_code?: StringFilter<"ListInvitation"> | string
    role?: EnumRoleFilter<"ListInvitation"> | $Enums.Role
    expires_at?: DateTimeFilter<"ListInvitation"> | Date | string
    is_used?: BoolFilter<"ListInvitation"> | boolean
    used_by?: IntNullableFilter<"ListInvitation"> | number | null
    created_at?: DateTimeFilter<"ListInvitation"> | Date | string
    used_at?: DateTimeNullableFilter<"ListInvitation"> | Date | string | null
    max_uses?: IntFilter<"ListInvitation"> | number
    uses_count?: IntFilter<"ListInvitation"> | number
    list?: XOR<ShoppingListScalarRelationFilter, ShoppingListWhereInput>
    inviter?: XOR<UserScalarRelationFilter, UserWhereInput>
    usedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ListInvitationOrderByWithRelationInput = {
    invitation_id?: SortOrder
    list_id?: SortOrder
    invited_by?: SortOrder
    invite_code?: SortOrder
    role?: SortOrder
    expires_at?: SortOrder
    is_used?: SortOrder
    used_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    used_at?: SortOrderInput | SortOrder
    max_uses?: SortOrder
    uses_count?: SortOrder
    list?: ShoppingListOrderByWithRelationInput
    inviter?: UserOrderByWithRelationInput
    usedByUser?: UserOrderByWithRelationInput
  }

  export type ListInvitationWhereUniqueInput = Prisma.AtLeast<{
    invitation_id?: number
    invite_code?: string
    AND?: ListInvitationWhereInput | ListInvitationWhereInput[]
    OR?: ListInvitationWhereInput[]
    NOT?: ListInvitationWhereInput | ListInvitationWhereInput[]
    list_id?: IntFilter<"ListInvitation"> | number
    invited_by?: IntFilter<"ListInvitation"> | number
    role?: EnumRoleFilter<"ListInvitation"> | $Enums.Role
    expires_at?: DateTimeFilter<"ListInvitation"> | Date | string
    is_used?: BoolFilter<"ListInvitation"> | boolean
    used_by?: IntNullableFilter<"ListInvitation"> | number | null
    created_at?: DateTimeFilter<"ListInvitation"> | Date | string
    used_at?: DateTimeNullableFilter<"ListInvitation"> | Date | string | null
    max_uses?: IntFilter<"ListInvitation"> | number
    uses_count?: IntFilter<"ListInvitation"> | number
    list?: XOR<ShoppingListScalarRelationFilter, ShoppingListWhereInput>
    inviter?: XOR<UserScalarRelationFilter, UserWhereInput>
    usedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "invitation_id" | "invite_code">

  export type ListInvitationOrderByWithAggregationInput = {
    invitation_id?: SortOrder
    list_id?: SortOrder
    invited_by?: SortOrder
    invite_code?: SortOrder
    role?: SortOrder
    expires_at?: SortOrder
    is_used?: SortOrder
    used_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    used_at?: SortOrderInput | SortOrder
    max_uses?: SortOrder
    uses_count?: SortOrder
    _count?: ListInvitationCountOrderByAggregateInput
    _avg?: ListInvitationAvgOrderByAggregateInput
    _max?: ListInvitationMaxOrderByAggregateInput
    _min?: ListInvitationMinOrderByAggregateInput
    _sum?: ListInvitationSumOrderByAggregateInput
  }

  export type ListInvitationScalarWhereWithAggregatesInput = {
    AND?: ListInvitationScalarWhereWithAggregatesInput | ListInvitationScalarWhereWithAggregatesInput[]
    OR?: ListInvitationScalarWhereWithAggregatesInput[]
    NOT?: ListInvitationScalarWhereWithAggregatesInput | ListInvitationScalarWhereWithAggregatesInput[]
    invitation_id?: IntWithAggregatesFilter<"ListInvitation"> | number
    list_id?: IntWithAggregatesFilter<"ListInvitation"> | number
    invited_by?: IntWithAggregatesFilter<"ListInvitation"> | number
    invite_code?: StringWithAggregatesFilter<"ListInvitation"> | string
    role?: EnumRoleWithAggregatesFilter<"ListInvitation"> | $Enums.Role
    expires_at?: DateTimeWithAggregatesFilter<"ListInvitation"> | Date | string
    is_used?: BoolWithAggregatesFilter<"ListInvitation"> | boolean
    used_by?: IntNullableWithAggregatesFilter<"ListInvitation"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"ListInvitation"> | Date | string
    used_at?: DateTimeNullableWithAggregatesFilter<"ListInvitation"> | Date | string | null
    max_uses?: IntWithAggregatesFilter<"ListInvitation"> | number
    uses_count?: IntWithAggregatesFilter<"ListInvitation"> | number
  }

  export type UserCreateInput = {
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    lists?: ShoppingListCreateNestedManyWithoutOwnerInput
    accesses?: UserListAccessCreateNestedManyWithoutUserInput
    invitedAccess?: UserListAccessCreateNestedManyWithoutInvitedByInput
    receipts?: ReceiptCreateNestedManyWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    checkedItems?: ListItemCreateNestedManyWithoutCheckedByInput
    sharedLists?: ShoppingListShareCreateNestedManyWithoutUserInput
    createdInvitations?: ListInvitationCreateNestedManyWithoutInviterInput
    usedInvitations?: ListInvitationCreateNestedManyWithoutUsedByUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: number
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    lists?: ShoppingListUncheckedCreateNestedManyWithoutOwnerInput
    accesses?: UserListAccessUncheckedCreateNestedManyWithoutUserInput
    invitedAccess?: UserListAccessUncheckedCreateNestedManyWithoutInvitedByInput
    receipts?: ReceiptUncheckedCreateNestedManyWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    checkedItems?: ListItemUncheckedCreateNestedManyWithoutCheckedByInput
    sharedLists?: ShoppingListShareUncheckedCreateNestedManyWithoutUserInput
    createdInvitations?: ListInvitationUncheckedCreateNestedManyWithoutInviterInput
    usedInvitations?: ListInvitationUncheckedCreateNestedManyWithoutUsedByUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ShoppingListUpdateManyWithoutOwnerNestedInput
    accesses?: UserListAccessUpdateManyWithoutUserNestedInput
    invitedAccess?: UserListAccessUpdateManyWithoutInvitedByNestedInput
    receipts?: ReceiptUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    checkedItems?: ListItemUpdateManyWithoutCheckedByNestedInput
    sharedLists?: ShoppingListShareUpdateManyWithoutUserNestedInput
    createdInvitations?: ListInvitationUpdateManyWithoutInviterNestedInput
    usedInvitations?: ListInvitationUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ShoppingListUncheckedUpdateManyWithoutOwnerNestedInput
    accesses?: UserListAccessUncheckedUpdateManyWithoutUserNestedInput
    invitedAccess?: UserListAccessUncheckedUpdateManyWithoutInvitedByNestedInput
    receipts?: ReceiptUncheckedUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    checkedItems?: ListItemUncheckedUpdateManyWithoutCheckedByNestedInput
    sharedLists?: ShoppingListShareUncheckedUpdateManyWithoutUserNestedInput
    createdInvitations?: ListInvitationUncheckedUpdateManyWithoutInviterNestedInput
    usedInvitations?: ListInvitationUncheckedUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: number
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingListCreateInput = {
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_shared?: boolean
    owner: UserCreateNestedOneWithoutListsInput
    items?: ListItemCreateNestedManyWithoutListInput
    receipts?: ReceiptCreateNestedManyWithoutListInput
    accesses?: UserListAccessCreateNestedManyWithoutListInput
    sharedWith?: ShoppingListShareCreateNestedManyWithoutListInput
    invitations?: ListInvitationCreateNestedManyWithoutListInput
  }

  export type ShoppingListUncheckedCreateInput = {
    list_id?: number
    owner_id: number
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_shared?: boolean
    items?: ListItemUncheckedCreateNestedManyWithoutListInput
    receipts?: ReceiptUncheckedCreateNestedManyWithoutListInput
    accesses?: UserListAccessUncheckedCreateNestedManyWithoutListInput
    sharedWith?: ShoppingListShareUncheckedCreateNestedManyWithoutListInput
    invitations?: ListInvitationUncheckedCreateNestedManyWithoutListInput
  }

  export type ShoppingListUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutListsNestedInput
    items?: ListItemUpdateManyWithoutListNestedInput
    receipts?: ReceiptUpdateManyWithoutListNestedInput
    accesses?: UserListAccessUpdateManyWithoutListNestedInput
    sharedWith?: ShoppingListShareUpdateManyWithoutListNestedInput
    invitations?: ListInvitationUpdateManyWithoutListNestedInput
  }

  export type ShoppingListUncheckedUpdateInput = {
    list_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    items?: ListItemUncheckedUpdateManyWithoutListNestedInput
    receipts?: ReceiptUncheckedUpdateManyWithoutListNestedInput
    accesses?: UserListAccessUncheckedUpdateManyWithoutListNestedInput
    sharedWith?: ShoppingListShareUncheckedUpdateManyWithoutListNestedInput
    invitations?: ListInvitationUncheckedUpdateManyWithoutListNestedInput
  }

  export type ShoppingListCreateManyInput = {
    list_id?: number
    owner_id: number
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_shared?: boolean
  }

  export type ShoppingListUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_shared?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShoppingListUncheckedUpdateManyInput = {
    list_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_shared?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserListAccessCreateInput = {
    role: $Enums.Role
    joined_at?: Date | string
    user: UserCreateNestedOneWithoutAccessesInput
    list: ShoppingListCreateNestedOneWithoutAccessesInput
    invitedBy?: UserCreateNestedOneWithoutInvitedAccessInput
  }

  export type UserListAccessUncheckedCreateInput = {
    access_id?: number
    user_id: number
    list_id: number
    role: $Enums.Role
    invited_by?: number | null
    joined_at?: Date | string
  }

  export type UserListAccessUpdateInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccessesNestedInput
    list?: ShoppingListUpdateOneRequiredWithoutAccessesNestedInput
    invitedBy?: UserUpdateOneWithoutInvitedAccessNestedInput
  }

  export type UserListAccessUncheckedUpdateInput = {
    access_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    list_id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    invited_by?: NullableIntFieldUpdateOperationsInput | number | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserListAccessCreateManyInput = {
    access_id?: number
    user_id: number
    list_id: number
    role: $Enums.Role
    invited_by?: number | null
    joined_at?: Date | string
  }

  export type UserListAccessUpdateManyMutationInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserListAccessUncheckedUpdateManyInput = {
    access_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    list_id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    invited_by?: NullableIntFieldUpdateOperationsInput | number | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    color_code?: string | null
    created_at?: Date | string
    items?: ListItemCreateNestedManyWithoutCategoryInput
    expenses?: ExpenseCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    category_id?: number
    name: string
    color_code?: string | null
    created_at?: Date | string
    items?: ListItemUncheckedCreateNestedManyWithoutCategoryInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    color_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ListItemUpdateManyWithoutCategoryNestedInput
    expenses?: ExpenseUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ListItemUncheckedUpdateManyWithoutCategoryNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    category_id?: number
    name: string
    color_code?: string | null
    created_at?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    color_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListItemCreateInput = {
    name: string
    quantity?: number
    price?: Decimal | DecimalJsLike | number | string | null
    source?: $Enums.Source | null
    is_checked?: boolean
    created_at?: Date | string
    checkedAt?: Date | string | null
    list: ShoppingListCreateNestedOneWithoutItemsInput
    category?: CategoryCreateNestedOneWithoutItemsInput
    checkedBy?: UserCreateNestedOneWithoutCheckedItemsInput
  }

  export type ListItemUncheckedCreateInput = {
    item_id?: number
    list_id: number
    category_id?: number | null
    name: string
    quantity?: number
    price?: Decimal | DecimalJsLike | number | string | null
    source?: $Enums.Source | null
    is_checked?: boolean
    created_at?: Date | string
    checkedById?: number | null
    checkedAt?: Date | string | null
  }

  export type ListItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source?: NullableEnumSourceFieldUpdateOperationsInput | $Enums.Source | null
    is_checked?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    list?: ShoppingListUpdateOneRequiredWithoutItemsNestedInput
    category?: CategoryUpdateOneWithoutItemsNestedInput
    checkedBy?: UserUpdateOneWithoutCheckedItemsNestedInput
  }

  export type ListItemUncheckedUpdateInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    list_id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source?: NullableEnumSourceFieldUpdateOperationsInput | $Enums.Source | null
    is_checked?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedById?: NullableIntFieldUpdateOperationsInput | number | null
    checkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ListItemCreateManyInput = {
    item_id?: number
    list_id: number
    category_id?: number | null
    name: string
    quantity?: number
    price?: Decimal | DecimalJsLike | number | string | null
    source?: $Enums.Source | null
    is_checked?: boolean
    created_at?: Date | string
    checkedById?: number | null
    checkedAt?: Date | string | null
  }

  export type ListItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source?: NullableEnumSourceFieldUpdateOperationsInput | $Enums.Source | null
    is_checked?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ListItemUncheckedUpdateManyInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    list_id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source?: NullableEnumSourceFieldUpdateOperationsInput | $Enums.Source | null
    is_checked?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedById?: NullableIntFieldUpdateOperationsInput | number | null
    checkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReceiptCreateInput = {
    store_name?: string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    receipt_date?: Date | string | null
    payment_method?: $Enums.PaymentMethod | null
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    image_url?: string | null
    ocr_text?: string | null
    processed?: boolean
    uploaded_at?: Date | string
    list?: ShoppingListCreateNestedOneWithoutReceiptsInput
    user: UserCreateNestedOneWithoutReceiptsInput
    items?: ReceiptItemCreateNestedManyWithoutReceiptInput
  }

  export type ReceiptUncheckedCreateInput = {
    receipt_id?: number
    list_id?: number | null
    user_id: number
    store_name?: string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    receipt_date?: Date | string | null
    payment_method?: $Enums.PaymentMethod | null
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    image_url?: string | null
    ocr_text?: string | null
    processed?: boolean
    uploaded_at?: Date | string
    items?: ReceiptItemUncheckedCreateNestedManyWithoutReceiptInput
  }

  export type ReceiptUpdateInput = {
    store_name?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    receipt_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    ocr_text?: NullableStringFieldUpdateOperationsInput | string | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    list?: ShoppingListUpdateOneWithoutReceiptsNestedInput
    user?: UserUpdateOneRequiredWithoutReceiptsNestedInput
    items?: ReceiptItemUpdateManyWithoutReceiptNestedInput
  }

  export type ReceiptUncheckedUpdateInput = {
    receipt_id?: IntFieldUpdateOperationsInput | number
    list_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: IntFieldUpdateOperationsInput | number
    store_name?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    receipt_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    ocr_text?: NullableStringFieldUpdateOperationsInput | string | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ReceiptItemUncheckedUpdateManyWithoutReceiptNestedInput
  }

  export type ReceiptCreateManyInput = {
    receipt_id?: number
    list_id?: number | null
    user_id: number
    store_name?: string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    receipt_date?: Date | string | null
    payment_method?: $Enums.PaymentMethod | null
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    image_url?: string | null
    ocr_text?: string | null
    processed?: boolean
    uploaded_at?: Date | string
  }

  export type ReceiptUpdateManyMutationInput = {
    store_name?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    receipt_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    ocr_text?: NullableStringFieldUpdateOperationsInput | string | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceiptUncheckedUpdateManyInput = {
    receipt_id?: IntFieldUpdateOperationsInput | number
    list_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: IntFieldUpdateOperationsInput | number
    store_name?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    receipt_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    ocr_text?: NullableStringFieldUpdateOperationsInput | string | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceiptItemCreateInput = {
    productName: string
    price: Decimal | DecimalJsLike | number | string
    quantity?: Decimal | DecimalJsLike | number | string
    unit?: string
    pricePerUnit?: Decimal | DecimalJsLike | number | string | null
    taxRate?: Decimal | DecimalJsLike | number | string | null
    receipt: ReceiptCreateNestedOneWithoutItemsInput
  }

  export type ReceiptItemUncheckedCreateInput = {
    id?: number
    receiptId: number
    productName: string
    price: Decimal | DecimalJsLike | number | string
    quantity?: Decimal | DecimalJsLike | number | string
    unit?: string
    pricePerUnit?: Decimal | DecimalJsLike | number | string | null
    taxRate?: Decimal | DecimalJsLike | number | string | null
  }

  export type ReceiptItemUpdateInput = {
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    taxRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    receipt?: ReceiptUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ReceiptItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiptId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    taxRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ReceiptItemCreateManyInput = {
    id?: number
    receiptId: number
    productName: string
    price: Decimal | DecimalJsLike | number | string
    quantity?: Decimal | DecimalJsLike | number | string
    unit?: string
    pricePerUnit?: Decimal | DecimalJsLike | number | string | null
    taxRate?: Decimal | DecimalJsLike | number | string | null
  }

  export type ReceiptItemUpdateManyMutationInput = {
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    taxRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ReceiptItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiptId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    taxRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ExpenseCreateInput = {
    total_amount: Decimal | DecimalJsLike | number | string
    month: number
    year: number
    created_at?: Date | string
    user: UserCreateNestedOneWithoutExpensesInput
    category?: CategoryCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateInput = {
    expense_id?: number
    user_id: number
    category_id?: number | null
    total_amount: Decimal | DecimalJsLike | number | string
    month: number
    year: number
    created_at?: Date | string
  }

  export type ExpenseUpdateInput = {
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutExpensesNestedInput
    category?: CategoryUpdateOneWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateInput = {
    expense_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseCreateManyInput = {
    expense_id?: number
    user_id: number
    category_id?: number | null
    total_amount: Decimal | DecimalJsLike | number | string
    month: number
    year: number
    created_at?: Date | string
  }

  export type ExpenseUpdateManyMutationInput = {
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyInput = {
    expense_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingListShareCreateInput = {
    role: $Enums.Role
    list: ShoppingListCreateNestedOneWithoutSharedWithInput
    user: UserCreateNestedOneWithoutSharedListsInput
  }

  export type ShoppingListShareUncheckedCreateInput = {
    id?: number
    list_id: number
    user_id: number
    role: $Enums.Role
  }

  export type ShoppingListShareUpdateInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    list?: ShoppingListUpdateOneRequiredWithoutSharedWithNestedInput
    user?: UserUpdateOneRequiredWithoutSharedListsNestedInput
  }

  export type ShoppingListShareUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    list_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ShoppingListShareCreateManyInput = {
    id?: number
    list_id: number
    user_id: number
    role: $Enums.Role
  }

  export type ShoppingListShareUpdateManyMutationInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ShoppingListShareUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    list_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ListInvitationCreateInput = {
    invite_code: string
    role?: $Enums.Role
    expires_at: Date | string
    is_used?: boolean
    created_at?: Date | string
    used_at?: Date | string | null
    max_uses?: number
    uses_count?: number
    list: ShoppingListCreateNestedOneWithoutInvitationsInput
    inviter: UserCreateNestedOneWithoutCreatedInvitationsInput
    usedByUser?: UserCreateNestedOneWithoutUsedInvitationsInput
  }

  export type ListInvitationUncheckedCreateInput = {
    invitation_id?: number
    list_id: number
    invited_by: number
    invite_code: string
    role?: $Enums.Role
    expires_at: Date | string
    is_used?: boolean
    used_by?: number | null
    created_at?: Date | string
    used_at?: Date | string | null
    max_uses?: number
    uses_count?: number
  }

  export type ListInvitationUpdateInput = {
    invite_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_uses?: IntFieldUpdateOperationsInput | number
    uses_count?: IntFieldUpdateOperationsInput | number
    list?: ShoppingListUpdateOneRequiredWithoutInvitationsNestedInput
    inviter?: UserUpdateOneRequiredWithoutCreatedInvitationsNestedInput
    usedByUser?: UserUpdateOneWithoutUsedInvitationsNestedInput
  }

  export type ListInvitationUncheckedUpdateInput = {
    invitation_id?: IntFieldUpdateOperationsInput | number
    list_id?: IntFieldUpdateOperationsInput | number
    invited_by?: IntFieldUpdateOperationsInput | number
    invite_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    used_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_uses?: IntFieldUpdateOperationsInput | number
    uses_count?: IntFieldUpdateOperationsInput | number
  }

  export type ListInvitationCreateManyInput = {
    invitation_id?: number
    list_id: number
    invited_by: number
    invite_code: string
    role?: $Enums.Role
    expires_at: Date | string
    is_used?: boolean
    used_by?: number | null
    created_at?: Date | string
    used_at?: Date | string | null
    max_uses?: number
    uses_count?: number
  }

  export type ListInvitationUpdateManyMutationInput = {
    invite_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_uses?: IntFieldUpdateOperationsInput | number
    uses_count?: IntFieldUpdateOperationsInput | number
  }

  export type ListInvitationUncheckedUpdateManyInput = {
    invitation_id?: IntFieldUpdateOperationsInput | number
    list_id?: IntFieldUpdateOperationsInput | number
    invited_by?: IntFieldUpdateOperationsInput | number
    invite_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    used_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_uses?: IntFieldUpdateOperationsInput | number
    uses_count?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ShoppingListListRelationFilter = {
    every?: ShoppingListWhereInput
    some?: ShoppingListWhereInput
    none?: ShoppingListWhereInput
  }

  export type UserListAccessListRelationFilter = {
    every?: UserListAccessWhereInput
    some?: UserListAccessWhereInput
    none?: UserListAccessWhereInput
  }

  export type ReceiptListRelationFilter = {
    every?: ReceiptWhereInput
    some?: ReceiptWhereInput
    none?: ReceiptWhereInput
  }

  export type ExpenseListRelationFilter = {
    every?: ExpenseWhereInput
    some?: ExpenseWhereInput
    none?: ExpenseWhereInput
  }

  export type ListItemListRelationFilter = {
    every?: ListItemWhereInput
    some?: ListItemWhereInput
    none?: ListItemWhereInput
  }

  export type ShoppingListShareListRelationFilter = {
    every?: ShoppingListShareWhereInput
    some?: ShoppingListShareWhereInput
    none?: ShoppingListShareWhereInput
  }

  export type ListInvitationListRelationFilter = {
    every?: ListInvitationWhereInput
    some?: ListInvitationWhereInput
    none?: ListInvitationWhereInput
  }

  export type ShoppingListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserListAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReceiptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShoppingListShareOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListInvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ShoppingListCountOrderByAggregateInput = {
    list_id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_shared?: SortOrder
  }

  export type ShoppingListAvgOrderByAggregateInput = {
    list_id?: SortOrder
    owner_id?: SortOrder
  }

  export type ShoppingListMaxOrderByAggregateInput = {
    list_id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_shared?: SortOrder
  }

  export type ShoppingListMinOrderByAggregateInput = {
    list_id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_shared?: SortOrder
  }

  export type ShoppingListSumOrderByAggregateInput = {
    list_id?: SortOrder
    owner_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ShoppingListScalarRelationFilter = {
    is?: ShoppingListWhereInput
    isNot?: ShoppingListWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListAccessUser_idList_idCompoundUniqueInput = {
    user_id: number
    list_id: number
  }

  export type UserListAccessCountOrderByAggregateInput = {
    access_id?: SortOrder
    user_id?: SortOrder
    list_id?: SortOrder
    role?: SortOrder
    invited_by?: SortOrder
    joined_at?: SortOrder
  }

  export type UserListAccessAvgOrderByAggregateInput = {
    access_id?: SortOrder
    user_id?: SortOrder
    list_id?: SortOrder
    invited_by?: SortOrder
  }

  export type UserListAccessMaxOrderByAggregateInput = {
    access_id?: SortOrder
    user_id?: SortOrder
    list_id?: SortOrder
    role?: SortOrder
    invited_by?: SortOrder
    joined_at?: SortOrder
  }

  export type UserListAccessMinOrderByAggregateInput = {
    access_id?: SortOrder
    user_id?: SortOrder
    list_id?: SortOrder
    role?: SortOrder
    invited_by?: SortOrder
    joined_at?: SortOrder
  }

  export type UserListAccessSumOrderByAggregateInput = {
    access_id?: SortOrder
    user_id?: SortOrder
    list_id?: SortOrder
    invited_by?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CategoryCountOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
    color_code?: SortOrder
    created_at?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
    color_code?: SortOrder
    created_at?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
    color_code?: SortOrder
    created_at?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumSourceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Source | EnumSourceFieldRefInput<$PrismaModel> | null
    in?: $Enums.Source[] | ListEnumSourceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Source[] | ListEnumSourceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSourceNullableFilter<$PrismaModel> | $Enums.Source | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type ListItemCountOrderByAggregateInput = {
    item_id?: SortOrder
    list_id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    source?: SortOrder
    is_checked?: SortOrder
    created_at?: SortOrder
    checkedById?: SortOrder
    checkedAt?: SortOrder
  }

  export type ListItemAvgOrderByAggregateInput = {
    item_id?: SortOrder
    list_id?: SortOrder
    category_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    checkedById?: SortOrder
  }

  export type ListItemMaxOrderByAggregateInput = {
    item_id?: SortOrder
    list_id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    source?: SortOrder
    is_checked?: SortOrder
    created_at?: SortOrder
    checkedById?: SortOrder
    checkedAt?: SortOrder
  }

  export type ListItemMinOrderByAggregateInput = {
    item_id?: SortOrder
    list_id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    source?: SortOrder
    is_checked?: SortOrder
    created_at?: SortOrder
    checkedById?: SortOrder
    checkedAt?: SortOrder
  }

  export type ListItemSumOrderByAggregateInput = {
    item_id?: SortOrder
    list_id?: SortOrder
    category_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    checkedById?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumSourceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Source | EnumSourceFieldRefInput<$PrismaModel> | null
    in?: $Enums.Source[] | ListEnumSourceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Source[] | ListEnumSourceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSourceNullableWithAggregatesFilter<$PrismaModel> | $Enums.Source | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSourceNullableFilter<$PrismaModel>
    _max?: NestedEnumSourceNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumPaymentMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableFilter<$PrismaModel> | $Enums.PaymentMethod | null
  }

  export type ShoppingListNullableScalarRelationFilter = {
    is?: ShoppingListWhereInput | null
    isNot?: ShoppingListWhereInput | null
  }

  export type ReceiptItemListRelationFilter = {
    every?: ReceiptItemWhereInput
    some?: ReceiptItemWhereInput
    none?: ReceiptItemWhereInput
  }

  export type ReceiptItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReceiptCountOrderByAggregateInput = {
    receipt_id?: SortOrder
    list_id?: SortOrder
    user_id?: SortOrder
    store_name?: SortOrder
    total_amount?: SortOrder
    subtotal?: SortOrder
    receipt_date?: SortOrder
    payment_method?: SortOrder
    tax_rate?: SortOrder
    tax_amount?: SortOrder
    currency?: SortOrder
    image_url?: SortOrder
    ocr_text?: SortOrder
    processed?: SortOrder
    uploaded_at?: SortOrder
  }

  export type ReceiptAvgOrderByAggregateInput = {
    receipt_id?: SortOrder
    list_id?: SortOrder
    user_id?: SortOrder
    total_amount?: SortOrder
    subtotal?: SortOrder
    tax_rate?: SortOrder
    tax_amount?: SortOrder
  }

  export type ReceiptMaxOrderByAggregateInput = {
    receipt_id?: SortOrder
    list_id?: SortOrder
    user_id?: SortOrder
    store_name?: SortOrder
    total_amount?: SortOrder
    subtotal?: SortOrder
    receipt_date?: SortOrder
    payment_method?: SortOrder
    tax_rate?: SortOrder
    tax_amount?: SortOrder
    currency?: SortOrder
    image_url?: SortOrder
    ocr_text?: SortOrder
    processed?: SortOrder
    uploaded_at?: SortOrder
  }

  export type ReceiptMinOrderByAggregateInput = {
    receipt_id?: SortOrder
    list_id?: SortOrder
    user_id?: SortOrder
    store_name?: SortOrder
    total_amount?: SortOrder
    subtotal?: SortOrder
    receipt_date?: SortOrder
    payment_method?: SortOrder
    tax_rate?: SortOrder
    tax_amount?: SortOrder
    currency?: SortOrder
    image_url?: SortOrder
    ocr_text?: SortOrder
    processed?: SortOrder
    uploaded_at?: SortOrder
  }

  export type ReceiptSumOrderByAggregateInput = {
    receipt_id?: SortOrder
    list_id?: SortOrder
    user_id?: SortOrder
    total_amount?: SortOrder
    subtotal?: SortOrder
    tax_rate?: SortOrder
    tax_amount?: SortOrder
  }

  export type EnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ReceiptScalarRelationFilter = {
    is?: ReceiptWhereInput
    isNot?: ReceiptWhereInput
  }

  export type ReceiptItemCountOrderByAggregateInput = {
    id?: SortOrder
    receiptId?: SortOrder
    productName?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    pricePerUnit?: SortOrder
    taxRate?: SortOrder
  }

  export type ReceiptItemAvgOrderByAggregateInput = {
    id?: SortOrder
    receiptId?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    pricePerUnit?: SortOrder
    taxRate?: SortOrder
  }

  export type ReceiptItemMaxOrderByAggregateInput = {
    id?: SortOrder
    receiptId?: SortOrder
    productName?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    pricePerUnit?: SortOrder
    taxRate?: SortOrder
  }

  export type ReceiptItemMinOrderByAggregateInput = {
    id?: SortOrder
    receiptId?: SortOrder
    productName?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    pricePerUnit?: SortOrder
    taxRate?: SortOrder
  }

  export type ReceiptItemSumOrderByAggregateInput = {
    id?: SortOrder
    receiptId?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    pricePerUnit?: SortOrder
    taxRate?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ExpenseUser_idCategory_idMonthYearCompoundUniqueInput = {
    user_id: number
    category_id: number
    month: number
    year: number
  }

  export type ExpenseCountOrderByAggregateInput = {
    expense_id?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    total_amount?: SortOrder
    month?: SortOrder
    year?: SortOrder
    created_at?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    expense_id?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    total_amount?: SortOrder
    month?: SortOrder
    year?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    expense_id?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    total_amount?: SortOrder
    month?: SortOrder
    year?: SortOrder
    created_at?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    expense_id?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    total_amount?: SortOrder
    month?: SortOrder
    year?: SortOrder
    created_at?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    expense_id?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    total_amount?: SortOrder
    month?: SortOrder
    year?: SortOrder
  }

  export type ShoppingListShareList_idUser_idCompoundUniqueInput = {
    list_id: number
    user_id: number
  }

  export type ShoppingListShareCountOrderByAggregateInput = {
    id?: SortOrder
    list_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
  }

  export type ShoppingListShareAvgOrderByAggregateInput = {
    id?: SortOrder
    list_id?: SortOrder
    user_id?: SortOrder
  }

  export type ShoppingListShareMaxOrderByAggregateInput = {
    id?: SortOrder
    list_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
  }

  export type ShoppingListShareMinOrderByAggregateInput = {
    id?: SortOrder
    list_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
  }

  export type ShoppingListShareSumOrderByAggregateInput = {
    id?: SortOrder
    list_id?: SortOrder
    user_id?: SortOrder
  }

  export type ListInvitationCountOrderByAggregateInput = {
    invitation_id?: SortOrder
    list_id?: SortOrder
    invited_by?: SortOrder
    invite_code?: SortOrder
    role?: SortOrder
    expires_at?: SortOrder
    is_used?: SortOrder
    used_by?: SortOrder
    created_at?: SortOrder
    used_at?: SortOrder
    max_uses?: SortOrder
    uses_count?: SortOrder
  }

  export type ListInvitationAvgOrderByAggregateInput = {
    invitation_id?: SortOrder
    list_id?: SortOrder
    invited_by?: SortOrder
    used_by?: SortOrder
    max_uses?: SortOrder
    uses_count?: SortOrder
  }

  export type ListInvitationMaxOrderByAggregateInput = {
    invitation_id?: SortOrder
    list_id?: SortOrder
    invited_by?: SortOrder
    invite_code?: SortOrder
    role?: SortOrder
    expires_at?: SortOrder
    is_used?: SortOrder
    used_by?: SortOrder
    created_at?: SortOrder
    used_at?: SortOrder
    max_uses?: SortOrder
    uses_count?: SortOrder
  }

  export type ListInvitationMinOrderByAggregateInput = {
    invitation_id?: SortOrder
    list_id?: SortOrder
    invited_by?: SortOrder
    invite_code?: SortOrder
    role?: SortOrder
    expires_at?: SortOrder
    is_used?: SortOrder
    used_by?: SortOrder
    created_at?: SortOrder
    used_at?: SortOrder
    max_uses?: SortOrder
    uses_count?: SortOrder
  }

  export type ListInvitationSumOrderByAggregateInput = {
    invitation_id?: SortOrder
    list_id?: SortOrder
    invited_by?: SortOrder
    used_by?: SortOrder
    max_uses?: SortOrder
    uses_count?: SortOrder
  }

  export type ShoppingListCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ShoppingListCreateWithoutOwnerInput, ShoppingListUncheckedCreateWithoutOwnerInput> | ShoppingListCreateWithoutOwnerInput[] | ShoppingListUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ShoppingListCreateOrConnectWithoutOwnerInput | ShoppingListCreateOrConnectWithoutOwnerInput[]
    createMany?: ShoppingListCreateManyOwnerInputEnvelope
    connect?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
  }

  export type UserListAccessCreateNestedManyWithoutUserInput = {
    create?: XOR<UserListAccessCreateWithoutUserInput, UserListAccessUncheckedCreateWithoutUserInput> | UserListAccessCreateWithoutUserInput[] | UserListAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserListAccessCreateOrConnectWithoutUserInput | UserListAccessCreateOrConnectWithoutUserInput[]
    createMany?: UserListAccessCreateManyUserInputEnvelope
    connect?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
  }

  export type UserListAccessCreateNestedManyWithoutInvitedByInput = {
    create?: XOR<UserListAccessCreateWithoutInvitedByInput, UserListAccessUncheckedCreateWithoutInvitedByInput> | UserListAccessCreateWithoutInvitedByInput[] | UserListAccessUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: UserListAccessCreateOrConnectWithoutInvitedByInput | UserListAccessCreateOrConnectWithoutInvitedByInput[]
    createMany?: UserListAccessCreateManyInvitedByInputEnvelope
    connect?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
  }

  export type ReceiptCreateNestedManyWithoutUserInput = {
    create?: XOR<ReceiptCreateWithoutUserInput, ReceiptUncheckedCreateWithoutUserInput> | ReceiptCreateWithoutUserInput[] | ReceiptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReceiptCreateOrConnectWithoutUserInput | ReceiptCreateOrConnectWithoutUserInput[]
    createMany?: ReceiptCreateManyUserInputEnvelope
    connect?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ListItemCreateNestedManyWithoutCheckedByInput = {
    create?: XOR<ListItemCreateWithoutCheckedByInput, ListItemUncheckedCreateWithoutCheckedByInput> | ListItemCreateWithoutCheckedByInput[] | ListItemUncheckedCreateWithoutCheckedByInput[]
    connectOrCreate?: ListItemCreateOrConnectWithoutCheckedByInput | ListItemCreateOrConnectWithoutCheckedByInput[]
    createMany?: ListItemCreateManyCheckedByInputEnvelope
    connect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
  }

  export type ShoppingListShareCreateNestedManyWithoutUserInput = {
    create?: XOR<ShoppingListShareCreateWithoutUserInput, ShoppingListShareUncheckedCreateWithoutUserInput> | ShoppingListShareCreateWithoutUserInput[] | ShoppingListShareUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShoppingListShareCreateOrConnectWithoutUserInput | ShoppingListShareCreateOrConnectWithoutUserInput[]
    createMany?: ShoppingListShareCreateManyUserInputEnvelope
    connect?: ShoppingListShareWhereUniqueInput | ShoppingListShareWhereUniqueInput[]
  }

  export type ListInvitationCreateNestedManyWithoutInviterInput = {
    create?: XOR<ListInvitationCreateWithoutInviterInput, ListInvitationUncheckedCreateWithoutInviterInput> | ListInvitationCreateWithoutInviterInput[] | ListInvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: ListInvitationCreateOrConnectWithoutInviterInput | ListInvitationCreateOrConnectWithoutInviterInput[]
    createMany?: ListInvitationCreateManyInviterInputEnvelope
    connect?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
  }

  export type ListInvitationCreateNestedManyWithoutUsedByUserInput = {
    create?: XOR<ListInvitationCreateWithoutUsedByUserInput, ListInvitationUncheckedCreateWithoutUsedByUserInput> | ListInvitationCreateWithoutUsedByUserInput[] | ListInvitationUncheckedCreateWithoutUsedByUserInput[]
    connectOrCreate?: ListInvitationCreateOrConnectWithoutUsedByUserInput | ListInvitationCreateOrConnectWithoutUsedByUserInput[]
    createMany?: ListInvitationCreateManyUsedByUserInputEnvelope
    connect?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
  }

  export type ShoppingListUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ShoppingListCreateWithoutOwnerInput, ShoppingListUncheckedCreateWithoutOwnerInput> | ShoppingListCreateWithoutOwnerInput[] | ShoppingListUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ShoppingListCreateOrConnectWithoutOwnerInput | ShoppingListCreateOrConnectWithoutOwnerInput[]
    createMany?: ShoppingListCreateManyOwnerInputEnvelope
    connect?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
  }

  export type UserListAccessUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserListAccessCreateWithoutUserInput, UserListAccessUncheckedCreateWithoutUserInput> | UserListAccessCreateWithoutUserInput[] | UserListAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserListAccessCreateOrConnectWithoutUserInput | UserListAccessCreateOrConnectWithoutUserInput[]
    createMany?: UserListAccessCreateManyUserInputEnvelope
    connect?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
  }

  export type UserListAccessUncheckedCreateNestedManyWithoutInvitedByInput = {
    create?: XOR<UserListAccessCreateWithoutInvitedByInput, UserListAccessUncheckedCreateWithoutInvitedByInput> | UserListAccessCreateWithoutInvitedByInput[] | UserListAccessUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: UserListAccessCreateOrConnectWithoutInvitedByInput | UserListAccessCreateOrConnectWithoutInvitedByInput[]
    createMany?: UserListAccessCreateManyInvitedByInputEnvelope
    connect?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
  }

  export type ReceiptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReceiptCreateWithoutUserInput, ReceiptUncheckedCreateWithoutUserInput> | ReceiptCreateWithoutUserInput[] | ReceiptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReceiptCreateOrConnectWithoutUserInput | ReceiptCreateOrConnectWithoutUserInput[]
    createMany?: ReceiptCreateManyUserInputEnvelope
    connect?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ListItemUncheckedCreateNestedManyWithoutCheckedByInput = {
    create?: XOR<ListItemCreateWithoutCheckedByInput, ListItemUncheckedCreateWithoutCheckedByInput> | ListItemCreateWithoutCheckedByInput[] | ListItemUncheckedCreateWithoutCheckedByInput[]
    connectOrCreate?: ListItemCreateOrConnectWithoutCheckedByInput | ListItemCreateOrConnectWithoutCheckedByInput[]
    createMany?: ListItemCreateManyCheckedByInputEnvelope
    connect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
  }

  export type ShoppingListShareUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShoppingListShareCreateWithoutUserInput, ShoppingListShareUncheckedCreateWithoutUserInput> | ShoppingListShareCreateWithoutUserInput[] | ShoppingListShareUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShoppingListShareCreateOrConnectWithoutUserInput | ShoppingListShareCreateOrConnectWithoutUserInput[]
    createMany?: ShoppingListShareCreateManyUserInputEnvelope
    connect?: ShoppingListShareWhereUniqueInput | ShoppingListShareWhereUniqueInput[]
  }

  export type ListInvitationUncheckedCreateNestedManyWithoutInviterInput = {
    create?: XOR<ListInvitationCreateWithoutInviterInput, ListInvitationUncheckedCreateWithoutInviterInput> | ListInvitationCreateWithoutInviterInput[] | ListInvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: ListInvitationCreateOrConnectWithoutInviterInput | ListInvitationCreateOrConnectWithoutInviterInput[]
    createMany?: ListInvitationCreateManyInviterInputEnvelope
    connect?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
  }

  export type ListInvitationUncheckedCreateNestedManyWithoutUsedByUserInput = {
    create?: XOR<ListInvitationCreateWithoutUsedByUserInput, ListInvitationUncheckedCreateWithoutUsedByUserInput> | ListInvitationCreateWithoutUsedByUserInput[] | ListInvitationUncheckedCreateWithoutUsedByUserInput[]
    connectOrCreate?: ListInvitationCreateOrConnectWithoutUsedByUserInput | ListInvitationCreateOrConnectWithoutUsedByUserInput[]
    createMany?: ListInvitationCreateManyUsedByUserInputEnvelope
    connect?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ShoppingListUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ShoppingListCreateWithoutOwnerInput, ShoppingListUncheckedCreateWithoutOwnerInput> | ShoppingListCreateWithoutOwnerInput[] | ShoppingListUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ShoppingListCreateOrConnectWithoutOwnerInput | ShoppingListCreateOrConnectWithoutOwnerInput[]
    upsert?: ShoppingListUpsertWithWhereUniqueWithoutOwnerInput | ShoppingListUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ShoppingListCreateManyOwnerInputEnvelope
    set?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    disconnect?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    delete?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    connect?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    update?: ShoppingListUpdateWithWhereUniqueWithoutOwnerInput | ShoppingListUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ShoppingListUpdateManyWithWhereWithoutOwnerInput | ShoppingListUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ShoppingListScalarWhereInput | ShoppingListScalarWhereInput[]
  }

  export type UserListAccessUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserListAccessCreateWithoutUserInput, UserListAccessUncheckedCreateWithoutUserInput> | UserListAccessCreateWithoutUserInput[] | UserListAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserListAccessCreateOrConnectWithoutUserInput | UserListAccessCreateOrConnectWithoutUserInput[]
    upsert?: UserListAccessUpsertWithWhereUniqueWithoutUserInput | UserListAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserListAccessCreateManyUserInputEnvelope
    set?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
    disconnect?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
    delete?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
    connect?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
    update?: UserListAccessUpdateWithWhereUniqueWithoutUserInput | UserListAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserListAccessUpdateManyWithWhereWithoutUserInput | UserListAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserListAccessScalarWhereInput | UserListAccessScalarWhereInput[]
  }

  export type UserListAccessUpdateManyWithoutInvitedByNestedInput = {
    create?: XOR<UserListAccessCreateWithoutInvitedByInput, UserListAccessUncheckedCreateWithoutInvitedByInput> | UserListAccessCreateWithoutInvitedByInput[] | UserListAccessUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: UserListAccessCreateOrConnectWithoutInvitedByInput | UserListAccessCreateOrConnectWithoutInvitedByInput[]
    upsert?: UserListAccessUpsertWithWhereUniqueWithoutInvitedByInput | UserListAccessUpsertWithWhereUniqueWithoutInvitedByInput[]
    createMany?: UserListAccessCreateManyInvitedByInputEnvelope
    set?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
    disconnect?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
    delete?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
    connect?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
    update?: UserListAccessUpdateWithWhereUniqueWithoutInvitedByInput | UserListAccessUpdateWithWhereUniqueWithoutInvitedByInput[]
    updateMany?: UserListAccessUpdateManyWithWhereWithoutInvitedByInput | UserListAccessUpdateManyWithWhereWithoutInvitedByInput[]
    deleteMany?: UserListAccessScalarWhereInput | UserListAccessScalarWhereInput[]
  }

  export type ReceiptUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReceiptCreateWithoutUserInput, ReceiptUncheckedCreateWithoutUserInput> | ReceiptCreateWithoutUserInput[] | ReceiptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReceiptCreateOrConnectWithoutUserInput | ReceiptCreateOrConnectWithoutUserInput[]
    upsert?: ReceiptUpsertWithWhereUniqueWithoutUserInput | ReceiptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReceiptCreateManyUserInputEnvelope
    set?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    disconnect?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    delete?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    connect?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    update?: ReceiptUpdateWithWhereUniqueWithoutUserInput | ReceiptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReceiptUpdateManyWithWhereWithoutUserInput | ReceiptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReceiptScalarWhereInput | ReceiptScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutUserInput | ExpenseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutUserInput | ExpenseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutUserInput | ExpenseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ListItemUpdateManyWithoutCheckedByNestedInput = {
    create?: XOR<ListItemCreateWithoutCheckedByInput, ListItemUncheckedCreateWithoutCheckedByInput> | ListItemCreateWithoutCheckedByInput[] | ListItemUncheckedCreateWithoutCheckedByInput[]
    connectOrCreate?: ListItemCreateOrConnectWithoutCheckedByInput | ListItemCreateOrConnectWithoutCheckedByInput[]
    upsert?: ListItemUpsertWithWhereUniqueWithoutCheckedByInput | ListItemUpsertWithWhereUniqueWithoutCheckedByInput[]
    createMany?: ListItemCreateManyCheckedByInputEnvelope
    set?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    disconnect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    delete?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    connect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    update?: ListItemUpdateWithWhereUniqueWithoutCheckedByInput | ListItemUpdateWithWhereUniqueWithoutCheckedByInput[]
    updateMany?: ListItemUpdateManyWithWhereWithoutCheckedByInput | ListItemUpdateManyWithWhereWithoutCheckedByInput[]
    deleteMany?: ListItemScalarWhereInput | ListItemScalarWhereInput[]
  }

  export type ShoppingListShareUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShoppingListShareCreateWithoutUserInput, ShoppingListShareUncheckedCreateWithoutUserInput> | ShoppingListShareCreateWithoutUserInput[] | ShoppingListShareUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShoppingListShareCreateOrConnectWithoutUserInput | ShoppingListShareCreateOrConnectWithoutUserInput[]
    upsert?: ShoppingListShareUpsertWithWhereUniqueWithoutUserInput | ShoppingListShareUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShoppingListShareCreateManyUserInputEnvelope
    set?: ShoppingListShareWhereUniqueInput | ShoppingListShareWhereUniqueInput[]
    disconnect?: ShoppingListShareWhereUniqueInput | ShoppingListShareWhereUniqueInput[]
    delete?: ShoppingListShareWhereUniqueInput | ShoppingListShareWhereUniqueInput[]
    connect?: ShoppingListShareWhereUniqueInput | ShoppingListShareWhereUniqueInput[]
    update?: ShoppingListShareUpdateWithWhereUniqueWithoutUserInput | ShoppingListShareUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShoppingListShareUpdateManyWithWhereWithoutUserInput | ShoppingListShareUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShoppingListShareScalarWhereInput | ShoppingListShareScalarWhereInput[]
  }

  export type ListInvitationUpdateManyWithoutInviterNestedInput = {
    create?: XOR<ListInvitationCreateWithoutInviterInput, ListInvitationUncheckedCreateWithoutInviterInput> | ListInvitationCreateWithoutInviterInput[] | ListInvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: ListInvitationCreateOrConnectWithoutInviterInput | ListInvitationCreateOrConnectWithoutInviterInput[]
    upsert?: ListInvitationUpsertWithWhereUniqueWithoutInviterInput | ListInvitationUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: ListInvitationCreateManyInviterInputEnvelope
    set?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
    disconnect?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
    delete?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
    connect?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
    update?: ListInvitationUpdateWithWhereUniqueWithoutInviterInput | ListInvitationUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: ListInvitationUpdateManyWithWhereWithoutInviterInput | ListInvitationUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: ListInvitationScalarWhereInput | ListInvitationScalarWhereInput[]
  }

  export type ListInvitationUpdateManyWithoutUsedByUserNestedInput = {
    create?: XOR<ListInvitationCreateWithoutUsedByUserInput, ListInvitationUncheckedCreateWithoutUsedByUserInput> | ListInvitationCreateWithoutUsedByUserInput[] | ListInvitationUncheckedCreateWithoutUsedByUserInput[]
    connectOrCreate?: ListInvitationCreateOrConnectWithoutUsedByUserInput | ListInvitationCreateOrConnectWithoutUsedByUserInput[]
    upsert?: ListInvitationUpsertWithWhereUniqueWithoutUsedByUserInput | ListInvitationUpsertWithWhereUniqueWithoutUsedByUserInput[]
    createMany?: ListInvitationCreateManyUsedByUserInputEnvelope
    set?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
    disconnect?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
    delete?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
    connect?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
    update?: ListInvitationUpdateWithWhereUniqueWithoutUsedByUserInput | ListInvitationUpdateWithWhereUniqueWithoutUsedByUserInput[]
    updateMany?: ListInvitationUpdateManyWithWhereWithoutUsedByUserInput | ListInvitationUpdateManyWithWhereWithoutUsedByUserInput[]
    deleteMany?: ListInvitationScalarWhereInput | ListInvitationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ShoppingListUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ShoppingListCreateWithoutOwnerInput, ShoppingListUncheckedCreateWithoutOwnerInput> | ShoppingListCreateWithoutOwnerInput[] | ShoppingListUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ShoppingListCreateOrConnectWithoutOwnerInput | ShoppingListCreateOrConnectWithoutOwnerInput[]
    upsert?: ShoppingListUpsertWithWhereUniqueWithoutOwnerInput | ShoppingListUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ShoppingListCreateManyOwnerInputEnvelope
    set?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    disconnect?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    delete?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    connect?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    update?: ShoppingListUpdateWithWhereUniqueWithoutOwnerInput | ShoppingListUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ShoppingListUpdateManyWithWhereWithoutOwnerInput | ShoppingListUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ShoppingListScalarWhereInput | ShoppingListScalarWhereInput[]
  }

  export type UserListAccessUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserListAccessCreateWithoutUserInput, UserListAccessUncheckedCreateWithoutUserInput> | UserListAccessCreateWithoutUserInput[] | UserListAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserListAccessCreateOrConnectWithoutUserInput | UserListAccessCreateOrConnectWithoutUserInput[]
    upsert?: UserListAccessUpsertWithWhereUniqueWithoutUserInput | UserListAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserListAccessCreateManyUserInputEnvelope
    set?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
    disconnect?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
    delete?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
    connect?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
    update?: UserListAccessUpdateWithWhereUniqueWithoutUserInput | UserListAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserListAccessUpdateManyWithWhereWithoutUserInput | UserListAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserListAccessScalarWhereInput | UserListAccessScalarWhereInput[]
  }

  export type UserListAccessUncheckedUpdateManyWithoutInvitedByNestedInput = {
    create?: XOR<UserListAccessCreateWithoutInvitedByInput, UserListAccessUncheckedCreateWithoutInvitedByInput> | UserListAccessCreateWithoutInvitedByInput[] | UserListAccessUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: UserListAccessCreateOrConnectWithoutInvitedByInput | UserListAccessCreateOrConnectWithoutInvitedByInput[]
    upsert?: UserListAccessUpsertWithWhereUniqueWithoutInvitedByInput | UserListAccessUpsertWithWhereUniqueWithoutInvitedByInput[]
    createMany?: UserListAccessCreateManyInvitedByInputEnvelope
    set?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
    disconnect?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
    delete?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
    connect?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
    update?: UserListAccessUpdateWithWhereUniqueWithoutInvitedByInput | UserListAccessUpdateWithWhereUniqueWithoutInvitedByInput[]
    updateMany?: UserListAccessUpdateManyWithWhereWithoutInvitedByInput | UserListAccessUpdateManyWithWhereWithoutInvitedByInput[]
    deleteMany?: UserListAccessScalarWhereInput | UserListAccessScalarWhereInput[]
  }

  export type ReceiptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReceiptCreateWithoutUserInput, ReceiptUncheckedCreateWithoutUserInput> | ReceiptCreateWithoutUserInput[] | ReceiptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReceiptCreateOrConnectWithoutUserInput | ReceiptCreateOrConnectWithoutUserInput[]
    upsert?: ReceiptUpsertWithWhereUniqueWithoutUserInput | ReceiptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReceiptCreateManyUserInputEnvelope
    set?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    disconnect?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    delete?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    connect?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    update?: ReceiptUpdateWithWhereUniqueWithoutUserInput | ReceiptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReceiptUpdateManyWithWhereWithoutUserInput | ReceiptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReceiptScalarWhereInput | ReceiptScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutUserInput | ExpenseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutUserInput | ExpenseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutUserInput | ExpenseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ListItemUncheckedUpdateManyWithoutCheckedByNestedInput = {
    create?: XOR<ListItemCreateWithoutCheckedByInput, ListItemUncheckedCreateWithoutCheckedByInput> | ListItemCreateWithoutCheckedByInput[] | ListItemUncheckedCreateWithoutCheckedByInput[]
    connectOrCreate?: ListItemCreateOrConnectWithoutCheckedByInput | ListItemCreateOrConnectWithoutCheckedByInput[]
    upsert?: ListItemUpsertWithWhereUniqueWithoutCheckedByInput | ListItemUpsertWithWhereUniqueWithoutCheckedByInput[]
    createMany?: ListItemCreateManyCheckedByInputEnvelope
    set?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    disconnect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    delete?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    connect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    update?: ListItemUpdateWithWhereUniqueWithoutCheckedByInput | ListItemUpdateWithWhereUniqueWithoutCheckedByInput[]
    updateMany?: ListItemUpdateManyWithWhereWithoutCheckedByInput | ListItemUpdateManyWithWhereWithoutCheckedByInput[]
    deleteMany?: ListItemScalarWhereInput | ListItemScalarWhereInput[]
  }

  export type ShoppingListShareUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShoppingListShareCreateWithoutUserInput, ShoppingListShareUncheckedCreateWithoutUserInput> | ShoppingListShareCreateWithoutUserInput[] | ShoppingListShareUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShoppingListShareCreateOrConnectWithoutUserInput | ShoppingListShareCreateOrConnectWithoutUserInput[]
    upsert?: ShoppingListShareUpsertWithWhereUniqueWithoutUserInput | ShoppingListShareUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShoppingListShareCreateManyUserInputEnvelope
    set?: ShoppingListShareWhereUniqueInput | ShoppingListShareWhereUniqueInput[]
    disconnect?: ShoppingListShareWhereUniqueInput | ShoppingListShareWhereUniqueInput[]
    delete?: ShoppingListShareWhereUniqueInput | ShoppingListShareWhereUniqueInput[]
    connect?: ShoppingListShareWhereUniqueInput | ShoppingListShareWhereUniqueInput[]
    update?: ShoppingListShareUpdateWithWhereUniqueWithoutUserInput | ShoppingListShareUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShoppingListShareUpdateManyWithWhereWithoutUserInput | ShoppingListShareUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShoppingListShareScalarWhereInput | ShoppingListShareScalarWhereInput[]
  }

  export type ListInvitationUncheckedUpdateManyWithoutInviterNestedInput = {
    create?: XOR<ListInvitationCreateWithoutInviterInput, ListInvitationUncheckedCreateWithoutInviterInput> | ListInvitationCreateWithoutInviterInput[] | ListInvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: ListInvitationCreateOrConnectWithoutInviterInput | ListInvitationCreateOrConnectWithoutInviterInput[]
    upsert?: ListInvitationUpsertWithWhereUniqueWithoutInviterInput | ListInvitationUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: ListInvitationCreateManyInviterInputEnvelope
    set?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
    disconnect?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
    delete?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
    connect?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
    update?: ListInvitationUpdateWithWhereUniqueWithoutInviterInput | ListInvitationUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: ListInvitationUpdateManyWithWhereWithoutInviterInput | ListInvitationUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: ListInvitationScalarWhereInput | ListInvitationScalarWhereInput[]
  }

  export type ListInvitationUncheckedUpdateManyWithoutUsedByUserNestedInput = {
    create?: XOR<ListInvitationCreateWithoutUsedByUserInput, ListInvitationUncheckedCreateWithoutUsedByUserInput> | ListInvitationCreateWithoutUsedByUserInput[] | ListInvitationUncheckedCreateWithoutUsedByUserInput[]
    connectOrCreate?: ListInvitationCreateOrConnectWithoutUsedByUserInput | ListInvitationCreateOrConnectWithoutUsedByUserInput[]
    upsert?: ListInvitationUpsertWithWhereUniqueWithoutUsedByUserInput | ListInvitationUpsertWithWhereUniqueWithoutUsedByUserInput[]
    createMany?: ListInvitationCreateManyUsedByUserInputEnvelope
    set?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
    disconnect?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
    delete?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
    connect?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
    update?: ListInvitationUpdateWithWhereUniqueWithoutUsedByUserInput | ListInvitationUpdateWithWhereUniqueWithoutUsedByUserInput[]
    updateMany?: ListInvitationUpdateManyWithWhereWithoutUsedByUserInput | ListInvitationUpdateManyWithWhereWithoutUsedByUserInput[]
    deleteMany?: ListInvitationScalarWhereInput | ListInvitationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutListsInput = {
    create?: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListsInput
    connect?: UserWhereUniqueInput
  }

  export type ListItemCreateNestedManyWithoutListInput = {
    create?: XOR<ListItemCreateWithoutListInput, ListItemUncheckedCreateWithoutListInput> | ListItemCreateWithoutListInput[] | ListItemUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListItemCreateOrConnectWithoutListInput | ListItemCreateOrConnectWithoutListInput[]
    createMany?: ListItemCreateManyListInputEnvelope
    connect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
  }

  export type ReceiptCreateNestedManyWithoutListInput = {
    create?: XOR<ReceiptCreateWithoutListInput, ReceiptUncheckedCreateWithoutListInput> | ReceiptCreateWithoutListInput[] | ReceiptUncheckedCreateWithoutListInput[]
    connectOrCreate?: ReceiptCreateOrConnectWithoutListInput | ReceiptCreateOrConnectWithoutListInput[]
    createMany?: ReceiptCreateManyListInputEnvelope
    connect?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
  }

  export type UserListAccessCreateNestedManyWithoutListInput = {
    create?: XOR<UserListAccessCreateWithoutListInput, UserListAccessUncheckedCreateWithoutListInput> | UserListAccessCreateWithoutListInput[] | UserListAccessUncheckedCreateWithoutListInput[]
    connectOrCreate?: UserListAccessCreateOrConnectWithoutListInput | UserListAccessCreateOrConnectWithoutListInput[]
    createMany?: UserListAccessCreateManyListInputEnvelope
    connect?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
  }

  export type ShoppingListShareCreateNestedManyWithoutListInput = {
    create?: XOR<ShoppingListShareCreateWithoutListInput, ShoppingListShareUncheckedCreateWithoutListInput> | ShoppingListShareCreateWithoutListInput[] | ShoppingListShareUncheckedCreateWithoutListInput[]
    connectOrCreate?: ShoppingListShareCreateOrConnectWithoutListInput | ShoppingListShareCreateOrConnectWithoutListInput[]
    createMany?: ShoppingListShareCreateManyListInputEnvelope
    connect?: ShoppingListShareWhereUniqueInput | ShoppingListShareWhereUniqueInput[]
  }

  export type ListInvitationCreateNestedManyWithoutListInput = {
    create?: XOR<ListInvitationCreateWithoutListInput, ListInvitationUncheckedCreateWithoutListInput> | ListInvitationCreateWithoutListInput[] | ListInvitationUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListInvitationCreateOrConnectWithoutListInput | ListInvitationCreateOrConnectWithoutListInput[]
    createMany?: ListInvitationCreateManyListInputEnvelope
    connect?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
  }

  export type ListItemUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<ListItemCreateWithoutListInput, ListItemUncheckedCreateWithoutListInput> | ListItemCreateWithoutListInput[] | ListItemUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListItemCreateOrConnectWithoutListInput | ListItemCreateOrConnectWithoutListInput[]
    createMany?: ListItemCreateManyListInputEnvelope
    connect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
  }

  export type ReceiptUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<ReceiptCreateWithoutListInput, ReceiptUncheckedCreateWithoutListInput> | ReceiptCreateWithoutListInput[] | ReceiptUncheckedCreateWithoutListInput[]
    connectOrCreate?: ReceiptCreateOrConnectWithoutListInput | ReceiptCreateOrConnectWithoutListInput[]
    createMany?: ReceiptCreateManyListInputEnvelope
    connect?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
  }

  export type UserListAccessUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<UserListAccessCreateWithoutListInput, UserListAccessUncheckedCreateWithoutListInput> | UserListAccessCreateWithoutListInput[] | UserListAccessUncheckedCreateWithoutListInput[]
    connectOrCreate?: UserListAccessCreateOrConnectWithoutListInput | UserListAccessCreateOrConnectWithoutListInput[]
    createMany?: UserListAccessCreateManyListInputEnvelope
    connect?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
  }

  export type ShoppingListShareUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<ShoppingListShareCreateWithoutListInput, ShoppingListShareUncheckedCreateWithoutListInput> | ShoppingListShareCreateWithoutListInput[] | ShoppingListShareUncheckedCreateWithoutListInput[]
    connectOrCreate?: ShoppingListShareCreateOrConnectWithoutListInput | ShoppingListShareCreateOrConnectWithoutListInput[]
    createMany?: ShoppingListShareCreateManyListInputEnvelope
    connect?: ShoppingListShareWhereUniqueInput | ShoppingListShareWhereUniqueInput[]
  }

  export type ListInvitationUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<ListInvitationCreateWithoutListInput, ListInvitationUncheckedCreateWithoutListInput> | ListInvitationCreateWithoutListInput[] | ListInvitationUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListInvitationCreateOrConnectWithoutListInput | ListInvitationCreateOrConnectWithoutListInput[]
    createMany?: ListInvitationCreateManyListInputEnvelope
    connect?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutListsNestedInput = {
    create?: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListsInput
    upsert?: UserUpsertWithoutListsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutListsInput, UserUpdateWithoutListsInput>, UserUncheckedUpdateWithoutListsInput>
  }

  export type ListItemUpdateManyWithoutListNestedInput = {
    create?: XOR<ListItemCreateWithoutListInput, ListItemUncheckedCreateWithoutListInput> | ListItemCreateWithoutListInput[] | ListItemUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListItemCreateOrConnectWithoutListInput | ListItemCreateOrConnectWithoutListInput[]
    upsert?: ListItemUpsertWithWhereUniqueWithoutListInput | ListItemUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ListItemCreateManyListInputEnvelope
    set?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    disconnect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    delete?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    connect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    update?: ListItemUpdateWithWhereUniqueWithoutListInput | ListItemUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ListItemUpdateManyWithWhereWithoutListInput | ListItemUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ListItemScalarWhereInput | ListItemScalarWhereInput[]
  }

  export type ReceiptUpdateManyWithoutListNestedInput = {
    create?: XOR<ReceiptCreateWithoutListInput, ReceiptUncheckedCreateWithoutListInput> | ReceiptCreateWithoutListInput[] | ReceiptUncheckedCreateWithoutListInput[]
    connectOrCreate?: ReceiptCreateOrConnectWithoutListInput | ReceiptCreateOrConnectWithoutListInput[]
    upsert?: ReceiptUpsertWithWhereUniqueWithoutListInput | ReceiptUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ReceiptCreateManyListInputEnvelope
    set?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    disconnect?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    delete?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    connect?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    update?: ReceiptUpdateWithWhereUniqueWithoutListInput | ReceiptUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ReceiptUpdateManyWithWhereWithoutListInput | ReceiptUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ReceiptScalarWhereInput | ReceiptScalarWhereInput[]
  }

  export type UserListAccessUpdateManyWithoutListNestedInput = {
    create?: XOR<UserListAccessCreateWithoutListInput, UserListAccessUncheckedCreateWithoutListInput> | UserListAccessCreateWithoutListInput[] | UserListAccessUncheckedCreateWithoutListInput[]
    connectOrCreate?: UserListAccessCreateOrConnectWithoutListInput | UserListAccessCreateOrConnectWithoutListInput[]
    upsert?: UserListAccessUpsertWithWhereUniqueWithoutListInput | UserListAccessUpsertWithWhereUniqueWithoutListInput[]
    createMany?: UserListAccessCreateManyListInputEnvelope
    set?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
    disconnect?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
    delete?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
    connect?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
    update?: UserListAccessUpdateWithWhereUniqueWithoutListInput | UserListAccessUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: UserListAccessUpdateManyWithWhereWithoutListInput | UserListAccessUpdateManyWithWhereWithoutListInput[]
    deleteMany?: UserListAccessScalarWhereInput | UserListAccessScalarWhereInput[]
  }

  export type ShoppingListShareUpdateManyWithoutListNestedInput = {
    create?: XOR<ShoppingListShareCreateWithoutListInput, ShoppingListShareUncheckedCreateWithoutListInput> | ShoppingListShareCreateWithoutListInput[] | ShoppingListShareUncheckedCreateWithoutListInput[]
    connectOrCreate?: ShoppingListShareCreateOrConnectWithoutListInput | ShoppingListShareCreateOrConnectWithoutListInput[]
    upsert?: ShoppingListShareUpsertWithWhereUniqueWithoutListInput | ShoppingListShareUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ShoppingListShareCreateManyListInputEnvelope
    set?: ShoppingListShareWhereUniqueInput | ShoppingListShareWhereUniqueInput[]
    disconnect?: ShoppingListShareWhereUniqueInput | ShoppingListShareWhereUniqueInput[]
    delete?: ShoppingListShareWhereUniqueInput | ShoppingListShareWhereUniqueInput[]
    connect?: ShoppingListShareWhereUniqueInput | ShoppingListShareWhereUniqueInput[]
    update?: ShoppingListShareUpdateWithWhereUniqueWithoutListInput | ShoppingListShareUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ShoppingListShareUpdateManyWithWhereWithoutListInput | ShoppingListShareUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ShoppingListShareScalarWhereInput | ShoppingListShareScalarWhereInput[]
  }

  export type ListInvitationUpdateManyWithoutListNestedInput = {
    create?: XOR<ListInvitationCreateWithoutListInput, ListInvitationUncheckedCreateWithoutListInput> | ListInvitationCreateWithoutListInput[] | ListInvitationUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListInvitationCreateOrConnectWithoutListInput | ListInvitationCreateOrConnectWithoutListInput[]
    upsert?: ListInvitationUpsertWithWhereUniqueWithoutListInput | ListInvitationUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ListInvitationCreateManyListInputEnvelope
    set?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
    disconnect?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
    delete?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
    connect?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
    update?: ListInvitationUpdateWithWhereUniqueWithoutListInput | ListInvitationUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ListInvitationUpdateManyWithWhereWithoutListInput | ListInvitationUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ListInvitationScalarWhereInput | ListInvitationScalarWhereInput[]
  }

  export type ListItemUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<ListItemCreateWithoutListInput, ListItemUncheckedCreateWithoutListInput> | ListItemCreateWithoutListInput[] | ListItemUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListItemCreateOrConnectWithoutListInput | ListItemCreateOrConnectWithoutListInput[]
    upsert?: ListItemUpsertWithWhereUniqueWithoutListInput | ListItemUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ListItemCreateManyListInputEnvelope
    set?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    disconnect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    delete?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    connect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    update?: ListItemUpdateWithWhereUniqueWithoutListInput | ListItemUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ListItemUpdateManyWithWhereWithoutListInput | ListItemUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ListItemScalarWhereInput | ListItemScalarWhereInput[]
  }

  export type ReceiptUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<ReceiptCreateWithoutListInput, ReceiptUncheckedCreateWithoutListInput> | ReceiptCreateWithoutListInput[] | ReceiptUncheckedCreateWithoutListInput[]
    connectOrCreate?: ReceiptCreateOrConnectWithoutListInput | ReceiptCreateOrConnectWithoutListInput[]
    upsert?: ReceiptUpsertWithWhereUniqueWithoutListInput | ReceiptUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ReceiptCreateManyListInputEnvelope
    set?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    disconnect?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    delete?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    connect?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    update?: ReceiptUpdateWithWhereUniqueWithoutListInput | ReceiptUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ReceiptUpdateManyWithWhereWithoutListInput | ReceiptUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ReceiptScalarWhereInput | ReceiptScalarWhereInput[]
  }

  export type UserListAccessUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<UserListAccessCreateWithoutListInput, UserListAccessUncheckedCreateWithoutListInput> | UserListAccessCreateWithoutListInput[] | UserListAccessUncheckedCreateWithoutListInput[]
    connectOrCreate?: UserListAccessCreateOrConnectWithoutListInput | UserListAccessCreateOrConnectWithoutListInput[]
    upsert?: UserListAccessUpsertWithWhereUniqueWithoutListInput | UserListAccessUpsertWithWhereUniqueWithoutListInput[]
    createMany?: UserListAccessCreateManyListInputEnvelope
    set?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
    disconnect?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
    delete?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
    connect?: UserListAccessWhereUniqueInput | UserListAccessWhereUniqueInput[]
    update?: UserListAccessUpdateWithWhereUniqueWithoutListInput | UserListAccessUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: UserListAccessUpdateManyWithWhereWithoutListInput | UserListAccessUpdateManyWithWhereWithoutListInput[]
    deleteMany?: UserListAccessScalarWhereInput | UserListAccessScalarWhereInput[]
  }

  export type ShoppingListShareUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<ShoppingListShareCreateWithoutListInput, ShoppingListShareUncheckedCreateWithoutListInput> | ShoppingListShareCreateWithoutListInput[] | ShoppingListShareUncheckedCreateWithoutListInput[]
    connectOrCreate?: ShoppingListShareCreateOrConnectWithoutListInput | ShoppingListShareCreateOrConnectWithoutListInput[]
    upsert?: ShoppingListShareUpsertWithWhereUniqueWithoutListInput | ShoppingListShareUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ShoppingListShareCreateManyListInputEnvelope
    set?: ShoppingListShareWhereUniqueInput | ShoppingListShareWhereUniqueInput[]
    disconnect?: ShoppingListShareWhereUniqueInput | ShoppingListShareWhereUniqueInput[]
    delete?: ShoppingListShareWhereUniqueInput | ShoppingListShareWhereUniqueInput[]
    connect?: ShoppingListShareWhereUniqueInput | ShoppingListShareWhereUniqueInput[]
    update?: ShoppingListShareUpdateWithWhereUniqueWithoutListInput | ShoppingListShareUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ShoppingListShareUpdateManyWithWhereWithoutListInput | ShoppingListShareUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ShoppingListShareScalarWhereInput | ShoppingListShareScalarWhereInput[]
  }

  export type ListInvitationUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<ListInvitationCreateWithoutListInput, ListInvitationUncheckedCreateWithoutListInput> | ListInvitationCreateWithoutListInput[] | ListInvitationUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListInvitationCreateOrConnectWithoutListInput | ListInvitationCreateOrConnectWithoutListInput[]
    upsert?: ListInvitationUpsertWithWhereUniqueWithoutListInput | ListInvitationUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ListInvitationCreateManyListInputEnvelope
    set?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
    disconnect?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
    delete?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
    connect?: ListInvitationWhereUniqueInput | ListInvitationWhereUniqueInput[]
    update?: ListInvitationUpdateWithWhereUniqueWithoutListInput | ListInvitationUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ListInvitationUpdateManyWithWhereWithoutListInput | ListInvitationUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ListInvitationScalarWhereInput | ListInvitationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccessesInput = {
    create?: XOR<UserCreateWithoutAccessesInput, UserUncheckedCreateWithoutAccessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessesInput
    connect?: UserWhereUniqueInput
  }

  export type ShoppingListCreateNestedOneWithoutAccessesInput = {
    create?: XOR<ShoppingListCreateWithoutAccessesInput, ShoppingListUncheckedCreateWithoutAccessesInput>
    connectOrCreate?: ShoppingListCreateOrConnectWithoutAccessesInput
    connect?: ShoppingListWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInvitedAccessInput = {
    create?: XOR<UserCreateWithoutInvitedAccessInput, UserUncheckedCreateWithoutInvitedAccessInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitedAccessInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserUpdateOneRequiredWithoutAccessesNestedInput = {
    create?: XOR<UserCreateWithoutAccessesInput, UserUncheckedCreateWithoutAccessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessesInput
    upsert?: UserUpsertWithoutAccessesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccessesInput, UserUpdateWithoutAccessesInput>, UserUncheckedUpdateWithoutAccessesInput>
  }

  export type ShoppingListUpdateOneRequiredWithoutAccessesNestedInput = {
    create?: XOR<ShoppingListCreateWithoutAccessesInput, ShoppingListUncheckedCreateWithoutAccessesInput>
    connectOrCreate?: ShoppingListCreateOrConnectWithoutAccessesInput
    upsert?: ShoppingListUpsertWithoutAccessesInput
    connect?: ShoppingListWhereUniqueInput
    update?: XOR<XOR<ShoppingListUpdateToOneWithWhereWithoutAccessesInput, ShoppingListUpdateWithoutAccessesInput>, ShoppingListUncheckedUpdateWithoutAccessesInput>
  }

  export type UserUpdateOneWithoutInvitedAccessNestedInput = {
    create?: XOR<UserCreateWithoutInvitedAccessInput, UserUncheckedCreateWithoutInvitedAccessInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitedAccessInput
    upsert?: UserUpsertWithoutInvitedAccessInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvitedAccessInput, UserUpdateWithoutInvitedAccessInput>, UserUncheckedUpdateWithoutInvitedAccessInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ListItemCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ListItemCreateWithoutCategoryInput, ListItemUncheckedCreateWithoutCategoryInput> | ListItemCreateWithoutCategoryInput[] | ListItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ListItemCreateOrConnectWithoutCategoryInput | ListItemCreateOrConnectWithoutCategoryInput[]
    createMany?: ListItemCreateManyCategoryInputEnvelope
    connect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ExpenseCreateWithoutCategoryInput, ExpenseUncheckedCreateWithoutCategoryInput> | ExpenseCreateWithoutCategoryInput[] | ExpenseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCategoryInput | ExpenseCreateOrConnectWithoutCategoryInput[]
    createMany?: ExpenseCreateManyCategoryInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ListItemUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ListItemCreateWithoutCategoryInput, ListItemUncheckedCreateWithoutCategoryInput> | ListItemCreateWithoutCategoryInput[] | ListItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ListItemCreateOrConnectWithoutCategoryInput | ListItemCreateOrConnectWithoutCategoryInput[]
    createMany?: ListItemCreateManyCategoryInputEnvelope
    connect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ExpenseCreateWithoutCategoryInput, ExpenseUncheckedCreateWithoutCategoryInput> | ExpenseCreateWithoutCategoryInput[] | ExpenseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCategoryInput | ExpenseCreateOrConnectWithoutCategoryInput[]
    createMany?: ExpenseCreateManyCategoryInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ListItemUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ListItemCreateWithoutCategoryInput, ListItemUncheckedCreateWithoutCategoryInput> | ListItemCreateWithoutCategoryInput[] | ListItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ListItemCreateOrConnectWithoutCategoryInput | ListItemCreateOrConnectWithoutCategoryInput[]
    upsert?: ListItemUpsertWithWhereUniqueWithoutCategoryInput | ListItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ListItemCreateManyCategoryInputEnvelope
    set?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    disconnect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    delete?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    connect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    update?: ListItemUpdateWithWhereUniqueWithoutCategoryInput | ListItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ListItemUpdateManyWithWhereWithoutCategoryInput | ListItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ListItemScalarWhereInput | ListItemScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ExpenseCreateWithoutCategoryInput, ExpenseUncheckedCreateWithoutCategoryInput> | ExpenseCreateWithoutCategoryInput[] | ExpenseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCategoryInput | ExpenseCreateOrConnectWithoutCategoryInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutCategoryInput | ExpenseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ExpenseCreateManyCategoryInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutCategoryInput | ExpenseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutCategoryInput | ExpenseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ListItemUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ListItemCreateWithoutCategoryInput, ListItemUncheckedCreateWithoutCategoryInput> | ListItemCreateWithoutCategoryInput[] | ListItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ListItemCreateOrConnectWithoutCategoryInput | ListItemCreateOrConnectWithoutCategoryInput[]
    upsert?: ListItemUpsertWithWhereUniqueWithoutCategoryInput | ListItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ListItemCreateManyCategoryInputEnvelope
    set?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    disconnect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    delete?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    connect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    update?: ListItemUpdateWithWhereUniqueWithoutCategoryInput | ListItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ListItemUpdateManyWithWhereWithoutCategoryInput | ListItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ListItemScalarWhereInput | ListItemScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ExpenseCreateWithoutCategoryInput, ExpenseUncheckedCreateWithoutCategoryInput> | ExpenseCreateWithoutCategoryInput[] | ExpenseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCategoryInput | ExpenseCreateOrConnectWithoutCategoryInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutCategoryInput | ExpenseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ExpenseCreateManyCategoryInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutCategoryInput | ExpenseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutCategoryInput | ExpenseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ShoppingListCreateNestedOneWithoutItemsInput = {
    create?: XOR<ShoppingListCreateWithoutItemsInput, ShoppingListUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ShoppingListCreateOrConnectWithoutItemsInput
    connect?: ShoppingListWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutItemsInput = {
    create?: XOR<CategoryCreateWithoutItemsInput, CategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutItemsInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCheckedItemsInput = {
    create?: XOR<UserCreateWithoutCheckedItemsInput, UserUncheckedCreateWithoutCheckedItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheckedItemsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableEnumSourceFieldUpdateOperationsInput = {
    set?: $Enums.Source | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ShoppingListUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ShoppingListCreateWithoutItemsInput, ShoppingListUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ShoppingListCreateOrConnectWithoutItemsInput
    upsert?: ShoppingListUpsertWithoutItemsInput
    connect?: ShoppingListWhereUniqueInput
    update?: XOR<XOR<ShoppingListUpdateToOneWithWhereWithoutItemsInput, ShoppingListUpdateWithoutItemsInput>, ShoppingListUncheckedUpdateWithoutItemsInput>
  }

  export type CategoryUpdateOneWithoutItemsNestedInput = {
    create?: XOR<CategoryCreateWithoutItemsInput, CategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutItemsInput
    upsert?: CategoryUpsertWithoutItemsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutItemsInput, CategoryUpdateWithoutItemsInput>, CategoryUncheckedUpdateWithoutItemsInput>
  }

  export type UserUpdateOneWithoutCheckedItemsNestedInput = {
    create?: XOR<UserCreateWithoutCheckedItemsInput, UserUncheckedCreateWithoutCheckedItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheckedItemsInput
    upsert?: UserUpsertWithoutCheckedItemsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCheckedItemsInput, UserUpdateWithoutCheckedItemsInput>, UserUncheckedUpdateWithoutCheckedItemsInput>
  }

  export type ShoppingListCreateNestedOneWithoutReceiptsInput = {
    create?: XOR<ShoppingListCreateWithoutReceiptsInput, ShoppingListUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: ShoppingListCreateOrConnectWithoutReceiptsInput
    connect?: ShoppingListWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceiptsInput = {
    create?: XOR<UserCreateWithoutReceiptsInput, UserUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceiptsInput
    connect?: UserWhereUniqueInput
  }

  export type ReceiptItemCreateNestedManyWithoutReceiptInput = {
    create?: XOR<ReceiptItemCreateWithoutReceiptInput, ReceiptItemUncheckedCreateWithoutReceiptInput> | ReceiptItemCreateWithoutReceiptInput[] | ReceiptItemUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: ReceiptItemCreateOrConnectWithoutReceiptInput | ReceiptItemCreateOrConnectWithoutReceiptInput[]
    createMany?: ReceiptItemCreateManyReceiptInputEnvelope
    connect?: ReceiptItemWhereUniqueInput | ReceiptItemWhereUniqueInput[]
  }

  export type ReceiptItemUncheckedCreateNestedManyWithoutReceiptInput = {
    create?: XOR<ReceiptItemCreateWithoutReceiptInput, ReceiptItemUncheckedCreateWithoutReceiptInput> | ReceiptItemCreateWithoutReceiptInput[] | ReceiptItemUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: ReceiptItemCreateOrConnectWithoutReceiptInput | ReceiptItemCreateOrConnectWithoutReceiptInput[]
    createMany?: ReceiptItemCreateManyReceiptInputEnvelope
    connect?: ReceiptItemWhereUniqueInput | ReceiptItemWhereUniqueInput[]
  }

  export type NullableEnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod | null
  }

  export type ShoppingListUpdateOneWithoutReceiptsNestedInput = {
    create?: XOR<ShoppingListCreateWithoutReceiptsInput, ShoppingListUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: ShoppingListCreateOrConnectWithoutReceiptsInput
    upsert?: ShoppingListUpsertWithoutReceiptsInput
    disconnect?: ShoppingListWhereInput | boolean
    delete?: ShoppingListWhereInput | boolean
    connect?: ShoppingListWhereUniqueInput
    update?: XOR<XOR<ShoppingListUpdateToOneWithWhereWithoutReceiptsInput, ShoppingListUpdateWithoutReceiptsInput>, ShoppingListUncheckedUpdateWithoutReceiptsInput>
  }

  export type UserUpdateOneRequiredWithoutReceiptsNestedInput = {
    create?: XOR<UserCreateWithoutReceiptsInput, UserUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceiptsInput
    upsert?: UserUpsertWithoutReceiptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceiptsInput, UserUpdateWithoutReceiptsInput>, UserUncheckedUpdateWithoutReceiptsInput>
  }

  export type ReceiptItemUpdateManyWithoutReceiptNestedInput = {
    create?: XOR<ReceiptItemCreateWithoutReceiptInput, ReceiptItemUncheckedCreateWithoutReceiptInput> | ReceiptItemCreateWithoutReceiptInput[] | ReceiptItemUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: ReceiptItemCreateOrConnectWithoutReceiptInput | ReceiptItemCreateOrConnectWithoutReceiptInput[]
    upsert?: ReceiptItemUpsertWithWhereUniqueWithoutReceiptInput | ReceiptItemUpsertWithWhereUniqueWithoutReceiptInput[]
    createMany?: ReceiptItemCreateManyReceiptInputEnvelope
    set?: ReceiptItemWhereUniqueInput | ReceiptItemWhereUniqueInput[]
    disconnect?: ReceiptItemWhereUniqueInput | ReceiptItemWhereUniqueInput[]
    delete?: ReceiptItemWhereUniqueInput | ReceiptItemWhereUniqueInput[]
    connect?: ReceiptItemWhereUniqueInput | ReceiptItemWhereUniqueInput[]
    update?: ReceiptItemUpdateWithWhereUniqueWithoutReceiptInput | ReceiptItemUpdateWithWhereUniqueWithoutReceiptInput[]
    updateMany?: ReceiptItemUpdateManyWithWhereWithoutReceiptInput | ReceiptItemUpdateManyWithWhereWithoutReceiptInput[]
    deleteMany?: ReceiptItemScalarWhereInput | ReceiptItemScalarWhereInput[]
  }

  export type ReceiptItemUncheckedUpdateManyWithoutReceiptNestedInput = {
    create?: XOR<ReceiptItemCreateWithoutReceiptInput, ReceiptItemUncheckedCreateWithoutReceiptInput> | ReceiptItemCreateWithoutReceiptInput[] | ReceiptItemUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: ReceiptItemCreateOrConnectWithoutReceiptInput | ReceiptItemCreateOrConnectWithoutReceiptInput[]
    upsert?: ReceiptItemUpsertWithWhereUniqueWithoutReceiptInput | ReceiptItemUpsertWithWhereUniqueWithoutReceiptInput[]
    createMany?: ReceiptItemCreateManyReceiptInputEnvelope
    set?: ReceiptItemWhereUniqueInput | ReceiptItemWhereUniqueInput[]
    disconnect?: ReceiptItemWhereUniqueInput | ReceiptItemWhereUniqueInput[]
    delete?: ReceiptItemWhereUniqueInput | ReceiptItemWhereUniqueInput[]
    connect?: ReceiptItemWhereUniqueInput | ReceiptItemWhereUniqueInput[]
    update?: ReceiptItemUpdateWithWhereUniqueWithoutReceiptInput | ReceiptItemUpdateWithWhereUniqueWithoutReceiptInput[]
    updateMany?: ReceiptItemUpdateManyWithWhereWithoutReceiptInput | ReceiptItemUpdateManyWithWhereWithoutReceiptInput[]
    deleteMany?: ReceiptItemScalarWhereInput | ReceiptItemScalarWhereInput[]
  }

  export type ReceiptCreateNestedOneWithoutItemsInput = {
    create?: XOR<ReceiptCreateWithoutItemsInput, ReceiptUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ReceiptCreateOrConnectWithoutItemsInput
    connect?: ReceiptWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ReceiptUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ReceiptCreateWithoutItemsInput, ReceiptUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ReceiptCreateOrConnectWithoutItemsInput
    upsert?: ReceiptUpsertWithoutItemsInput
    connect?: ReceiptWhereUniqueInput
    update?: XOR<XOR<ReceiptUpdateToOneWithWhereWithoutItemsInput, ReceiptUpdateWithoutItemsInput>, ReceiptUncheckedUpdateWithoutItemsInput>
  }

  export type UserCreateNestedOneWithoutExpensesInput = {
    create?: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutExpensesInput = {
    create?: XOR<CategoryCreateWithoutExpensesInput, CategoryUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutExpensesInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput
    upsert?: UserUpsertWithoutExpensesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExpensesInput, UserUpdateWithoutExpensesInput>, UserUncheckedUpdateWithoutExpensesInput>
  }

  export type CategoryUpdateOneWithoutExpensesNestedInput = {
    create?: XOR<CategoryCreateWithoutExpensesInput, CategoryUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutExpensesInput
    upsert?: CategoryUpsertWithoutExpensesInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutExpensesInput, CategoryUpdateWithoutExpensesInput>, CategoryUncheckedUpdateWithoutExpensesInput>
  }

  export type ShoppingListCreateNestedOneWithoutSharedWithInput = {
    create?: XOR<ShoppingListCreateWithoutSharedWithInput, ShoppingListUncheckedCreateWithoutSharedWithInput>
    connectOrCreate?: ShoppingListCreateOrConnectWithoutSharedWithInput
    connect?: ShoppingListWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSharedListsInput = {
    create?: XOR<UserCreateWithoutSharedListsInput, UserUncheckedCreateWithoutSharedListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedListsInput
    connect?: UserWhereUniqueInput
  }

  export type ShoppingListUpdateOneRequiredWithoutSharedWithNestedInput = {
    create?: XOR<ShoppingListCreateWithoutSharedWithInput, ShoppingListUncheckedCreateWithoutSharedWithInput>
    connectOrCreate?: ShoppingListCreateOrConnectWithoutSharedWithInput
    upsert?: ShoppingListUpsertWithoutSharedWithInput
    connect?: ShoppingListWhereUniqueInput
    update?: XOR<XOR<ShoppingListUpdateToOneWithWhereWithoutSharedWithInput, ShoppingListUpdateWithoutSharedWithInput>, ShoppingListUncheckedUpdateWithoutSharedWithInput>
  }

  export type UserUpdateOneRequiredWithoutSharedListsNestedInput = {
    create?: XOR<UserCreateWithoutSharedListsInput, UserUncheckedCreateWithoutSharedListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedListsInput
    upsert?: UserUpsertWithoutSharedListsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSharedListsInput, UserUpdateWithoutSharedListsInput>, UserUncheckedUpdateWithoutSharedListsInput>
  }

  export type ShoppingListCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<ShoppingListCreateWithoutInvitationsInput, ShoppingListUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: ShoppingListCreateOrConnectWithoutInvitationsInput
    connect?: ShoppingListWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedInvitationsInput = {
    create?: XOR<UserCreateWithoutCreatedInvitationsInput, UserUncheckedCreateWithoutCreatedInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedInvitationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUsedInvitationsInput = {
    create?: XOR<UserCreateWithoutUsedInvitationsInput, UserUncheckedCreateWithoutUsedInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsedInvitationsInput
    connect?: UserWhereUniqueInput
  }

  export type ShoppingListUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<ShoppingListCreateWithoutInvitationsInput, ShoppingListUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: ShoppingListCreateOrConnectWithoutInvitationsInput
    upsert?: ShoppingListUpsertWithoutInvitationsInput
    connect?: ShoppingListWhereUniqueInput
    update?: XOR<XOR<ShoppingListUpdateToOneWithWhereWithoutInvitationsInput, ShoppingListUpdateWithoutInvitationsInput>, ShoppingListUncheckedUpdateWithoutInvitationsInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedInvitationsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedInvitationsInput, UserUncheckedCreateWithoutCreatedInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedInvitationsInput
    upsert?: UserUpsertWithoutCreatedInvitationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedInvitationsInput, UserUpdateWithoutCreatedInvitationsInput>, UserUncheckedUpdateWithoutCreatedInvitationsInput>
  }

  export type UserUpdateOneWithoutUsedInvitationsNestedInput = {
    create?: XOR<UserCreateWithoutUsedInvitationsInput, UserUncheckedCreateWithoutUsedInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsedInvitationsInput
    upsert?: UserUpsertWithoutUsedInvitationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUsedInvitationsInput, UserUpdateWithoutUsedInvitationsInput>, UserUncheckedUpdateWithoutUsedInvitationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumSourceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Source | EnumSourceFieldRefInput<$PrismaModel> | null
    in?: $Enums.Source[] | ListEnumSourceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Source[] | ListEnumSourceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSourceNullableFilter<$PrismaModel> | $Enums.Source | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumSourceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Source | EnumSourceFieldRefInput<$PrismaModel> | null
    in?: $Enums.Source[] | ListEnumSourceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Source[] | ListEnumSourceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSourceNullableWithAggregatesFilter<$PrismaModel> | $Enums.Source | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSourceNullableFilter<$PrismaModel>
    _max?: NestedEnumSourceNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableFilter<$PrismaModel> | $Enums.PaymentMethod | null
  }

  export type NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ShoppingListCreateWithoutOwnerInput = {
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_shared?: boolean
    items?: ListItemCreateNestedManyWithoutListInput
    receipts?: ReceiptCreateNestedManyWithoutListInput
    accesses?: UserListAccessCreateNestedManyWithoutListInput
    sharedWith?: ShoppingListShareCreateNestedManyWithoutListInput
    invitations?: ListInvitationCreateNestedManyWithoutListInput
  }

  export type ShoppingListUncheckedCreateWithoutOwnerInput = {
    list_id?: number
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_shared?: boolean
    items?: ListItemUncheckedCreateNestedManyWithoutListInput
    receipts?: ReceiptUncheckedCreateNestedManyWithoutListInput
    accesses?: UserListAccessUncheckedCreateNestedManyWithoutListInput
    sharedWith?: ShoppingListShareUncheckedCreateNestedManyWithoutListInput
    invitations?: ListInvitationUncheckedCreateNestedManyWithoutListInput
  }

  export type ShoppingListCreateOrConnectWithoutOwnerInput = {
    where: ShoppingListWhereUniqueInput
    create: XOR<ShoppingListCreateWithoutOwnerInput, ShoppingListUncheckedCreateWithoutOwnerInput>
  }

  export type ShoppingListCreateManyOwnerInputEnvelope = {
    data: ShoppingListCreateManyOwnerInput | ShoppingListCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type UserListAccessCreateWithoutUserInput = {
    role: $Enums.Role
    joined_at?: Date | string
    list: ShoppingListCreateNestedOneWithoutAccessesInput
    invitedBy?: UserCreateNestedOneWithoutInvitedAccessInput
  }

  export type UserListAccessUncheckedCreateWithoutUserInput = {
    access_id?: number
    list_id: number
    role: $Enums.Role
    invited_by?: number | null
    joined_at?: Date | string
  }

  export type UserListAccessCreateOrConnectWithoutUserInput = {
    where: UserListAccessWhereUniqueInput
    create: XOR<UserListAccessCreateWithoutUserInput, UserListAccessUncheckedCreateWithoutUserInput>
  }

  export type UserListAccessCreateManyUserInputEnvelope = {
    data: UserListAccessCreateManyUserInput | UserListAccessCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserListAccessCreateWithoutInvitedByInput = {
    role: $Enums.Role
    joined_at?: Date | string
    user: UserCreateNestedOneWithoutAccessesInput
    list: ShoppingListCreateNestedOneWithoutAccessesInput
  }

  export type UserListAccessUncheckedCreateWithoutInvitedByInput = {
    access_id?: number
    user_id: number
    list_id: number
    role: $Enums.Role
    joined_at?: Date | string
  }

  export type UserListAccessCreateOrConnectWithoutInvitedByInput = {
    where: UserListAccessWhereUniqueInput
    create: XOR<UserListAccessCreateWithoutInvitedByInput, UserListAccessUncheckedCreateWithoutInvitedByInput>
  }

  export type UserListAccessCreateManyInvitedByInputEnvelope = {
    data: UserListAccessCreateManyInvitedByInput | UserListAccessCreateManyInvitedByInput[]
    skipDuplicates?: boolean
  }

  export type ReceiptCreateWithoutUserInput = {
    store_name?: string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    receipt_date?: Date | string | null
    payment_method?: $Enums.PaymentMethod | null
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    image_url?: string | null
    ocr_text?: string | null
    processed?: boolean
    uploaded_at?: Date | string
    list?: ShoppingListCreateNestedOneWithoutReceiptsInput
    items?: ReceiptItemCreateNestedManyWithoutReceiptInput
  }

  export type ReceiptUncheckedCreateWithoutUserInput = {
    receipt_id?: number
    list_id?: number | null
    store_name?: string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    receipt_date?: Date | string | null
    payment_method?: $Enums.PaymentMethod | null
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    image_url?: string | null
    ocr_text?: string | null
    processed?: boolean
    uploaded_at?: Date | string
    items?: ReceiptItemUncheckedCreateNestedManyWithoutReceiptInput
  }

  export type ReceiptCreateOrConnectWithoutUserInput = {
    where: ReceiptWhereUniqueInput
    create: XOR<ReceiptCreateWithoutUserInput, ReceiptUncheckedCreateWithoutUserInput>
  }

  export type ReceiptCreateManyUserInputEnvelope = {
    data: ReceiptCreateManyUserInput | ReceiptCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutUserInput = {
    total_amount: Decimal | DecimalJsLike | number | string
    month: number
    year: number
    created_at?: Date | string
    category?: CategoryCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateWithoutUserInput = {
    expense_id?: number
    category_id?: number | null
    total_amount: Decimal | DecimalJsLike | number | string
    month: number
    year: number
    created_at?: Date | string
  }

  export type ExpenseCreateOrConnectWithoutUserInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput>
  }

  export type ExpenseCreateManyUserInputEnvelope = {
    data: ExpenseCreateManyUserInput | ExpenseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ListItemCreateWithoutCheckedByInput = {
    name: string
    quantity?: number
    price?: Decimal | DecimalJsLike | number | string | null
    source?: $Enums.Source | null
    is_checked?: boolean
    created_at?: Date | string
    checkedAt?: Date | string | null
    list: ShoppingListCreateNestedOneWithoutItemsInput
    category?: CategoryCreateNestedOneWithoutItemsInput
  }

  export type ListItemUncheckedCreateWithoutCheckedByInput = {
    item_id?: number
    list_id: number
    category_id?: number | null
    name: string
    quantity?: number
    price?: Decimal | DecimalJsLike | number | string | null
    source?: $Enums.Source | null
    is_checked?: boolean
    created_at?: Date | string
    checkedAt?: Date | string | null
  }

  export type ListItemCreateOrConnectWithoutCheckedByInput = {
    where: ListItemWhereUniqueInput
    create: XOR<ListItemCreateWithoutCheckedByInput, ListItemUncheckedCreateWithoutCheckedByInput>
  }

  export type ListItemCreateManyCheckedByInputEnvelope = {
    data: ListItemCreateManyCheckedByInput | ListItemCreateManyCheckedByInput[]
    skipDuplicates?: boolean
  }

  export type ShoppingListShareCreateWithoutUserInput = {
    role: $Enums.Role
    list: ShoppingListCreateNestedOneWithoutSharedWithInput
  }

  export type ShoppingListShareUncheckedCreateWithoutUserInput = {
    id?: number
    list_id: number
    role: $Enums.Role
  }

  export type ShoppingListShareCreateOrConnectWithoutUserInput = {
    where: ShoppingListShareWhereUniqueInput
    create: XOR<ShoppingListShareCreateWithoutUserInput, ShoppingListShareUncheckedCreateWithoutUserInput>
  }

  export type ShoppingListShareCreateManyUserInputEnvelope = {
    data: ShoppingListShareCreateManyUserInput | ShoppingListShareCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ListInvitationCreateWithoutInviterInput = {
    invite_code: string
    role?: $Enums.Role
    expires_at: Date | string
    is_used?: boolean
    created_at?: Date | string
    used_at?: Date | string | null
    max_uses?: number
    uses_count?: number
    list: ShoppingListCreateNestedOneWithoutInvitationsInput
    usedByUser?: UserCreateNestedOneWithoutUsedInvitationsInput
  }

  export type ListInvitationUncheckedCreateWithoutInviterInput = {
    invitation_id?: number
    list_id: number
    invite_code: string
    role?: $Enums.Role
    expires_at: Date | string
    is_used?: boolean
    used_by?: number | null
    created_at?: Date | string
    used_at?: Date | string | null
    max_uses?: number
    uses_count?: number
  }

  export type ListInvitationCreateOrConnectWithoutInviterInput = {
    where: ListInvitationWhereUniqueInput
    create: XOR<ListInvitationCreateWithoutInviterInput, ListInvitationUncheckedCreateWithoutInviterInput>
  }

  export type ListInvitationCreateManyInviterInputEnvelope = {
    data: ListInvitationCreateManyInviterInput | ListInvitationCreateManyInviterInput[]
    skipDuplicates?: boolean
  }

  export type ListInvitationCreateWithoutUsedByUserInput = {
    invite_code: string
    role?: $Enums.Role
    expires_at: Date | string
    is_used?: boolean
    created_at?: Date | string
    used_at?: Date | string | null
    max_uses?: number
    uses_count?: number
    list: ShoppingListCreateNestedOneWithoutInvitationsInput
    inviter: UserCreateNestedOneWithoutCreatedInvitationsInput
  }

  export type ListInvitationUncheckedCreateWithoutUsedByUserInput = {
    invitation_id?: number
    list_id: number
    invited_by: number
    invite_code: string
    role?: $Enums.Role
    expires_at: Date | string
    is_used?: boolean
    created_at?: Date | string
    used_at?: Date | string | null
    max_uses?: number
    uses_count?: number
  }

  export type ListInvitationCreateOrConnectWithoutUsedByUserInput = {
    where: ListInvitationWhereUniqueInput
    create: XOR<ListInvitationCreateWithoutUsedByUserInput, ListInvitationUncheckedCreateWithoutUsedByUserInput>
  }

  export type ListInvitationCreateManyUsedByUserInputEnvelope = {
    data: ListInvitationCreateManyUsedByUserInput | ListInvitationCreateManyUsedByUserInput[]
    skipDuplicates?: boolean
  }

  export type ShoppingListUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ShoppingListWhereUniqueInput
    update: XOR<ShoppingListUpdateWithoutOwnerInput, ShoppingListUncheckedUpdateWithoutOwnerInput>
    create: XOR<ShoppingListCreateWithoutOwnerInput, ShoppingListUncheckedCreateWithoutOwnerInput>
  }

  export type ShoppingListUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ShoppingListWhereUniqueInput
    data: XOR<ShoppingListUpdateWithoutOwnerInput, ShoppingListUncheckedUpdateWithoutOwnerInput>
  }

  export type ShoppingListUpdateManyWithWhereWithoutOwnerInput = {
    where: ShoppingListScalarWhereInput
    data: XOR<ShoppingListUpdateManyMutationInput, ShoppingListUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ShoppingListScalarWhereInput = {
    AND?: ShoppingListScalarWhereInput | ShoppingListScalarWhereInput[]
    OR?: ShoppingListScalarWhereInput[]
    NOT?: ShoppingListScalarWhereInput | ShoppingListScalarWhereInput[]
    list_id?: IntFilter<"ShoppingList"> | number
    owner_id?: IntFilter<"ShoppingList"> | number
    name?: StringNullableFilter<"ShoppingList"> | string | null
    created_at?: DateTimeFilter<"ShoppingList"> | Date | string
    updated_at?: DateTimeFilter<"ShoppingList"> | Date | string
    is_shared?: BoolFilter<"ShoppingList"> | boolean
  }

  export type UserListAccessUpsertWithWhereUniqueWithoutUserInput = {
    where: UserListAccessWhereUniqueInput
    update: XOR<UserListAccessUpdateWithoutUserInput, UserListAccessUncheckedUpdateWithoutUserInput>
    create: XOR<UserListAccessCreateWithoutUserInput, UserListAccessUncheckedCreateWithoutUserInput>
  }

  export type UserListAccessUpdateWithWhereUniqueWithoutUserInput = {
    where: UserListAccessWhereUniqueInput
    data: XOR<UserListAccessUpdateWithoutUserInput, UserListAccessUncheckedUpdateWithoutUserInput>
  }

  export type UserListAccessUpdateManyWithWhereWithoutUserInput = {
    where: UserListAccessScalarWhereInput
    data: XOR<UserListAccessUpdateManyMutationInput, UserListAccessUncheckedUpdateManyWithoutUserInput>
  }

  export type UserListAccessScalarWhereInput = {
    AND?: UserListAccessScalarWhereInput | UserListAccessScalarWhereInput[]
    OR?: UserListAccessScalarWhereInput[]
    NOT?: UserListAccessScalarWhereInput | UserListAccessScalarWhereInput[]
    access_id?: IntFilter<"UserListAccess"> | number
    user_id?: IntFilter<"UserListAccess"> | number
    list_id?: IntFilter<"UserListAccess"> | number
    role?: EnumRoleFilter<"UserListAccess"> | $Enums.Role
    invited_by?: IntNullableFilter<"UserListAccess"> | number | null
    joined_at?: DateTimeFilter<"UserListAccess"> | Date | string
  }

  export type UserListAccessUpsertWithWhereUniqueWithoutInvitedByInput = {
    where: UserListAccessWhereUniqueInput
    update: XOR<UserListAccessUpdateWithoutInvitedByInput, UserListAccessUncheckedUpdateWithoutInvitedByInput>
    create: XOR<UserListAccessCreateWithoutInvitedByInput, UserListAccessUncheckedCreateWithoutInvitedByInput>
  }

  export type UserListAccessUpdateWithWhereUniqueWithoutInvitedByInput = {
    where: UserListAccessWhereUniqueInput
    data: XOR<UserListAccessUpdateWithoutInvitedByInput, UserListAccessUncheckedUpdateWithoutInvitedByInput>
  }

  export type UserListAccessUpdateManyWithWhereWithoutInvitedByInput = {
    where: UserListAccessScalarWhereInput
    data: XOR<UserListAccessUpdateManyMutationInput, UserListAccessUncheckedUpdateManyWithoutInvitedByInput>
  }

  export type ReceiptUpsertWithWhereUniqueWithoutUserInput = {
    where: ReceiptWhereUniqueInput
    update: XOR<ReceiptUpdateWithoutUserInput, ReceiptUncheckedUpdateWithoutUserInput>
    create: XOR<ReceiptCreateWithoutUserInput, ReceiptUncheckedCreateWithoutUserInput>
  }

  export type ReceiptUpdateWithWhereUniqueWithoutUserInput = {
    where: ReceiptWhereUniqueInput
    data: XOR<ReceiptUpdateWithoutUserInput, ReceiptUncheckedUpdateWithoutUserInput>
  }

  export type ReceiptUpdateManyWithWhereWithoutUserInput = {
    where: ReceiptScalarWhereInput
    data: XOR<ReceiptUpdateManyMutationInput, ReceiptUncheckedUpdateManyWithoutUserInput>
  }

  export type ReceiptScalarWhereInput = {
    AND?: ReceiptScalarWhereInput | ReceiptScalarWhereInput[]
    OR?: ReceiptScalarWhereInput[]
    NOT?: ReceiptScalarWhereInput | ReceiptScalarWhereInput[]
    receipt_id?: IntFilter<"Receipt"> | number
    list_id?: IntNullableFilter<"Receipt"> | number | null
    user_id?: IntFilter<"Receipt"> | number
    store_name?: StringNullableFilter<"Receipt"> | string | null
    total_amount?: DecimalNullableFilter<"Receipt"> | Decimal | DecimalJsLike | number | string | null
    subtotal?: DecimalNullableFilter<"Receipt"> | Decimal | DecimalJsLike | number | string | null
    receipt_date?: DateTimeNullableFilter<"Receipt"> | Date | string | null
    payment_method?: EnumPaymentMethodNullableFilter<"Receipt"> | $Enums.PaymentMethod | null
    tax_rate?: DecimalNullableFilter<"Receipt"> | Decimal | DecimalJsLike | number | string | null
    tax_amount?: DecimalNullableFilter<"Receipt"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringFilter<"Receipt"> | string
    image_url?: StringNullableFilter<"Receipt"> | string | null
    ocr_text?: StringNullableFilter<"Receipt"> | string | null
    processed?: BoolFilter<"Receipt"> | boolean
    uploaded_at?: DateTimeFilter<"Receipt"> | Date | string
  }

  export type ExpenseUpsertWithWhereUniqueWithoutUserInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutUserInput, ExpenseUncheckedUpdateWithoutUserInput>
    create: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutUserInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutUserInput, ExpenseUncheckedUpdateWithoutUserInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutUserInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutUserInput>
  }

  export type ExpenseScalarWhereInput = {
    AND?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    OR?: ExpenseScalarWhereInput[]
    NOT?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    expense_id?: IntFilter<"Expense"> | number
    user_id?: IntFilter<"Expense"> | number
    category_id?: IntNullableFilter<"Expense"> | number | null
    total_amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    month?: IntFilter<"Expense"> | number
    year?: IntFilter<"Expense"> | number
    created_at?: DateTimeFilter<"Expense"> | Date | string
  }

  export type ListItemUpsertWithWhereUniqueWithoutCheckedByInput = {
    where: ListItemWhereUniqueInput
    update: XOR<ListItemUpdateWithoutCheckedByInput, ListItemUncheckedUpdateWithoutCheckedByInput>
    create: XOR<ListItemCreateWithoutCheckedByInput, ListItemUncheckedCreateWithoutCheckedByInput>
  }

  export type ListItemUpdateWithWhereUniqueWithoutCheckedByInput = {
    where: ListItemWhereUniqueInput
    data: XOR<ListItemUpdateWithoutCheckedByInput, ListItemUncheckedUpdateWithoutCheckedByInput>
  }

  export type ListItemUpdateManyWithWhereWithoutCheckedByInput = {
    where: ListItemScalarWhereInput
    data: XOR<ListItemUpdateManyMutationInput, ListItemUncheckedUpdateManyWithoutCheckedByInput>
  }

  export type ListItemScalarWhereInput = {
    AND?: ListItemScalarWhereInput | ListItemScalarWhereInput[]
    OR?: ListItemScalarWhereInput[]
    NOT?: ListItemScalarWhereInput | ListItemScalarWhereInput[]
    item_id?: IntFilter<"ListItem"> | number
    list_id?: IntFilter<"ListItem"> | number
    category_id?: IntNullableFilter<"ListItem"> | number | null
    name?: StringFilter<"ListItem"> | string
    quantity?: IntFilter<"ListItem"> | number
    price?: DecimalNullableFilter<"ListItem"> | Decimal | DecimalJsLike | number | string | null
    source?: EnumSourceNullableFilter<"ListItem"> | $Enums.Source | null
    is_checked?: BoolFilter<"ListItem"> | boolean
    created_at?: DateTimeFilter<"ListItem"> | Date | string
    checkedById?: IntNullableFilter<"ListItem"> | number | null
    checkedAt?: DateTimeNullableFilter<"ListItem"> | Date | string | null
  }

  export type ShoppingListShareUpsertWithWhereUniqueWithoutUserInput = {
    where: ShoppingListShareWhereUniqueInput
    update: XOR<ShoppingListShareUpdateWithoutUserInput, ShoppingListShareUncheckedUpdateWithoutUserInput>
    create: XOR<ShoppingListShareCreateWithoutUserInput, ShoppingListShareUncheckedCreateWithoutUserInput>
  }

  export type ShoppingListShareUpdateWithWhereUniqueWithoutUserInput = {
    where: ShoppingListShareWhereUniqueInput
    data: XOR<ShoppingListShareUpdateWithoutUserInput, ShoppingListShareUncheckedUpdateWithoutUserInput>
  }

  export type ShoppingListShareUpdateManyWithWhereWithoutUserInput = {
    where: ShoppingListShareScalarWhereInput
    data: XOR<ShoppingListShareUpdateManyMutationInput, ShoppingListShareUncheckedUpdateManyWithoutUserInput>
  }

  export type ShoppingListShareScalarWhereInput = {
    AND?: ShoppingListShareScalarWhereInput | ShoppingListShareScalarWhereInput[]
    OR?: ShoppingListShareScalarWhereInput[]
    NOT?: ShoppingListShareScalarWhereInput | ShoppingListShareScalarWhereInput[]
    id?: IntFilter<"ShoppingListShare"> | number
    list_id?: IntFilter<"ShoppingListShare"> | number
    user_id?: IntFilter<"ShoppingListShare"> | number
    role?: EnumRoleFilter<"ShoppingListShare"> | $Enums.Role
  }

  export type ListInvitationUpsertWithWhereUniqueWithoutInviterInput = {
    where: ListInvitationWhereUniqueInput
    update: XOR<ListInvitationUpdateWithoutInviterInput, ListInvitationUncheckedUpdateWithoutInviterInput>
    create: XOR<ListInvitationCreateWithoutInviterInput, ListInvitationUncheckedCreateWithoutInviterInput>
  }

  export type ListInvitationUpdateWithWhereUniqueWithoutInviterInput = {
    where: ListInvitationWhereUniqueInput
    data: XOR<ListInvitationUpdateWithoutInviterInput, ListInvitationUncheckedUpdateWithoutInviterInput>
  }

  export type ListInvitationUpdateManyWithWhereWithoutInviterInput = {
    where: ListInvitationScalarWhereInput
    data: XOR<ListInvitationUpdateManyMutationInput, ListInvitationUncheckedUpdateManyWithoutInviterInput>
  }

  export type ListInvitationScalarWhereInput = {
    AND?: ListInvitationScalarWhereInput | ListInvitationScalarWhereInput[]
    OR?: ListInvitationScalarWhereInput[]
    NOT?: ListInvitationScalarWhereInput | ListInvitationScalarWhereInput[]
    invitation_id?: IntFilter<"ListInvitation"> | number
    list_id?: IntFilter<"ListInvitation"> | number
    invited_by?: IntFilter<"ListInvitation"> | number
    invite_code?: StringFilter<"ListInvitation"> | string
    role?: EnumRoleFilter<"ListInvitation"> | $Enums.Role
    expires_at?: DateTimeFilter<"ListInvitation"> | Date | string
    is_used?: BoolFilter<"ListInvitation"> | boolean
    used_by?: IntNullableFilter<"ListInvitation"> | number | null
    created_at?: DateTimeFilter<"ListInvitation"> | Date | string
    used_at?: DateTimeNullableFilter<"ListInvitation"> | Date | string | null
    max_uses?: IntFilter<"ListInvitation"> | number
    uses_count?: IntFilter<"ListInvitation"> | number
  }

  export type ListInvitationUpsertWithWhereUniqueWithoutUsedByUserInput = {
    where: ListInvitationWhereUniqueInput
    update: XOR<ListInvitationUpdateWithoutUsedByUserInput, ListInvitationUncheckedUpdateWithoutUsedByUserInput>
    create: XOR<ListInvitationCreateWithoutUsedByUserInput, ListInvitationUncheckedCreateWithoutUsedByUserInput>
  }

  export type ListInvitationUpdateWithWhereUniqueWithoutUsedByUserInput = {
    where: ListInvitationWhereUniqueInput
    data: XOR<ListInvitationUpdateWithoutUsedByUserInput, ListInvitationUncheckedUpdateWithoutUsedByUserInput>
  }

  export type ListInvitationUpdateManyWithWhereWithoutUsedByUserInput = {
    where: ListInvitationScalarWhereInput
    data: XOR<ListInvitationUpdateManyMutationInput, ListInvitationUncheckedUpdateManyWithoutUsedByUserInput>
  }

  export type UserCreateWithoutListsInput = {
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    accesses?: UserListAccessCreateNestedManyWithoutUserInput
    invitedAccess?: UserListAccessCreateNestedManyWithoutInvitedByInput
    receipts?: ReceiptCreateNestedManyWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    checkedItems?: ListItemCreateNestedManyWithoutCheckedByInput
    sharedLists?: ShoppingListShareCreateNestedManyWithoutUserInput
    createdInvitations?: ListInvitationCreateNestedManyWithoutInviterInput
    usedInvitations?: ListInvitationCreateNestedManyWithoutUsedByUserInput
  }

  export type UserUncheckedCreateWithoutListsInput = {
    user_id?: number
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    accesses?: UserListAccessUncheckedCreateNestedManyWithoutUserInput
    invitedAccess?: UserListAccessUncheckedCreateNestedManyWithoutInvitedByInput
    receipts?: ReceiptUncheckedCreateNestedManyWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    checkedItems?: ListItemUncheckedCreateNestedManyWithoutCheckedByInput
    sharedLists?: ShoppingListShareUncheckedCreateNestedManyWithoutUserInput
    createdInvitations?: ListInvitationUncheckedCreateNestedManyWithoutInviterInput
    usedInvitations?: ListInvitationUncheckedCreateNestedManyWithoutUsedByUserInput
  }

  export type UserCreateOrConnectWithoutListsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
  }

  export type ListItemCreateWithoutListInput = {
    name: string
    quantity?: number
    price?: Decimal | DecimalJsLike | number | string | null
    source?: $Enums.Source | null
    is_checked?: boolean
    created_at?: Date | string
    checkedAt?: Date | string | null
    category?: CategoryCreateNestedOneWithoutItemsInput
    checkedBy?: UserCreateNestedOneWithoutCheckedItemsInput
  }

  export type ListItemUncheckedCreateWithoutListInput = {
    item_id?: number
    category_id?: number | null
    name: string
    quantity?: number
    price?: Decimal | DecimalJsLike | number | string | null
    source?: $Enums.Source | null
    is_checked?: boolean
    created_at?: Date | string
    checkedById?: number | null
    checkedAt?: Date | string | null
  }

  export type ListItemCreateOrConnectWithoutListInput = {
    where: ListItemWhereUniqueInput
    create: XOR<ListItemCreateWithoutListInput, ListItemUncheckedCreateWithoutListInput>
  }

  export type ListItemCreateManyListInputEnvelope = {
    data: ListItemCreateManyListInput | ListItemCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type ReceiptCreateWithoutListInput = {
    store_name?: string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    receipt_date?: Date | string | null
    payment_method?: $Enums.PaymentMethod | null
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    image_url?: string | null
    ocr_text?: string | null
    processed?: boolean
    uploaded_at?: Date | string
    user: UserCreateNestedOneWithoutReceiptsInput
    items?: ReceiptItemCreateNestedManyWithoutReceiptInput
  }

  export type ReceiptUncheckedCreateWithoutListInput = {
    receipt_id?: number
    user_id: number
    store_name?: string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    receipt_date?: Date | string | null
    payment_method?: $Enums.PaymentMethod | null
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    image_url?: string | null
    ocr_text?: string | null
    processed?: boolean
    uploaded_at?: Date | string
    items?: ReceiptItemUncheckedCreateNestedManyWithoutReceiptInput
  }

  export type ReceiptCreateOrConnectWithoutListInput = {
    where: ReceiptWhereUniqueInput
    create: XOR<ReceiptCreateWithoutListInput, ReceiptUncheckedCreateWithoutListInput>
  }

  export type ReceiptCreateManyListInputEnvelope = {
    data: ReceiptCreateManyListInput | ReceiptCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type UserListAccessCreateWithoutListInput = {
    role: $Enums.Role
    joined_at?: Date | string
    user: UserCreateNestedOneWithoutAccessesInput
    invitedBy?: UserCreateNestedOneWithoutInvitedAccessInput
  }

  export type UserListAccessUncheckedCreateWithoutListInput = {
    access_id?: number
    user_id: number
    role: $Enums.Role
    invited_by?: number | null
    joined_at?: Date | string
  }

  export type UserListAccessCreateOrConnectWithoutListInput = {
    where: UserListAccessWhereUniqueInput
    create: XOR<UserListAccessCreateWithoutListInput, UserListAccessUncheckedCreateWithoutListInput>
  }

  export type UserListAccessCreateManyListInputEnvelope = {
    data: UserListAccessCreateManyListInput | UserListAccessCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type ShoppingListShareCreateWithoutListInput = {
    role: $Enums.Role
    user: UserCreateNestedOneWithoutSharedListsInput
  }

  export type ShoppingListShareUncheckedCreateWithoutListInput = {
    id?: number
    user_id: number
    role: $Enums.Role
  }

  export type ShoppingListShareCreateOrConnectWithoutListInput = {
    where: ShoppingListShareWhereUniqueInput
    create: XOR<ShoppingListShareCreateWithoutListInput, ShoppingListShareUncheckedCreateWithoutListInput>
  }

  export type ShoppingListShareCreateManyListInputEnvelope = {
    data: ShoppingListShareCreateManyListInput | ShoppingListShareCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type ListInvitationCreateWithoutListInput = {
    invite_code: string
    role?: $Enums.Role
    expires_at: Date | string
    is_used?: boolean
    created_at?: Date | string
    used_at?: Date | string | null
    max_uses?: number
    uses_count?: number
    inviter: UserCreateNestedOneWithoutCreatedInvitationsInput
    usedByUser?: UserCreateNestedOneWithoutUsedInvitationsInput
  }

  export type ListInvitationUncheckedCreateWithoutListInput = {
    invitation_id?: number
    invited_by: number
    invite_code: string
    role?: $Enums.Role
    expires_at: Date | string
    is_used?: boolean
    used_by?: number | null
    created_at?: Date | string
    used_at?: Date | string | null
    max_uses?: number
    uses_count?: number
  }

  export type ListInvitationCreateOrConnectWithoutListInput = {
    where: ListInvitationWhereUniqueInput
    create: XOR<ListInvitationCreateWithoutListInput, ListInvitationUncheckedCreateWithoutListInput>
  }

  export type ListInvitationCreateManyListInputEnvelope = {
    data: ListInvitationCreateManyListInput | ListInvitationCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutListsInput = {
    update: XOR<UserUpdateWithoutListsInput, UserUncheckedUpdateWithoutListsInput>
    create: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutListsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutListsInput, UserUncheckedUpdateWithoutListsInput>
  }

  export type UserUpdateWithoutListsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accesses?: UserListAccessUpdateManyWithoutUserNestedInput
    invitedAccess?: UserListAccessUpdateManyWithoutInvitedByNestedInput
    receipts?: ReceiptUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    checkedItems?: ListItemUpdateManyWithoutCheckedByNestedInput
    sharedLists?: ShoppingListShareUpdateManyWithoutUserNestedInput
    createdInvitations?: ListInvitationUpdateManyWithoutInviterNestedInput
    usedInvitations?: ListInvitationUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutListsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accesses?: UserListAccessUncheckedUpdateManyWithoutUserNestedInput
    invitedAccess?: UserListAccessUncheckedUpdateManyWithoutInvitedByNestedInput
    receipts?: ReceiptUncheckedUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    checkedItems?: ListItemUncheckedUpdateManyWithoutCheckedByNestedInput
    sharedLists?: ShoppingListShareUncheckedUpdateManyWithoutUserNestedInput
    createdInvitations?: ListInvitationUncheckedUpdateManyWithoutInviterNestedInput
    usedInvitations?: ListInvitationUncheckedUpdateManyWithoutUsedByUserNestedInput
  }

  export type ListItemUpsertWithWhereUniqueWithoutListInput = {
    where: ListItemWhereUniqueInput
    update: XOR<ListItemUpdateWithoutListInput, ListItemUncheckedUpdateWithoutListInput>
    create: XOR<ListItemCreateWithoutListInput, ListItemUncheckedCreateWithoutListInput>
  }

  export type ListItemUpdateWithWhereUniqueWithoutListInput = {
    where: ListItemWhereUniqueInput
    data: XOR<ListItemUpdateWithoutListInput, ListItemUncheckedUpdateWithoutListInput>
  }

  export type ListItemUpdateManyWithWhereWithoutListInput = {
    where: ListItemScalarWhereInput
    data: XOR<ListItemUpdateManyMutationInput, ListItemUncheckedUpdateManyWithoutListInput>
  }

  export type ReceiptUpsertWithWhereUniqueWithoutListInput = {
    where: ReceiptWhereUniqueInput
    update: XOR<ReceiptUpdateWithoutListInput, ReceiptUncheckedUpdateWithoutListInput>
    create: XOR<ReceiptCreateWithoutListInput, ReceiptUncheckedCreateWithoutListInput>
  }

  export type ReceiptUpdateWithWhereUniqueWithoutListInput = {
    where: ReceiptWhereUniqueInput
    data: XOR<ReceiptUpdateWithoutListInput, ReceiptUncheckedUpdateWithoutListInput>
  }

  export type ReceiptUpdateManyWithWhereWithoutListInput = {
    where: ReceiptScalarWhereInput
    data: XOR<ReceiptUpdateManyMutationInput, ReceiptUncheckedUpdateManyWithoutListInput>
  }

  export type UserListAccessUpsertWithWhereUniqueWithoutListInput = {
    where: UserListAccessWhereUniqueInput
    update: XOR<UserListAccessUpdateWithoutListInput, UserListAccessUncheckedUpdateWithoutListInput>
    create: XOR<UserListAccessCreateWithoutListInput, UserListAccessUncheckedCreateWithoutListInput>
  }

  export type UserListAccessUpdateWithWhereUniqueWithoutListInput = {
    where: UserListAccessWhereUniqueInput
    data: XOR<UserListAccessUpdateWithoutListInput, UserListAccessUncheckedUpdateWithoutListInput>
  }

  export type UserListAccessUpdateManyWithWhereWithoutListInput = {
    where: UserListAccessScalarWhereInput
    data: XOR<UserListAccessUpdateManyMutationInput, UserListAccessUncheckedUpdateManyWithoutListInput>
  }

  export type ShoppingListShareUpsertWithWhereUniqueWithoutListInput = {
    where: ShoppingListShareWhereUniqueInput
    update: XOR<ShoppingListShareUpdateWithoutListInput, ShoppingListShareUncheckedUpdateWithoutListInput>
    create: XOR<ShoppingListShareCreateWithoutListInput, ShoppingListShareUncheckedCreateWithoutListInput>
  }

  export type ShoppingListShareUpdateWithWhereUniqueWithoutListInput = {
    where: ShoppingListShareWhereUniqueInput
    data: XOR<ShoppingListShareUpdateWithoutListInput, ShoppingListShareUncheckedUpdateWithoutListInput>
  }

  export type ShoppingListShareUpdateManyWithWhereWithoutListInput = {
    where: ShoppingListShareScalarWhereInput
    data: XOR<ShoppingListShareUpdateManyMutationInput, ShoppingListShareUncheckedUpdateManyWithoutListInput>
  }

  export type ListInvitationUpsertWithWhereUniqueWithoutListInput = {
    where: ListInvitationWhereUniqueInput
    update: XOR<ListInvitationUpdateWithoutListInput, ListInvitationUncheckedUpdateWithoutListInput>
    create: XOR<ListInvitationCreateWithoutListInput, ListInvitationUncheckedCreateWithoutListInput>
  }

  export type ListInvitationUpdateWithWhereUniqueWithoutListInput = {
    where: ListInvitationWhereUniqueInput
    data: XOR<ListInvitationUpdateWithoutListInput, ListInvitationUncheckedUpdateWithoutListInput>
  }

  export type ListInvitationUpdateManyWithWhereWithoutListInput = {
    where: ListInvitationScalarWhereInput
    data: XOR<ListInvitationUpdateManyMutationInput, ListInvitationUncheckedUpdateManyWithoutListInput>
  }

  export type UserCreateWithoutAccessesInput = {
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    lists?: ShoppingListCreateNestedManyWithoutOwnerInput
    invitedAccess?: UserListAccessCreateNestedManyWithoutInvitedByInput
    receipts?: ReceiptCreateNestedManyWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    checkedItems?: ListItemCreateNestedManyWithoutCheckedByInput
    sharedLists?: ShoppingListShareCreateNestedManyWithoutUserInput
    createdInvitations?: ListInvitationCreateNestedManyWithoutInviterInput
    usedInvitations?: ListInvitationCreateNestedManyWithoutUsedByUserInput
  }

  export type UserUncheckedCreateWithoutAccessesInput = {
    user_id?: number
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    lists?: ShoppingListUncheckedCreateNestedManyWithoutOwnerInput
    invitedAccess?: UserListAccessUncheckedCreateNestedManyWithoutInvitedByInput
    receipts?: ReceiptUncheckedCreateNestedManyWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    checkedItems?: ListItemUncheckedCreateNestedManyWithoutCheckedByInput
    sharedLists?: ShoppingListShareUncheckedCreateNestedManyWithoutUserInput
    createdInvitations?: ListInvitationUncheckedCreateNestedManyWithoutInviterInput
    usedInvitations?: ListInvitationUncheckedCreateNestedManyWithoutUsedByUserInput
  }

  export type UserCreateOrConnectWithoutAccessesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccessesInput, UserUncheckedCreateWithoutAccessesInput>
  }

  export type ShoppingListCreateWithoutAccessesInput = {
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_shared?: boolean
    owner: UserCreateNestedOneWithoutListsInput
    items?: ListItemCreateNestedManyWithoutListInput
    receipts?: ReceiptCreateNestedManyWithoutListInput
    sharedWith?: ShoppingListShareCreateNestedManyWithoutListInput
    invitations?: ListInvitationCreateNestedManyWithoutListInput
  }

  export type ShoppingListUncheckedCreateWithoutAccessesInput = {
    list_id?: number
    owner_id: number
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_shared?: boolean
    items?: ListItemUncheckedCreateNestedManyWithoutListInput
    receipts?: ReceiptUncheckedCreateNestedManyWithoutListInput
    sharedWith?: ShoppingListShareUncheckedCreateNestedManyWithoutListInput
    invitations?: ListInvitationUncheckedCreateNestedManyWithoutListInput
  }

  export type ShoppingListCreateOrConnectWithoutAccessesInput = {
    where: ShoppingListWhereUniqueInput
    create: XOR<ShoppingListCreateWithoutAccessesInput, ShoppingListUncheckedCreateWithoutAccessesInput>
  }

  export type UserCreateWithoutInvitedAccessInput = {
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    lists?: ShoppingListCreateNestedManyWithoutOwnerInput
    accesses?: UserListAccessCreateNestedManyWithoutUserInput
    receipts?: ReceiptCreateNestedManyWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    checkedItems?: ListItemCreateNestedManyWithoutCheckedByInput
    sharedLists?: ShoppingListShareCreateNestedManyWithoutUserInput
    createdInvitations?: ListInvitationCreateNestedManyWithoutInviterInput
    usedInvitations?: ListInvitationCreateNestedManyWithoutUsedByUserInput
  }

  export type UserUncheckedCreateWithoutInvitedAccessInput = {
    user_id?: number
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    lists?: ShoppingListUncheckedCreateNestedManyWithoutOwnerInput
    accesses?: UserListAccessUncheckedCreateNestedManyWithoutUserInput
    receipts?: ReceiptUncheckedCreateNestedManyWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    checkedItems?: ListItemUncheckedCreateNestedManyWithoutCheckedByInput
    sharedLists?: ShoppingListShareUncheckedCreateNestedManyWithoutUserInput
    createdInvitations?: ListInvitationUncheckedCreateNestedManyWithoutInviterInput
    usedInvitations?: ListInvitationUncheckedCreateNestedManyWithoutUsedByUserInput
  }

  export type UserCreateOrConnectWithoutInvitedAccessInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvitedAccessInput, UserUncheckedCreateWithoutInvitedAccessInput>
  }

  export type UserUpsertWithoutAccessesInput = {
    update: XOR<UserUpdateWithoutAccessesInput, UserUncheckedUpdateWithoutAccessesInput>
    create: XOR<UserCreateWithoutAccessesInput, UserUncheckedCreateWithoutAccessesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccessesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccessesInput, UserUncheckedUpdateWithoutAccessesInput>
  }

  export type UserUpdateWithoutAccessesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ShoppingListUpdateManyWithoutOwnerNestedInput
    invitedAccess?: UserListAccessUpdateManyWithoutInvitedByNestedInput
    receipts?: ReceiptUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    checkedItems?: ListItemUpdateManyWithoutCheckedByNestedInput
    sharedLists?: ShoppingListShareUpdateManyWithoutUserNestedInput
    createdInvitations?: ListInvitationUpdateManyWithoutInviterNestedInput
    usedInvitations?: ListInvitationUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccessesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ShoppingListUncheckedUpdateManyWithoutOwnerNestedInput
    invitedAccess?: UserListAccessUncheckedUpdateManyWithoutInvitedByNestedInput
    receipts?: ReceiptUncheckedUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    checkedItems?: ListItemUncheckedUpdateManyWithoutCheckedByNestedInput
    sharedLists?: ShoppingListShareUncheckedUpdateManyWithoutUserNestedInput
    createdInvitations?: ListInvitationUncheckedUpdateManyWithoutInviterNestedInput
    usedInvitations?: ListInvitationUncheckedUpdateManyWithoutUsedByUserNestedInput
  }

  export type ShoppingListUpsertWithoutAccessesInput = {
    update: XOR<ShoppingListUpdateWithoutAccessesInput, ShoppingListUncheckedUpdateWithoutAccessesInput>
    create: XOR<ShoppingListCreateWithoutAccessesInput, ShoppingListUncheckedCreateWithoutAccessesInput>
    where?: ShoppingListWhereInput
  }

  export type ShoppingListUpdateToOneWithWhereWithoutAccessesInput = {
    where?: ShoppingListWhereInput
    data: XOR<ShoppingListUpdateWithoutAccessesInput, ShoppingListUncheckedUpdateWithoutAccessesInput>
  }

  export type ShoppingListUpdateWithoutAccessesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutListsNestedInput
    items?: ListItemUpdateManyWithoutListNestedInput
    receipts?: ReceiptUpdateManyWithoutListNestedInput
    sharedWith?: ShoppingListShareUpdateManyWithoutListNestedInput
    invitations?: ListInvitationUpdateManyWithoutListNestedInput
  }

  export type ShoppingListUncheckedUpdateWithoutAccessesInput = {
    list_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    items?: ListItemUncheckedUpdateManyWithoutListNestedInput
    receipts?: ReceiptUncheckedUpdateManyWithoutListNestedInput
    sharedWith?: ShoppingListShareUncheckedUpdateManyWithoutListNestedInput
    invitations?: ListInvitationUncheckedUpdateManyWithoutListNestedInput
  }

  export type UserUpsertWithoutInvitedAccessInput = {
    update: XOR<UserUpdateWithoutInvitedAccessInput, UserUncheckedUpdateWithoutInvitedAccessInput>
    create: XOR<UserCreateWithoutInvitedAccessInput, UserUncheckedCreateWithoutInvitedAccessInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvitedAccessInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvitedAccessInput, UserUncheckedUpdateWithoutInvitedAccessInput>
  }

  export type UserUpdateWithoutInvitedAccessInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ShoppingListUpdateManyWithoutOwnerNestedInput
    accesses?: UserListAccessUpdateManyWithoutUserNestedInput
    receipts?: ReceiptUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    checkedItems?: ListItemUpdateManyWithoutCheckedByNestedInput
    sharedLists?: ShoppingListShareUpdateManyWithoutUserNestedInput
    createdInvitations?: ListInvitationUpdateManyWithoutInviterNestedInput
    usedInvitations?: ListInvitationUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvitedAccessInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ShoppingListUncheckedUpdateManyWithoutOwnerNestedInput
    accesses?: UserListAccessUncheckedUpdateManyWithoutUserNestedInput
    receipts?: ReceiptUncheckedUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    checkedItems?: ListItemUncheckedUpdateManyWithoutCheckedByNestedInput
    sharedLists?: ShoppingListShareUncheckedUpdateManyWithoutUserNestedInput
    createdInvitations?: ListInvitationUncheckedUpdateManyWithoutInviterNestedInput
    usedInvitations?: ListInvitationUncheckedUpdateManyWithoutUsedByUserNestedInput
  }

  export type ListItemCreateWithoutCategoryInput = {
    name: string
    quantity?: number
    price?: Decimal | DecimalJsLike | number | string | null
    source?: $Enums.Source | null
    is_checked?: boolean
    created_at?: Date | string
    checkedAt?: Date | string | null
    list: ShoppingListCreateNestedOneWithoutItemsInput
    checkedBy?: UserCreateNestedOneWithoutCheckedItemsInput
  }

  export type ListItemUncheckedCreateWithoutCategoryInput = {
    item_id?: number
    list_id: number
    name: string
    quantity?: number
    price?: Decimal | DecimalJsLike | number | string | null
    source?: $Enums.Source | null
    is_checked?: boolean
    created_at?: Date | string
    checkedById?: number | null
    checkedAt?: Date | string | null
  }

  export type ListItemCreateOrConnectWithoutCategoryInput = {
    where: ListItemWhereUniqueInput
    create: XOR<ListItemCreateWithoutCategoryInput, ListItemUncheckedCreateWithoutCategoryInput>
  }

  export type ListItemCreateManyCategoryInputEnvelope = {
    data: ListItemCreateManyCategoryInput | ListItemCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutCategoryInput = {
    total_amount: Decimal | DecimalJsLike | number | string
    month: number
    year: number
    created_at?: Date | string
    user: UserCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateWithoutCategoryInput = {
    expense_id?: number
    user_id: number
    total_amount: Decimal | DecimalJsLike | number | string
    month: number
    year: number
    created_at?: Date | string
  }

  export type ExpenseCreateOrConnectWithoutCategoryInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutCategoryInput, ExpenseUncheckedCreateWithoutCategoryInput>
  }

  export type ExpenseCreateManyCategoryInputEnvelope = {
    data: ExpenseCreateManyCategoryInput | ExpenseCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ListItemUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ListItemWhereUniqueInput
    update: XOR<ListItemUpdateWithoutCategoryInput, ListItemUncheckedUpdateWithoutCategoryInput>
    create: XOR<ListItemCreateWithoutCategoryInput, ListItemUncheckedCreateWithoutCategoryInput>
  }

  export type ListItemUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ListItemWhereUniqueInput
    data: XOR<ListItemUpdateWithoutCategoryInput, ListItemUncheckedUpdateWithoutCategoryInput>
  }

  export type ListItemUpdateManyWithWhereWithoutCategoryInput = {
    where: ListItemScalarWhereInput
    data: XOR<ListItemUpdateManyMutationInput, ListItemUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ExpenseUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutCategoryInput, ExpenseUncheckedUpdateWithoutCategoryInput>
    create: XOR<ExpenseCreateWithoutCategoryInput, ExpenseUncheckedCreateWithoutCategoryInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutCategoryInput, ExpenseUncheckedUpdateWithoutCategoryInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutCategoryInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ShoppingListCreateWithoutItemsInput = {
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_shared?: boolean
    owner: UserCreateNestedOneWithoutListsInput
    receipts?: ReceiptCreateNestedManyWithoutListInput
    accesses?: UserListAccessCreateNestedManyWithoutListInput
    sharedWith?: ShoppingListShareCreateNestedManyWithoutListInput
    invitations?: ListInvitationCreateNestedManyWithoutListInput
  }

  export type ShoppingListUncheckedCreateWithoutItemsInput = {
    list_id?: number
    owner_id: number
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_shared?: boolean
    receipts?: ReceiptUncheckedCreateNestedManyWithoutListInput
    accesses?: UserListAccessUncheckedCreateNestedManyWithoutListInput
    sharedWith?: ShoppingListShareUncheckedCreateNestedManyWithoutListInput
    invitations?: ListInvitationUncheckedCreateNestedManyWithoutListInput
  }

  export type ShoppingListCreateOrConnectWithoutItemsInput = {
    where: ShoppingListWhereUniqueInput
    create: XOR<ShoppingListCreateWithoutItemsInput, ShoppingListUncheckedCreateWithoutItemsInput>
  }

  export type CategoryCreateWithoutItemsInput = {
    name: string
    color_code?: string | null
    created_at?: Date | string
    expenses?: ExpenseCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutItemsInput = {
    category_id?: number
    name: string
    color_code?: string | null
    created_at?: Date | string
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutItemsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutItemsInput, CategoryUncheckedCreateWithoutItemsInput>
  }

  export type UserCreateWithoutCheckedItemsInput = {
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    lists?: ShoppingListCreateNestedManyWithoutOwnerInput
    accesses?: UserListAccessCreateNestedManyWithoutUserInput
    invitedAccess?: UserListAccessCreateNestedManyWithoutInvitedByInput
    receipts?: ReceiptCreateNestedManyWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    sharedLists?: ShoppingListShareCreateNestedManyWithoutUserInput
    createdInvitations?: ListInvitationCreateNestedManyWithoutInviterInput
    usedInvitations?: ListInvitationCreateNestedManyWithoutUsedByUserInput
  }

  export type UserUncheckedCreateWithoutCheckedItemsInput = {
    user_id?: number
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    lists?: ShoppingListUncheckedCreateNestedManyWithoutOwnerInput
    accesses?: UserListAccessUncheckedCreateNestedManyWithoutUserInput
    invitedAccess?: UserListAccessUncheckedCreateNestedManyWithoutInvitedByInput
    receipts?: ReceiptUncheckedCreateNestedManyWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    sharedLists?: ShoppingListShareUncheckedCreateNestedManyWithoutUserInput
    createdInvitations?: ListInvitationUncheckedCreateNestedManyWithoutInviterInput
    usedInvitations?: ListInvitationUncheckedCreateNestedManyWithoutUsedByUserInput
  }

  export type UserCreateOrConnectWithoutCheckedItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCheckedItemsInput, UserUncheckedCreateWithoutCheckedItemsInput>
  }

  export type ShoppingListUpsertWithoutItemsInput = {
    update: XOR<ShoppingListUpdateWithoutItemsInput, ShoppingListUncheckedUpdateWithoutItemsInput>
    create: XOR<ShoppingListCreateWithoutItemsInput, ShoppingListUncheckedCreateWithoutItemsInput>
    where?: ShoppingListWhereInput
  }

  export type ShoppingListUpdateToOneWithWhereWithoutItemsInput = {
    where?: ShoppingListWhereInput
    data: XOR<ShoppingListUpdateWithoutItemsInput, ShoppingListUncheckedUpdateWithoutItemsInput>
  }

  export type ShoppingListUpdateWithoutItemsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutListsNestedInput
    receipts?: ReceiptUpdateManyWithoutListNestedInput
    accesses?: UserListAccessUpdateManyWithoutListNestedInput
    sharedWith?: ShoppingListShareUpdateManyWithoutListNestedInput
    invitations?: ListInvitationUpdateManyWithoutListNestedInput
  }

  export type ShoppingListUncheckedUpdateWithoutItemsInput = {
    list_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    receipts?: ReceiptUncheckedUpdateManyWithoutListNestedInput
    accesses?: UserListAccessUncheckedUpdateManyWithoutListNestedInput
    sharedWith?: ShoppingListShareUncheckedUpdateManyWithoutListNestedInput
    invitations?: ListInvitationUncheckedUpdateManyWithoutListNestedInput
  }

  export type CategoryUpsertWithoutItemsInput = {
    update: XOR<CategoryUpdateWithoutItemsInput, CategoryUncheckedUpdateWithoutItemsInput>
    create: XOR<CategoryCreateWithoutItemsInput, CategoryUncheckedCreateWithoutItemsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutItemsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutItemsInput, CategoryUncheckedUpdateWithoutItemsInput>
  }

  export type CategoryUpdateWithoutItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    color_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: ExpenseUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutItemsInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: ExpenseUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type UserUpsertWithoutCheckedItemsInput = {
    update: XOR<UserUpdateWithoutCheckedItemsInput, UserUncheckedUpdateWithoutCheckedItemsInput>
    create: XOR<UserCreateWithoutCheckedItemsInput, UserUncheckedCreateWithoutCheckedItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCheckedItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCheckedItemsInput, UserUncheckedUpdateWithoutCheckedItemsInput>
  }

  export type UserUpdateWithoutCheckedItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ShoppingListUpdateManyWithoutOwnerNestedInput
    accesses?: UserListAccessUpdateManyWithoutUserNestedInput
    invitedAccess?: UserListAccessUpdateManyWithoutInvitedByNestedInput
    receipts?: ReceiptUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    sharedLists?: ShoppingListShareUpdateManyWithoutUserNestedInput
    createdInvitations?: ListInvitationUpdateManyWithoutInviterNestedInput
    usedInvitations?: ListInvitationUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCheckedItemsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ShoppingListUncheckedUpdateManyWithoutOwnerNestedInput
    accesses?: UserListAccessUncheckedUpdateManyWithoutUserNestedInput
    invitedAccess?: UserListAccessUncheckedUpdateManyWithoutInvitedByNestedInput
    receipts?: ReceiptUncheckedUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    sharedLists?: ShoppingListShareUncheckedUpdateManyWithoutUserNestedInput
    createdInvitations?: ListInvitationUncheckedUpdateManyWithoutInviterNestedInput
    usedInvitations?: ListInvitationUncheckedUpdateManyWithoutUsedByUserNestedInput
  }

  export type ShoppingListCreateWithoutReceiptsInput = {
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_shared?: boolean
    owner: UserCreateNestedOneWithoutListsInput
    items?: ListItemCreateNestedManyWithoutListInput
    accesses?: UserListAccessCreateNestedManyWithoutListInput
    sharedWith?: ShoppingListShareCreateNestedManyWithoutListInput
    invitations?: ListInvitationCreateNestedManyWithoutListInput
  }

  export type ShoppingListUncheckedCreateWithoutReceiptsInput = {
    list_id?: number
    owner_id: number
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_shared?: boolean
    items?: ListItemUncheckedCreateNestedManyWithoutListInput
    accesses?: UserListAccessUncheckedCreateNestedManyWithoutListInput
    sharedWith?: ShoppingListShareUncheckedCreateNestedManyWithoutListInput
    invitations?: ListInvitationUncheckedCreateNestedManyWithoutListInput
  }

  export type ShoppingListCreateOrConnectWithoutReceiptsInput = {
    where: ShoppingListWhereUniqueInput
    create: XOR<ShoppingListCreateWithoutReceiptsInput, ShoppingListUncheckedCreateWithoutReceiptsInput>
  }

  export type UserCreateWithoutReceiptsInput = {
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    lists?: ShoppingListCreateNestedManyWithoutOwnerInput
    accesses?: UserListAccessCreateNestedManyWithoutUserInput
    invitedAccess?: UserListAccessCreateNestedManyWithoutInvitedByInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    checkedItems?: ListItemCreateNestedManyWithoutCheckedByInput
    sharedLists?: ShoppingListShareCreateNestedManyWithoutUserInput
    createdInvitations?: ListInvitationCreateNestedManyWithoutInviterInput
    usedInvitations?: ListInvitationCreateNestedManyWithoutUsedByUserInput
  }

  export type UserUncheckedCreateWithoutReceiptsInput = {
    user_id?: number
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    lists?: ShoppingListUncheckedCreateNestedManyWithoutOwnerInput
    accesses?: UserListAccessUncheckedCreateNestedManyWithoutUserInput
    invitedAccess?: UserListAccessUncheckedCreateNestedManyWithoutInvitedByInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    checkedItems?: ListItemUncheckedCreateNestedManyWithoutCheckedByInput
    sharedLists?: ShoppingListShareUncheckedCreateNestedManyWithoutUserInput
    createdInvitations?: ListInvitationUncheckedCreateNestedManyWithoutInviterInput
    usedInvitations?: ListInvitationUncheckedCreateNestedManyWithoutUsedByUserInput
  }

  export type UserCreateOrConnectWithoutReceiptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceiptsInput, UserUncheckedCreateWithoutReceiptsInput>
  }

  export type ReceiptItemCreateWithoutReceiptInput = {
    productName: string
    price: Decimal | DecimalJsLike | number | string
    quantity?: Decimal | DecimalJsLike | number | string
    unit?: string
    pricePerUnit?: Decimal | DecimalJsLike | number | string | null
    taxRate?: Decimal | DecimalJsLike | number | string | null
  }

  export type ReceiptItemUncheckedCreateWithoutReceiptInput = {
    id?: number
    productName: string
    price: Decimal | DecimalJsLike | number | string
    quantity?: Decimal | DecimalJsLike | number | string
    unit?: string
    pricePerUnit?: Decimal | DecimalJsLike | number | string | null
    taxRate?: Decimal | DecimalJsLike | number | string | null
  }

  export type ReceiptItemCreateOrConnectWithoutReceiptInput = {
    where: ReceiptItemWhereUniqueInput
    create: XOR<ReceiptItemCreateWithoutReceiptInput, ReceiptItemUncheckedCreateWithoutReceiptInput>
  }

  export type ReceiptItemCreateManyReceiptInputEnvelope = {
    data: ReceiptItemCreateManyReceiptInput | ReceiptItemCreateManyReceiptInput[]
    skipDuplicates?: boolean
  }

  export type ShoppingListUpsertWithoutReceiptsInput = {
    update: XOR<ShoppingListUpdateWithoutReceiptsInput, ShoppingListUncheckedUpdateWithoutReceiptsInput>
    create: XOR<ShoppingListCreateWithoutReceiptsInput, ShoppingListUncheckedCreateWithoutReceiptsInput>
    where?: ShoppingListWhereInput
  }

  export type ShoppingListUpdateToOneWithWhereWithoutReceiptsInput = {
    where?: ShoppingListWhereInput
    data: XOR<ShoppingListUpdateWithoutReceiptsInput, ShoppingListUncheckedUpdateWithoutReceiptsInput>
  }

  export type ShoppingListUpdateWithoutReceiptsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutListsNestedInput
    items?: ListItemUpdateManyWithoutListNestedInput
    accesses?: UserListAccessUpdateManyWithoutListNestedInput
    sharedWith?: ShoppingListShareUpdateManyWithoutListNestedInput
    invitations?: ListInvitationUpdateManyWithoutListNestedInput
  }

  export type ShoppingListUncheckedUpdateWithoutReceiptsInput = {
    list_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    items?: ListItemUncheckedUpdateManyWithoutListNestedInput
    accesses?: UserListAccessUncheckedUpdateManyWithoutListNestedInput
    sharedWith?: ShoppingListShareUncheckedUpdateManyWithoutListNestedInput
    invitations?: ListInvitationUncheckedUpdateManyWithoutListNestedInput
  }

  export type UserUpsertWithoutReceiptsInput = {
    update: XOR<UserUpdateWithoutReceiptsInput, UserUncheckedUpdateWithoutReceiptsInput>
    create: XOR<UserCreateWithoutReceiptsInput, UserUncheckedCreateWithoutReceiptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceiptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceiptsInput, UserUncheckedUpdateWithoutReceiptsInput>
  }

  export type UserUpdateWithoutReceiptsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ShoppingListUpdateManyWithoutOwnerNestedInput
    accesses?: UserListAccessUpdateManyWithoutUserNestedInput
    invitedAccess?: UserListAccessUpdateManyWithoutInvitedByNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    checkedItems?: ListItemUpdateManyWithoutCheckedByNestedInput
    sharedLists?: ShoppingListShareUpdateManyWithoutUserNestedInput
    createdInvitations?: ListInvitationUpdateManyWithoutInviterNestedInput
    usedInvitations?: ListInvitationUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceiptsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ShoppingListUncheckedUpdateManyWithoutOwnerNestedInput
    accesses?: UserListAccessUncheckedUpdateManyWithoutUserNestedInput
    invitedAccess?: UserListAccessUncheckedUpdateManyWithoutInvitedByNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    checkedItems?: ListItemUncheckedUpdateManyWithoutCheckedByNestedInput
    sharedLists?: ShoppingListShareUncheckedUpdateManyWithoutUserNestedInput
    createdInvitations?: ListInvitationUncheckedUpdateManyWithoutInviterNestedInput
    usedInvitations?: ListInvitationUncheckedUpdateManyWithoutUsedByUserNestedInput
  }

  export type ReceiptItemUpsertWithWhereUniqueWithoutReceiptInput = {
    where: ReceiptItemWhereUniqueInput
    update: XOR<ReceiptItemUpdateWithoutReceiptInput, ReceiptItemUncheckedUpdateWithoutReceiptInput>
    create: XOR<ReceiptItemCreateWithoutReceiptInput, ReceiptItemUncheckedCreateWithoutReceiptInput>
  }

  export type ReceiptItemUpdateWithWhereUniqueWithoutReceiptInput = {
    where: ReceiptItemWhereUniqueInput
    data: XOR<ReceiptItemUpdateWithoutReceiptInput, ReceiptItemUncheckedUpdateWithoutReceiptInput>
  }

  export type ReceiptItemUpdateManyWithWhereWithoutReceiptInput = {
    where: ReceiptItemScalarWhereInput
    data: XOR<ReceiptItemUpdateManyMutationInput, ReceiptItemUncheckedUpdateManyWithoutReceiptInput>
  }

  export type ReceiptItemScalarWhereInput = {
    AND?: ReceiptItemScalarWhereInput | ReceiptItemScalarWhereInput[]
    OR?: ReceiptItemScalarWhereInput[]
    NOT?: ReceiptItemScalarWhereInput | ReceiptItemScalarWhereInput[]
    id?: IntFilter<"ReceiptItem"> | number
    receiptId?: IntFilter<"ReceiptItem"> | number
    productName?: StringFilter<"ReceiptItem"> | string
    price?: DecimalFilter<"ReceiptItem"> | Decimal | DecimalJsLike | number | string
    quantity?: DecimalFilter<"ReceiptItem"> | Decimal | DecimalJsLike | number | string
    unit?: StringFilter<"ReceiptItem"> | string
    pricePerUnit?: DecimalNullableFilter<"ReceiptItem"> | Decimal | DecimalJsLike | number | string | null
    taxRate?: DecimalNullableFilter<"ReceiptItem"> | Decimal | DecimalJsLike | number | string | null
  }

  export type ReceiptCreateWithoutItemsInput = {
    store_name?: string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    receipt_date?: Date | string | null
    payment_method?: $Enums.PaymentMethod | null
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    image_url?: string | null
    ocr_text?: string | null
    processed?: boolean
    uploaded_at?: Date | string
    list?: ShoppingListCreateNestedOneWithoutReceiptsInput
    user: UserCreateNestedOneWithoutReceiptsInput
  }

  export type ReceiptUncheckedCreateWithoutItemsInput = {
    receipt_id?: number
    list_id?: number | null
    user_id: number
    store_name?: string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    receipt_date?: Date | string | null
    payment_method?: $Enums.PaymentMethod | null
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    image_url?: string | null
    ocr_text?: string | null
    processed?: boolean
    uploaded_at?: Date | string
  }

  export type ReceiptCreateOrConnectWithoutItemsInput = {
    where: ReceiptWhereUniqueInput
    create: XOR<ReceiptCreateWithoutItemsInput, ReceiptUncheckedCreateWithoutItemsInput>
  }

  export type ReceiptUpsertWithoutItemsInput = {
    update: XOR<ReceiptUpdateWithoutItemsInput, ReceiptUncheckedUpdateWithoutItemsInput>
    create: XOR<ReceiptCreateWithoutItemsInput, ReceiptUncheckedCreateWithoutItemsInput>
    where?: ReceiptWhereInput
  }

  export type ReceiptUpdateToOneWithWhereWithoutItemsInput = {
    where?: ReceiptWhereInput
    data: XOR<ReceiptUpdateWithoutItemsInput, ReceiptUncheckedUpdateWithoutItemsInput>
  }

  export type ReceiptUpdateWithoutItemsInput = {
    store_name?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    receipt_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    ocr_text?: NullableStringFieldUpdateOperationsInput | string | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    list?: ShoppingListUpdateOneWithoutReceiptsNestedInput
    user?: UserUpdateOneRequiredWithoutReceiptsNestedInput
  }

  export type ReceiptUncheckedUpdateWithoutItemsInput = {
    receipt_id?: IntFieldUpdateOperationsInput | number
    list_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: IntFieldUpdateOperationsInput | number
    store_name?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    receipt_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    ocr_text?: NullableStringFieldUpdateOperationsInput | string | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutExpensesInput = {
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    lists?: ShoppingListCreateNestedManyWithoutOwnerInput
    accesses?: UserListAccessCreateNestedManyWithoutUserInput
    invitedAccess?: UserListAccessCreateNestedManyWithoutInvitedByInput
    receipts?: ReceiptCreateNestedManyWithoutUserInput
    checkedItems?: ListItemCreateNestedManyWithoutCheckedByInput
    sharedLists?: ShoppingListShareCreateNestedManyWithoutUserInput
    createdInvitations?: ListInvitationCreateNestedManyWithoutInviterInput
    usedInvitations?: ListInvitationCreateNestedManyWithoutUsedByUserInput
  }

  export type UserUncheckedCreateWithoutExpensesInput = {
    user_id?: number
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    lists?: ShoppingListUncheckedCreateNestedManyWithoutOwnerInput
    accesses?: UserListAccessUncheckedCreateNestedManyWithoutUserInput
    invitedAccess?: UserListAccessUncheckedCreateNestedManyWithoutInvitedByInput
    receipts?: ReceiptUncheckedCreateNestedManyWithoutUserInput
    checkedItems?: ListItemUncheckedCreateNestedManyWithoutCheckedByInput
    sharedLists?: ShoppingListShareUncheckedCreateNestedManyWithoutUserInput
    createdInvitations?: ListInvitationUncheckedCreateNestedManyWithoutInviterInput
    usedInvitations?: ListInvitationUncheckedCreateNestedManyWithoutUsedByUserInput
  }

  export type UserCreateOrConnectWithoutExpensesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
  }

  export type CategoryCreateWithoutExpensesInput = {
    name: string
    color_code?: string | null
    created_at?: Date | string
    items?: ListItemCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutExpensesInput = {
    category_id?: number
    name: string
    color_code?: string | null
    created_at?: Date | string
    items?: ListItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutExpensesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutExpensesInput, CategoryUncheckedCreateWithoutExpensesInput>
  }

  export type UserUpsertWithoutExpensesInput = {
    update: XOR<UserUpdateWithoutExpensesInput, UserUncheckedUpdateWithoutExpensesInput>
    create: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExpensesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExpensesInput, UserUncheckedUpdateWithoutExpensesInput>
  }

  export type UserUpdateWithoutExpensesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ShoppingListUpdateManyWithoutOwnerNestedInput
    accesses?: UserListAccessUpdateManyWithoutUserNestedInput
    invitedAccess?: UserListAccessUpdateManyWithoutInvitedByNestedInput
    receipts?: ReceiptUpdateManyWithoutUserNestedInput
    checkedItems?: ListItemUpdateManyWithoutCheckedByNestedInput
    sharedLists?: ShoppingListShareUpdateManyWithoutUserNestedInput
    createdInvitations?: ListInvitationUpdateManyWithoutInviterNestedInput
    usedInvitations?: ListInvitationUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExpensesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ShoppingListUncheckedUpdateManyWithoutOwnerNestedInput
    accesses?: UserListAccessUncheckedUpdateManyWithoutUserNestedInput
    invitedAccess?: UserListAccessUncheckedUpdateManyWithoutInvitedByNestedInput
    receipts?: ReceiptUncheckedUpdateManyWithoutUserNestedInput
    checkedItems?: ListItemUncheckedUpdateManyWithoutCheckedByNestedInput
    sharedLists?: ShoppingListShareUncheckedUpdateManyWithoutUserNestedInput
    createdInvitations?: ListInvitationUncheckedUpdateManyWithoutInviterNestedInput
    usedInvitations?: ListInvitationUncheckedUpdateManyWithoutUsedByUserNestedInput
  }

  export type CategoryUpsertWithoutExpensesInput = {
    update: XOR<CategoryUpdateWithoutExpensesInput, CategoryUncheckedUpdateWithoutExpensesInput>
    create: XOR<CategoryCreateWithoutExpensesInput, CategoryUncheckedCreateWithoutExpensesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutExpensesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutExpensesInput, CategoryUncheckedUpdateWithoutExpensesInput>
  }

  export type CategoryUpdateWithoutExpensesInput = {
    name?: StringFieldUpdateOperationsInput | string
    color_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ListItemUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutExpensesInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ListItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ShoppingListCreateWithoutSharedWithInput = {
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_shared?: boolean
    owner: UserCreateNestedOneWithoutListsInput
    items?: ListItemCreateNestedManyWithoutListInput
    receipts?: ReceiptCreateNestedManyWithoutListInput
    accesses?: UserListAccessCreateNestedManyWithoutListInput
    invitations?: ListInvitationCreateNestedManyWithoutListInput
  }

  export type ShoppingListUncheckedCreateWithoutSharedWithInput = {
    list_id?: number
    owner_id: number
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_shared?: boolean
    items?: ListItemUncheckedCreateNestedManyWithoutListInput
    receipts?: ReceiptUncheckedCreateNestedManyWithoutListInput
    accesses?: UserListAccessUncheckedCreateNestedManyWithoutListInput
    invitations?: ListInvitationUncheckedCreateNestedManyWithoutListInput
  }

  export type ShoppingListCreateOrConnectWithoutSharedWithInput = {
    where: ShoppingListWhereUniqueInput
    create: XOR<ShoppingListCreateWithoutSharedWithInput, ShoppingListUncheckedCreateWithoutSharedWithInput>
  }

  export type UserCreateWithoutSharedListsInput = {
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    lists?: ShoppingListCreateNestedManyWithoutOwnerInput
    accesses?: UserListAccessCreateNestedManyWithoutUserInput
    invitedAccess?: UserListAccessCreateNestedManyWithoutInvitedByInput
    receipts?: ReceiptCreateNestedManyWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    checkedItems?: ListItemCreateNestedManyWithoutCheckedByInput
    createdInvitations?: ListInvitationCreateNestedManyWithoutInviterInput
    usedInvitations?: ListInvitationCreateNestedManyWithoutUsedByUserInput
  }

  export type UserUncheckedCreateWithoutSharedListsInput = {
    user_id?: number
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    lists?: ShoppingListUncheckedCreateNestedManyWithoutOwnerInput
    accesses?: UserListAccessUncheckedCreateNestedManyWithoutUserInput
    invitedAccess?: UserListAccessUncheckedCreateNestedManyWithoutInvitedByInput
    receipts?: ReceiptUncheckedCreateNestedManyWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    checkedItems?: ListItemUncheckedCreateNestedManyWithoutCheckedByInput
    createdInvitations?: ListInvitationUncheckedCreateNestedManyWithoutInviterInput
    usedInvitations?: ListInvitationUncheckedCreateNestedManyWithoutUsedByUserInput
  }

  export type UserCreateOrConnectWithoutSharedListsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSharedListsInput, UserUncheckedCreateWithoutSharedListsInput>
  }

  export type ShoppingListUpsertWithoutSharedWithInput = {
    update: XOR<ShoppingListUpdateWithoutSharedWithInput, ShoppingListUncheckedUpdateWithoutSharedWithInput>
    create: XOR<ShoppingListCreateWithoutSharedWithInput, ShoppingListUncheckedCreateWithoutSharedWithInput>
    where?: ShoppingListWhereInput
  }

  export type ShoppingListUpdateToOneWithWhereWithoutSharedWithInput = {
    where?: ShoppingListWhereInput
    data: XOR<ShoppingListUpdateWithoutSharedWithInput, ShoppingListUncheckedUpdateWithoutSharedWithInput>
  }

  export type ShoppingListUpdateWithoutSharedWithInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutListsNestedInput
    items?: ListItemUpdateManyWithoutListNestedInput
    receipts?: ReceiptUpdateManyWithoutListNestedInput
    accesses?: UserListAccessUpdateManyWithoutListNestedInput
    invitations?: ListInvitationUpdateManyWithoutListNestedInput
  }

  export type ShoppingListUncheckedUpdateWithoutSharedWithInput = {
    list_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    items?: ListItemUncheckedUpdateManyWithoutListNestedInput
    receipts?: ReceiptUncheckedUpdateManyWithoutListNestedInput
    accesses?: UserListAccessUncheckedUpdateManyWithoutListNestedInput
    invitations?: ListInvitationUncheckedUpdateManyWithoutListNestedInput
  }

  export type UserUpsertWithoutSharedListsInput = {
    update: XOR<UserUpdateWithoutSharedListsInput, UserUncheckedUpdateWithoutSharedListsInput>
    create: XOR<UserCreateWithoutSharedListsInput, UserUncheckedCreateWithoutSharedListsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSharedListsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSharedListsInput, UserUncheckedUpdateWithoutSharedListsInput>
  }

  export type UserUpdateWithoutSharedListsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ShoppingListUpdateManyWithoutOwnerNestedInput
    accesses?: UserListAccessUpdateManyWithoutUserNestedInput
    invitedAccess?: UserListAccessUpdateManyWithoutInvitedByNestedInput
    receipts?: ReceiptUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    checkedItems?: ListItemUpdateManyWithoutCheckedByNestedInput
    createdInvitations?: ListInvitationUpdateManyWithoutInviterNestedInput
    usedInvitations?: ListInvitationUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSharedListsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ShoppingListUncheckedUpdateManyWithoutOwnerNestedInput
    accesses?: UserListAccessUncheckedUpdateManyWithoutUserNestedInput
    invitedAccess?: UserListAccessUncheckedUpdateManyWithoutInvitedByNestedInput
    receipts?: ReceiptUncheckedUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    checkedItems?: ListItemUncheckedUpdateManyWithoutCheckedByNestedInput
    createdInvitations?: ListInvitationUncheckedUpdateManyWithoutInviterNestedInput
    usedInvitations?: ListInvitationUncheckedUpdateManyWithoutUsedByUserNestedInput
  }

  export type ShoppingListCreateWithoutInvitationsInput = {
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_shared?: boolean
    owner: UserCreateNestedOneWithoutListsInput
    items?: ListItemCreateNestedManyWithoutListInput
    receipts?: ReceiptCreateNestedManyWithoutListInput
    accesses?: UserListAccessCreateNestedManyWithoutListInput
    sharedWith?: ShoppingListShareCreateNestedManyWithoutListInput
  }

  export type ShoppingListUncheckedCreateWithoutInvitationsInput = {
    list_id?: number
    owner_id: number
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_shared?: boolean
    items?: ListItemUncheckedCreateNestedManyWithoutListInput
    receipts?: ReceiptUncheckedCreateNestedManyWithoutListInput
    accesses?: UserListAccessUncheckedCreateNestedManyWithoutListInput
    sharedWith?: ShoppingListShareUncheckedCreateNestedManyWithoutListInput
  }

  export type ShoppingListCreateOrConnectWithoutInvitationsInput = {
    where: ShoppingListWhereUniqueInput
    create: XOR<ShoppingListCreateWithoutInvitationsInput, ShoppingListUncheckedCreateWithoutInvitationsInput>
  }

  export type UserCreateWithoutCreatedInvitationsInput = {
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    lists?: ShoppingListCreateNestedManyWithoutOwnerInput
    accesses?: UserListAccessCreateNestedManyWithoutUserInput
    invitedAccess?: UserListAccessCreateNestedManyWithoutInvitedByInput
    receipts?: ReceiptCreateNestedManyWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    checkedItems?: ListItemCreateNestedManyWithoutCheckedByInput
    sharedLists?: ShoppingListShareCreateNestedManyWithoutUserInput
    usedInvitations?: ListInvitationCreateNestedManyWithoutUsedByUserInput
  }

  export type UserUncheckedCreateWithoutCreatedInvitationsInput = {
    user_id?: number
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    lists?: ShoppingListUncheckedCreateNestedManyWithoutOwnerInput
    accesses?: UserListAccessUncheckedCreateNestedManyWithoutUserInput
    invitedAccess?: UserListAccessUncheckedCreateNestedManyWithoutInvitedByInput
    receipts?: ReceiptUncheckedCreateNestedManyWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    checkedItems?: ListItemUncheckedCreateNestedManyWithoutCheckedByInput
    sharedLists?: ShoppingListShareUncheckedCreateNestedManyWithoutUserInput
    usedInvitations?: ListInvitationUncheckedCreateNestedManyWithoutUsedByUserInput
  }

  export type UserCreateOrConnectWithoutCreatedInvitationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedInvitationsInput, UserUncheckedCreateWithoutCreatedInvitationsInput>
  }

  export type UserCreateWithoutUsedInvitationsInput = {
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    lists?: ShoppingListCreateNestedManyWithoutOwnerInput
    accesses?: UserListAccessCreateNestedManyWithoutUserInput
    invitedAccess?: UserListAccessCreateNestedManyWithoutInvitedByInput
    receipts?: ReceiptCreateNestedManyWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    checkedItems?: ListItemCreateNestedManyWithoutCheckedByInput
    sharedLists?: ShoppingListShareCreateNestedManyWithoutUserInput
    createdInvitations?: ListInvitationCreateNestedManyWithoutInviterInput
  }

  export type UserUncheckedCreateWithoutUsedInvitationsInput = {
    user_id?: number
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    lists?: ShoppingListUncheckedCreateNestedManyWithoutOwnerInput
    accesses?: UserListAccessUncheckedCreateNestedManyWithoutUserInput
    invitedAccess?: UserListAccessUncheckedCreateNestedManyWithoutInvitedByInput
    receipts?: ReceiptUncheckedCreateNestedManyWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    checkedItems?: ListItemUncheckedCreateNestedManyWithoutCheckedByInput
    sharedLists?: ShoppingListShareUncheckedCreateNestedManyWithoutUserInput
    createdInvitations?: ListInvitationUncheckedCreateNestedManyWithoutInviterInput
  }

  export type UserCreateOrConnectWithoutUsedInvitationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUsedInvitationsInput, UserUncheckedCreateWithoutUsedInvitationsInput>
  }

  export type ShoppingListUpsertWithoutInvitationsInput = {
    update: XOR<ShoppingListUpdateWithoutInvitationsInput, ShoppingListUncheckedUpdateWithoutInvitationsInput>
    create: XOR<ShoppingListCreateWithoutInvitationsInput, ShoppingListUncheckedCreateWithoutInvitationsInput>
    where?: ShoppingListWhereInput
  }

  export type ShoppingListUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: ShoppingListWhereInput
    data: XOR<ShoppingListUpdateWithoutInvitationsInput, ShoppingListUncheckedUpdateWithoutInvitationsInput>
  }

  export type ShoppingListUpdateWithoutInvitationsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutListsNestedInput
    items?: ListItemUpdateManyWithoutListNestedInput
    receipts?: ReceiptUpdateManyWithoutListNestedInput
    accesses?: UserListAccessUpdateManyWithoutListNestedInput
    sharedWith?: ShoppingListShareUpdateManyWithoutListNestedInput
  }

  export type ShoppingListUncheckedUpdateWithoutInvitationsInput = {
    list_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    items?: ListItemUncheckedUpdateManyWithoutListNestedInput
    receipts?: ReceiptUncheckedUpdateManyWithoutListNestedInput
    accesses?: UserListAccessUncheckedUpdateManyWithoutListNestedInput
    sharedWith?: ShoppingListShareUncheckedUpdateManyWithoutListNestedInput
  }

  export type UserUpsertWithoutCreatedInvitationsInput = {
    update: XOR<UserUpdateWithoutCreatedInvitationsInput, UserUncheckedUpdateWithoutCreatedInvitationsInput>
    create: XOR<UserCreateWithoutCreatedInvitationsInput, UserUncheckedCreateWithoutCreatedInvitationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedInvitationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedInvitationsInput, UserUncheckedUpdateWithoutCreatedInvitationsInput>
  }

  export type UserUpdateWithoutCreatedInvitationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ShoppingListUpdateManyWithoutOwnerNestedInput
    accesses?: UserListAccessUpdateManyWithoutUserNestedInput
    invitedAccess?: UserListAccessUpdateManyWithoutInvitedByNestedInput
    receipts?: ReceiptUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    checkedItems?: ListItemUpdateManyWithoutCheckedByNestedInput
    sharedLists?: ShoppingListShareUpdateManyWithoutUserNestedInput
    usedInvitations?: ListInvitationUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedInvitationsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ShoppingListUncheckedUpdateManyWithoutOwnerNestedInput
    accesses?: UserListAccessUncheckedUpdateManyWithoutUserNestedInput
    invitedAccess?: UserListAccessUncheckedUpdateManyWithoutInvitedByNestedInput
    receipts?: ReceiptUncheckedUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    checkedItems?: ListItemUncheckedUpdateManyWithoutCheckedByNestedInput
    sharedLists?: ShoppingListShareUncheckedUpdateManyWithoutUserNestedInput
    usedInvitations?: ListInvitationUncheckedUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserUpsertWithoutUsedInvitationsInput = {
    update: XOR<UserUpdateWithoutUsedInvitationsInput, UserUncheckedUpdateWithoutUsedInvitationsInput>
    create: XOR<UserCreateWithoutUsedInvitationsInput, UserUncheckedCreateWithoutUsedInvitationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUsedInvitationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUsedInvitationsInput, UserUncheckedUpdateWithoutUsedInvitationsInput>
  }

  export type UserUpdateWithoutUsedInvitationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ShoppingListUpdateManyWithoutOwnerNestedInput
    accesses?: UserListAccessUpdateManyWithoutUserNestedInput
    invitedAccess?: UserListAccessUpdateManyWithoutInvitedByNestedInput
    receipts?: ReceiptUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    checkedItems?: ListItemUpdateManyWithoutCheckedByNestedInput
    sharedLists?: ShoppingListShareUpdateManyWithoutUserNestedInput
    createdInvitations?: ListInvitationUpdateManyWithoutInviterNestedInput
  }

  export type UserUncheckedUpdateWithoutUsedInvitationsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ShoppingListUncheckedUpdateManyWithoutOwnerNestedInput
    accesses?: UserListAccessUncheckedUpdateManyWithoutUserNestedInput
    invitedAccess?: UserListAccessUncheckedUpdateManyWithoutInvitedByNestedInput
    receipts?: ReceiptUncheckedUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    checkedItems?: ListItemUncheckedUpdateManyWithoutCheckedByNestedInput
    sharedLists?: ShoppingListShareUncheckedUpdateManyWithoutUserNestedInput
    createdInvitations?: ListInvitationUncheckedUpdateManyWithoutInviterNestedInput
  }

  export type ShoppingListCreateManyOwnerInput = {
    list_id?: number
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_shared?: boolean
  }

  export type UserListAccessCreateManyUserInput = {
    access_id?: number
    list_id: number
    role: $Enums.Role
    invited_by?: number | null
    joined_at?: Date | string
  }

  export type UserListAccessCreateManyInvitedByInput = {
    access_id?: number
    user_id: number
    list_id: number
    role: $Enums.Role
    joined_at?: Date | string
  }

  export type ReceiptCreateManyUserInput = {
    receipt_id?: number
    list_id?: number | null
    store_name?: string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    receipt_date?: Date | string | null
    payment_method?: $Enums.PaymentMethod | null
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    image_url?: string | null
    ocr_text?: string | null
    processed?: boolean
    uploaded_at?: Date | string
  }

  export type ExpenseCreateManyUserInput = {
    expense_id?: number
    category_id?: number | null
    total_amount: Decimal | DecimalJsLike | number | string
    month: number
    year: number
    created_at?: Date | string
  }

  export type ListItemCreateManyCheckedByInput = {
    item_id?: number
    list_id: number
    category_id?: number | null
    name: string
    quantity?: number
    price?: Decimal | DecimalJsLike | number | string | null
    source?: $Enums.Source | null
    is_checked?: boolean
    created_at?: Date | string
    checkedAt?: Date | string | null
  }

  export type ShoppingListShareCreateManyUserInput = {
    id?: number
    list_id: number
    role: $Enums.Role
  }

  export type ListInvitationCreateManyInviterInput = {
    invitation_id?: number
    list_id: number
    invite_code: string
    role?: $Enums.Role
    expires_at: Date | string
    is_used?: boolean
    used_by?: number | null
    created_at?: Date | string
    used_at?: Date | string | null
    max_uses?: number
    uses_count?: number
  }

  export type ListInvitationCreateManyUsedByUserInput = {
    invitation_id?: number
    list_id: number
    invited_by: number
    invite_code: string
    role?: $Enums.Role
    expires_at: Date | string
    is_used?: boolean
    created_at?: Date | string
    used_at?: Date | string | null
    max_uses?: number
    uses_count?: number
  }

  export type ShoppingListUpdateWithoutOwnerInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    items?: ListItemUpdateManyWithoutListNestedInput
    receipts?: ReceiptUpdateManyWithoutListNestedInput
    accesses?: UserListAccessUpdateManyWithoutListNestedInput
    sharedWith?: ShoppingListShareUpdateManyWithoutListNestedInput
    invitations?: ListInvitationUpdateManyWithoutListNestedInput
  }

  export type ShoppingListUncheckedUpdateWithoutOwnerInput = {
    list_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    items?: ListItemUncheckedUpdateManyWithoutListNestedInput
    receipts?: ReceiptUncheckedUpdateManyWithoutListNestedInput
    accesses?: UserListAccessUncheckedUpdateManyWithoutListNestedInput
    sharedWith?: ShoppingListShareUncheckedUpdateManyWithoutListNestedInput
    invitations?: ListInvitationUncheckedUpdateManyWithoutListNestedInput
  }

  export type ShoppingListUncheckedUpdateManyWithoutOwnerInput = {
    list_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_shared?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserListAccessUpdateWithoutUserInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    list?: ShoppingListUpdateOneRequiredWithoutAccessesNestedInput
    invitedBy?: UserUpdateOneWithoutInvitedAccessNestedInput
  }

  export type UserListAccessUncheckedUpdateWithoutUserInput = {
    access_id?: IntFieldUpdateOperationsInput | number
    list_id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    invited_by?: NullableIntFieldUpdateOperationsInput | number | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserListAccessUncheckedUpdateManyWithoutUserInput = {
    access_id?: IntFieldUpdateOperationsInput | number
    list_id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    invited_by?: NullableIntFieldUpdateOperationsInput | number | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserListAccessUpdateWithoutInvitedByInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccessesNestedInput
    list?: ShoppingListUpdateOneRequiredWithoutAccessesNestedInput
  }

  export type UserListAccessUncheckedUpdateWithoutInvitedByInput = {
    access_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    list_id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserListAccessUncheckedUpdateManyWithoutInvitedByInput = {
    access_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    list_id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceiptUpdateWithoutUserInput = {
    store_name?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    receipt_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    ocr_text?: NullableStringFieldUpdateOperationsInput | string | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    list?: ShoppingListUpdateOneWithoutReceiptsNestedInput
    items?: ReceiptItemUpdateManyWithoutReceiptNestedInput
  }

  export type ReceiptUncheckedUpdateWithoutUserInput = {
    receipt_id?: IntFieldUpdateOperationsInput | number
    list_id?: NullableIntFieldUpdateOperationsInput | number | null
    store_name?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    receipt_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    ocr_text?: NullableStringFieldUpdateOperationsInput | string | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ReceiptItemUncheckedUpdateManyWithoutReceiptNestedInput
  }

  export type ReceiptUncheckedUpdateManyWithoutUserInput = {
    receipt_id?: IntFieldUpdateOperationsInput | number
    list_id?: NullableIntFieldUpdateOperationsInput | number | null
    store_name?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    receipt_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    ocr_text?: NullableStringFieldUpdateOperationsInput | string | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUpdateWithoutUserInput = {
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutUserInput = {
    expense_id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyWithoutUserInput = {
    expense_id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListItemUpdateWithoutCheckedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source?: NullableEnumSourceFieldUpdateOperationsInput | $Enums.Source | null
    is_checked?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    list?: ShoppingListUpdateOneRequiredWithoutItemsNestedInput
    category?: CategoryUpdateOneWithoutItemsNestedInput
  }

  export type ListItemUncheckedUpdateWithoutCheckedByInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    list_id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source?: NullableEnumSourceFieldUpdateOperationsInput | $Enums.Source | null
    is_checked?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ListItemUncheckedUpdateManyWithoutCheckedByInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    list_id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source?: NullableEnumSourceFieldUpdateOperationsInput | $Enums.Source | null
    is_checked?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShoppingListShareUpdateWithoutUserInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    list?: ShoppingListUpdateOneRequiredWithoutSharedWithNestedInput
  }

  export type ShoppingListShareUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    list_id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ShoppingListShareUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    list_id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ListInvitationUpdateWithoutInviterInput = {
    invite_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_uses?: IntFieldUpdateOperationsInput | number
    uses_count?: IntFieldUpdateOperationsInput | number
    list?: ShoppingListUpdateOneRequiredWithoutInvitationsNestedInput
    usedByUser?: UserUpdateOneWithoutUsedInvitationsNestedInput
  }

  export type ListInvitationUncheckedUpdateWithoutInviterInput = {
    invitation_id?: IntFieldUpdateOperationsInput | number
    list_id?: IntFieldUpdateOperationsInput | number
    invite_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    used_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_uses?: IntFieldUpdateOperationsInput | number
    uses_count?: IntFieldUpdateOperationsInput | number
  }

  export type ListInvitationUncheckedUpdateManyWithoutInviterInput = {
    invitation_id?: IntFieldUpdateOperationsInput | number
    list_id?: IntFieldUpdateOperationsInput | number
    invite_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    used_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_uses?: IntFieldUpdateOperationsInput | number
    uses_count?: IntFieldUpdateOperationsInput | number
  }

  export type ListInvitationUpdateWithoutUsedByUserInput = {
    invite_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_uses?: IntFieldUpdateOperationsInput | number
    uses_count?: IntFieldUpdateOperationsInput | number
    list?: ShoppingListUpdateOneRequiredWithoutInvitationsNestedInput
    inviter?: UserUpdateOneRequiredWithoutCreatedInvitationsNestedInput
  }

  export type ListInvitationUncheckedUpdateWithoutUsedByUserInput = {
    invitation_id?: IntFieldUpdateOperationsInput | number
    list_id?: IntFieldUpdateOperationsInput | number
    invited_by?: IntFieldUpdateOperationsInput | number
    invite_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_uses?: IntFieldUpdateOperationsInput | number
    uses_count?: IntFieldUpdateOperationsInput | number
  }

  export type ListInvitationUncheckedUpdateManyWithoutUsedByUserInput = {
    invitation_id?: IntFieldUpdateOperationsInput | number
    list_id?: IntFieldUpdateOperationsInput | number
    invited_by?: IntFieldUpdateOperationsInput | number
    invite_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_uses?: IntFieldUpdateOperationsInput | number
    uses_count?: IntFieldUpdateOperationsInput | number
  }

  export type ListItemCreateManyListInput = {
    item_id?: number
    category_id?: number | null
    name: string
    quantity?: number
    price?: Decimal | DecimalJsLike | number | string | null
    source?: $Enums.Source | null
    is_checked?: boolean
    created_at?: Date | string
    checkedById?: number | null
    checkedAt?: Date | string | null
  }

  export type ReceiptCreateManyListInput = {
    receipt_id?: number
    user_id: number
    store_name?: string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    receipt_date?: Date | string | null
    payment_method?: $Enums.PaymentMethod | null
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    image_url?: string | null
    ocr_text?: string | null
    processed?: boolean
    uploaded_at?: Date | string
  }

  export type UserListAccessCreateManyListInput = {
    access_id?: number
    user_id: number
    role: $Enums.Role
    invited_by?: number | null
    joined_at?: Date | string
  }

  export type ShoppingListShareCreateManyListInput = {
    id?: number
    user_id: number
    role: $Enums.Role
  }

  export type ListInvitationCreateManyListInput = {
    invitation_id?: number
    invited_by: number
    invite_code: string
    role?: $Enums.Role
    expires_at: Date | string
    is_used?: boolean
    used_by?: number | null
    created_at?: Date | string
    used_at?: Date | string | null
    max_uses?: number
    uses_count?: number
  }

  export type ListItemUpdateWithoutListInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source?: NullableEnumSourceFieldUpdateOperationsInput | $Enums.Source | null
    is_checked?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: CategoryUpdateOneWithoutItemsNestedInput
    checkedBy?: UserUpdateOneWithoutCheckedItemsNestedInput
  }

  export type ListItemUncheckedUpdateWithoutListInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source?: NullableEnumSourceFieldUpdateOperationsInput | $Enums.Source | null
    is_checked?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedById?: NullableIntFieldUpdateOperationsInput | number | null
    checkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ListItemUncheckedUpdateManyWithoutListInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source?: NullableEnumSourceFieldUpdateOperationsInput | $Enums.Source | null
    is_checked?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedById?: NullableIntFieldUpdateOperationsInput | number | null
    checkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReceiptUpdateWithoutListInput = {
    store_name?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    receipt_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    ocr_text?: NullableStringFieldUpdateOperationsInput | string | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReceiptsNestedInput
    items?: ReceiptItemUpdateManyWithoutReceiptNestedInput
  }

  export type ReceiptUncheckedUpdateWithoutListInput = {
    receipt_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    store_name?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    receipt_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    ocr_text?: NullableStringFieldUpdateOperationsInput | string | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ReceiptItemUncheckedUpdateManyWithoutReceiptNestedInput
  }

  export type ReceiptUncheckedUpdateManyWithoutListInput = {
    receipt_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    store_name?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    receipt_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    ocr_text?: NullableStringFieldUpdateOperationsInput | string | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserListAccessUpdateWithoutListInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccessesNestedInput
    invitedBy?: UserUpdateOneWithoutInvitedAccessNestedInput
  }

  export type UserListAccessUncheckedUpdateWithoutListInput = {
    access_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    invited_by?: NullableIntFieldUpdateOperationsInput | number | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserListAccessUncheckedUpdateManyWithoutListInput = {
    access_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    invited_by?: NullableIntFieldUpdateOperationsInput | number | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingListShareUpdateWithoutListInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user?: UserUpdateOneRequiredWithoutSharedListsNestedInput
  }

  export type ShoppingListShareUncheckedUpdateWithoutListInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ShoppingListShareUncheckedUpdateManyWithoutListInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ListInvitationUpdateWithoutListInput = {
    invite_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_uses?: IntFieldUpdateOperationsInput | number
    uses_count?: IntFieldUpdateOperationsInput | number
    inviter?: UserUpdateOneRequiredWithoutCreatedInvitationsNestedInput
    usedByUser?: UserUpdateOneWithoutUsedInvitationsNestedInput
  }

  export type ListInvitationUncheckedUpdateWithoutListInput = {
    invitation_id?: IntFieldUpdateOperationsInput | number
    invited_by?: IntFieldUpdateOperationsInput | number
    invite_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    used_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_uses?: IntFieldUpdateOperationsInput | number
    uses_count?: IntFieldUpdateOperationsInput | number
  }

  export type ListInvitationUncheckedUpdateManyWithoutListInput = {
    invitation_id?: IntFieldUpdateOperationsInput | number
    invited_by?: IntFieldUpdateOperationsInput | number
    invite_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    used_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_uses?: IntFieldUpdateOperationsInput | number
    uses_count?: IntFieldUpdateOperationsInput | number
  }

  export type ListItemCreateManyCategoryInput = {
    item_id?: number
    list_id: number
    name: string
    quantity?: number
    price?: Decimal | DecimalJsLike | number | string | null
    source?: $Enums.Source | null
    is_checked?: boolean
    created_at?: Date | string
    checkedById?: number | null
    checkedAt?: Date | string | null
  }

  export type ExpenseCreateManyCategoryInput = {
    expense_id?: number
    user_id: number
    total_amount: Decimal | DecimalJsLike | number | string
    month: number
    year: number
    created_at?: Date | string
  }

  export type ListItemUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source?: NullableEnumSourceFieldUpdateOperationsInput | $Enums.Source | null
    is_checked?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    list?: ShoppingListUpdateOneRequiredWithoutItemsNestedInput
    checkedBy?: UserUpdateOneWithoutCheckedItemsNestedInput
  }

  export type ListItemUncheckedUpdateWithoutCategoryInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    list_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source?: NullableEnumSourceFieldUpdateOperationsInput | $Enums.Source | null
    is_checked?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedById?: NullableIntFieldUpdateOperationsInput | number | null
    checkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ListItemUncheckedUpdateManyWithoutCategoryInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    list_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source?: NullableEnumSourceFieldUpdateOperationsInput | $Enums.Source | null
    is_checked?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedById?: NullableIntFieldUpdateOperationsInput | number | null
    checkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExpenseUpdateWithoutCategoryInput = {
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutCategoryInput = {
    expense_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyWithoutCategoryInput = {
    expense_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceiptItemCreateManyReceiptInput = {
    id?: number
    productName: string
    price: Decimal | DecimalJsLike | number | string
    quantity?: Decimal | DecimalJsLike | number | string
    unit?: string
    pricePerUnit?: Decimal | DecimalJsLike | number | string | null
    taxRate?: Decimal | DecimalJsLike | number | string | null
  }

  export type ReceiptItemUpdateWithoutReceiptInput = {
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    taxRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ReceiptItemUncheckedUpdateWithoutReceiptInput = {
    id?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    taxRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ReceiptItemUncheckedUpdateManyWithoutReceiptInput = {
    id?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    taxRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}