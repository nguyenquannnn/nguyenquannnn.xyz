import Link from 'next-translate/Link'
import useTranslation from 'next-translate/useTranslation'
import i18nConfig from '../i18n.json'
 
const { allLanguages } = i18nConfig

const LanguageSwitcher = () => {
  const { t, lang } = useTranslation()
  return (
    <div className="text-xl">
      {allLanguages.map((value, idx) => {
        return [
          <Link href="/" lang={value} key={value}>
            <span className={`${
              value === lang ? "underline" : "no-underline"
            } cursor-pointer`}>{value}</span>
          </Link>,
          <span className="cursor-default">{idx < 2 ? " | " : ""}</span>,
        ];
      })}
    </div>
  );
};

export default (props: { textColor?: string } = { textColor: "white" }) => {
  let textColor = `text-${props.textColor}`;
  const { t, lang } = useTranslation()
  return (
    <header
      className={`flex flex-row items-baseline font-sans inline-block my-5 ${textColor}`}
    >
      {/* <div> */}
      <Link href="/">
        <span className="mr-5 lg:text-2xl xl:text-3xl font-bold">
          nguyenquannnn.xyz
        </span>
      </Link>
      <nav>
        <ul className="inline-flex space-x-4 lg:text-lg xl:text-xl">
          <li className="flex-1 hover:border-b-4 transition-all duration-200 ease-in-out">
            <Link href="/">
              <a>{t('common:blog')}</a>
            </Link>
          </li>
          <li className="flex-1 hover:border-b-4 transition-all duration-200 ease-in-out">
            <a href="https://www.linkedin.com/in/anh-quan-nguyen-389a1b164/">
              <a>cv</a>
            </a>
          </li>
          {/* <li className="flex-2 hover:border-b-4 transition-all duration-200 ease-in-out">
            <Link href="/contact-me">
              <a>{t('common:contact-me')}</a>
            </Link>
          </li> */}
        </ul>
      </nav>
      <div className="ml-auto">
        <LanguageSwitcher />
      </div>
      {/* </div> */}
    </header>
  );
};
