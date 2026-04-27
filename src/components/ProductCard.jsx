const ProductCard = ({ product, onDelete }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative">
      <span className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
        {product.category}
      </span>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-2xl font-black text-green-600 mb-4">${product.price}</p>
      <button 
        onClick={() => onDelete(product.id)}
        className="text-red-500 hover:text-red-700 font-medium text-sm flex items-center"
      >
        🗑️ Eliminar
      </button>
    </div>
  );
};

export default ProductCard;