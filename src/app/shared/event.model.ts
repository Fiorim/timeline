import { Mode } from './mode.enum';

export interface Event {
 id: number;
 date: Date;
 highlights: string;
 type: Mode;
 children?: Event[]
}
