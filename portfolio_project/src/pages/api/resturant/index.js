import { connectMongoDB } from "@/lib/MongoConnect"
import Resturants from "@/models/Resturants";
import useMiddleWare from "@/lib/MiddleWares"

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      error: 'Only request method GET are allowed'
    })
  }

  try {
    await connectMongoDB();
    const resturants = await Resturants.find()
    return res.status(200).json({ resturants });
  } catch (error) {
    console.error('An error occured:\n', error)
    return res.status(501).json({ error: 'An error occured' })
  }
}
