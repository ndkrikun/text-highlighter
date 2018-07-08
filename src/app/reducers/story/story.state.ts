import { Selection } from 'src/app/models/selection.model';

export interface StoryState {
  origin: string;
  highlighted: string;
  selections: Selection[];
}

