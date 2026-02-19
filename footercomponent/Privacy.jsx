import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen px-5 py-20 bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006]">
      <h1 className="text-center text-4xl sm:text-5xl font-bold text-[#ff4d4d] mb-12">
        Privacy Policy
      </h1>

      <div className="max-w-[1200px] mx-auto">

        {/* INTRO */}
        <div className="bg-white/12 border border-white/10 rounded-[18px] p-7 text-gray-300 leading-[1.9]  mb-8 ">
          <p>
            This Privacy Policy covers the information Konchamkode Private Limited (collectively,
            “KPL” “Us” or “Our”) collects from the user (“User(s),” “You,” and/or “Your”) availing Services
            provided by the Platform on the Website read along with the Terms of Use and/or visiting the
            website at <span className="text-red-500">https://www.proshoot.com/</span>. This Privacy Policy tells you about KPL’s policies and
            practices for collecting, using, processing, storing, transferring, and disclosing Personal Information
            that we may collect or observe. The user shall review this Privacy Policy carefully before providing personal information
            through the Site. This Privacy Policy should be read in conjunction with the Terms of Use available at <span className="text-red-500">/terms</span>.
          </p>
        </div>

        {/* LEGAL + STORAGE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/12 rounded-[18px] p-7 text-gray-300 leading-[1.7] ">
            <h2 className="text-[#ff4d4d] mb-3 text-2xl">Legal Framework</h2>
            <ul className="list-disc list-inside pl-5">
              <li className="mb-2 text-gray-300 marker:text-red-500">
                Information Technology Act, 2000: Our data practices comply with the
                Information Technology Act, 2000, and its amendments.
              </li>
              <li className="mb-2 text-gray-300 marker:text-red-500">
                Information Technology (Reasonable Security Practices and Procedures and
                Sensitive Personal Data or Information) Rules, 2011: We adhere to the established
                standards for handling sensitive personal data or information as per the SPDI Rules.
              </li>
            </ul>
            <p>
              The terms “personal information” and “sensitive personal data or information”
              shall have the meaning ascribed to it by the Information Technology Act, 2000 (India)
              as amended, the Information Technology (Reasonable Security Practices and Procedures and Sensitive
              Personal Data or Information) Rules 2011 (India), or under applicable laws, including bye-laws, rules,
              regulations of Your jurisdiction.
            </p>
          </div>

          <div className="bg-white/12 rounded-[18px] p-7 text-gray-300 leading-[1.7]  ">
            <h2 className="text-[#ff4d4d] mb-3 text-2xl">Storage and Processing</h2>
            <p>
              Your information collected by KPL may be stored and processed in India and/or
              the United States or any other country in which KPL or its subsidiaries, affiliates,
              or service providers maintain facilities.
            </p>

            <h2 className="text-[#ff4d4d] mt-6 mb-3 text-2xl">Change of Privacy Policy</h2>
            <p>
              We reserve the right to update and modify this Privacy Policy to reflect
              changes in our information practices. We encourage you to review this policy
              periodically as your responsibility.
            </p>
          </div>
        </div>

        {/* WHAT WE COLLECT */}
        <div className="bg-white/12 rounded-[18px] p-7 text-gray-300 leading-[1.7]  mb-8 ">
          <h2 className="text-[#ff4d4d] mb-3 text-2xl">What information do we collect?</h2>

          <h3 className="mt-4 mb-2 text-xl text-white">Profile Information</h3>
          <p>
           KPL shall retain your name, mail address, contact, and postal address. This includes customer profiles, usage preferences, or other information about an individual’s anticipated or assumed actions or behaviours and information like your company name, job title, account number, customer identifier, or additional information that relates to you as a customer of KPL.
          </p>

          <h3 className="mt-4 mb-2 text-xl text-white">Transactions and Commercial Information</h3>
          <p>
            We do not collect or store payment card data, financial account information, or other financial identifiers. We may keep non-financial transaction metadata (such as confirmation references) only when necessary to deliver the requested service.
          </p>

          <h3 className="mt-4 mb-2 text-xl text-white">User-generated Content</h3>
          <p>
            This includes information like browser and device data, internet, or network activity information, such as activity on our Websites and Services, data collected through cookies, pixel tags, and other technologies, and additional information generated through your use of the internet to access our websites. It also includes geolocation information such as your precise location, city, state, county, or country if you have such geolocation data enabled when using the applicable social media application. For example, we can collect that information if you use Facebook to “Check” at a KPL events.
          </p>

          <h3 className="mt-4 mb-2 text-xl text-white">Technical and Localisation Information</h3>
          <p>
            This includes information captured on audio or video recording, such as if a telephone or video call is recorded or simply observable in such interaction or an Offline Context. It could include personal information related to your interactions with us and allow us to manage your profile, provide relevant customer service and tailored marketing content, establish communications and conduct our business securely, assess and better understand our business, and optimize and manage our website and other means of communication.
          </p>
        </div>

        {/* WHY + WHEN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/12 rounded-[18px] p-7 text-gray-300 leading-[1.7] ">
            <h2 className="text-[#ff4d4d] mb-3 text-2xl">Why do we collect your information?</h2>
            <ul className="list-disc list-inside pl-5">
              <li className="mb-2 text-gray-300 marker:text-red-500">To provide You with services requested;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">To manage Your profile;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">To provide tailored customer service and assistance;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">To enable You to receive relevant information and marketing content;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">To communicate non-marketing information;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">To manage Our social networks;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">To conduct Our businesses securely and protect our activities and personnel;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">To assess and better understand our business;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">To optimise and manage Our website and other means of communication</li>
            </ul>
          </div>

          <div className="bg-white/12 rounded-[18px] p-7 text-gray-300 leading-[1.7] ">
            <h2 className="text-[#ff4d4d] mb-3 text-2xl">When do we collect Your Personal Information?</h2>
            <ul className="list-disc list-inside pl-5">
              <li className="mb-2 text-gray-300 marker:text-red-500">You subscribe to a service;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">You create a profile, join our community, participate in a contest, join or link your social media account to your KPL profile;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">You subscribe to our marketing and promotional content/communications;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">You interact with us or seek advice and share personal information through our websites, our social media pages, our associates at the office or via chat, phone or video calls, at events or through our customer services also through phone calls;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">You use your device to browse activity across Our websites;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">Your information is shared with us by our approved partners, with your prior consent where required;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">You are registered or not, by completing surveys, registration processes, or forms. We may also use cookies or other online advertising technologies for this purpose.</li>
            </ul>
          </div>
        </div>

        {/* HOW */}
        <div className="bg-white/12 rounded-[18px] p-7 text-gray-300 leading-[1.7]  mb-8">
          <h2 className="text-[#ff4d4d] mb-3 text-2xl">How do we collect your Personal Information?</h2>
          <ul className="list-disc list-inside pl-5">
            <li className="mb-2 text-gray-300 marker:text-red-500">Primary Sources: Data supplied by a person about themselves.</li>
            <li className="mb-2 text-gray-300 marker:text-red-500">Customer Sources: This refers to information supplied by a customer about a person. This may occur when one employee of a customer shares data concerning a colleague while introducing services.</li>
            <li className="mb-2 text-gray-300 marker:text-red-500">Third-Party Sources: Data obtained from external sources, including publicly accessible databases, social media platforms, third-party market research data providers, and our affiliates, business associates, and partners engaged in joint marketing activities who share data with us.</li>
            <li className="mb-2 text-gray-300 marker:text-red-500">Service sources: Data provided to KPL due to Your use of Our services.</li>
          </ul>
        </div>

        {/* THIRD PARTY + SHARING */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/12 rounded-[18px] p-7 text-gray-300 leading-[1.7] ">
            <h2 className="text-[#ff4d4d] mb-3 text-2xl">Who are our third parties?</h2>
            <ul className="list-disc list-inside pl-5 ">
              <li className="mb-2 text-gray-300 marker:text-red-500">Our Affiliates and subsidiaries;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">Our Event partners;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">Social media;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">Our Business and approved partners;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">Your visit to Our websites;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">Online/Offline Advertisers;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">Consumer repoting agencies;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">Enforcement or judicial authorities or any public authorities;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">Government entities;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">Your family,friends that share Your personal information with Us so as to share information that may instrest you e.t.c.</li>
            </ul>
          </div>

          <div className="bg-white/12 rounded-[18px] p-7 text-gray-300 leading-[1.7] ">
            <h2 className="text-[#ff4d4d] mb-3 text-2xl">With whom do we share your Personal information?</h2>
            <ul className="list-disc list-inside pl-5">
              <li className="mb-2 text-gray-300 marker:text-red-500">Approved partners acting as service providers;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">Service fulfilment companies and transaction partners:</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">Marketing services, advertising providers, communication (email, SMS, MMS) providers and social networks;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">IT service providers;</li>
              <li className="mb-2 v">Audit, law firms, and similar corporate professional service providers, data analysis providers:</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">Law enforcement bodies, regulatory bodies, government agencies, courts, and lawyers to comply with laws and defend our rights and interests;</li>
              <li className="mb-2 text-gray-300 marker:text-red-500">At your request or for our legitimate interest or compliance with laws and regulations.</li>
            </ul>
          </div>
        </div>

        {/* REFUND */}
        <div className="bg-white/12 rounded-[18px] p-7 text-gray-300 leading-[1.7] mb-8 ">
          <h2 className="text-[#ff4d4d] mb-3 text-2xl">Refund Policy</h2>
          <p>
            We process instant refunds when an order is cancelled before fulfilment begins.
            If you are not satisfied with the service delivered, we offer partial refunds based
            on the portion of the service completed and any non-recoverable costs already incurred.
            For refund assistance, please reach out via the contact details below..
          </p>
        </div>

        {/* COOKIE */}
        <div className="bg-white/12 rounded-[18px] p-7 text-gray-300 leading-[1.7] mb-8">
          <h2 className="text-[#ff4d4d] mb-3 text-2xl">Cookie Policy</h2>
          <p>
            We may upon Your consent (in case of certain jurisdictions that require
            us to obtain Your consent to use cookies) or otherwise place cookies on Your
            hard drive for record-keeping purposes and sometimes to identify information about
            Your activities whenever You access or interact with Our Website. We may use cookies to
            enhance or personalise Your experience. These cookies, among other things, are used to identify the
            number of visits You make to Our website, Your browsing pattern, and the duration of Your visits. You may choose to
            disable cookies by turning off the cookie feature on the web browser, which will prevent the web browser from accepting
            new cookies. Further, depending upon the sophistication of Your web browser software, You can set up an alert when cookies are being sent.
            Please note that by disabling the cookies, some parts of Our Website may not function properly. We do not have control over the cookies placed
            by third-party service providers.
          </p>
        </div>

        {/* RIGHTS */}
        <div className="bg-white/12 rounded-[18px] p-7 text-gray-300 leading-[1.7] mb-8 ">
          <h2 className="text-[#ff4d4d] mb-3 text-2xl">What are your rights?</h2>
          <ul className="list-disc list-inside pl-5">
            <li className="mb-2 text-white marker:text-red-500">Withdrawing your consent:</li>
            <p className="text-gray-300">If we are relying on your consent to process your personal information, which may be 
              express and/or implied consent depending on the applicable law, you have the right to 
              withdraw your consent at any time. You can withdraw your consent anytime by contacting us 
              using the contact details provided in the “Contact Us” section below.</p>
            <li className="mb-2 text-white marker:text-red-500">Opting out of marketing and promotional communications:</li>
            <p className="text-gray-300">You can unsubscribe from our marketing and promotional communications at any 
              time by clicking on the unsubscribe link in the emails that we send, replying “STOP” or 
              “UNSUBSCRIBE” to the SMS messages that we send,
               or by contacting us using the details provided in the “Contact Us” 
              section below. You will then be removed from the marketing lists; however, 
              we may still communicate with you for service-related messages, to respond to 
              service requests, or for other non-marketing purposes.</p>
            <li className="mb-2 text-white marker:text-red-500">Cookies and similar technologies:</li>
            <p className="text-gray-300">Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of Our services.</p>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="bg-white/12 rounded-[18px] p-7 text-gray-300 leading-[1.7] mb-8">
          <h2 className="text-[#ff4d4d] mb-3 text-2xl">Contact Us</h2>
          <p>
            Address: Dr. Ganesh Residency, 202, Banjara Hills, Hyderabad,
            Telangana 500073, India
          </p>
          <p>Contact: +91 63053 06829</p>
          <p>Email: <span className="text-[#ff4d4d]">support@flashoot.com</span></p>
        </div>

      </div>
    </div>
  );
};

export default Privacy;
