const Welcome = () => {
  return (
    <>
      <section className="relative -z-20 hidden h-screen bg-gray-900 px-5 pt-20 text-2xl text-white sm:px-8 md:px-10 lg:block lg:px-12">
        <div className="fixed -z-10 mx-8 px-8">
          Large screen hero content here
        </div>
      </section>
      <section className="h-screen bg-gray-900 lg:hidden">
        Welcome info here
      </section>
    </>
  );
};

export default Welcome;
