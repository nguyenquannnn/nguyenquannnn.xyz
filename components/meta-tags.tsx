import { useState } from "react";
import { Helmet } from "react-helmet";

const MetaTags = (props: {
  title?: string;
  description?: string;
  url?: string;
}) => {
  const [title, setTitle] = useState(
    props.title || "nguyenquannnn.xyz — My Personal Blog"
  );
  const [description, setDescription] = useState(
    props.description ||
      "In a place for food thoughts, I write to make sense of the World."
  );
  const [url, setUrl] = useState(props.url || "https://nguyenquannnn.xyz");
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      defaultTitle="nguyenquannnn.xyz"
      title={title}
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
    >
    <link rel="shortcut icon" href="/logo/favicon.ico" />
    </Helmet>
  );
};

export default MetaTags;
