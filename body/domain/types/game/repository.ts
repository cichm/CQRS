import {Game, GameEvent, GameId} from "../index";

export type GameRepository = {
    getById: (id: GameId) => Promise<{
        gameState: Game,
        save: (events: GameEvent[], version?: number) => Promise<any>
    }>
    create: (id: GameId) => {
        save: (events: GameEvent[]) => Promise<any>
    }
}