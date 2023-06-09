import useMiddleWare from "@/lib/MiddleWares"
import redisClient from "@/lib/RedisClient"

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({
      error: 'Only request method POST are allowed'
    })
    return
  }
  console.log(req.xtoken);
  await redisClient.del(`auth_${req.headers.authorization}`);
  return res.status(204).json({'message': 'logout successfully'});
}

export default useMiddleWare('authenticate')(handler)
