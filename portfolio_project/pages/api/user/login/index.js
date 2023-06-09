export default function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({
            error: 'Only request method POST are allowed'
        })
        return
    }
    res.status(200).json({message: 'Would be implemented shortly'})
}