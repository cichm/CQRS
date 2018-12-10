import {TypeOf} from 'io-ts';
import * as input from './input'
import { GamerEvent as GamerEventIo } from './gamer/events';

// basic input types
export type RankRange = TypeOf<typeof input.RankRange>
export type NewsletterId = TypeOf<typeof input.NewsletterId>
export type GameId = TypeOf<typeof input.GameId>
export type GamerId = TypeOf<typeof input.GamerId>

// command types

// event types
export type GamerEvent = TypeOf<typeof GamerEventIo>

// model types

// repository types