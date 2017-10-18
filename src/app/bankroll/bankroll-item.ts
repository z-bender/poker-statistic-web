export class BankrollItem {
  public id: number;
  public dateTime: Date;
  money: number;
  public points: number;
  public type: ItemType;
  public comment: string;
}

export enum ItemType {
  GAME,
  DEPOSIT,
  WITHDRAWAL,
  CONVERT_BONUS,
  OTHER
}

