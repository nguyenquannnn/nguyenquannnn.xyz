import Card from "../components/card";
import Header from "../components/header";
import { useState, useEffect } from "react";
import { getAllPosts } from "../lib/api";
import { processSlug } from "../lib/frontutil";

const WelcomeMessage = (props: { anim: Boolean }) => {
  const messages = ["Welcome!", "Chào mừng!", "Bienvenue!"];
  const [idx, setIdx] = useState(0);
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    if (props.anim) {
      let interval = setInterval(() => {
        if (idx === messages.length - 1) {
          setIdx(0);
        } else {
          setIdx(idx + 1);
        }
        setAnimate(true);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, []);
  return (
    <h1
      className={`text-5xl my-5 ${animate ? "swing-in-bottom-bck" : ""}`}
      onAnimationEnd={() => setAnimate(false)}
    >
      {messages[idx]}
    </h1>
  );
};

const Banner = () => {
  return (
    <div className="my-24">
      <WelcomeMessage anim={false} />
      <p className="text-xl">
        I'm a software developer based in{" "}
        <a
          href="https://en.wikipedia.org/wiki/Montreal"
          className="text-primary text-2xl"
        >
          Montréal, Canada
        </a>{" "}
        🍁
      </p>
      {/* <div className="rect absolute right-0">
        <div className="w-64 h-78 bg-orange-300"></div>
        <div className="w-64 h-78 bg-orange-500 -my-64 mx-16 "></div>
      </div> */}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="pb-10 border-t-2">
      <div className="grid gap-1 grid-cols-2 mt-5">
        <div className="col-start-1 col-end-2 ">
          <a href="/">A site from quann</a>
          <h6>All right reserved</h6>
        </div>
        <div className="col-start-2 col-end-3 inline-flex flex-row-reverse">
          <a href="https://github.com/nguyenquannnn">
            <img src="/github-50.svg" alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/anh-quan-nguyen-389a1b164/">
            <img src="/linkedin-50.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
};
const Dashboard = (props: { posts }) => {
  return (
    <div className="container center">
      <div className="my-20">
        <h2 className={"text-xl font-light my-5"}>Check out my latest posts</h2>
        {props.posts.map((post, index) => {
          const { lang, slug } = processSlug(post.slug);

          return (
            <Card
              key={post.slug}
              title={post.title}
              author={post.author}
              tags={post.tags}
              slug={`/posts/${lang}/${slug}`}
            />
          );
        })}
      </div>
    </div>
  );
};
const HomePage = (props: { posts }) => {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Dashboard posts={props.posts} />
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts(["slug", "author", "title", "tags"]);
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
}

export default HomePage;
