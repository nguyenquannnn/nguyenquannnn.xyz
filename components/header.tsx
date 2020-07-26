import Link from 'next-translate/Link'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import i18nConfig from '../i18n.json'

const { allLanguages } = i18nConfig

const LanguageSwitcher = () => {
  const router = useRouter()
  const { t, lang } = useTranslation()
  const href = useMemo((
  ) => {
    let linkParts = router.asPath.split('/').filter(v => v);
    if (linkParts.length > 2 && ['vi', 'fr'].map(v => linkParts[0].indexOf(v) >= 0).some(Boolean)) {
      return '/' + linkParts.slice(1).join('/')
    } else if (linkParts.length > 2) {
      return '/' + linkParts.join('/');
    } else {
      return '/';
    }
  }, [router.pathname]);

  return (
    <div className="text-sm sm:text-md md:text-xl">
      {allLanguages.map((value, idx) => {
        return [
          <Link href={href} lang={value} key={value}>
            <span className={`${
              value === lang ? "underline" : "no-underline"
              } cursor-pointer`}>{value}</span>
          </Link>,
          <span className="cursor-default" key={0}>{idx < 2 ? " | " : ""}</span>,
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
      className={`flex flex-row items-baseline font-sans inline-block my-5 ${textColor} box-border`}
    >
      {/* <div> */}
      <Link href="/">
        <span className="mr-1 sm:text-md md:mr-5 md:text-2xl xl:text-3xl font-bold hover:cursor-pointer">
          nguyenquannnn.xyz
        </span>
      </Link>
      <nav>
        <ul className="inline-flex space-x-1 md:space-x-4 text-sm md:text-lg xl:text-xl ">
          <li className="flex-1 hover:border-b-4 transition-all duration-200 ease-in-out box-border">
            <Link href="/">
              <a>{t('common:blog')}</a>
            </Link>
          </li>
          <li className="flex-1 hover:border-b-4 transition-all duration-200 ease-in-out">
            <a href="https://www.linkedin.com/in/anh-quan-nguyen-389a1b164/">
              cv
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
