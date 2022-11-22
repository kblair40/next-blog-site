import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";

// style="width: 940px; height: 529px;"
// src="https://static.wixstatic.com/media/nsplsh_47d97191bd834b0f9cbe408a4e7d4a2a~mv2.jpg/v1/fill/w_1880,h_1058,fp_0.50_0.50,q_90,enc_auto/nsplsh_47d97191bd834b0f9cbe408a4e7d4a2a~mv2.jpg"

const FeaturedPost = () => {
  return (
    <Box>
      <Image
        src="https://res.cloudinary.com/erinsblog/image/upload/v1664548607/arturo-esparza-33fWPnyN6tU-unsplash_ofqueo.jpg"
        layout="fill"
      />
    </Box>
  );
};

export default FeaturedPost;
