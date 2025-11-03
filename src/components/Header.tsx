import Image from "next/image";

export default function Header() {
  return (
    <header className="flex gap-x-8 flex-col md:flex-row">
      <Image
        className="size-[100px] rounded-full"
        src="/Wardina.jpg"
        alt="picture of author"
        width={100}
        height={100}
      />
      <div>
        <h1 className="text-3xl font-medium text-zinc-700 dark:text-white mb-1.5">
          Wardina Darmawan
        </h1>

        <h2 className="text-lg font-light text-zinc-500 dark:text-white">
          Mahasiswa STITEK Bontang Jurusan Teknik Informatika
        </h2>

        <div className="flex gap-x-6 mt-6 flex-col md:flex-row gap-y-2">
          <span className="text-zinc-500 dark:text-white">
            STITEK Bontang
          </span>
        </div>
      </div>
    </header>
  );
}
