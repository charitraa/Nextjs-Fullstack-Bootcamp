import z from 'zod'

export const UserSchema = z.object({
  name: z.string({ required_error: 'Name is required'}).min(3,'Name should be more than Character'),
  email: z.string({ required_error: "Email is required"}).email(),
})