export interface IRead<T> {
  find(item: any): Promise<any[]>;
  findOne(item: T): Promise<any[]>;
}
