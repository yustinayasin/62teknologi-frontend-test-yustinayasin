import Business from "@/components/Card";
import Filter from "@/components/Filter";

export default function business() {
  return (
    <main className="grid grid-cols-3 grid-rows-9 gap-4 h-screen">
      <section className="col-span-1 row-span-9 bg-gray-100 p-4">
        <Filter />
      </section>
      <section className="content col-span-2 row-span-9 bg-gray-200 p-4 relative grid grid-cols-2 grid-rows-9 gap-4">
        <section className="search col-span-2 row-span-1 bg-gray-300 p-2">
          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </section>
        <section className="list-business col-span-2 row-span-8 grid grid-cols-2 grid-rows-4 gap-4">
          <Business />
        </section>
      </section>
    </main>
  );
}
