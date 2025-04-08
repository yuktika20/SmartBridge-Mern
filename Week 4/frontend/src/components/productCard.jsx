export default function ProductCard({ product, onSelect }) {
  return (
    <div
      className="border bg-blue-50 p-4 rounded-lg shadow-md cursor-pointer hover:scale-102 transition-all duration-300"
      onClick={() => onSelect(product)}
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-95 w-full object-cover rounded"
      />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
    </div>
  );
}
