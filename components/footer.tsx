const Footer = () => {
  return (
    <footer className="pb-10 border-t-2">
      <div className="grid gap-1 grid-cols-2 mt-5">
        <div className="col-start-1 col-end-2 ">
          <a href="/">A site from quann</a>
          <h6>All right reserved</h6>
        </div>
        <div className="col-start-2 col-end-3 inline-flex flex-row-reverse">
          <a href="https://github.com/nguyenquannnn">
            <img src="/github-50.svg" alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/anh-quan-nguyen-389a1b164/">
            <img src="/linkedin-50.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
