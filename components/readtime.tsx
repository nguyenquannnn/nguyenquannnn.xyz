import { useTranslation } from "next-translate";
import { useMemo } from "react";
import { generateReadTimeMark, calcReadTime } from "../lib/utilities";

const ReadTime = (props: { content?: string; readtime?: number }) => {
  const { t } = useTranslation();
  const readTime = props.content
    ? useMemo(() => calcReadTime(props.content), [props.content])
    : props.readtime;
  const readTimeMark = useMemo(() => generateReadTimeMark(readTime), [
    readTime,
  ]);
  return (
    <span>
      {readTimeMark} {t("common:readtime", { duration: readTime })}
    </span>
  );
};

export default ReadTime;
