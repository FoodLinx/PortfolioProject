import useMiddleWare from "@/lib/MiddleWares"

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      error: 'Only request method GET are allowed'
    })
  }
  const { id, name, email, isAdmin } = req.user

  if (id && name && email) return res.status(200).json({id, name, email, isAdmin})
  return res.status(501).json({ error: 'An error occured' })
}

export default useMiddleWare('authenticate')(handler)
