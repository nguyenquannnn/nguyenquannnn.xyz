const Footer = () => {
  return (
    <footer className="pb-10 border-t-2 text-black">
      <div className="grid gap-1 grid-cols-2 mt-5">
        <div className="col-start-1 col-end-2 text-sm">
          <a href="/">@nguyenquannnn</a>
          <h6>All right reserved</h6>
        </div>
        <div className="col-start-2 col-end-3 inline-flex flex-row-reverse">
          <a href="https://github.com/nguyenquannnn">
            <img src="/github-50.svg" alt="Github" className="w-10 sm:w-auto"/>
          </a>
          <a href="https://www.linkedin.com/in/anh-quan-nguyen-389a1b164/">
            <img src="/linkedin-50.svg" alt="LinkedIn" className="w-10 sm:w-auto"/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
