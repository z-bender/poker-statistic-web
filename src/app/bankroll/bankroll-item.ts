export class BankrollItem {
  id: number;
  dateTime: Date;
  money: number;
  points: number;
  // todo: where is type?
  type: ItemType;
  comment: string;
};

export enum ItemType {
  GAME,
  DEPOSIT,
  WITHDRAWAL,
  CONVERT_BONUS,
  OTHER
};

