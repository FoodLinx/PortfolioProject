import useMiddleWare from "@/lib/MiddleWares"
import { connectMongoDB } from "@/lib/MongoConnect"
import Resturants from "@/models/Resturants";

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Only request method POST are allowed'
    })
  }
  try {
    await connectMongoDB();
    const { name, address, phone } = req.body
    if (!name) {
      return res.status(400).json({ error: 'Missing name' });
    }
    if (!address) {
      return res.status(400).json({ error: 'Missing address' });
    }
    if (!phone) {
      return res.status(400).json({ error: 'Missing phone' });
    }
    const {_id: id, isAdmin} = req.user

    // check if the user is true and the user is an admin
    if (!isAdmin) {
      return res.status(400).json({
        error: 'Sorry you must be an admin to add a Resturant'
      })
    }
    const newResturant = await Resturants.create({
      name, address, phone, createdBy: id,
    })
    return res.status(201).json({
      name, id: newResturant._id.toString()
    })

  } catch (error) {
    console.error('An error occured:\n', error.toString())
    return res.status(501).json({ error: 'An error occured' })
  }
}

export default useMiddleWare('authenticate')(handler)
