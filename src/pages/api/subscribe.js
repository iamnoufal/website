const GhostAdminAPI = require("@tryghost/admin-api")

const api = new GhostAdminAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_ADMIN_API_KEY,
  version: "v5.0"
});

export default async function handler(req, res) {
  const body = JSON.parse(req.body)
  const resp = await api.members.add({ email: body.email }, {send_email: true, email_type: "subscribe"})
    .then(data => res.status(200).json(data))
    .catch(err => res.status(401).json(err))
  return resp
}