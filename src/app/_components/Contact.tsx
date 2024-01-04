import ConnectButton from "@asad/lib/components/ConnectButton";
import ContactButton from "@asad/lib/components/ContactButton";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-base-100 px-5 py-12 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-12 lg:py-20"
    >
      <div className="flex flex-col items-center gap-16 sm:mx-4 sm:gap-20 sm:px-4 md:mx-8 md:flex-row md:items-stretch md:justify-evenly md:px-8">
        <div className="flex max-w-72 grow flex-col items-center gap-6 text-center sm:gap-8 md:justify-between">
          <h3 className="font-medium">Let's work together</h3>
          <p>
            If you have anything related to Africa or Africans in Denizli. We
            are ready to help you see through it
          </p>
          <ConnectButton />
        </div>
        <div className="flex max-w-72 grow flex-col items-center gap-6 text-center sm:gap-8 md:justify-between">
          <h3 className="font-medium">Contact us</h3>
          <p>
            If you have any enquiries, suggestions or complaints. Feel free to
            reach out to us below.
          </p>
          <ContactButton />
        </div>
      </div>
    </section>
  );
};

export default Contact;
