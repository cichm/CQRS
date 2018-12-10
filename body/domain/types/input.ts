import * as t from 'io-ts'

export const NonNegativeInt = t.refinement(t.Integer, num => num >= 0);
export const After2017 = t.refinement(t.Integer, val => val > 1483228800000);

export const GamerId = brand(t.string, 'GamerId');
export const GameId = brand(t.string, 'GameId');
export const NewsletterId = brand(t.string, 'NewsletterId');
export const Timestamp = brand(After2017, 'Timestamp');

const Min = t.type({ min: t.Integer });
const Max = t.partial({ max: NonNegativeInt });
export const RankRange = t.intersection([ Min, Max ]);

// helper function for creating nominal type in TS
// by using intersection with { __brand: Type }
// https://github.com/Microsoft/TypeScript/issues/202
function brand<T, B extends string> (
    type: t.Type<any, T>,
    _brand: B
): t.Type<any, T & { __brand: B }> {
    return type as any
}
