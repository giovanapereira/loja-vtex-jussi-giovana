import ProductsChild from "./ProductsChild";

function Products() {
  return (
    <section id="products" className="products__container">
      <div className="products">
        <div className="products__child">
          <div className="products_text">
            <h3>
              <span>//</span> Nossas soluções
            </h3>
          </div>
        </div>

        <div className="products__child">
          <ProductsChild />
        </div>
      </div>
    </section>
  );
}

export default Products;
