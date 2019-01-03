import { MongoClient } from "mongodb";
import {GameId, GamerEvent, GamerRepository} from "../../../../domain/types";
import { GamerMongoRepository } from "../../repositories/GamerMongoRepository";
import { reduceToGamer } from "../../../../domain/entities/reduceToGamer";

export const gamerRepository: GamerRepository = {
    getById: (id: GameId) => new Promise((resolve, reject) => {
        return MongoClient.connect('mongodb://localhost').then((connection) => {
            const db = connection.db('gamers');
            const repository = new GamerMongoRepository(db, 'players');

            return repository.find({'gamerId': id}).then(history => {
                resolve({
                    gamerState: reduceToGamer(history),
                    save: (events: GamerEvent[], _version?: number) => {
                        return new Promise((resolve, _reject) => {
                            resolve({ 'events': events });
                        });
                    }
                });
            })
        }).catch((error) => {
            reject(error);
        });
    }),
    // @ts-ignore
    create: gamerId => ({
        // @ts-ignore
        save: events => {

        }
    })
};