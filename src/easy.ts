import { Obj, Tuple, Union, Equal } from './_utils';

// Pick
type TPick<T, U extends keyof T> = {
  [K in U]: T[K];
};

type TPick1 = TPick<Obj, 'a'>;

// Readonly
type TReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

type TReadonly1 = TReadonly<Obj>;

// TupleToObject
type TupleToObject<T extends readonly (keyof any)[]> = {
  [K in T[number]]: K;
};

type TupleToObject1 = TupleToObject<Tuple>;

// First
type First<T extends any[]> = T extends [] ? never : T[0];
// type First<T extends any[]> = T extends [infer R, ...infer F]
//   ? R
//   : never;

type First1 = First<Tuple>;

// Length
type Length<T extends readonly any[]> = T['length'];
// type Length<T extends readonly any[]> = T extends { length: infer R }
//   ? R
//   : never;

type Length1 = Length<Tuple>;

// Awaited ??????????????????????????

type Awaited = 77777777;

// Exclude
type TExclude<T, U> = T extends U ? never : T;

type TExclude1 = TExclude<Union, 'a' | 'b'>;

// If
type If<B extends boolean, K, U> = B extends true ? K : U;

type If1 = If<false, 'a', 'b'>;

// Concat
type Concat<T extends readonly any[], U extends readonly any[]> = [...T, ...U];

type Concat1 = Concat<Tuple, [1, 2, 3]>;

// Includes
type Includes<T extends any[], U> = T extends [infer R, ...infer F]
  ? Equal<R, U> extends true
    ? true
    : Includes<F, U>
  : false;

type Includes1 = Includes<Tuple, 2>;

// Push
type Push<T extends any[], U> = [...T, U];

type Push1 = Push<Tuple, 'jjjjj'>;

// Unshift
type Unshift<T extends any[], U> = [U, ...T];

type Unshift1 = Unshift<Tuple, 'jjjjj'>;

// TParameters
type TParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer R
) => any
  ? R
  : never;

type TParameters1 = TParameters<(a: 'aa', b: 'bb') => void>;
