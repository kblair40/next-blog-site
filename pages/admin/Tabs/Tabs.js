import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs as ReactTabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import AllPosts from "./tabs/AllPosts";

const Tabs = () => {
  return (
    <ReactTabs defaultActiveKey="1" onChange={() => console.log("hi")}>
      <TabList>
        <Tab>All Posts</Tab>
        <Tab>Tab #2</Tab>
        <Tab>Tab #3</Tab>
      </TabList>

      <TabPanel className="px-4 pt-4">
        <AllPosts />
      </TabPanel>
    </ReactTabs>
  );
};

export default Tabs;
