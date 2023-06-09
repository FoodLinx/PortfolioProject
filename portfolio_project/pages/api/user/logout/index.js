import useMiddleWare from "@/lib/MiddleWares"
import redisClient from "@/lib/RedisClient"

async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({
      error: 'Only request method POST are allowed'
    })
    return
  }
  await redisClient.del(`auth_${req.xtoken}`);
  return res.status(204).send();
}

export default useMiddleWare('authenticate')(handler)
