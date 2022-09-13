// ideally the below import is moved to _globals.scss
import "react-textarea-markdown-editor/build/TextareaMarkdownEditor.scss";
import "react-toastify/scss/main.scss";
import "../styles/globals.scss";

import Layout from "components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
