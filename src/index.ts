import * as most from 'most';
import { curryN, CurriedFunction2, CurriedFunction3 } from 'ramda';

type Curry2 = <A, B, R>(fn: (a: A, b: B, ...rest: any[]) => R) => CurriedFunction2<A, B, R>;
// eslint-disable-next-line max-len
type Curry3 = <A, B, C, R>(fn: (a: A, b: B, c: C, ...rest: any[]) => R) => CurriedFunction3<A, B, C, R>
// @ts-ignore - curryN's type ironically is not curried (but the implementation is)
const curry2 = curryN(2) as Curry2;
// @ts-ignore
const curry3 = curryN(3) as Curry3;

export const map = curry2(most.map);
export const chain = curry2(most.chain);
export const tap = curry2(most.tap);
export const filter = curry2(most.filter);
export const startWith = curry2(most.startWith);
export const concat = curry2(most.concat);
export const continueWith = curry2(most.continueWith);
export const concatMap = curry2(most.concatMap);
// @ts-ignore - transduce is not typed
export const transduce = curry2(most.transduce);
export const slice = curry3(most.slice);
export const take = curry2(most.take);
export const skip = curry2(most.skip);
export const takeWhile = curry2(most.takeWhile);
export const skipWhile = curry2(most.skipWhile);
export const skipAfter = curry2(most.skipAfter);
export const until = curry2(most.until);
export const since = curry2(most.since);
export const during = curry2(most.during);
export const loop = curry3(most.loop);
export const reduce = curry3(most.reduce);
export const observe = curry2(most.observe);
export const delay = curry2(most.delay);
export const recoverWith = curry2(most.recoverWith);
export const merge = curry2(most.merge);
export const combine = curry2(most.combine);
