import Card from "@/components/Card";
import Filter from "@/components/Filter";
import { useEffect, useState } from "react";

import Link from "next/link";

import {
  sliceStartAtom,
  sliceEndAtom,
  currentPageAtom,
} from "../storage/atoms";
import { useAtom } from "jotai";

export default function Business() {
  const [listBusiness, setListBusiness] = useState([]);
  const [disablePrevious, setDisablePrevious] = useState(true);
  const [disableNext, setDisableNext] = useState(true);

  // using the global state from Jotai for setting our slice values
  const [currentSliceStart, setCurrentSliceStart] = useAtom(sliceStartAtom);
  const [currentSliceEnd, setCurrentSliceEnd] = useAtom(sliceEndAtom);
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  // the number that is added to the states specifies how many posts are displayed per page
  const nextPage = () => {
    setCurrentSliceStart(currentSliceStart + 9);
    setCurrentSliceEnd(currentSliceEnd + 9);
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentSliceStart(currentSliceStart - 9);
    setCurrentSliceEnd(currentSliceEnd - 9);
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    fetch("http://localhost:4000/yelp-data")
      .then((response) => response.json())
      .then((data) => {
        setListBusiness(data.businesses);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    console.log(currentSliceStart);
  }, [currentSliceStart]);

  // useEffect(() => {
  //   console.log(listBusiness);
  // }, [listBusiness]);

  return (
    <main className="grid grid-cols-4 grid-rows-10 gap-4 h-screen">
      <section className="col-span-1 row-span-10 bg-gray-100 p-8">
        <Filter />
      </section>

      <section className="content col-span-3 row-span-10 bg-gray-200 p-8 relative grid grid-cols-2 grid-rows-9 gap-4">
        <section className="search col-span-3 row-span-1 bg-gray-300 p-2 rounded-xl">
          <div className="form-control w-full max-w-xs place-self-end">
            <input
              type="text"
              placeholder="Search here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </section>

        <section className="list-business col-span-3 row-span-7 grid grid-cols-3 grid-rows-3 gap-4">
          {listBusiness
            ?.slice(currentSliceStart, currentSliceEnd)
            .map((business, key) => {
              return <Card key={key} business={business} />;
            })}
        </section>

        <section className="pagination col-span-3 row-span-2 p-2 place-self-center">
          <div className="join">
            <button
              className={`join-item btn ${
                currentSliceStart < 9 &&
                "pointer-events-none bg-slate-400 border-slate-400 text-slate-300"
              }`}
              onClick={previousPage}
            >
              previous
            </button>
            <button className="join-item btn">{currentPage}</button>
            <button
              className={`join-item btn ${
                currentSliceEnd > listBusiness.length &&
                "pointer-events-none bg-slate-400 border-slate-400 text-slate-300"
              }`}
              onClick={nextPage}
            >
              next
            </button>
          </div>
        </section>
      </section>
    </main>
  );
}
