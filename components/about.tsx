import ImageComposition from "./ui/imageComposition";
import PageLinkBtn from "./ui/pageLinkBtn";
import { CircleCheck } from "lucide-react";

export default function About() {
  return (
    <section className="py-16">
      <div className="w-[92%] mx-auto lg:flex lg:gap-10 xl:gap-10">
        <div className="w-[80%] mb-24 md:w-[100%]">
          <ImageComposition />
        </div>
        <div className="px-1 flex flex-col gap-7 lg:gap-6 md:w-full">
          <h2 className="flex flex-col">
            <span className="text-sm lg:text-base mb-3">ABOUT US</span>
            <span className="text-3xl">About Moris Forte Energy Solution</span>
          </h2>

          <div className="text-lg">
            <p className="lg:mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              cupiditate voluptates ipsa harum nesciunt quae eligendi rem atque
              tenetur cum at hic perferendis repudiandae, incidunt eaque
              officiis quia iure dolores.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              cupiditate quisquam! Explicabo exercitationem aperiam deleniti
              quam dolore inventore incidunt porro placeat. Eveniet sunt iusto
              soluta, repellat ratione nesciunt? A, eaque.
            </p>
          </div>

          <div className="font-bold lg:flex lg:gap-12">
            <ul className="flex flex-col gap-2 mb-2">
              <li className="flex items-center gap-1.5">
                <CircleCheck />
                <span>Solar Inveter Setup</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CircleCheck />
                <span>Solar Inveter Setup</span>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-1.5">
                <CircleCheck />
                <span>Solar Inveter Setup</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CircleCheck />
                <span>Solar Inveter Setup</span>
              </li>
            </ul>
          </div>

          <PageLinkBtn href="/about" className="self-start">
            More About
          </PageLinkBtn>
        </div>
      </div>
    </section>
  );
}
