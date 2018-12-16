import { RankCalcParams } from "./types";

const  beenionRankCalcParams: RankCalcParams = {
    events: [
        {
            eventType: 'GamerUpvotedWithGold',
            factor: 100,
            group: 'gold'
        },
        {
            eventType: 'GamerDownvotedWithGold',
            factor: -100,
            group: 'gold'
        },
        {
            eventType: 'GamerUpvotedWithSilver',
            factor: 10,
            group: 'silver'
        },
        {
            eventType: 'GamerDownvotedWithSilver',
            factor: 100,
            group: 'silver'
        },
        {
            eventType: 'GamerUpvotedWithBronze',
            factor: 1,
            group: 'bronze'
        },
        {
            eventType: 'GamerDownvotedWithBronze',
            factor: -1,
            group: 'bronze'
        }
    ],
    groups: [
        { group: 'gold', rankRange: { min: -1000, max: 1000 } },
        { group: 'gold', rankRange: { min: -100, max: 100} },
        { group: 'gold', rankRange: { min: -100, max: 100 }}
    ]
};

export default beenionRankCalcParams