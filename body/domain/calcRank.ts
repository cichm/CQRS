import {RankEvent} from "./types/gamer/model";
import {RankCalcParams} from "./types/newsletter/model";

const calcRank = (rankEvents: RankEvent[], rankCalcParams: RankCalcParams): number => {
    if (!rankEvents.length) {
        return 0
    }

    const sumPerGroup = rankCalcParams.events.reduce(
        (sum, { group, factor, eventType }) => {
            const timesOccured = rankEvents.filter(e => e.eventType === eventType).length

            return {
                ...sum,
                [group]: (sum[group] || 0) + timesOccured * factor
            }
        },
        {}
    );

    const clamp = (value, min, max) => {
        return min < max
            ? (value < min ? min : value > max ? max : value)
            : (value < max ? max : value > min ? min : value)
    };


    return Object.keys(sumPerGroup).reduce((sum, group) => {
        const groupCalcParams = rankCalcParams.groups.find(p => p.group === group)
        if (!groupCalcParams) {
            return sum
        }
        const { rankRange } = groupCalcParams;

        return sum + clamp(sumPerGroup[group], rankRange.min, rankRange.max)
    }, 0)
};

export default calcRank
