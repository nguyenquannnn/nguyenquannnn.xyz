import "../styles/index.css";
import MetaTags from '../components/meta-tags';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <MetaTags/>
      <Component {...pageProps}></Component>
    </>
  );
};

export default MyApp;
