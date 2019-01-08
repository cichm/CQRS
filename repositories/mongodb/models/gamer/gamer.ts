import { MongoClient } from "mongodb";
import { GameId, GamerEvent, GamerRepository } from "../../../../domain/types";
import { GamerMongoRepository } from "../../repositories/GamerMongoRepository";
import { reduceToGamer } from "../../../../domain/entities/reduceToGamer";

export const gamerRepository: GamerRepository = {
    getById: (gamerId: GameId) => new Promise((resolve, reject) => {
        return MongoClient.connect('mongodb://localhost').then((connection) => {
            const db = connection.db('gamers');
            const repository = new GamerMongoRepository(db, 'players');

            return repository.find({'gamerId': gamerId}).then(history => {
                resolve({
                    gamerState: reduceToGamer(history),
                    save: (events: GamerEvent[], _version?: number) => {

                        const item  = {
                            $push: {
                                "rankEvents": {
                                    $each: events
                                }
                            }
                        };

                        return repository.update({ 'gamerId': gamerId }, item);
                    }
                });
            })
        }).catch((error) => {
            reject(error);
        });
    }),
    create: id => ({
        save: events => {
            return MongoClient.connect('mongodb://localhost').then((connection) => {
                const db = connection.db('gamers');
                const entityName = 'eventStore';
                const version = 0;
                const repository = new GamerMongoRepository(db, entityName);

                const now = Date.now();
                const date = new Date(now).toISOString().replace(/[^0-9]/g, '');
                const commitId = date + ':' + id;

                const params = {
                    TableName: process.env.EVENTSTORE_TABLE,
                    Item: {
                        commitId: { S: commitId },
                        committedAt: { N: now.toString() },
                        entityId: { S: id },
                        entityName: { S: entityName },
                        version: { N: version },
                        events: { S: JSON.stringify(events) }
                    },
                    ConditionExpression: 'attribute_not_exists(version)',
                    ReturnValues: 'NONE'
                };

                return repository.create(params);
            });
        }
    })
};