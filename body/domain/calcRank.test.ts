import {RankCalcParams} from "./types/newsletter/model";
import calcRank from "./calcRank";

describe('calc Rank', () => {
    const genericRankConditions = {
        events: [
            { eventType: 'ReviewInvitationAccepted', factor: 1, group: 'invitation' }
        ],
        groups: [
            { group: 'invitation', rankRange: { min: -9, max: 9 } },
            { group: 'gamerGold', rankRange: { min: -9, max: 9 } },
            { group: 'gamerSilver', rankRange: { min: -3, max: 3 } },
            { group: 'gamerBronze', rankRange: { min: -3, max: 3 } },
            { group: 'buildGold', rankRange: { min: -9, max: 9 } },
            { group: 'buildSilver', rankRange: { min: -3, max: 3 } },
            { group: 'buildBronze', rankRange: { min: -3, max: 3 } }
        ]
    } as RankCalcParams;

    it('should calculate newsletter rank', () => {
        expect(calcRank([], genericRankConditions)).toBe(0);

        expect(
            calcRank(
                [
                    {
                        category: 'GameVotes',
                        eventType: 'ReviewInvitationAccepted'
                    }
                ],
                genericRankConditions
            )
        ).toBe(1);
    })
});