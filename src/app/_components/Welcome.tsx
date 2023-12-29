const Welcome = () => {
  return (
    <>
      <section
        id="welcome"
        className="relative -z-20 hidden h-screen bg-base-100 px-5 pt-20 text-2xl sm:px-8 md:px-10 lg:block lg:px-12"
      >
        <div className="fixed -z-10 mx-8 px-8">
          Large screen hero content here
        </div>
      </section>
      <section className="h-screen bg-base-100 lg:hidden">
        Welcome info here
      </section>
    </>
  );
};

export default Welcome;
