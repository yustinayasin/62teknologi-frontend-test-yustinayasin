import Card from "@/components/Card";
import Filter from "@/components/Filter";
import { useEffect, useState } from "react";

export default function Business() {
  const [listBusiness, setListBusiness] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/yelp-data")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);

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
          <Card />
        </section>

        <section className="pagination col-span-3 row-span-2 p-2 place-self-center">
          <div className="join">
            <button className="join-item btn">«</button>
            <button className="join-item btn">1</button>
            <button className="join-item btn btn-active">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">4</button>
            <button className="join-item btn">»</button>
          </div>
        </section>
      </section>
    </main>
  );
}
