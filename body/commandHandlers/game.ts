import * as t from '../domain/types'
import { playGame } from "../domain/entities/game/play";

type CommandHandlers = {
    [C in keyof t.GameCommands]: (
        command: t.GameCommands[C]
    ) => Promise<any>
}

export const gameCommandHandlers = (
    gamerRepository: t.GamerRepository,
    newsletterRepository: t.NewsletterRepository,
    gameRepository: t.GameRepository
): CommandHandlers => ({

    PlayGame: async ({ gamerId, payload }) => {
        const { gamerState } = await gamerRepository.getById(gamerId);
        const { newsletterState } = await newsletterRepository.getById(payload.newsletterId);
        const { save } = await gameRepository.create(payload.gameId);

        return await save(
            playGame(
                gamerState,
                newsletterState,
                payload.gameId,
                payload.timestamp
            )
        )
    }

});