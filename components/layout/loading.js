import Image from "next/image";

export default function Loading() {
  return (
    <p className="text-center mt-4">
      <Image
        width="50%"
        height="50%"
        objectFit="cover"
        src="/blog/loading.gif"
        alt="Loading..."
      />
    </p>
  );
}