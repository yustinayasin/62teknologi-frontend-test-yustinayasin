import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BusinessDetail from "@/components/BusinessDetail";

const BusinessDetailPage = () => {
  const router = useRouter();
  const { businessId } = router.query;
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    // Fetch business data using businessId and set it in the state
    if (businessId) {
      fetch(`http://localhost:4000/business-detail?id=${businessId}`)
        .then((response) => response.json())
        .then((data) => {
          //console.log(data);
          setBusiness(data);
        })
        .catch((err) => console.error(err));
    }
  }, [businessId]);

  if (!business) {
    return <div>Loading...</div>;
  }

  return <BusinessDetail business={business} />;
};

export default BusinessDetailPage;
