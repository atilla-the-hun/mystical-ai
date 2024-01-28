import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen relative h-[750px] background-home">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-5 md:pl-20 pb-10 md:pb-20 flex flex-col gap-5 z-10 max-w-[750px]">
          <h1 className="text-2xl md:text-4xl lg:text-[45px] text-white font-semibold heading-mobile">
            Anything is possible with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500" style={{ marginTop: "10px", display: "block", paddingBottom: "15px" }}>
              Artificial Intelligence
            </span>
          </h1>
          <p className="text-gray-200 md:block content-mobile" style={{ marginTop: "-15px", display: "block" }}>
          We specialize in state-of-the-art AI solutions.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-1 bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-1 bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-1 bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-20 top-20 z-20 right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Learn more
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact me
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-10 mobile-cliff">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          unoptimized={true}
          className="absolute right-[220px] top-20 md:top-40 mobile-horse"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-5 w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={200}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-10"
      />
    </main>
  );
}