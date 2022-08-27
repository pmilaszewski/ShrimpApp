import {Dayjs} from 'dayjs';

export interface IItem {
  item: TNote;
}

export type TNote = {
  id: number;
  note: string;
  date: Dayjs;
};
