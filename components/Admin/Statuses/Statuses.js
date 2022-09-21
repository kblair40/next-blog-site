import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";

const Statuses = ({ statusOptions, onChange }) => {
  const [statuses, setStatuses] = useState();

  const inited = useRef(false);
  useEffect(() => {
    if (inited.current || !statusOptions || !statusOptions.length) {
      return;
    }

    setStatuses(
      statusOptions.map((option) => {
        return { [`${option}`]: true };
      })
    );

    inited.current = true;
  }, []);

  const mainClasses = classNames(["flex items-center flex-wrap space-x-4"]);
  const checkboxWrapperClasses = classNames(["space-x-1"]);
  const labelClasses = classNames([]);

  const handleChange = (e) => {
    let { value, checked } = e.target;
    value = parseInt(value);

    let statusesCopy = [...statuses];
    let statusIndex = statusesCopy.findIndex((statusObj) => {
      return parseInt(Object.keys(statusObj)[0]) === value;
    });

    statusesCopy[statusIndex] = { [`${value}`]: checked };

    setStatuses(statusesCopy); // update visually locally
    onChange(statusesCopy); // let the parent know
  };

  if (!statuses || !statuses.length) return null;

  return (
    <React.Fragment>
      <p className="text-lg font-medium">Statuses</p>

      <div className={mainClasses}>
        {statuses && statuses.length
          ? statuses.map((option, i) => {
              const [label, checked] = Object.entries(option)[0];
              const value = label;
              return (
                <div key={i} className={checkboxWrapperClasses}>
                  <input
                    value={value}
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                  />
                  <span className={labelClasses}>{label}</span>
                </div>
              );
            })
          : null}
      </div>
    </React.Fragment>
  );
};

export default Statuses;
