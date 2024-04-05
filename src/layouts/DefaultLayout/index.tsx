import { Index as IndexHeader } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'

export function Index() {
    return (
        <LayoutContainer>
            <IndexHeader />
            <Outlet />
        </LayoutContainer>
    )
}