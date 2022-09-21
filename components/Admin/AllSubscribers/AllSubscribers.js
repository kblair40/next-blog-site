/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import classNames from "classnames";

import LocalInput from "components/Admin/LocalInput";
import Button from "components/UI/Button";
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
    <div>
      <div className="flex flex-col mb-4">
        <p className="font-semibold text-lg">NOTE: </p>
        <p>Status = 1: Subscribed</p>
        <p>Status = 2: Cancelled subscription</p>
      </div>

      <div className="space-y-2">
        {allSubscribers && allSubscribers.length
          ? allSubscribers.map((sub, i) => {
              return <SubscriberCard key={i} sub={sub} />;
            })
          : null}
      </div>
    </div>
  );
};

export default AllSubscribers;

const SubscriberCard = ({ sub }) => {
  const [status, setStatus] = useState(sub.status || 1);

  const rowClasses = classNames(["flex items-center space-x-2"]);
  const labelClasses = classNames([
    "font-semibold w-32 text-sm whitespace-nowrap",
  ]);
  const valueClasses = classNames(["text-sm"]);

  const handleSubmit = async () => {
    try {
      const response = await api.patch("/subscribe", {
        subscriberId: sub._id,
        status: status,
      });
    } catch (e) {
      console.error("FAILED TO UPDATE STATUS:", e);
    }
  };

  return (
    <div className="px-4 py-2 rounded-md border border-slate-300 space-y-1">
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

      <div className={rowClasses}>
        <p className={labelClasses}>Status:</p>
        <LocalInput
          onChange={(e) => setStatus(e.target.value)}
          defaultValue={status}
          max="2"
          type="number"
        />
      </div>

      <div className="pt-2">
        <Button size="sm" onClick={handleSubmit}>
          Save Changes
        </Button>
      </div>
    </div>
  );
};
