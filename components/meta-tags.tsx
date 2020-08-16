import { useState } from "react";

const MetaTags = (props: {
    title?: string,
    description?: string,
    url?: string,
}) => {
    const [title, setTitle] = useState(props.title || "nguyenquannnn.xyz — My Personal Blog")
    const [description, setDescription] = useState(props.description || "In a place for food thoughts, I write to make sense of the World.");
    const [url, setUrl] = useState(props.url || "https://nguyenquannnn.xyz")
    return [
        <meta name="title" content={title} />,
        <meta name="description" content={description} />,
        <meta property="og:type" content="website" />,
        <meta property="og:url" content={url} />,
        <meta property="og:title" content={title} />,
        <meta property="og:description" content={description} />,
        <meta property="og:image" content="/meta-bg.png" />,

        <meta property="twitter:card" content="summary_large_image" />,
        <meta property="twitter:url" content={url} />,
        <meta property="twitter:title" content={title} />,
        <meta property="twitter:description" content={description} />,
        <meta property="twitter:image" content="/meta-bg.png" />,
    ]
}

export default MetaTags;