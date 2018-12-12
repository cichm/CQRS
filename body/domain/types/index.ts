import * as input from './input'
import * as gameCommands from './game/commands'
import { TypeOf } from 'io-ts';
import { GamerEvent as GamerEventIo } from './gamer/events';
import { GameEvent as GameEventIo } from './game/events';
import { NewsletterEvent as NewsletterEventIo } from "./newsletter/events";

// basic input types
export type RankRange = TypeOf<typeof input.RankRange>
export type NewsletterId = TypeOf<typeof input.NewsletterId>
export type GameId = TypeOf<typeof input.GameId>
export type GamerId = TypeOf<typeof input.GamerId>
export type GamerInfo = TypeOf<typeof input.GamerId>
export type NewsletterPrivilege = TypeOf<typeof input.NewsletterPrivilege>
export type NewsletterPermission = TypeOf<typeof input.NewsletterPermission>
export type Evaluation = TypeOf<typeof input.Evaluation>
export type Title = TypeOf<typeof input.Title>
export type Description = TypeOf<typeof input.Description>
export type URL = TypeOf<typeof input.URL>
export type Timestamp = TypeOf<typeof input.Timestamp>
export type BeenionPermission = TypeOf<typeof input.BeenionPermission>

// command types
export type PrivateGameCommands = TypeOf<typeof gameCommands.privateCommands>
export type PublicGameCommands = TypeOf<typeof gameCommands.publicCommands>
export type GameCommands = PrivateGameCommands & PublicGameCommands

// event types
export type GamerEvent = TypeOf<typeof GamerEventIo>
export type GameEvent = TypeOf<typeof GameEventIo>
export type NewsletterEvent = TypeOf<typeof NewsletterEventIo>

// model types
export * from './gamer/model'
export * from './game/model'
export * from './newsletter/model'

// repository types
export * from './gamer/repository'
export * from './game/repository'
export * from './newsletter/repository'