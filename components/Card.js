export default function Card({ business }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="h-48">
        <img src={business.image_url} alt="Business Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {business.name}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <p>
          {business.categories.map((value, key) => {
            if (key != business.categories.length - 1) {
              return <span key={key}>{value.title + " | "}</span>;
            } else {
              return <span key={key}>{value.title}</span>;
            }
          })}
        </p>
        <div className="card-actions justify-end mt-5">
          <div className="badge badge-outline">{business.rating} ⭐️</div>
          <div className="badge badge-outline">
            {(business.distance / 1000).toFixed(1)} km
          </div>
          <div className="badge badge-outline">
            {business.is_closed ? "Closed" : "Open"}
          </div>
        </div>
      </div>
    </div>
  );
}
