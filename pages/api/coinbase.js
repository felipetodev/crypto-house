const { Client, resources } = require("coinbase-commerce-node");
Client.init(process.env.COINBASE_CLIENT_ID);
const { Charge } = resources;

export default async function handler(req, res) {
  const { body = {}, method } = req

  if (method === "GET") {
    res.status(200).json({ name: 'Test' })
  }

  if (method === "POST") {
    try {
      const charge = await Charge.create(body)
      res.status(201).json(charge)
    } catch (error) {
      console.error(error)
      res.status(404).json(error)
    }
  }
}