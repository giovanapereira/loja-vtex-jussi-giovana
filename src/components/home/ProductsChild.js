import { useEffect, useState } from "react";
import { getList } from "../../assets/utils/list";

function ProductsChild() {
  const [list, setList] = useState([]);

  const [load, setLoad] = useState(true);

  useEffect(() => {
    getList()
      .then((items) => {
        if (load) {
          setList(items.results);
        }
      })
      .catch((error) => console.log(error));
    return setLoad(false);
  }, []);

  return (
    <ul className="products__list">
      {list.map((item, index) => {
        return (
          <li className="products__list--item" key={index}>
            <img
              src={`https://img.pokemondb.net/sprites/bank/normal/${item.name}.png`}
              className="products__list--img"
            />

            <h4>{item.name}</h4>

            {}

            <p>{item.name} é um pokémon da primeira geração.</p>

            <ul className="products__list--feature">
              <li>
                <p>Feature 1</p>
                <p>Feature 1</p>
                <p>Feature 1</p>
              </li>
            </ul>

            <a
              href={`https://bulbapedia.bulbagarden.net/wiki/${item.name}_(Pok%C3%A9mon)`}
              target="_blank"
              className="products__list--btn"
            >
              Ver solução
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default ProductsChild;
