import Products from "../Components/Products";

function Home() {
  return (
    <>
      <h1 className="mt-20 mb-5 text-center font-bold text-2xl text-[#333333]">
        Exclusive Products
      </h1>
      <ul className="grid grid-cols-4 gap-6 p-5 ms-20 me-20 pb-28">
        <Products/>
      </ul>
    </>
  );
}

export default Home;
