import { connection } from "mongoose"

import { connectMongoDB } from "@/lib/MongoConnect"
import redisClient from "@/lib/RedisClient"

export default async function handler(req, res) {
  await connectMongoDB()

  res.status(200).json({
    message: 'status',
    database: connection.readyState === 1 ? 'connected' : 'not connected',
    redis: redisClient.isAlive()
  })
}