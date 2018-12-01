import * as t from 'io-ts'

export const Email = t.refinement(t.string, () => true);
export const After2017 = t.refinement(t.Integer, val => val > 1483228800000);

export const UserId = brand(t.string, 'UserId');
export const Timestamp = brand(After2017, 'Timestamp');

export const UserInfo = t.partial({
    beenionId: UserId,
    email: Email
});

// helper function for creating nominal type in TS
// by using intersection with { __brand: Type }
// https://github.com/Microsoft/TypeScript/issues/202
function brand<T, B extends string> (
    type: t.Type<any, T>,
    _brand: B
): t.Type<any, T & { __brand: B }> {
    return type as any
}
