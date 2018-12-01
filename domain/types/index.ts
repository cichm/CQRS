import * as input from './input';

import { TypeOf } from "io-ts";
import { UserEvent as UserEventIo } from "./user/events";

export type UserId = TypeOf<typeof input.UserId>
export type UserInfo = TypeOf<typeof input.UserInfo>

// event types
export type UserEvent = TypeOf<typeof UserEventIo>

// model types
export * from './user/model'

export * from './user/repository'