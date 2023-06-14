import { connectMongoDB } from "@/lib/MongoConnect"
import Resturants from "@/models/Resturants";

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      error: 'Only request method GET are allowed'
    })
  }

  try {
    const { resturantId } = req.query
    await connectMongoDB();
    const resturant = await Resturants.findById(resturantId)
    return res.status(200).json(resturant)
  } catch (error) {
    console.error('An error occured:\n', error.toString())
    return res.status(501).json({ error: 'An error occured' })
  }
}