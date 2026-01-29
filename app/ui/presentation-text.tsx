export default function PresentationText() {
  return (
    <div
      className="flex w-max max-w-72 flex-col mx-auto sm:mx-0 text-wrap sm:ml-auto sm:max-w-96 md:max-w-max gap-8 md:gap-2 px-2 font-medium font-work_sans text-sm xl:pr-32"
    >
      <div>
        <p className="md:max-w-96">
          I love knowing how stuff works in detail and working on complex systems
        </p>
      </div>
      <p className="md:max-w-96 italic bg-amber-400">*(This portfolio is from 2024, since then I learned a lot of new abilities, so I set a goal to improve / change this portfolio)</p>
      <a 
      href="https://threejs-journey.com/certificate/view/38866"
      rel="noreferrer noopener nofollow"
      target="_blank"
      className="md:max-w-96 italic bg-purple-400 hover:bg-purple-300 hover:underline">Even finished a ThreeJS course by Bruno Simon, which this portfolio doesn&apos;t use</a>
    </div>
  );
}
