export type Obj = { a: 'aaa'; b: 'bbb'; c: 'ccc' };
export type Tuple = ['a', 'b', 'c', 'd'];
export type Union = 'a' | 'b' | 'c' | 'd';

export type Equal<T, U> = (<R>() => T extends R ? 1 : 2) extends <
  F
>() => U extends F ? 1 : 2
  ? true
  : false;
