import  {Evaluation, GamerId } from "../index";

export type StageRule = {
    maxGamers: number
    threshold: number
}

export type Game = {
    gameId: GamerId
    ownerId: GamerId
    stageRules: StageRule[]
    currentStage: number
    laseState: number
    players: GamerId[]
    evaluations: {
        gamerId: GamerId
        evaluation: Evaluation
    }[]
    reviewProcessCompleted: boolean
    approved: boolean
    banned: boolean
}