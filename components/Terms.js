export const Terms = () => {
  let date = new Date();

  return (
    <div className="container w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mx-auto pt-5">
      <div className="w-full px-4 md:px-6 text-xl text-gray-800 dark:text-gray-200 leading-normal">
        <div className="font-sans">
          <h1 className=" break-normal text-gray-900 dark:text-gray-200 pt-6 pb-2 text-3xl md:text-4xl">
            Terms and Conditions ("Terms")
          </h1>
          <p className="text-sm md:text-base font-normal text-gray-600 dark:text-gray-200 py-3 pl-0.5">
            Last updated: {date.toString()}
          </p>
        </div>

        <p className="py-3 text-base">
          Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the
          <a href="https://www.networkadvertising.org/" className="text-indigo-700 underline">
            https://www.networkadvertising.org/
          </a>
          (change this) website and the My Mobile App (change this) mobile application (the "Service") operated by My Company (change this) ("us", "we", or "our")
        </p>

        <p className="py-3 text-base">
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. 
          These Terms apply to all visitors, users and others who access or use the Service.
        </p>

        <p className="py-3 text-base font-bold">
          By accessing or using the Service you agree to be bound by these Terms. 
          If you disagree with any part of the terms then you may not access the Service.
        </p>

        <h1 className="py-3 font-sans font-bold text-lg border-b-1 divide-light-white">1. Purchases</h1>
        <ol className="text-base">
          <li className="py-3 pl-5">
            If you wish to purchase any product or service made available through the Service ("Purchase"), 
            you may be asked to supply certain information relevant to your Purchase including, without limitation, your …
          </li>
        </ol>
        <div className="py-3 text-base bg-gray-200">
          <div className="pl-3">
            The Purchases section is for businesses that sell online (physical or digital). 
            For the full disclosure section, 
            <a href="https://www.networkadvertising.org/" className="text-indigo-700 underline">
              create your own Terms and Conditions
            </a>.
          </div>
        </div>

        <h1 className="py-3 font-sans font-bold text-lg border-b-1 divide-light-white">2. Subscriptions</h1>
        <ol className="text-base">
          <li className="py-3 pl-5">
            Some parts of the Service are billed on a subscription basis ("Subscription(s)"). 
            You will be billed in advance on a recurring ...
          </li>
        </ol>
        <div className="py-3 text-base bg-gray-200">
          <div className="pl-3">
          The Subscriptions section is for SaaS businesses. For the full disclosure section, 
            <a href="https://www.networkadvertising.org/" className="text-indigo-700 underline pl-0.5">
              create your own Terms and Conditions
            </a>.
          </div>
        </div>

        <h1 className="py-3 font-sans font-bold text-lg border-b-1 divide-light-white">3. Content</h1>
        <ol className="text-base">
          <li className="py-3 pl-5">
            Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or
            other material ("Content"). You are responsible for the …
          </li>
        </ol>
        <div className="py-3 text-base bg-gray-200">
          <div className="pl-3">
            The Content section is for businesses that allow users to create, edit, share, make content on their websites or apps. 
            For the full disclosure section,<br/>
            <a href="https://www.networkadvertising.org/" className="text-indigo-700 underline">
              create your own Terms and Conditions
            </a>.
          </div>
        </div>

        <h1 className="py-3 font-sans font-bold text-lg">4. Links To Other Web Sites</h1>
        <ol className="text-base">
          <li className="py-3 pl-5">
            Our Service may contain links to third-party web sites or services that are not owned or controlled by My Company (change this).
          </li>
          <li className="py-3 pl-5">
            My Company (change this) has no control over, and assumes no responsibility for, the content, privacy policies, 
            or practices of any third party web sites or services. You further acknowledge and agree that My Company (change this) 
            shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by 
            or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
          </li>
        </ol>

        <h1 className="py-3 font-sans font-bold text-lg">5. Changes</h1>
        <ol className="text-base pb-2">
          <li className="pl-10">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
            If a revision is material we will try to provide at least 30 (change this) days' notice prior to any new terms taking effect. 
            What constitutes a material change will be determined at our sole discretion.
          </li>
        </ol>

        <h1 className="py-3 font-sans font-bold text-lg">6. Contact Us</h1>
        <ol className="text-base pb-10">
          <li className="pl-10">
            If you have any questions about these Terms, please contact us.
          </li>
        </ol>
      </div>
    </div>
  );
};
