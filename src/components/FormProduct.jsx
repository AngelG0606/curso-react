const FormProduct = ({ onAddProduct }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProduct = {
      id: Date.now(),
      name: formData.get('name'),
      price: formData.get('price'),
      category: formData.get('category')
    };
    onAddProduct(newProduct);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input name="name" placeholder="Nombre" className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none" required />
        <input name="price" placeholder="Precio" type="number" className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none" required />
        <select name="category" className="p-2 border rounded-md bg-white">
          <option value="Tech">Tech</option>
          <option value="Hogar">Hogar</option>
        </select>
      </div>
      <button type="submit" className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
        Agregar Producto
      </button>
    </form>
  );
};

export default FormProduct;