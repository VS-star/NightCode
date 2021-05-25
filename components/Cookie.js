export const Cookie = () => {
  let date = new Date();

  return (
    <div className="container w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mx-auto pt-5">
      <div className="w-full px-4 md:px-6 text-xl text-gray-800 dark:text-gray-200 leading-normal">
        <div className="font-sans">
          <h1 className=" break-normal text-gray-900 dark:text-gray-200 pt-6 pb-2 text-3xl md:text-4xl">
            Cookies Policy
          </h1>
          <p className="text-sm md:text-base font-normal text-gray-600 dark:text-gray-200 py-3 pl-0.5">
            Last updated: {date.toString()}
          </p>
        </div>

        <p className="py-3 text-base ">
          My Company (change this) uses cookies on My Website (change this) (the "Service").
          By using the Service, you consent to the use of cookies.
        </p>
        <p className="py-3 text-base">
          Our Cookies Policy explains what cookies are, how we use cookies,
          how third-parties we may partner with may use cookies on the Service,
          your choices regarding cookies and further information about cookies.
        </p>

        <h1 className="py-3 font-sans font-bold text-lg border-b-1 divide-light-white">1. What are cookies</h1>
        <ol className="text-base">
          <li className="py-3 pl-5">
            Cookies are small pieces of text sent by your web browser
            by a website you visit. A cookie file is stored in your
            web browser and allows the Service or a third-party to recognize you
            and make your next visit easier and the Service more useful to you.
          </li>
          <li className="py-3 pl-5">
            Cookies can be "persistent" or "session" cookies.
          </li>
        </ol>

        <h1 className="py-3 font-sans font-bold text-lg">2. How My Company (change this) uses cookies</h1>
        <ol className="text-base">
          <li className="py-3 pl-5">
            When you use and access the Service, we may place a number of cookies files in your web browser.
          </li>
          <li className="py-3 pl-5">
            We use cookies for the following purposes: to enable certain functions of the Service,
            to provide analytics, to store your preferences, to enable advertisements delivery,
            including behavioral advertising.
          </li>
          <li className="py-3 pl-5">
            We use both session and persistent cookies on the Service and we use different types of cookies to run the Service:
          </li>
          <li className="py-3 pl-10">
            - Essential cookies. We may use essential cookies to authenticate users and prevent fraudulent use of user accounts.
          </li>
          <li className="py-3 pl-5">
            For the full disclosure section, including all types of cookies
            (from essentials to advertising cookies),{` `}
            <a href="https://www.termsfeed.com/cookies-policy-generator/" className="text-indigo-700 underline">
              create your own Cookies Policy.
            </a>
          </li>
        </ol>

        <h1 className="py-3 font-sans font-bold text-lg">3. Third-party cookies</h1>
        <ol className="text-base">
          <li className="py-3 pl-5">
            In addition to our own cookies, we may also use various third-parties cookies
            to report usage statistics of the Service, deliver advertisements on
            and through the Service, and so on.
          </li>
        </ol>

        <h1 className="py-3 font-sans font-bold text-lg">4. What are your choices regarding cookies</h1>
        <ol className="text-base">
          <li className="py-3 pl-5">
            If you'd like to delete cookies or instruct your web browser to delete
            or refuse cookies, please visit the help pages of your web browser.
          </li>
          <li className="py-3 pl-5">
            Please note, however, that if you delete cookies or refuse to accept them,
            you might not be able to use all of the features we offer,
            you may not be able to store your preferences,
            and some of our pages might not display properly.
          </li>
        </ol>

        <h1 className="py-3 font-sans font-bold text-lg">5. Where can your find more information about cookies</h1>
        <p className='pt-2 pb-2 text-base pl-5'>You can learn more about cookies and the following third-party websites:</p>
        <ol className="text-base pb-10">
          <li className="pl-10">
            All About Cookies:{` `}
            <a href="https://www.allaboutcookies.org/" className="text-indigo-700 underline">
              https://www.allaboutcookies.org/
            </a>
          </li>
          <li className="py-2 pl-10">
            Network Advertising Initiative:{` `}
            <a href="https://www.networkadvertising.org/" className="text-indigo-700 underline">
              https://www.networkadvertising.org/
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
};
