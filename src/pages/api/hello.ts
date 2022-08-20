import type { NextApiRequest, NextApiResponse } from 'next'

type QueryParams = {
  name?: string
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { name } = req.query as QueryParams

  return res.status(200).json({
    message: `Hello, ${name ?? 'world'}!`,
  })
}

export default handler
