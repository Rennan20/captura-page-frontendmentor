import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Description from "./components/Description";

export default function Home() {
  return (
    <>
      <main className="bg-white  min-w-full min-h-screen">
        <Header />
        <section className="flex md:flex-row flex-col">
          <Gallery />
          <Description />
        </section>
      </main>
    </>
  );
}
