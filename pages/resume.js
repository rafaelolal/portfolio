import Head from "next/head";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>

      <iframe
        className="mt-5"
        src="https://drive.google.com/file/d/1nh429mlFwCe_nOriTZX3iJLnGftlTVHa/preview"
        width="100%"
        style={{ height: "82vh" }}
      />
    </>
  );
}
