export default class ID {
  static _id = 1;

  static getNewId(): number {
    return this._id++;
  }
}