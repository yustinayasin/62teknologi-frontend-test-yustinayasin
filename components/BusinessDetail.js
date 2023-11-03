import Maps from "@/components/Maps";
import React, { useEffect, useState } from "react";

export default function BusinessDetail({ business }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    console.log("a");
    // Fetch business data using businessId and set it in the state
    fetch(`http://localhost:4000/business-reviews?id=${business.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReviews(data.reviews);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="grid grid-cols-2 gap-4 p-4 min-h-screen">
      {/* Left Column */}
      <div className="col-span-1">
        {/* Image Section */}
        <div className="mb-4">
          <div className="carousel h-60 rounded-box">
            {business.photos.map((value, key) => {
              return (
                <div className="carousel-item" key={key}>
                  <img src={value} alt={business.alias} />
                </div>
              );
            })}
          </div>
        </div>
        {/* Maps Section */}
        <div className="w-full">
          <Maps />
        </div>
      </div>

      {/* Right Column */}
      <div className="col-span-1 h-full">
        {/* Main Section */}
        <div className="h-full">
          <div className="card w-full h-full bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{business.name}</h2>
              <div className="card-actions justify-start mt-5">
                <div className="badge badge-outline">{business.rating} ⭐️</div>
                <div className="badge badge-outline">{business.phone}</div>
                <div className="badge badge-outline">
                  {business.is_closed ? "Closed" : "Open"}
                </div>
              </div>
              <section className="reviews text-sm mt-5">
                {reviews.map((review, key) => {
                  return (
                    <div key={key} className="mt-7">
                      <p>{review.user.name}</p>
                      <p>{review.rating} ⭐️</p>
                      <p className="mt-2">{review.text}</p>
                    </div>
                  );
                })}
              </section>
              <div className="card-actions justify-end mt-6">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
