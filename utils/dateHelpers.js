export const getCurrentUnixStamp = () => {
  return new Date().getTime();
};

export const getDateFromUnixStamp = (stamp) => {
  return new Date(stamp);
};

export function getTimeDiff(unixTimestamp) {
  try {
    let dateNow = Math.floor(Date.now() / 1000);
    let future_time = true;
    if (unixTimestamp < dateNow) {
      future_time = false;
    }
    let tmp_seconds_diff = Math.abs(unixTimestamp - dateNow);
    let seconds = tmp_seconds_diff;
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let months = Math.floor(days / 30.437);
    let years = Math.floor(months / 12);
    months = months - years * 12;
    days = days - Math.round(months * 30.437);
    hours = hours - days * 24;
    minutes = minutes - days * 24 * 60 - hours * 60;
    seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
    if (!future_time) {
      // make all negative
      years = -Math.abs(years);
      months = -Math.abs(months);
      days = -Math.abs(days);
      hours = -Math.abs(hours);
      minutes = -Math.abs(minutes);
      seconds = -Math.abs(seconds);
    }

    const timeDiffRes = {
      yearsDiff: years,
      monthsDiff: months,
      daysDiff: days,
      hoursDiff: hours,
      minsDiff: minutes,
      secDiff: seconds,
    };

    return timeDiffRes;
  } catch (error) {
    return null;
  }
}

// relative to now
export const getRelativeTime = function (unixTimestamp, granularFlag) {
  let timeDiff = getTimeDiff(unixTimestamp);

  if (!timeDiff) {
    return "some time";
  }

  let dateNow = Math.floor(Date.now() / 1000);
  let timeIsFuture = unixTimestamp >= dateNow;

  let startsInArray = [];
  let startsIn = "";

  if (timeIsFuture) {
    // future
    if (timeDiff.yearsDiff) {
      if (timeDiff.yearsDiff === 1) {
        startsInArray.push(timeDiff.yearsDiff + " year");
      } else if (timeDiff.daysDiff >= 1) {
        startsInArray.push(timeDiff.yearsDiff + " years");
      } else {
        // starts in zero years! no need to put in zero years
      }
    }
    if (timeDiff.monthsDiff) {
      if (timeDiff.monthsDiff === 1) {
        startsInArray.push(timeDiff.monthsDiff + " month");
      } else if (timeDiff.daysDiff >= 1) {
        startsInArray.push(timeDiff.monthsDiff + " months");
      } else {
        // starts in zero months! no need to put in zero months
      }
    }
    if (timeDiff.daysDiff) {
      if (timeDiff.daysDiff === 1) {
        startsInArray.push(timeDiff.daysDiff + " day");
      } else if (timeDiff.daysDiff >= 1) {
        startsInArray.push(timeDiff.daysDiff + " days");
      } else {
        // starts in zero days! no need to put in zero days
      }
    }
    if (timeDiff.hoursDiff) {
      if (timeDiff.hoursDiff === 1) {
        startsInArray.push(timeDiff.hoursDiff + " hour");
      } else if (timeDiff.hoursDiff >= 1) {
        startsInArray.push(timeDiff.hoursDiff + " hours");
      } else {
        // starts in zero hours! no need to put in zero hours
      }
    }
    if (timeDiff.minsDiff === 1) {
      startsInArray.push(timeDiff.minsDiff + " minute");
    } else if (timeDiff.minsDiff >= 1) {
      startsInArray.push(timeDiff.minsDiff + " minutes");
    } else {
      // starts in zero minutes! no need to put in zero minutes
    }

    if (startsInArray.length === 0) {
      startsIn = "now";
    } else {
      if (granularFlag) {
        startsIn = startsInArray[0];
      } else {
        startsIn = startsInArray.join(", ");
      }
    }
  } else {
    // past
    if (timeDiff.monthsDiff < -1) {
      startsInArray.push(Math.abs(timeDiff.monthsDiff) + " months");
    } else if (timeDiff.monthsDiff === -1) {
      startsInArray.push(Math.abs(timeDiff.monthsDiff) + " month");
    } else {
      // started less than one month ago - no need to put in months
    }
    if (timeDiff.daysDiff < -1) {
      startsInArray.push(Math.abs(timeDiff.daysDiff) + " days");
    } else if (timeDiff.daysDiff === -1) {
      startsInArray.push(Math.abs(timeDiff.daysDiff) + " day");
    } else {
      // started less than one day ago - no need to put in days
    }
    if (timeDiff.hoursDiff < -1) {
      // started more than an hour ago
      startsInArray.push(Math.abs(timeDiff.hoursDiff) + " hours");
    } else if (timeDiff.hoursDiff === -1) {
      startsInArray.push(Math.abs(timeDiff.hoursDiff) + " hour");
    } else {
    }
    if (timeDiff.minsDiff < -1) {
      // started more than a minute ago
      startsInArray.push(Math.abs(timeDiff.minsDiff) + " minutes");
    } else if (timeDiff.minsDiff === -1) {
      startsInArray.push(Math.abs(timeDiff.minsDiff) + " minute");
    } else {
      // started less than a minute ago - no need to put in minutes
    }
    if (startsInArray.length === 0) {
      startsIn = " just now";
    } else {
      if (granularFlag) {
        startsIn = startsInArray.join(", ") + " ago";
      } else {
        startsIn = startsInArray[0] + " ago";
      }
    }
  }

  return startsIn;
};

export const formatDateToLocale = (date, fmt = "full") => {
  date = new Date(date);

  return (fmt = "full"
    ? date.toLocaleString()
    : (fmt = "date" ? date.toLocaleDateString() : date.toLocaleTimeString()));
};
