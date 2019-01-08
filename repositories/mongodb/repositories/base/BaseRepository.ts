// import all interfaces
import { IWrite } from '../interfaces/IWrite';
import { IRead } from '../interfaces/IRead';

// we imported all types from mongodb driver, to use in code
import { Db, Collection, InsertOneWriteOpResult, UpdateWriteOpResult } from 'mongodb';

// that class only can be extended
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  //creating a property to use your code in all instances 
  // that extends your base repository and reuse on methods of class
  public readonly _collection: Collection;

  //we created constructor with arguments to manipulate mongodb operations
  constructor(db: Db, collectionName: string) {
    this._collection = db.collection(collectionName);
  }

  // we add to method, the async keyword to manipulate the insert result
  // of method.
  async create(item: T): Promise<boolean> {
    const result: InsertOneWriteOpResult = await this._collection.insertOne(item);
    // after the insert operations, we returns only ok property (that haves a 1 or 0 results)
    // and we convert to boolean result (0 false, 1 true)
    return !!result.result.ok;
  }

  async findOneAndUpdate(query: any, item: any, upsert: boolean = true): Promise<any> {
    return await this._collection.findOneAndUpdate(
        query, item, { 'upsert': upsert }
    );
  }

  async update(query: any, item: any): Promise<UpdateWriteOpResult> {
    return await this._collection.replaceOne(query, item);
  }
  delete(_id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  async find(query: any): Promise<any[]> {
      return await this._collection.find(query).toArray();
  }
  async findOne(query: any): Promise<any[]> {
      return await this._collection.findOne(query);
  }
}
