export default function Filter() {
  return (
    <section>
      <h1 className="title text-black text-xl">Food</h1>
      <section>
        <div className="form-control">
          <label className="label cursor-pointer justify-start">
            <input type="checkbox" checked="checked" className="checkbox" />
            <span className="label-text mx-3">Coffee and Tea</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer justify-start">
            <input type="checkbox" checked={false} className="checkbox" />
            <span className="label-text mx-3">Breakfast</span>
          </label>
        </div>
      </section>
    </section>
  );
}
