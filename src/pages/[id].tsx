import { useRouter } from 'next/router'
 
/**
 * @see https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes
 */
export default function Page() {
  const router = useRouter()
  return <p>Post: {router.query.id}</p>
}