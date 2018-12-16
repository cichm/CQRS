import * as mongoose from 'mongoose';
import {GamerRepository} from "../../../domain/types";

require('./gamerSchema')();

const Gamer = mongoose.model('Gamer');

export const gamerRepository: GamerRepository = {
    getById: gamerId =>
        mongoose.connect('mongodb://localhost/gamers', { useNewUrlParser: true }, (err) => {
            if (err) {
                console.error(err);
                throw err;
            }

            return Gamer.find({'gamerId': gamerId})
        }),
    create: gamerId => ({
        save: events => {
            return mongoose.connect('mongodb://localhost/gamers', { useNewUrlParser: true }, (err) => {
                if (err) {
                    console.error(err);
                    throw err;
                }

                console.log(events);

                return Gamer.create({gamerId: gamerId, name: 'bill', age: 25, birthday: new Date().setFullYear((new Date().getFullYear() - 25))},
                    function(err, bill) {
                        if (err) {
                            throw err;
                        }
                        console.log('People added to db: %s', bill.toString());
                    }
                );
            })
        }
    })
};