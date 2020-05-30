import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import Header from '../../../components/header';
import Tags from '../../../components/tags';
import { getAllPosts, getPostBySlug, PostMetadata } from '../../../lib/api';
import { processSlug } from '../../../lib/frontutil';
import markdownToHtml from '../../../lib/markdownToHtml';

const Return = () => {
    const router = useRouter()
    return (<span onClick={() => router.back()}>return</span>)
}

const Post = ({ post }: { post: PostMetadata }) => {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (<div className="antialiased text-gray-900">
        <h1 className="font-bold text-3xl py-5">{post.title}</h1>
        <div className="flex">
            <Tags tags={post.tags} />
            <span className="ml-auto my-auto" >{post.date}</span>
        </div>
        <div className="text-justify text-lg" dangerouslySetInnerHTML={{ __html: String(post.content) }} />
    </div>)
}

const Article = ({ post }) => {
    return (<div>
        <Header />
        <div className="container w-6/12">
            <Return />
            <Post post={post} />
        </div>
    </div>)
}
export async function getStaticProps({ params }) {
    console.log('wtf', params)
    const post = getPostBySlug(params,
        ['title', 'content', 'slug', 'tags', 'date'])
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content
            }
        }
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])
    return {
        paths: posts.map((post) => {
            const { lang, slug } = processSlug(post.slug)
            return {
                params: {
                    slug: slug,
                    lang: lang
                }
            }
        }),
        fallback: false
    }
}
export default Article