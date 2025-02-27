import { ActionTypes } from './actions'
import { produce } from 'immer'
import { CyclesState } from '../../@types/cycles'

export function cyclesReducer(state: CyclesState, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_NEW_CYCLE:
            return produce(state, draft => {
                draft.cycles.push(action.payload.newCycle)
                draft.activeCycleId = action.payload.newCycle.id
            })
        case ActionTypes.INTERRUPT_CYCLE: {
            const currentCycleIndex = state.cycles.findIndex(cycle => {
                return cycle.id === state.activeCycleId
            })

            if (currentCycleIndex < 0) {
                return state
            }

            return produce(state, draft => {
                draft.activeCycleId = null
                draft.cycles[currentCycleIndex].interruptDate = new Date()
            })
        }
        case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
            const currentCycleIndex = state.cycles.findIndex(cycle => {
                return cycle.id === state.activeCycleId
            })

            if (currentCycleIndex < 0) {
                return state
            }

            return produce(state, draft => {
                draft.activeCycleId = null
                draft.cycles[currentCycleIndex].finishedDate = new Date()
            })
        }
        default:
            return state
    }
}