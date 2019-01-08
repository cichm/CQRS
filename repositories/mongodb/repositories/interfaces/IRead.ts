export interface IRead<T> {
  find(query: T): Promise<any[]>;
  findOne(query: T): Promise<any[]>;
}
