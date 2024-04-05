import { Cycle } from '../reducers/cycles/reducer'
import { ReactNode } from 'react'

export interface CreateCycleData {
    task: string
    minutesAmount: number
}

export interface CycleContextType {
    cycles: Cycle[]
    activeCycle: Cycle | undefined
    activeCycleId: string | null
    amountSecondsPassed: number
    markCurrentCycleFinished: () => void
    setSecondsPassed: (seconds: number) => void
    createNewCycle: (data: CreateCycleData) => void
    interruptCurrentCycle: () => void
}

export interface CyclesContextProviderProps {
    children: ReactNode
}

export interface CyclesState {
    cycles: Cycle[]
    activeCycleId: string | null
}

export interface Cycle {
    id: string
    task: string
    minutesAmount: number
    startDate: Date
    interruptDate?: Date
    finishedDate?: Date
}