export default function Filter() {
  return (
    <section>
      <h3 className="title">Food</h3>
      <section>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input type="checkbox" checked="checked" className="checkbox" />
            <span className="label-text">Coffee and Tea</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input type="checkbox" checked="checked" className="checkbox" />
            <span className="label-text">Breakfast</span>
          </label>
        </div>
      </section>
    </section>
  );
}
