import Products from "../Components/Products";

function Home() {
  return (
    <>
      <div className="relative">
        <img className="mt-12 w-full h-full object-fill" src="/head.jpg" />
        <p className="absolute top-20 left-20">Get up to 50% off Today Only!</p>
        <h1 className="absolute top-28 left-20 font-bold text-5xl">Woman Fashion</h1>
      </div>
      <h1 className="mt-20 mb-5 text-center font-bold text-2xl text-[#333333]">
        Exclusive Products
      </h1>
      <ul className="grid grid-cols-4 gap-6 p-5 ms-20 me-20 pb-28">
        <Products />
      </ul>
    </>
  );
}

export default Home;
