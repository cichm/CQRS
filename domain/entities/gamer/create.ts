import {GamerEvent, GamerId, Timestamp} from "../../types";

export function createGamer(
    gamerId: GamerId,
    timestamp: Timestamp
): GamerEvent[] {

    return [
        {
            type: 'GamerCreated',
            payload: {
                gamerId,
                timestamp
            }
        }
    ]
}