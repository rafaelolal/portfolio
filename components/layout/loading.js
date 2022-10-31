import Image from "next/image";

export default function Loading() {
  return (
    <p className="text-center mt-4">
      <Image
        width="50%"
        height="50%"
        src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
        alt="Loading..."
        objectFit="cover"
      />
    </p>
  );
}