import Card from "../components/card";
import Header from "../components/header";
import Footer from "../components/footer";

import { useState, useEffect } from "react";
import { getAllPosts } from "../lib/api";
import { processSlug } from "../lib/frontutil";

import { useTranslation } from "next-translate";
import SubcribeCard from "../components/subcribe-card";
import { isoStringToDate, calcReadTime } from "../lib/utilities";

const WelcomeMessage = (props: { anim: Boolean }) => {
  const { t } = useTranslation();
  const messages = [t("common:welcome")];
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
      className={`text-lg sm:text-xl md:text-5xl my-1 sm:my-2 md:my-5 font-bold ${
        animate ? "swing-in-bottom-bck" : ""
      }`}
      onAnimationEnd={() => setAnimate(false)}
    >
      {messages[idx]}
    </h1>
  );
};

const Banner = () => {
  const { t } = useTranslation();
  return (
    <div className="my-20 sm:my-28 flex text-white semibold">
      <div className="absolute top-0 left-0 min-w-full -z-10 min-h-screen">
        <div className="bg-bluebg p-28 md:p-36 lg:p-36"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 500">
          {/* <path fill="#FFD166" fill-opacity="1" d="M0,128L34.3,117.3C68.6,107,137,85,206,
        112C274.3,139,343,213,411,256C480,299,549,309,617,298.7C685.7,288,754,256,823,202.7C891.4,149,960,75,1029,64C1097.1,53,1166,107,1234,160C1302.9,213,1371,267,1406,293.3L1440,320L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path> */}
          <g 
          // style={{ transform: `translate(${0}px, ${200}px)` }}>
          >
            {/* <rect
              fill="#5398BE"
              width="100%"
              height="250"
              x="0"
              y="0"
              style={{ transform: `translate(${0}px, ${-225}px)` }}
            ></rect> */}
            <path
              fill="#5398BE"
              fillOpacity="1"
              x="0"
              y="25"
              d="M0,32L48,53.3C96,75,192,117,288,138.7C384,160,480,160,576,149.3C672,139,768,117,864,128C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </g>
        </svg>
      </div>
      <div className="w-full md:w-2/3">
        <WelcomeMessage anim={false} />
        <p className="text-md md:text-xl">
          {`${t("common:describe-me")} `}
          <a
            href="https://en.wikipedia.org/wiki/Montreal"
            className="text-lg md:text-2xl text-primary"
          >
            Montréal, Canada 🍁
          </a>
        </p>
      </div>
      <div className="w-1/2 -ml-20 -z-10">
        <img src="/developer.svg" alt="Developer" />
      </div>
    </div>
  );
};

const Dashboard = (props: { posts }) => {
  const {t} = useTranslation()
  return (
    <div className="container center mx-auto px-4">
      <div className="my-20">
        <h2 className={"text-sm sm:text-lg md:text-xl font-medium my-5"}>
          {t("common:check-out-posts")}
        </h2>
        {props.posts.map((post, index) => {
          const { lang, slug } = processSlug(post.slug);

          return (
            <Card
              key={post.slug}
              title={post.title}
              author={post.author}
              tags={post.tags}
              slug={`/posts/${lang}/${slug}`}
              date={new Date(isoStringToDate(post.date))}
              readtime={post.readtime}
            />
          );
        })}
      </div>
    </div>
  );
};

const AboutMeCard = (props) => {
  return (
    <div className="w-full max-w-sm bg-white shadow-xl rounded px-8 pt-6 pb-8 my-4 lg:m-4 transition-all hover:p-10 hover:border-t-4 border-primary duration-700 delay-75">
      <h4 className="mx-auto text-md sm:text-lg font-bold my-1">About</h4>
      <div className="my-1">
        <ul className="list-disc list-inside text-sm sm:text-md">
          <li>Hanoian + Montréaler</li>
          <li>Tech enthusiast</li>
          <li>1999</li>
        </ul>
      </div>
    </div>
  );
};

const ContactCard = (props) => {
  const email = "nguyenquan233@gmail.com";
  const tel = "+1 514 625 2303";
  return (
    <div className="w-full max-w-sm bg-white shadow-xl rounded px-8 pt-6 pb-8 my-4 lg:m-4 transition-all hover:p-10 hover:border-t-4 border-primary duration-700 delay-75">
      <h4 className="mx-auto text-md sm:text-lg font-bold my-1">Contact</h4>
      {/* <p className="text-lg my-1">Reach me at:</p> */}
      <p className="text-sm sm:text-md my-1 break-all">
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p className="text-sm sm:text-md my-1">
        <a href={`tel:${tel}`}>{tel}</a>
      </p>
    </div>
  );
};

const HomePage = (props: { posts }) => {
  return (
    <div className="container center mx-auto px-4">
      <Header textColor="white" />
      <Banner />
      <Dashboard posts={props.posts} />
      <div className="flex-row lg:flex mx-auto px-4 mb-5">
        <SubcribeCard />
        <AboutMeCard />
        <ContactCard />
      </div>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts([
    "slug",
    "author",
    "title",
    "tags",
    "date",
    "content",
  ]);
  const result = {
    props: {
      posts: posts.map((post) => {
        let {content, ...toReturn} = post;
        return { ...toReturn, readtime: calcReadTime(String(post.content)) };
      }),
    },
  };
  console.log(result);
  return result;
}

export default HomePage;
