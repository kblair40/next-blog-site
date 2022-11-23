/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Flex,
  Stack,
  Text,
  Button as ChakraButton,
  Input as ChakraInput,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
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

      setAllSubscribers(response.data.data);
    } catch (e) {
      console.error("\nFAILED FETCHING SUBSCRIBERS:", e);
    }

    if (loading) setLoading(false);
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
    <Box mt="-.5rem">
      <Box mb="1rem">
        <Statuses statusOptions={[1, 2]} onChange={handleStatusesChange} />
      </Box>

      <Flex direction="column" mb="1rem">
        <Text fontWeight="600" fontSize="lg">
          NOTE:{" "}
        </Text>
        <p>Status = 1: Subscribed</p>
        <p>Status = 2: Cancelled subscription</p>
      </Flex>

      {loading ? (
        <Loading fullScreen />
      ) : (
        <div className="space-y-2">
          {allSubscribers && allSubscribers.length
            ? allSubscribers.map((sub, i) => {
                return <SubscriberCard key={i} sub={sub} />;
              })
            : null}
        </div>
      )}
    </Box>
  );
};

export default AllSubscribers;

const SubscriberCard = ({ sub }) => {
  const [status, setStatus] = useState(sub.status || 1);
  const [loading, setLoading] = useState(false);

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

  const labelStyles = {
    fontWeight: "600",
    w: "128px",
    fontSize: "sm",
    whiteSpace: "nowrap",
  };

  return (
    <Box className="px-4 py-2 rounded-md border border-slate-300 space-y-1">
      <Stack direction="row">
        <Text {...labelStyles}>Name:</Text>
        <Text fontSize="sm">{sub.name}</Text>
      </Stack>

      <Stack direction="row">
        <Text {...labelStyles}>Email:</Text>
        <Text fontSize="sm">{sub.email}</Text>
      </Stack>

      <Stack direction="row">
        <Text {...labelStyles}>Subscribed Date:</Text>
        <Text fontSize="sm">{formatDateToLocale(sub.createdAt)}</Text>
      </Stack>

      <Stack direction="row">
        <Text {...labelStyles}>Status:</Text>
        <LocalInput
          onChange={(e) => setStatus(e.target.value)}
          defaultValue={sub.status}
          max="2"
          type="number"
        />
      </Stack>

      <Box pt=".5rem">
        <ChakraButton loading={loading} size="sm" onClick={handleSubmit}>
          Save Changes
        </ChakraButton>
      </Box>
    </Box>
  );
};
