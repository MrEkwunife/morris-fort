import Image from "next/image";

export default function ImageComposition() {
  return (
    <figure className="relative w-full max-w-md aspect-[4/3]">
      <Image
        src="/image-about2.jpeg"
        alt="Main"
        fill
        className="object-cover rounded-xl"
      />

      <div className="absolute -bottom-[30%] -right-[24%] w-1/2 aspect-square">
        <Image
          src="/image-about1.jpeg"
          alt="Overlay"
          fill
          className="object-cover rounded-xl border-8 border-white shadow-lg"
        />
      </div>
    </figure>
  );
}
