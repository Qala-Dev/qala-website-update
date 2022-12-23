import Head from "next/head";
import Fellows from "~/components/hirePages/fellows";

export default function HireFellow() {
  return (
    <>
      <Head>
        <title>Qala Fellows</title>
        <meta
          name="description"
          content="Check out our vast talent network of bitcoin developers"
        />
        <link rel="icon" href="/qala.ico" />
      </Head>
      <Fellows />
    </>
  );
}
