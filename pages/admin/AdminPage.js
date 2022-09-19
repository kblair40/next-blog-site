import React, { useState } from "react";

import PasswordInput from "components/Admin/PasswordInput";
import Loading from "components/UI/Loading";

const AdminPage = () => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  if (loading) {
    // return <LoadingFullPage />;
  }

  return (
    <div>
      <PasswordInput
        onAuthenticated={() => {
          setIsAdmin(true);
          setLoading(false);
        }}
      />
      ADMIN PAGE
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
