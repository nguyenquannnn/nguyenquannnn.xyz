import { useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "next-translate";
import { useRouter } from "next/router";

const MetaTags = (props: {
  title?: string;
  description?: string;
  url?: string;
  tags?: string[];
}) => {
  const router = useRouter();
  const { t, lang } = useTranslation()
  const [title, setTitle] = useState(
    props.title ||  t("common:meta-title")
  );
  const [description, setDescription] = useState(
    props.description || t("common:meta-description")
  );
  const [url, setUrl] = useState(props.url || "https://nguyenquannnn.xyz");
  const [tags, setTags]: [string, CallableFunction] = useState(
    props.tags ? props.tags.join(", ") : t("common:meta-keywords")
  );

  return (
    <Helmet
      htmlAttributes={{ lang: lang }}
      defaultTitle="nguyenquannnn.xyz"
      title={title}
      meta={[
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "title", content: title },
        { name: "description", content: description },
        { name: "keywords", content: tags},
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: `https://nguyenquannnn.xyz/meta-bg.png` },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: url },
        { property: "twitter:title", content: title },
        { property: "twitter:description", content: description },
        { property: "twitter:image", content: `https://nguyenquannnn.xyz/meta-bg.png` },
      ]}
      link={[{ rel: "apple-touch-icon", href: "/logo/apple-touch-icon.png" }]}
    >
      <link rel="shortcut icon" href="/logo/favicon.ico" />
    </Helmet>
  );
};

export default MetaTags;
