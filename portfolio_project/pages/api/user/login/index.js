import { v4 as uuidv4 } from 'uuid';
import { verifyPassword } from "@/lib/HashUnhash";
import { connectMongoDB } from "@/lib/MongoConnect";
import Users from "@/models/Users";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Only request method POST are allowed'
    })
  }

  try {
    const { email, password } = req.body
    if (!email) {
      return res.status(400).json({ error: 'Missing email' }).end();
    }
    if (!password) {
      return res.status(400).json({ error: 'Missing password' });
    }
    await connectMongoDB()
    const user = await Users.findOne({ email })
    if (!user) {
      return res.status(400).json({ error: 'User does not exists' });
    }
    console.log(user.password)
    const isMatch = await verifyPassword(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ error: 'Password does not match' });
    }
    const token = uuidv4();
    // set the token to the user and expires for 24 hours
    await redisClient.set(`auth_${token}`, user._id.toString(), 86400);
    return res.status(200).json({ token });

  } catch (error) {
    console.error('An error occured:\n', error)
    return res.status(501).json({ error: 'An error occured' })
  }
}