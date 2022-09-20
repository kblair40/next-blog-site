import React from "react";
import { Tab, TabList, TabPanel, Tabs as ReactTabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import PostsTab from "./tabs/PostsTab";
import CommentsTab from "./tabs/CommentsTab";

const Tabs = () => {
  return (
    <ReactTabs defaultIndex={0}>
      <TabList>
        <Tab>All Posts</Tab>
        <Tab>Comments</Tab>
        <Tab>Tab #3</Tab>
      </TabList>

      <TabPanel className="px-4 pt-4">
        <PostsTab />
      </TabPanel>

      <TabPanel className="px-4 pt-4">
        <CommentsTab />
      </TabPanel>

      <TabPanel className="px-4 pt-4">
        Not sure yet. Might delete this tab
      </TabPanel>
    </ReactTabs>
  );
};

export default Tabs;
