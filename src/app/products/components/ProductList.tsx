import { Product } from "@prisma/client"

interface Props {
  products: Product[]
}

export function ProductList({products}: Props) {
  return (
     <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
     </ul>
  )
}