function ProductsChild() {
  return (
    <ul className="products__list">
      <li className="products__list--item">
        <img
          src="https://img.pokemondb.net/sprites/bank/normal/bulbasaur.png"
          className="products__list--img"
        />

        <h4>Nome do Produto #1</h4>

        <p>Descrição do produto #1</p>

        <ul className="products__list--feature">
          <li>
            <p>Feature 1</p>
            <p>Feature 1</p>
            <p>Feature 1</p>
          </li>
        </ul>

        <button className="products__list--btn">Ver solução</button>
      </li>
    </ul>
  );
}

export default ProductsChild;
