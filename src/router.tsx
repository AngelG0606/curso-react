import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NostrosView from './views/NostrosView'
import MainView from './views/MainView'
import MainLayout from './layouts/MainLayout'
import ParamView from './views/ParamView'
import ProductLayout from './layouts/ProductLayout'
import ProductsView from './views/ProductsView'
import CreateProductView from './views/CreateProductView'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    
                    <Route path='/nosotros' element={<NostrosView />} />
                    <Route  path='/parametro/:id'  element={<ParamView />} />
                </Route>

                <Route element={<ProductLayout />}>
                    <Route path='/' element={<MainView />} index />
                    <Route path='/products' element={<ProductsView />} />
                    <Route path='/products/create' element={<CreateProductView />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}