import * as t from '../domain/types';
import { createGamer } from "../domain/entities/gamer/create";

type CommandHandlers = {
    [C in keyof t.GamerCommands]: (
        command: t.GamerCommands[C]
    ) => Promise<any>
}

export const gamerCommandHandlers = (
    gamerRepository: t.GamerRepository
): CommandHandlers => ({

    CreateGamer: async ({ gamerId, payload }) => {

        const { save } = gamerRepository.create(gamerId);

        return await save(
            createGamer(
                gamerId,
                payload.timestamp
            )
        )
    }

});