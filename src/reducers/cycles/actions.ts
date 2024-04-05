import { Cycle } from '../../@types/cycles'

export enum ActionTypes {
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
    INTERRUPT_CYCLE = 'INTERRUPT_CYCLE',
    MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED'
}

export function addNewCycleAction(newCycle: Cycle) {
    return {
        type: ActionTypes.ADD_NEW_CYCLE,
        payload: {
            newCycle
        }
    }
}

export function interruptCycleAction(activeCycleId: string | undefined) {
    return {
        type: ActionTypes.INTERRUPT_CYCLE,
        payload: {
            activeCycleId
        }
    }
}

export function markCurrentCycleAsFinishedAction(activeCycleId: string | undefined) {
    return {
        type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
        payload: {
            activeCycleId
        }
    }
}