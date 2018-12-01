import {RankEmployeeParams} from "./types";

describe('calc Rank', () => {
    const genericRankConditions = {
        events: [
            { eventType: '' }
        ],
        groups: [
            { group: '', rankRange: { position: 1 } }
        ]
    } as RankEmployeeParams;

    it('should calculate newsletter rank', () => {
        expect(calcRank([], genericRankConditions)).toBe(0);

        expect(
            calcRank(
                [
                    {
                        category: 'UserVotes',
                        eventType: 'UserUpvotedWithGold'
                    }
                ],
                genericRankConditions
            )
        ).toBe(3);
    })
});
