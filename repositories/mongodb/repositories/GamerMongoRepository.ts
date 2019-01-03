import { BaseRepository } from "./base/BaseRepository";
import {Gamer} from "../models/gamer/POJO/Gamer";

// now, we have all code implementation from BaseRepository
export class GamerMongoRepository extends BaseRepository<Gamer>{

    // here, we can create all especific stuffs of Gamer Repository
    countOfGamers(): Promise<number> {
        return this._collection.count({})
    }
}
