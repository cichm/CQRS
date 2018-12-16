import * as t from '../../types'
import { privileges } from "../../privileges";
import errors from "../../errors";

export function playGame(
    gamer: t.Gamer,
    newsletter: t.NewsletterId,
    gameId: t.GameId,
    timestamp: t.Timestamp
): t.GameEvent[] {

    if (!privileges.canPlayGame(gamer, newsletter)) {
        throw errors.permissionDenied();
    }

    return [
        {
            type: 'GamePlayed',
            payload: {
                ownerId: gamer.gamerId,
                newsletterId: newsletter.newsletterId,
                gameId,
                timestamp
            }
        }
    ]
}