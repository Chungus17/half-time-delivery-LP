import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-18">
        <Hero />
        <section className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold text-center">
            Welcome to Half-Time Delivery!
          </h1>
        </section>
      </main>
    </>
  );
}