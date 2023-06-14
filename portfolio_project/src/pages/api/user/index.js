export default function handler(req, res) {
  res.status(200).json({
    message: 'You have reached the User API Home',
    login: '/api/user/login',
    logout: '/api/user/logout',
    signup: '/api/user/signup'
  })
}