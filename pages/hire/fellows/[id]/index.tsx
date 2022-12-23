import Details from "~/components/hirePages/fellowDetails";
import { useRouter } from "next/router";
import Head from "next/head";

export default function FellowDetails() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Qala Fellow</title>
        <link rel="icon" href="/qala.ico" />
      </Head>
      <Details fellowId={parseInt(router.query.id! as string)} />
    </>
  );
}
