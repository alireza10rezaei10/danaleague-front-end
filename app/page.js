import ChessGround from "@/components/ChessGround/ChessGround";
import Galary from "@/components/Galary/Galary";
import Link from "next/link";
import { STATIC_TEXTS, IMAGES } from "@/app/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <ChessGround
        colors={["bg-white", "bg-[var(--primary-color)]"]}
        number_of_rows={2}
      />

      {/* Intro Section */}
      <section className="bg-[var(--primary-color)] w-full overflow-hidden p-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col-reverse md:flex-row w-full ">
            {/* Poster */}
            <div className="md:w-1/3 w-full text-white p-4 min-w-[290px] flex flex-col items-center justify-center">
              <div>
                <Image
                  src={IMAGES.POSTER.URL}
                  width={320}
                  height={430}
                  alt={IMAGES.POSTER.ALT}
                  className="mx-auto rounded-xl "
                />
              </div>
            </div>

            {/* Description */}
            <div className="md:w-2/3 w-full">
              <div className="flex flex-col gap-10 p-4 text-white text-center mx-auto w-[90%] md:w-[80%] lg:w-[70%] max-w-700 h-full justify-center">
                <h2 className="text-xl font-bold">
                  {STATIC_TEXTS.INTRO_SECTION.TITLE}
                </h2>
                <Link
                  href="sign-up"
                  className="font-bold bg-[var(--gold-color)] w-50 mx-auto hover:bg-blue-600 active:bg-blue-700 px-4 text-[var(--primary-color)] py-2 rounded-md transition"
                >
                  {STATIC_TEXTS.INTRO_SECTION.SIGN_UP_BUTTON}
                </Link>
                <p className="px-3">{STATIC_TEXTS.INTRO_SECTION.DESCRIPTION}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Galary />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
