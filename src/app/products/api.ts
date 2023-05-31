import {PrismaClient} from "@prisma/client"

const db = new PrismaClient()

function delay (ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function getProducts() {
  // throw new Error('Error from product service')
  return await delay(3000).then(() => db.product.findMany())
}