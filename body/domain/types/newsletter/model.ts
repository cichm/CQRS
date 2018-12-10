import {RankRange, GamerEvent} from "../index";

export type RankCalcParams = {
    events: {
        eventType: GamerEvent['type']
        factor: number
        group: string
    }[]
    groups: {
        group: string
        rankRange: RankRange
    }[]
}
