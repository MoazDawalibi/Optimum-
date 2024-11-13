
export default function ErrorPage() {
  

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-purple-600">
        <div id="error-page">
          <h1 className="lg:text-6xl font-bold text-2xl text-white">Oops!</h1>
          <p className="text-xl text-white my-[20px]">
            Sorry, an unexpected error has occurred.
          </p>
          <p className="text-3xl text-white my-[20px]">
            Please Try Again Later
          </p>
          <div className="mt-4">
            <a
              to="/"
              className="px-5 py-2 bg-white rounded-md hover:bg-gray-100"
            >
              Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}