import { Obj, Tuple, Union, Equal } from './_utils';

// TReturnType
type TReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;

type TReturnType1 = TReturnType<() => Obj>;

// TOmit
type TOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type TOmit1 = TOmit<Obj, 'a'>;

// TupleToUnion
type TupleToUnion<T extends any[]> = T[number];

type TupleToUnion1 = TupleToUnion<Tuple>;

// Last
type Last<T extends any[]> = T extends [...infer F, infer R] ? R : never;

type Last1 = Last<Tuple>;

// Pop
type Pop<T extends any[]> = T extends []
  ? []
  : T extends [...infer F, infer R]
  ? F
  : never;

type Pop1 = Pop<Tuple>;

// LookUp
type LookUp<T, U> = 8;
