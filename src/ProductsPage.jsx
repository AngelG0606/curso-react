import { useState } from 'react';
import FormProduct from './components/FormProduct';
import ProductCard from './components/ProductCard';

const ProductsPage = () => {
  // Datos locales iniciales (Sin BD por ahora)
  const [products, setProducts] = useState([
    { id: 1, name: "Teclado Mecánico", price: 1200, category: "Tech" },
    { id: 2, name: "Monitor 4K", price: 8500, category: "Tech" }
  ]);

  // Función para agregar (Se pasará por props al Form)
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  // Función para eliminar (Se pasará por props a la Card)
  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Gestión de Inventario</h1>
          <p className="text-gray-500 mt-2">Práctica de Componentes y Estado Local</p>
        </header>

        {/* Sección de Formulario */}
        <FormProduct onAddProduct={addProduct} />

        {/* Sección de Lista con Renderizado Condicional */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {products.length > 0 ? (
            products.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onDelete={deleteProduct} 
              />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-400 text-lg">No hay productos en el inventario local.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;