import Link from 'next/link'

const page = () => {
  return (
    <div>
        <h1>Meals</h1>
        <p>
          <Link href="/meals/sushi">Sushi</Link>
        </p>
    </div>
  )
}

export default page