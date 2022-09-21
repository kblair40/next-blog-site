import React, { useEffect, useState } from "react";
import classNames from "classnames";

import Loading from "components/UI/Loading";
import api from "utils/api";
import { formatDateToLocale } from "utils/dateHelpers";

const AllSubscribers = () => {
  const [allSubscribers, setAllSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await api.get("/subscribe");
        console.log("\n\nALL SUBSCRIBERS RESPONSE:", response.data.data);

        setAllSubscribers(response.data.data);
      } catch (e) {
        console.error("\nFAILED FETCHING SUBSCRIBERS:", e);
      }

      setLoading(false);
    };

    fetchSubscribers();
  }, []);

  if (loading) {
    return <Loading fullScreen />;
  }

  return (
    <div className="space-y-2">
      {allSubscribers && allSubscribers.length
        ? allSubscribers.map((sub, i) => {
            return <SubscriberCard key={i} sub={sub} />;
          })
        : null}
    </div>
  );
};

export default AllSubscribers;

const SubscriberCard = ({ sub }) => {
  const rowClasses = classNames(["flex items-center space-x-2"]);
  const labelClasses = classNames([
    "font-semibold w-32 text-sm whitespace-nowrap",
  ]);
  const valueClasses = classNames(["text-sm"]);

  return (
    <div className="px-4 py-2 rounded-md border border-slate-300">
      <div className={rowClasses}>
        <p className={labelClasses}>Name:</p>
        <p className={valueClasses}>{sub.name}</p>
      </div>

      <div className={rowClasses}>
        <p className={labelClasses}>Email:</p>
        <p className={valueClasses}>{sub.email}</p>
      </div>

      <div className={rowClasses}>
        <p className={labelClasses}>Subscribed Date:</p>
        <p className={valueClasses}>{formatDateToLocale(sub.createdAt)}</p>
      </div>
    </div>
  );
};
