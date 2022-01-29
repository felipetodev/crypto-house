import HouseContract from 'house-contract/build/contracts/HouseContract.json'

export default function handler (req, res) {
  if (req.method === 'GET') {
    res.status(200).json(HouseContract)
  } else {
    res.status(404).json({ error: 'Smart contract not found, check if contracts were build.' })
  }
}
