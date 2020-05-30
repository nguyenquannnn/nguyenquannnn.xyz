import Post from "../components/card";
import Header from "../components/header";
import { getAllPosts } from '../lib/api';
import { processSlug } from '../lib/frontutil';

const Dashboard = (props: { posts }) => {
  return <div className="container center">
    <h1 className="text-5xl my-5">Welcome!</h1>
    <div className="my-20">
      {props.posts.map((post) => {
        const { lang, slug } = processSlug(post.slug)

        return <Post title={post.title} author={post.author} tags={post.tags} slug={`/posts/${lang}/${slug}`} />
      })}
    </div>
  </div>
}
const HomePage = (props: { posts }) => {
  return <div>
    <Header />
    <Dashboard posts={props.posts} />
  </div>;
}

export async function getStaticProps() {
  const posts = getAllPosts([
    'slug',
    'author',
    'title',
    'tags'
  ])
  console.log(posts)
  return {
    props: {
      posts
    }
  }
}

export default HomePage;
