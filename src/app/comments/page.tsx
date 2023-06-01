import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"

const db = new PrismaClient()

async function getComments() {
  return await db.comments.findMany()
}

export default async function Comments() {
  const comments = await getComments()
 
  async function handleSubmit(formData: FormData) {
    'use server'

    await db.comments.create({
      data: {
        comment: formData.get('comment')?.toString() ?? ''
      }
    })
  
    revalidatePath('/comments')
  }

  return (
    <>
      <form action={handleSubmit}>
      <input type="text"  name="comment" className="border border-gray-500" />
      <button type="submit">Submit</button>
      </form>
      <hr />
      <ul>
        {comments.map((comment) => (<li key={comment.id}>{comment.comment}</li>))}
      </ul>
    </>
  )
}