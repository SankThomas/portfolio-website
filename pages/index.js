import Head from "next/head"
import Header from "../components/header"
import MetaContent from "../components/metacontent"
import Showcase from "../components/showcase"

export default function Home() {
  return (
    <>
      <Head>
        <MetaContent />
        <title>
          Thomas Sankara Portfolio Website | Frontend Web Developer | Hire A Web
          Developer
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Showcase />
    </>
  )
}
