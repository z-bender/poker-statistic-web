export class BankrollItem {
  public id: number;
  public dateTime: Date;
  money: number;
  public points: number;
  public type: ItemType;
  public comment: string;
}

export enum ItemType {
  GAME = 1,
  DEPOSIT = 2,
  WITHDRAWAL = 3,
  CONVERT_BONUS = 4,
  OTHER = 5
}

