import Head from "next/head";
import Body from "../components/Body";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>ODS 1.0</title>
        <meta name="description" content="Create opportunity with join us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Body />
      </div>
    </div>
  );
}
