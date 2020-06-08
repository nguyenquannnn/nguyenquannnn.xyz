import Router from "next/router";
import { FC } from "react";
import Tags from "./tags";
interface PostProps {
  title?: string;
  author?: string;
  tags?: Array<string>;
  slug: string;
}

const Card: FC<PostProps> = (props) => {
  const onPostClick = () => {
    Router.push(props.slug);
  };
  return (
    <div className="mb-10 cursor-pointer">
      <div
        className="transition-all rounded shadow-lg p-5 hover:p-10 ease-in-out duration-700 delay-75"
        onClick={onPostClick}
      >
        <h4 className="font-bold text-lg hover:text-5xl ease-in-out duration-700 delay-75 transition-all">{props.title}</h4>
        <Tags tags={props.tags} />
      </div>
    </div>
  );
};

export default Card;
