/* eslint-disable max-len */
import * as most from 'most';

export const map = <A, B>(f: (a: A) => B) => (s: most.Stream<A>) => most.map(f, s);
export const chain = <A, B>(f: (a: A) => most.Stream<B>) => (s: most.Stream<A>) => most.chain(f, s);
export const tap = <A>(f: (a: A) => any) => (s: most.Stream<A>) => most.tap(f, s);
export const filter = <A>(f: (a: A) => boolean) => (s: most.Stream<A>) => most.filter(f, s);
export const startWith = <A>(a: A) => (s: most.Stream<A>) => most.startWith(a, s);
export const concat = <A>(s1: most.Stream<A>) => (s2: most.Stream<A>) => most.concat(s1, s2);
export const slice = (start: number, end: number) => <A>(s: most.Stream<A>) => most.slice(start, end, s);
export const take = (n: number) => <A>(s: most.Stream<A>) => most.take(n, s);
export const skip = (n: number) => <A>(s: most.Stream<A>) => most.skip(n, s);
export const takeWhile = <A>(p: (a: A) => boolean) => (s: most.Stream<A>) => most.takeWhile(p, s);
export const skipWhile = <A>(p: (a: A) => boolean) => (s: most.Stream<A>) => most.skipWhile(p, s);
export const skipAfter = <A>(p: (a: A) => boolean) => (s: most.Stream<A>) => most.skipAfter(p, s);
export const loop = <A, B, S>(f: (seed: S, a: A) => { seed: S, value: B }, seed: S) => (s: most.Stream<A>) => most.loop(f, seed, s);
export const reduce = <A, B>(f: (b: B, a: A) => B, b: B) => (s: most.Stream<A>) => most.reduce(f, b, s);
export const observe = <A>(f: (a: A) => any) => (s: most.Stream<A>) => most.observe(f, s);
export const delay = (dt: number) => <A>(s: most.Stream<A>) => most.delay(dt, s);
export const recoverWith = <A, B>(p: (a: B) => most.Stream<A>) => (s: most.Stream<A>) => most.recoverWith(p, s);
export const merge = <A>(s1: most.Stream<A>) => (s2: most.Stream<A>) => most.merge(s1, s2);
