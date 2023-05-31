import {PrismaClient} from "@prisma/client"

const db = new PrismaClient()

export async function getProducts() {
  return await db.product.findMany()
}