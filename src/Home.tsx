import {createContext, useContext, useState} from 'react'

const CyclesContext = createContext({} as never)

function NewCycleForm() {
    const { activeCycle, setActiveCycle } = useContext(CyclesContext)

    return (
        <>
            <h1>New Cycle Form {activeCycle}</h1>
            <button onClick={() => setActiveCycle(4)}>
                Alterar ciclo ativo
            </button>
        </>
    )
}

function CountDown() {
    const {activeCycle} = useContext(CyclesContext)

    return <h1>Countdown {activeCycle}</h1>
}

export function Home() {
    const [activeCycle, setActiveCycle] = useState(0)

    return (
        <CyclesContext.Provider value={{
            activeCycle,
            setActiveCycle
        }}>
            <NewCycleForm />
            <CountDown />
        </CyclesContext.Provider>
    )
}