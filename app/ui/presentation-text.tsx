import { IHPresentationText } from "../interfaces";

export default function PresentationText({
  dict,
}: {
  dict: IHPresentationText;
}) {
  return (
    <div className="flex w-max max-w-72 flex-col mx-auto sm:mx-0 text-wrap sm:ml-auto sm:max-w-96 md:max-w-max gap-8 md:gap-2 px-2 font-medium font-work_sans text-sm xl:pr-32">
      <div>
        <p className="md:max-w-96">{dict.subtitle_1}</p>
      </div>
      <p className="md:max-w-96 italic bg-amber-400">{dict.subtitle_2}</p>
      <a
        href="https://threejs-journey.com/certificate/view/38866"
        rel="noreferrer noopener nofollow"
        target="_blank"
        className="md:max-w-96 italic bg-purple-400 hover:bg-purple-300 hover:underline"
      >
        {dict.subtitle_3}
      </a>
    </div>
  );
}
