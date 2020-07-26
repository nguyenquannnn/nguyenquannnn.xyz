import ErrorPage from "next/error";
import { useRouter } from "next/router";
import Link from 'next-translate/Link';
import { useTranslation } from "next-translate";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Tags from "../../../components/tags";
import ReadTime from "../../../components/readtime";
import { getAllPosts, getPostBySlug, PostMetadata } from "../../../lib/api";
import { processSlug } from "../../../lib/frontutil";
import markdownToHtml from "../../../lib/markdownToHtml";
import { useState } from "react";
import {
  isoStringToDate,
  generateReadTimeMark,
  calcReadTime,
} from "../../../lib/utilities";
import { dateDisplayOptions } from "../../../lib/constants";

const Return = () => {
  const { lang } = useTranslation();
  return (
    <Link href="/" lang={lang}>
      return
    </Link>
  );
};

const Post = ({ post }: { post: PostMetadata }) => {
  const [date, setDate] = useState(new Date(isoStringToDate(post.date)));
  const { t, lang } = useTranslation();
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <article className="antialiased text-gray-900">
      <h1 className="font-bold text-5xl py-5">{post.title}</h1>
      <div className="flex items-center text-xl">
        <Tags tags={post.tags} />
        <div className="">
          {date.toLocaleDateString(lang, dateDisplayOptions)} •{" "}
          <ReadTime content={String(post.content)} />
        </div>
      </div>
      <div
        className="text-xl"
        dangerouslySetInnerHTML={{ __html: String(post.content) }}
      />
    </article>
  );
};

const Article = ({ post }) => {
  return (
    <div className="container">
      <Header textColor="black" />
      <div className="mx-auto my-10 w-4/5">
        <Return />
        <Post post={post} />
      </div>
      <Footer />
    </div>
  );
};
export async function getStaticProps({ params }) {
  const post = getPostBySlug(params, [
    "title",
    "content",
    "slug",
    "tags",
    "date",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);
  return {
    paths: posts.map((post) => {
      const { lang, slug } = processSlug(post.slug);
      return {
        params: {
          slug: slug,
          lang: lang,
        },
      };
    }),
    fallback: false,
  };
}
export default Article;
