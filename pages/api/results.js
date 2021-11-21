// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const SERVEL_RESULTS_ENDPOINT =
  'https://www.servelelecciones.cl/data/elecciones_presidente/computo/global/19001.json'

export default async function handler(req, res) {
  const data = await (await fetch(SERVEL_RESULTS_ENDPOINT)).json()
  res.status(200).json(data)
}
