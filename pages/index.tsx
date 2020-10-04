import Head from "next/head";

const HomePage = () => {
  return (
    <div className="p-4">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-6">Welcome to Catchup!</h1>
        <p className="opacity-75">Look ma, Tailwind CSS works!</p>
      </main>
    </div>
  )
}

export default HomePage;
