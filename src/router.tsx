import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NostrosView from './views/NostrosView'
import MainView from './views/MainView'
import MainLayout from './layouts/MainLayout'
import ParamView from './views/ParamView'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path='/' element={<MainView />} index />
                    <Route path='/nosotros' element={<NostrosView />} />
                    <Route  path='/parametro/:id'  element={<ParamView />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}