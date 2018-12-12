import {type} from "io-ts";
import * as input from '../input'

export const privateCommands = type({
    // StartGameServer: type({
    //     private: literal(true),
    //     payload: type({
    //         playerId: input.GamerId,
    //         newsletterId: input.NewsletterId,
    //         gameId: input.GameId,
    //         timestamp: input.Timestamp
    //     })
    // }),
    //
    // EndGameServer: type({
    //     private: literal(true),
    //     payload: type({
    //         playerId: input.GamerId,
    //         gameId: input.GameId,
    //         timestamp: input.Timestamp
    //     })
    // })
});

export const publicCommands = type({
   PlayGame: type({
       gamerId: input.GamerId,
       payload: type({
           newsletterId: input.NewsletterId,
           gameId: input.GameId,
           description: input.Description,
           link: input.URL,
           title: input.Title,
           timestamp: input.Timestamp
       })
   })
});