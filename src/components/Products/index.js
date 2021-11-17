import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./products.css";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.items);

  const onAdd = ({ target }) => {
    const { id } = target.dataset;

    dispatch({
      type: "Доабвить продукт",
      playload: { id },
    });
  };

  const onRemove = ({ target }) => {
    const { id } = target.dataset;
    const product = products.find((product) => product.id === id);

    if (product.count >= 1) {
      dispatch({
        type: "Убрать продукт",
        playload: { id },
      });
    }
  };

  return (
    <div className="products">
      <h1>Продукты</h1>
      {products.map((product) => (
        <div className="product" key={product.name}>
          <div className="product__name">
            {product.name} - ${product.price}
          </div>
          <div className="product__buttons-wrapper">
            <button data-id={product.id} onClick={onRemove}>
              -
            </button>
            <div>
              <span>{product.count || ""}</span>
            </div>
            <button data-id={product.id} onClick={onAdd}>
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
