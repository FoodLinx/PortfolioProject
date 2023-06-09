import { hashPassword } from "@/lib/HashUnhash"
import { connectMongoDB } from "@/lib/MongoConnect"
import Users from "@/models/Users"

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Only request method POST are allowed'
    })

  }
  try {
    let { email, password, name } = req.body

    if (!email) {
      return res.status(400).json({ error: 'Missing email' }).end();
    }
    if (!password) {
      return res.status(400).json({ error: 'Missing password' });
    }
    if (!name) {
      return res.status(400).json({ error: 'Missing name' });
    }
    await connectMongoDB()
    const user = await Users.findOne({ email })
    if (user) {
      return res.status(400).json({ error: 'Already exist' });
    }
    password = await hashPassword(password)

    const newUser = await Users.create({
      email,
      password,
      name
    })

    return res.status(201).json({
        email, id: newUser._id.toString()
    });
  } catch (error) {
    console.error('An error occured:\n', error)
    return res.status(501).json({ error: 'An error occured' })
  }
}