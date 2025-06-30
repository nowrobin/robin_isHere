"use client";
import Header from "@/components/ui/header";
import { useEffect, useState } from "react";

export default function Home() {
  const adjectiveList = ["create", "explore", "expand", "conquer"];
  const [adjectiveIndex, setAdjectiveIndex] = useState<number>(0);
  useEffect(() => {
    setInterval(() => {
      setAdjectiveIndex((prev) => {
        if (prev + 1 >= adjectiveList.length) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 2000);
  }, [adjectiveList.length, adjectiveList]);

  return (
    <div className="">
      <Header></Header>
      <div className="text-red-400 mt-32">I am Frontend Developer </div>
      {/* 
      <div className="text-red-400 mt-32">
        I create {adjectiveList[adjectiveIndex]}
      </div> */}

      <div className="text-red-400 mt-32 flex items-center">
        I &nbsp;
        <span
          className="relative h-[32px] w-[120px] overflow-hidden inline-block"
          style={{ display: "inline-block" }}
        >
          <span
            className="absolute top-0 left-0 transition-transform ease-in-out duration-200 "
            // style={{
            //   transform: `translateY(-${adjectiveIndex * 32}px)`,
            // }}
          >
            {adjectiveList.map((adj, i) => (
              <div
                key={i}
                className="h-[32px] flex items-center"
                style={{ width: "120px" }}
              >
                {adj}
              </div>
            ))}
          </span>
        </span>
      </div>
    </div>
  );
}
