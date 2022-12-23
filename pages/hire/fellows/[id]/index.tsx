import Details from "~/components/hirePages/fellowDetails";
import { useRouter } from "next/router";
import Head from "next/head";
import FellowDatas from "../../../../fellows_data/data.json";

export default function FellowDetails() {
  const router = useRouter();
  const index: number = parseInt(router.query.id! as string);
  const fellowData = FellowDatas[index];
  return (
    <>
      <Head>
        <title>{fellowData.name}</title>
        <meta name="description" content={fellowData.background} />
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <Details fellowId={parseInt(router.query.id! as string)} />
    </>
  );
}
