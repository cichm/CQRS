import { EmployeeId, UserEvent, UserId } from "../index";

export type RankEvent = {
    type: 'Manager' | 'ItSpecialist' | 'teamLider'
    eventType: UserEvent['type']
    employeeId?: EmployeeId
}

export type User = {
    userid: UserId
    mergedUserIds: UserId[]
}