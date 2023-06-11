import Users from "@/models/Users";
import { connectMongoDB } from "./MongoConnect";
import { label } from "next-api-middleware";
import redisClient from "./RedisClient";

async function authenticate(req, res, next) {
  const { authorization } = req.headers
  if (!authorization) return res.status(401).json({ error: 'Unauthorized' });

  const userId = await redisClient.get(`auth_${authorization}`)

  if (!userId) return res.status(401).json({ error: 'Unauthorized' });
  await connectMongoDB()
  const user = await Users.findById(userId)
  if (!user) return res.status(401).json({ error: 'Unauthorized' });
  req.user = user

  await next()
}

const useMiddleWare = label({authenticate}, ['authenticate'])
export default useMiddleWare;
