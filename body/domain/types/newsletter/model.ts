import {
    RankRange,
    GamerEvent,
    NewsletterId,
    GamerInfo,
    NewsletterPermission,
    NewsletterPrivilege,
    StageRule
} from "../index";

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

export type Newsletter = {
    newsletterId: NewsletterId
    privileges: NewsletterPrivilegeConditions
    rankCalcParams: RankCalcParams
    editors: {
        invited: GamerInfo[]
        confirmed: GamerInfo[]
    }
    stageRules: StageRule[]
}

export type NewsletterPrivilegeConditions = {
    [Privilege in NewsletterPrivilege]: NewsletterPermission
}