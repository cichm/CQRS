import * as t from 'io-ts'
import * as isUrl from 'is-url';

export const NonNegativeInt = t.refinement(t.Integer, num => num >= 0);
export const After2017 = t.refinement(t.Integer, val => val > 1483228800000);
export const String100 = t.refinement(t.string, s => s.length <= 100);

export const GamerId = brand(t.string, 'GamerId');
export const GameId = brand(t.string, 'GameId');
export const NewsletterId = brand(t.string, 'NewsletterId');
export const Timestamp = brand(After2017, 'Timestamp');
export const Description = brand(t.string, 'Description');
export const Title = brand(String100, 'Title');
export var URL = brand(t.refinement(t.string, isUrl), 'URL');

export const Evaluation = t.union([
    t.literal('approve'),
    t.literal('reject')
]);
export const NewsletterPrivilege = t.union([
    t.literal('canPlayGame'),
    t.literal('canUpdateNewsletter'),
    t.literal('canUpdatePrivilege'),
    t.literal('canUpdateRankCalcParams'),
    t.literal('canUpdateStageRules'),
    t.literal('canUpdateStageRules'),
    t.literal('canUpdateEditor'),
    t.literal('canDeleteNewsletter')
]);

const Min = t.type({ min: t.Integer });
const Max = t.partial({ max: NonNegativeInt });
export const RankRange = t.intersection([ Min, Max ]);

const NewsletterRank = t.partial({ newsletterRank: RankRange });
const BeenionRank = t.partial({ beenionRank: RankRange });
const Gamers = t.partial({ gamers: t.array(GamerId)});

export const NewsletterPermission = t.intersection([
    NewsletterRank,
    BeenionRank,
    Gamers
]);

export const BeenionPermission = t.intersection([
    BeenionRank,
    Gamers
]);

export const StageRule = t.type({
    maxReviewers: NonNegativeInt,
    threshold: NonNegativeInt
});
export const StageRules = t.array(StageRule);

// helper function for creating nominal type in TS
// by using intersection with { __brand: Type }
// https://github.com/Microsoft/TypeScript/issues/202
function brand<T, B extends string> (
    type: t.Type<any, T>,
    _brand: B
): t.Type<any, T & { __brand: B }> {
    return type as any
}
