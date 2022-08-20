import { useRouter } from 'next/router'
import useSWR from 'swr'

type HelloResponse = {
  message: string
}

const Greeting: React.FC<{ name?: string }> = ({ name }) => {
  const { data, error } = useSWR<HelloResponse>(
    name ? `/api/hello?name=${name}` : '/api/hello',
  )

  if (!data) return <div>Loading...</div>
  if (error) return <div>Failed to load.</div>

  return <p>{data.message}</p>
}

const Index = () => {
  const router = useRouter()
  const { name } = router.query as { name?: string }

  return (
    <main className="p-12">
      <h1 className="text-xl font-bold">Next.js + TypeScript + Tailwind</h1>
      <div className="max-w-lg space-y-2 pt-4 text-lg leading-relaxed text-gray-600">
        <Greeting name={name} />
      </div>
    </main>
  )
}

export default Index
