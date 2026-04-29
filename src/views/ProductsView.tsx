
import { Link } from 'react-router-dom'
import ProductCard from '../components/form/ProductCard'

export default function ProductsView() {
  return (
    <>
        <h1 className="text-5xl font-bold">Administra tus Productos</h1>

            <Link 
                to={'/products/create'}
                className='bg-indigo-500 hover:bg-indigo-600 px-5 py-2 rounded text-white font-bold my-10'
            >
                Crear Producto
            </Link>
        
            <div className='grid grid-cols-3 gap-4 pt-10'>
                <ProductCard />
            </div>
        
            
        
    </>
  )
}
