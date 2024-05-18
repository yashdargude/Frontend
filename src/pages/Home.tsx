import Header from "@/components/custom/Header";

function Home() {
  return (
    <>
      <Header />
      <section className="mt-24 pt-4 bg-gradient-radial from-gradientred via-gradientblue to-darkblue">
        <div className="container mx-md-auto h-screen w-full flex flex-col items-center justify-center py-12">
          <div>
            <h1 className="text-6xl text-amber-100 text-center px-60 tracking-tight font-bold leading-tight">
              Find the perfect guide to your well-being
            </h1>

            <p className="text-blurwhite text-opacity-50 text-3xl text-center font-semibold px-32 mt-20">
              Feeling overwhelmed or lost? FindYourGuide connects you with
              qualified counselors who specialize in a variety of areas.
              Schedule appointments with ease and embark on a personalized path
              to mental well-being. Find the support you deserve, and start your
              journey to a happier, healthier you today.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
