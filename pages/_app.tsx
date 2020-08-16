import "../styles/index.css";
import appWithI18n from 'next-translate/appWithI18n'
import MetaTags from '../components/meta-tags';
import i18nConfig from '../i18n.json'

const MyApp = ({ Component, pageProps }) => {
  return (
    <> <MetaTags/>
      <Component {...pageProps}>     
      </Component>
    </>
  );
};

export default MyApp;
