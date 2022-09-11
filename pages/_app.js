import Layout from "components/Layout";
import "../styles/globals.scss";
// ideally the below import is moved to _globals.scss
import "react-mde/lib/styles/scss/react-mde-all.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
