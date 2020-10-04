import Head from "next/head";
import Video from "./videos/[id]/video";

const HomePage = () => {
  return (
    // <div className="h-full">
    //   <Head>
    //     <title>Catchup | Log-In</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    //   <main className="p-8 h-full">
    //     <section className="h-full flex items-center justify-center">
    //       Text.
    //     </section>
    //   </main>
    // </div>
    <Video />
  );
};

export default HomePage;
