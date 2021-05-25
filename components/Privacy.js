export const Privacy = () => {
  let date = new Date();

  return (
    <div className="container w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mx-auto pt-5">
      <div className="w-full px-4 md:px-6 text-xl text-gray-800 dark:text-gray-200 leading-normal">
        <div className="font-sans">
          <h1 className=" break-normal text-gray-900 dark:text-gray-200 pt-6 pb-2 text-3xl md:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-sm md:text-base font-normal text-gray-600 dark:text-gray-200 py-3 pl-0.5">
            Last updated: {date.toString()}
          </p>
        </div>

        <p className="py-3 text-base ">
          My Company (change this) ("us", "we", or "our") operates http://www.mysite.com (change this) (the "Site"). 
          This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.
        </p>
        <p className="py-3 text-base">
          OWe use your Personal Information only for providing and improving the Site. 
          By using the Site, you agree to the collection and use of information in accordance with this policy.
        </p>

        <h1 className="py-3 font-sans font-bold text-lg border-b-1 divide-light-white">1. Information Collection And Use</h1>
        <ol className="text-base">
          <li className="py-3 pl-5">
            While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. 
            Personally identifiable information may include, but is not limited to your name ("Personal Information").
          </li>
        </ol>

        <h1 className="py-3 font-sans font-bold text-lg">2. Log Data</h1>
        <ol className="text-base">
          <li className="py-3 pl-5">
            Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data").
          </li>
          <li className="py-3 pl-5">
            This Log Data may include information such as your computer's 
            Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, 
            the time spent on those pages and other statistics.
          </li>
          <li className="py-3 pl-5">
            In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this …
          </li>
        </ol>
        <div className="py-3 text-base bg-gray-200">
          <div className="pl-3">
            The Log Data section is for businesses that use analytics or tracking services in websites or apps,
            like Google Analytics. For the full disclosure section,<br/>
            <a href="https://www.networkadvertising.org/" className="text-indigo-700 underline">
              create your own Privacy Policy
            </a>.
          </div>
        </div>

        <h1 className="py-3 font-sans font-bold text-lg">3. Communications</h1>
        <ol className="text-base">
          <li className="py-3 pl-5">
            We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that ...
          </li>
        </ol>
        <div className="py-3 text-base bg-gray-200">
          <div className="pl-3">
            The Log Data section is for businesses that use analytics or tracking services in websites or apps,
            like Google Analytics. For the full disclosure section,<br/>
            <a href="https://www.networkadvertising.org/" className="text-indigo-700 underline">
              create your own Privacy Policy
            </a>.
          </div>
        </div>

        <h1 className="py-3 font-sans font-bold text-lg">4. Cookies</h1>
        <ol className="text-base">
          <li className="py-3 pl-5">
            Cookies are files with small amount of data, which may include an anonymous unique identifier. 
            Cookies are sent to your browser from a web site and stored on your computer's hard drive.
          </li>
          <li className="py-3 pl-5">
            Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
            However, if you do not accept cookies, you may not be able to use some portions of our Site.
          </li>
        </ol>

        <h1 className="py-3 font-sans font-bold text-lg">5. Security</h1>
        <ol className="text-base">
          <li className="py-3 pl-5">
            The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. 
            While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
          </li>
        </ol>

        <h1 className="py-3 font-sans font-bold text-lg">6. Changes To This Privacy Policy</h1>
        <ol className="text-base">
          <li className="py-3 pl-5">
            This Privacy Policy is effective as of (add date) and will remain in effect except with respect to any changes in its provisions in the future, 
            which will be in effect immediately after being posted on this page.
          </li>
          <li className="py-3 pl-5">
            We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. 
            Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
          </li>
          <li className="py-3 pl-5">
            If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.
          </li>
        </ol>

        <h1 className="py-3 font-sans font-bold text-lg">7. Contact Us</h1>
        <ol className="text-base pb-10">
          <li className="pl-10">
            If you have any questions about these Terms, please contact us.
          </li>
        </ol>
      </div>
    </div>
  );
};
