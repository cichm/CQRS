import {literal, type, union} from "io-ts";
import * as input from '../input'

export const UserEvent = union([
    type({
        type: literal('UserCreated'),
        payload: type({
            userId: input.UserId,
            timestamp: input.Timestamp
        })
    })
]);