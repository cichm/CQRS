import {UpdateWriteOpResult} from "mongodb";

export interface IWrite<T> {
  create(item: T): Promise<boolean>;
  findOneAndUpdate(query: T, item: T): Promise<T>
  update(query: T, item: T): Promise<UpdateWriteOpResult>;
  delete(id: string): Promise<boolean>;
}
