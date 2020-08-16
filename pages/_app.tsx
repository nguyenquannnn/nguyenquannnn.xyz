import "../styles/index.css";
import MetaTags from '../components/meta-tags';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      {/* <Helmet
        htmlAttributes={{ lang: "en" }}
        defaultTitle="nguyenquannnn.xyz"
        title="nguyenquannnn.xyz"
        meta={[
          { name: "viewport", content: "width=device-width, initial-scale=1" },
          { name: "title", content: title },
          { name: "description", content: description },
          { property: "og:type", content: "website" },
          { property: "og:url", content: url },
          { property: "og:title", content: title },
          { property: "og:description", content: description },
          { property: "og:image", content: "/meta-bg.png" },
          { property: "twitter:card", content: "summary_large_image" },
          { property: "twitter:url", content: url },
          { property: "twitter:title", content: title },
          { property: "twitter:description", content: description },
          { property: "twitter:image", content: "/meta-bg.png" },
        ]}
      /> */}
      <MetaTags/>
      <Component {...pageProps}></Component>
    </>
  );
};

export default MyApp;
