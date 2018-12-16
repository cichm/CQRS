import {Gamer, GamerEvent, GamerId} from '../index'

export type GamerRepository = {
    getById: (id: GamerId) => Promise<{
        gamerState: Gamer,
        save: (events: GamerEvent[], version?: number) => Promise<any>
    }>
    create: (id: GamerId) => {
        save: (events: GamerEvent[]) => Promise<any>
    }
}