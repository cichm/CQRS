import { type, literal } from 'io-ts'
import * as input from '../input'

export const privateCommands = type({

});

export const publicCommands = type({
    GetUser: type({
        userId: input.UserId,
        payload: type({
            timestamp: input.Timestamp
        })
    })
});