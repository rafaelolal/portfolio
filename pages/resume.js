import Head from "next/head";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>

      <iframe
        className="mt-5"
        src="https://drive.google.com/file/d/1F5fQZc9nxexkCjmt68BokXsmkEbCgRV2/preview"
        width="100%"
        style={{ height: "82vh" }}
      />
    </>
  );
}
