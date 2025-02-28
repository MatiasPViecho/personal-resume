export default function ContactSection() {
  return (
    <div className="px-2 sm:px-8 lg:pt-4 xl:pl-32 mb-16">
      <h3 className="text-iris text-6xl font-light font-xanh_mono uppercase">
        Let&apos;s get in touch
      </h3>
      <ul className="flex flex-col gap-3 pt-4 lg:pt-16 lg:gap-4">
        <li>
          <a
            href="mailto:matiasviecho.work@gmail.com"
            rel="noreferrer noopener nofollow"
            className="text-base lg:text-3xl lg:font-medium uppercase underline-offset-2 font-work_sans font-bold underline"
          >
            Send me an email
          </a>
        </li>
        <li>
          <a
            href="https://github.com/MatiasPViecho"
            rel="noreferrer noopener nofollow"
            target="_blank"
            className="text-base lg:text-3xl lg:font-medium uppercase underline-offset-2 font-work_sans font-bold underline"
          >
            Checkout my Github
          </a>
        </li>
        <li>
          <a
            href="/cv.pdf"
            rel="noreferrer noopener nofollow"
            download
            className="text-base lg:text-3xl lg:font-medium uppercase underline-offset-2 font-work_sans font-bold underline"
          >
            Download my Resume
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/matias-francisco-perez-viecho/"
            target="_blank"
            rel="noreferrer noopener nofollow"
            className="text-base lg:text-3xl lg:font-medium uppercase underline-offset-2 font-work_sans font-bold underline"
          >
            Contact me via LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}
