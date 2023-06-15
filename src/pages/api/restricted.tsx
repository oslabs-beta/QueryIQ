import { getServerSession } from "next-auth/next"
import { authOptions } from "~/server/auth"
import NextAuth  from "./auth/[...nextauth]"


export default async (req: Request, res: Response): Promise<void> => {
  const session = await getServerSession(req, res, authOptions)
  if (session) {
    res.send({
      content:
        "This is protected content. You can access this content because you are signed in.",
    })
  } else {
    res.send({
      error: "You must be signed in to view the content on this page.",
    })
  }
}