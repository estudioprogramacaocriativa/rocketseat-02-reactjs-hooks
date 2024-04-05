import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Index as HistoryIndex } from './pages/History'
import { Index } from './layouts/DefaultLayout'

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Index />}>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<HistoryIndex />} />
            </Route>
        </Routes>
    )
}