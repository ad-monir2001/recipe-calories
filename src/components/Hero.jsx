const Hero = () => {
  return (
    <div className="container mx-auto text-center py-16 px-3  bg-cover rounded-lg h-[80vh] flex justify-center items-center mt-8  bg-[linear-gradient(to_left_bottom,#150b2be6,#150b2b00),url('../public/images/hero.jpg')]">
      <div className="max-w-[800px] mx-auto space-y-6">
        <h1 className="text-5xl font-bold text-white">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="font-normal text-lg text-white">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <div className="flex justify-center items-center gap-4">
          <button className="font-semibold text-xl bg-[#35f3a3] rounded-full px-4 py-3">
            Explore Now
          </button>
          <button className="font-semibold text-xl border-2 rounded-full px-4 py-3 text-white">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// #150b2be6
// #150b2b00

// bg-[url('../public/images/hero.jpg')] bg-[#150b2be6] bg-blend-lighten
