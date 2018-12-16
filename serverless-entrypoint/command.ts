import * as gamerCommands from '../domain/types/gamer/commands'
import { gamerCommandHandlers } from "../commandHandlers/gamer";
import { gamerRepository } from "../repositories/mongodb/gamer/gamer";
import {validateCommand} from "./validateCommand";

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

    const command = {
        gamerId: event.requestContext.authorizer.principalId,
        payload: postParams.command.payload,
        name: postParams.command.name
    };

    const errors = validateCommand(command, commandTypes[command.name]);

    if (errors.length) {
        return callback(JSON.stringify(errors));
    }

    const commandHandler = commandHandlers[command.name];

    if (!commandHandler) {
        return callback('command not supported')
    }

    try {
        const response = await commandHandler(command);

        console.log('command handler response', response);

        return callback(null, {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify({ message: 'command accepted' })
        })
    }
    catch (e) {
        return callback(
            typeof e === 'string' ? e : e.message || 'Error performing request'
        )
    }
};