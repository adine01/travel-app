import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface User {
    id: string
    email: string
  }

  interface Session extends DefaultSession {
    user: User & {
      id: string
    }
  }
}