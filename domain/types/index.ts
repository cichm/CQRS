import * as input from './input';

import { TypeOf } from "io-ts";
import { UserEvent as UserEventIo } from "./user/events";

// basic input types
export type RankRange = TypeOf<typeof input.RankRange>

// command types
export type UserId = TypeOf<typeof input.UserId>
export type UserInfo = TypeOf<typeof input.UserInfo>
export type EmployeeId = TypeOf<typeof input.EmployeeId>


// event types
export type UserEvent = TypeOf<typeof UserEventIo>

// model types
export * from './user/model'
export * from './Employee/model'

// repository types
export * from './user/repository'