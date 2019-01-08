import { BaseRepository } from "./base/BaseRepository";

// now, we have all code implementation from BaseRepository
export class GamerMongoRepository<T> extends BaseRepository<T>{

    // here, we can create all especific stuffs of Gamer Repository
    countOfGamers(): Promise<number> {
        return this._collection.count({})
    }
}
