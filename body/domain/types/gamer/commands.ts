import { type } from 'io-ts'
import * as input from '../input'

export const publicCommands = type({
   CreateGamer: type({
       gamerId: input.GamerId,
       payload: type({
           timestamp: input.Timestamp
       })
   })
});