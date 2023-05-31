import { getProducts } from "./api"
import { ProductList } from "./components/ProductList"

export default async function Products() {
  return (
    <ProductList products={await getProducts()}/>
  )
}
