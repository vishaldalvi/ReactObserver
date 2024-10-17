import React, { useState, lazy, Suspense } from "react";
import useIntersectionObserver from "./useIntersectionObserver";

const APIDisplay = lazy(() => import("./APIDisplay"));

const SectionToObserve = () => {
  const [data, setData] = useState(null);
  const [hasFetched, setHasFetched] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchApiData = async () => {
    if (hasFetched) return;

    setLoading(true);
    console.log("Section visible, calling API...");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const result = await response.json();

    setData(result);
    setHasFetched(true);
    setLoading(false);
  };
  
  const [sectionRef, isVisible] = useIntersectionObserver(fetchApiData, { threshold: 0.7 });

  return (
    <div ref={sectionRef} style={{ height: "100vh", padding: "20px", backgroundColor: "lightblue" }}>
      <h2>Scroll to this section to trigger API call (10% visible)</h2>
      
      {isVisible && (
        <Suspense fallback={<div>Loading...</div>}>
          {loading ? <div>Loading...</div> : data && <APIDisplay data={data} />}
        </Suspense>
      )}
    </div>
  );
};

export default SectionToObserve;
