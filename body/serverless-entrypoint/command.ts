import * as gamerCommands from '../domain/types/gamer/commands'
import { gamerCommandHandlers } from "../commandHandlers/gamer";
import { gamerRepository } from "../repositories/mongodb/gamer/gamer";

const commandHandlers = {
    ...gamerCommandHandlers(gamerRepository)
};

const commandTypes = {
    ...gamerCommands
};

export const handler = async (event, _context, callback) => {
    let postParams;
    try {
        postParams = JSON.parse(event.body)
    }
    catch (e) {
        console.error(e)
    }

    if (!postParams || !postParams.commands) {
        return callback('invalid command')
    }

    // TODO: check
    const command = {
        gamerId: event.requestContext.authorizer.principalId,
        payload: postParams.command.payload,
        name: postParams.command.name
    }

};