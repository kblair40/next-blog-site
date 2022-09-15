// ideally the below import is moved to _globals.scss
import "react-textarea-markdown-editor/build/TextareaMarkdownEditor.css";
import "react-toastify/dist/ReactToastify.min.css";
import "../styles/globals.css";

import Layout from "components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
