export default function Filter({ category, onCheckboxChange }) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer justify-start">
        <input
          type="checkbox"
          className="checkbox"
          value={category}
          onChange={() => onCheckboxChange(category)}
        />
        <span className="label-text mx-3 text-slate-700">{category}</span>
      </label>
    </div>
  );
}
