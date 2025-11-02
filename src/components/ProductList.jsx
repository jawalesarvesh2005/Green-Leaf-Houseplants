import { addToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import productsData from "../data/productsData";

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Available Plants</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {productsData.map((product) => (
          <li
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              marginBottom: "15px",
              padding: "15px",
              maxWidth: "300px",
            }}
          >
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
