/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Flex,
  Stack,
  Text,
  Button as ChakraButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { toast } from "react-toastify";

import Statuses from "components/Admin/Statuses";
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
          NOTE:
        </Text>
        <Text>Status = 1: Subscribed</Text>
        <Text>Status = 2: Cancelled subscription</Text>
      </Flex>

      {loading ? (
        <Loading fullScreen />
      ) : (
        <Stack>
          {allSubscribers && allSubscribers.length
            ? allSubscribers.map((sub, i) => {
                return <SubscriberCard key={i} sub={sub} />;
              })
            : null}
        </Stack>
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
    autoClose: 4000,
  };

  const handleSubmit = async () => {
    if (initialStatus.current == status) {
      let msg =
        "No changes found, so not updating.  Let me know if you did actually change the status, because you shouldn't be seeing this if you did.";
      return toast.error(msg, toastConfig);
    }

    if (![1, 2].includes(status)) {
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
    <Stack p=".5rem 1rem" rounded="lg" border="1px solid #b9b9b9" spacing="4px">
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
        <NumberInput
          value={status}
          onChange={(val) => setStatus(parseInt(val))}
          min={1}
          max={2}
          size="sm"
          maxW="80px"
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Stack>

      <Box pt=".5rem">
        <ChakraButton loading={loading} size="sm" onClick={handleSubmit}>
          Save Changes
        </ChakraButton>
      </Box>
    </Stack>
  );
};
