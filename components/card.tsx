import Router from 'next/router';
import { FC } from "react";
import Tags from './tags';
interface PostProps {
    title?: string;
    author?: string;
    tags?: Array<string>,
    slug: string,
}

const Post: FC<PostProps> = (props) => {
    const onPostClick = () => {
        Router.push(props.slug)
    }
    return <div className="lg:max-w-1/2 md:max-w-3/4 rounded shadow-lg border-2 my-10" onClick={onPostClick}>
        <h4 className="font-bold text-lg m-25 p-5">{props.title}</h4>
        <Tags tags={props.tags} />
    </div >
}

export default Post;