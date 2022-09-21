/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState, useRef } from "react";
import classNames from "classnames";
import { toast } from "react-toastify";

import Statuses from "components/Admin/Statuses";
import LocalInput from "components/Admin/LocalInput";
import Button from "components/UI/Button";
import Loading from "components/UI/Loading";
import api from "utils/api";
import { formatDateToLocale } from "utils/dateHelpers";

const AllSubscribers = () => {
  const [allSubscribers, setAllSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checkedStatuses, setCheckedStatuses] = useState([1, 2]);

  const initialFetchComplete = useRef(false);

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async (updatedStatuses = null) => {
    try {
      const response = await api.get("/subscribe", {
        params: {
          statuses: updatedStatuses ? updatedStatuses : checkedStatuses,
        },
      });
      // console.log("\n\nALL SUBSCRIBERS RESPONSE:", response.data.data);

      setAllSubscribers(response.data.data);
    } catch (e) {
      console.error("\nFAILED FETCHING SUBSCRIBERS:", e);
    }

    if (loading) setLoading(false);
    if (!initialFetchComplete.current) {
      initialFetchComplete.current = true;
    }
  };

  const handleStatusesChange = async (statuses) => {
    setLoading(true);

    let newStatuses = [];
    statuses.forEach((status, i) => {
      const [val, checked] = Object.entries(status)[0];
      if (checked) newStatuses.push(parseInt(val));
    });

    setCheckedStatuses(newStatuses);
    await fetchSubscribers(newStatuses);
    setLoading(false);
  };

  return (
    <div className="-mt-4">
      <div className="mb-4">
        <Statuses statusOptions={[1, 2]} onChange={handleStatusesChange} />
      </div>

      <div className="flex flex-col mb-4">
        <p className="font-semibold text-lg">NOTE: </p>
        <p>Status = 1: Subscribed</p>
        <p>Status = 2: Cancelled subscription</p>
      </div>

      {loading ? (
        <Loading fullScreen />
      ) : (
        <div className="space-y-2">
          {allSubscribers && allSubscribers.length
            ? allSubscribers.map((sub, i) => {
                return (
                  <SubscriberCard
                    key={i}
                    sub={sub}
                    setMainLoading={setLoading}
                    mainLoading={loading}
                  />
                );
              })
            : null}
        </div>
      )}
    </div>
  );
};

export default AllSubscribers;

const SubscriberCard = ({ sub, mainLoading, setMainLoading }) => {
  const [status, setStatus] = useState(sub.status || 1);
  const [loading, setLoading] = useState(false);

  const rowClasses = classNames(["flex items-center space-x-2"]);
  const labelClasses = classNames([
    "font-semibold w-32 text-sm whitespace-nowrap",
  ]);
  const valueClasses = classNames(["text-sm"]);

  const initialStatus = useRef(sub.status);

  const toastConfig = {
    position: toast.POSITION.BOTTOM_CENTER,
    pauseOnHover: false,
    pauseOnFocusLoss: false,
    autoClose: 8000,
  };

  const handleSubmit = async () => {
    if (initialStatus.current == status) {
      let msg =
        "No changes found, so not updating.  Let me know if you did actually change the status, because you shouldn't be seeing this if you did.";
      return toast.error(msg, toastConfig);
    }

    if (!["1", "2"].includes(status)) {
      let msg = "Status needs to be 1 or 2";
      return toast.error(msg, toastConfig);
    }

    try {
      setLoading(true);

      await api.patch("/subscribe", {
        subscriberId: sub._id,
        status: status,
      });

      toast.success("Updated status!", toastConfig);
    } catch (e) {
      console.error("FAILED TO UPDATE STATUS:", e);
    }

    setLoading(false);
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
          defaultValue={sub.status}
          max="2"
          type="number"
        />
      </div>

      <div className="pt-2">
        <Button loading={loading} size="sm" onClick={handleSubmit}>
          Save Changes
        </Button>
      </div>
    </div>
  );
};
