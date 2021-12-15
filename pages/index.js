import Head from 'next/head'
import PrincipalLayout from '../layouts/PrincipalLayout/PrincipalLayout'


export default function Home() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="favicon.ico"/>
        <title>Search Bikes</title>
      </Head>
      <PrincipalLayout/>

    </div>
  )
}
