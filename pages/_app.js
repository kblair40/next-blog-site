import Layout from "components/Layout";
// ideally the below import is moved to _globals.scss
import "react-textarea-markdown-editor/build/TextareaMarkdownEditor.scss";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
