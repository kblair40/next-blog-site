/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";

import PasswordInput from "components/Admin/PasswordInput";
import Loading from "components/UI/Loading";
import Tabs from "./Tabs";

const AdminPage = () => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const password = localStorage.getItem("admin-password");

    if (password && password === "1379") {
      setIsAdmin(true);
    } else {
      setShowModal(true);
    }

    setLoading(false);
  }, []);

  const handleValidSubmit = () => {
    localStorage.setItem("admin-password", "1379");

    setIsAdmin(true);
    if (loading) setLoading(false);
    setShowModal(true);
  };

  if (!loading && !isAdmin && showModal) {
    return <PasswordInput onValidSubmit={handleValidSubmit} />;
  } else if (loading) {
    return <LoadingFullPage />;
  }

  if (!isAdmin) {
    return (
      <div className="h-screen-nav w-full flex justify-center items-center text-lg font-medium">
        Sorry Erin, not sure what's happening. If I don't already know about
        this please let me know.
      </div>
    );
  }

  return (
    <div className="pt-6">
      <Tabs />
    </div>
  );
};

export default AdminPage;

const LoadingFullPage = () => {
  return (
    <div className="h-screen-nav border border-slate-400 flex items-center justify-center">
      <Loading />
    </div>
  );
};
