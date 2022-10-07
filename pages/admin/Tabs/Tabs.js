import React from "react";
import { Tab, TabList, TabPanel, Tabs as ReactTabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import PostsTab from "./tabs/PostsTab";
// import CommentsTab from "./tabs/CommentsTab";
import CreatePostTab from "./tabs/CreatePostTab";
import SubscriberTab from "./tabs/SubscriberTab";

const Tabs = () => {
  return (
    <ReactTabs defaultIndex={0}>
      <TabList>
        <Tab>All Posts</Tab>
        <Tab>Add Post</Tab>
        <Tab>Subscribers</Tab>
      </TabList>

      <TabPanel className="px-4 pt-2">
        <PostsTab />
      </TabPanel>
      <TabPanel>
        <CreatePostTab />
      </TabPanel>

      <TabPanel className="px-4 pt-2">
        <SubscriberTab />
      </TabPanel>
    </ReactTabs>
  );
};

export default Tabs;
