import Head from "next/head";
import Hire from "~/components/hirePages/hire";

export default function HirePage() {
  return (
    <>
      <Head>
        <title>Hire the top Bitcoin and Lightning Developers in Africa</title>
        <meta
          name="description"
          content="Our developers help serve small start-ups and large corporations
          alike. When you hire a Qala Bitcoin developer, you get a
          professional who can execute projects quickly and efficiently."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hire />
    </>
  );
}
