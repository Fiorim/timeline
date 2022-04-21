import { Mode } from './mode.enum';

export interface EventBlock {
  id: number;
  date: Date;
  highlights: string;
  type: Mode;
  children?: EventBlock[];
}
