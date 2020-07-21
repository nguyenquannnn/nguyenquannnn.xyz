import { useTranslation } from "next-translate";
import Router from "next/router";
import { join } from 'path';
import { FC } from "react";
import { dateDisplayOptions } from "../lib/constants";
import ReadTime from "./readtime";
import Tags from "./tags";
interface PostProps {
  title?: string;
  author?: string;
  tags?: Array<string>;
  slug: string;
  date?: Date;
  readtime?: number;
}

const Card: FC<PostProps> = (props) => {
  const { lang } = useTranslation();
  const onPostClick = () => {
    Router.push(lang === 'en' ? props.slug : join('/', lang, props.slug))
  };
  return (
    <div className="mb-10 cursor-pointer bg-white">
      <div
        className="transition-all rounded shadow-lg p-5 hover:p-10 hover:-mx-5 hover:border-t-4 border-primary duration-700 delay-75"
        onClick={onPostClick}
      >
        <h4 className="font-bold text-lg hover:text-5xl duration-700 delay-75 transition-all">
          {props.title}
        </h4>
        <div className="flex items-center text-md">
          <Tags tags={props.tags} />
          <div className="">
            {props.date.toLocaleDateString(lang, dateDisplayOptions)} •{" "}
            <ReadTime readtime={props.readtime} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
