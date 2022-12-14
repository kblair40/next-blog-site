import { ChakraProvider } from "@chakra-ui/react";
// ideally the below import is moved to _globals.scss
import "react-textarea-markdown-editor/build/TextareaMarkdownEditor.css";
import "react-toastify/dist/ReactToastify.min.css";
import "../styles/globals.css";
import theme from "utils/theme";

import Layout from "components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
