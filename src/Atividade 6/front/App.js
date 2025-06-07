import { useEffect, useState } from "react";
import styled from "styled-components";
import Products from "./components/Product";
import Cart from "./components/Cart";


/**
 * Função para chamar API
 * @param {string} url caminho da função
 * @param {string} method método do request
 * @returns objeto de resposta
 */
async function api(url, method, body = undefined) {
  return await fetch(`http://localhost:4000${url}`, {
    body: body !== undefined ? JSON.stringify(body) : body,
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

/**
 * Busca todos os produtos da API
 * @returns lista de produtos
 */
async function apiGetProducts() {
  const data = await api("/products", "GET");
  return data.products;
}

/**
 * Salva o carrinho de compras na API
 * @param {object[]} products lista de produtos
 */
async function apiSubmitCart(products) {
  await api("/purchases", "POST", { products });
}

function App() {
  const [productsLoading, setProductsLoading] = useState(false); // Status de loading dos produtos
  const [products, setProducts] = useState([]); // Lista de produtos
  const [cart, setCart] = useState([]); // Itens no carrinho
  const [cartLoading, setCartLoading] = useState(false); // Status de loading do carrinho

  // Busca os produtos
  async function getProducts() {
    setProductsLoading(true);
    setProducts(await apiGetProducts());
    setProductsLoading(false);
  }

  // Salva o carrinho
  async function submitCart() {
    setCartLoading(true);
    await apiSubmitCart(cart);
    setCart([]);
    setCartLoading(false);
    getProducts(); // Atualiza os produtos
  }

  // Altera unidades do produto no carrinho
  function setProduct(product, change) {
    const products = cart.filter(({ id }) => id !== product.id);

    product.units += change;

    if (product.units > 0) {
      setCart(() => [...products, product]);
    } else {
      setCart(() => [...products]);
    }

    setProducts((lastProducts) => [...lastProducts, product]);
  }

  // Adiciona produto ao carrinho
  function addProduct(product) {
    product.units = 1;
    setCart(() => [...cart, product]);

    setProducts(() =>
      products.filter(({ id }) => {
        return id !== product.id;
      })
    );
  }

  // Busca os produtos ao carregar a página
  useEffect(() => {
    getProducts();
  }, []);

  /* Elemento main personalizado com CSS */
  const SMain = styled.main`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1fr;
  `;

  return (
    <SMain>
      <Cart
        products={cart}
        onChange={setProduct}
        onClick={submitCart}
        isLoading={cartLoading}
      />
      <Products
        products={products}
        onClick={addProduct}
        isLoading={productsLoading}
      />
    </SMain>
  );
}

export default App;
