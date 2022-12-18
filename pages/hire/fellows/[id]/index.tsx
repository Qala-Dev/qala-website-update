import Details from "~/components/hirePages/fellowDetails";
import { useRouter } from "next/router";

export default function FellowDetails() {
  const router = useRouter();

  return <Details fellowId={parseInt(router.query.id! as string)} />;
}
