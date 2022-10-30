import { useState } from "react";
import Hire from "~/components/hirePages/hire";
import Fellows from "~/components/hirePages/fellows";
import Details from "~/components/hirePages/fellowDetails";

export default function HirePage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [fellowIndex, setFellowIndex] = useState<number>(1);
  return (
    <>
      {currentPage === 1 && <Hire setCurrentPage={setCurrentPage} />}
      {currentPage === 2 && (
        <Fellows
          setCurrentPage={setCurrentPage}
          setFellowIndex={setFellowIndex}
        />
      )}
      {currentPage === 3 && (
        <Details setCurrentPage={setCurrentPage} fellowIndex={fellowIndex} />
      )}
    </>
  );
}
