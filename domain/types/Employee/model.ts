import {EmployeeId, UserEvent, RankRange} from "../index";

export type Employee = {
    employeeId: EmployeeId
}

export type RankEmployeeParams = {
    events: {
        eventType: UserEvent['type']
        factor: number
        group: string
    }[]
    groups: {
        group: string
        rankRange: RankRange
    }[]
}