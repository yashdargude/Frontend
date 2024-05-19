import Header from "@/components/custom/Header";

function Home() {
  return (
    <>
      <Header />
      <section className="mt-24 pt-4 pb-24 bg-gradient-radial from-gradientred via-gradientblue to-darkblue">
        <div className="container mx-md-auto w-full flex flex-col items-center justify-center py-12">
          <div>
            <h1 className="text-6xl text-white text-opacity-70 text-center px-60 tracking-tight font-bold leading-tight">
              Find the perfect guide to your well-being
            </h1>

            <div className="flex flex-col lg:flex-row gap-4 items-center justify-center mt-16">
              <div className="text-white font-semibold bg-white bg-opacity-20 px-6 py-4 rounded-full">
                🗓️ Seamless Booking
              </div>
              <div className="text-white font-semibold bg-white bg-opacity-20 px-6 py-4 rounded-full">
                📠 Care on Demand
              </div>
              <div className="text-white font-semibold bg-white bg-opacity-20 px-6 py-4 rounded-full">
                👆 Freedom to Choose, Freedom to Thrive
              </div>
            </div>

            <p className="text-blurwhite text-opacity-50 text-2xl text-center font-semibold tracking-normal leading-10 px-32 mt-10">
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
