import { useState } from 'react';

const Sidebar = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const tabs = [
    { name: 'Terms of use', content: (
        <div>
          <h2 className='text-2xl md:text-2xl font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Epiidosis Investments L.L.C Terms of Use</h2>
          <h4 className='text-[#71839B]'>Last Updated: 05 Sep 2024</h4><br />
          <p>Welcome to the Terms & Conditions governing the use of <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a> (hereinafter referred to as the "Website"), owned and operated by Epiidosis Investments LLC (referred to as "Epiidosis Investments," "we," "us," or "our"). By accessing or using our Website, you agree to comply with and be bound by these Terms & Conditions.</p><br />
          <p>These Terms & Conditions outline the rules and regulations for the use of our Website. By accessing this Website, you accept these Terms & Conditions in full. If you disagree with any part of these Terms & Conditions, you must not use our Website.</p><br />
          <p>We reserve the right to modify or replace these Terms & Conditions at any time without prior notice. Your continued use of the Website after any such changes constitutes acceptance of the new Terms & Conditions. Please review this page periodically for updates.</p><br />
          <p>If you have any questions or concerns about these Terms & Conditions, please contact us at <a href="mailto:legal@epiidosisinvestments.com"className='text-[#007AFF] italic'>legal@epiidosisinvestments.com</a>. Thank you for choosing Epiidosis Investments LLC.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Acceptance of Terms</h2><br />
          <p>By accessing or using the website <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a> (referred to as the "Site"), owned and operated by Epiidosis Investments LLC (referred to as "Epiidosis Investments," "we," "us," or "our"), you agree to be bound by these Terms & Conditions ("Terms"). These Terms govern your access to and use of the Site, including any content, functionality, and services offered on or through the Site.</p><br />
          <p>Please read these Terms carefully before using the Site. By accessing or using the Site, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy, which is hereby incorporated by reference. If you do not agree to these Terms or the Privacy Policy, you must not access or use the Site.</p><br />
          <p>We reserve the right to modify, amend, or update these Terms at any time without prior notice. Any changes to these Terms will be effective immediately upon posting on this page. Your continued use of the Site following the posting of any changes constitutes acceptance of those changes. It is your responsibility to review these Terms periodically for updates.</p><br />
          <p>If you have any questions about these Terms or the Site, please contact us at <a href="mailto:legal@epiidosisinvestments.com"className='text-[#007AFF] font-bold'>legal@epiidosisinvestments.com</a> or <span className='font-bold text-[#007AFF]'>+971-4-884-8644</span>.</p><br />
        
          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>User Eligibility</h2><br />
          <p>By accessing or using the website <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a> ("the Website"), you acknowledge and agree to the following terms and conditions regarding user eligibility:</p><br />
          <ul className='list-decimal ml-10 '>
            <li><span className='font-bold'>Age Requirement:</span> Users must be at least 18 years old to access or use the Website. By accessing or using the Website, you represent and warrant that you are at least 18 years of age.</li><br />
            <li><span className='font-bold'>Legal Capacity:</span> Users must have the legal capacity to enter into agreements and abide by these terms and conditions. If you are accessing or using the Website on behalf of a company, organization, or other legal entity, you represent and warrant that you have the authority to bind such entity to these terms and conditions.</li><br />
            <li><span className='font-bold'>Compliance with Laws:</span> Users must comply with all applicable laws, regulations, and ordinances when accessing or using the Website. You are solely responsible for ensuring that your use of the Website is in compliance with all applicable laws and regulations.</li><br />
            <li><span className='font-bold'>Restricted Access:</span> Certain features or services offered on the Website may be restricted to users who meet specific eligibility criteria. Epiidosis Investments LLC reserves the right to restrict access to such features or services at its discretion.</li><br />
            <li><span className='font-bold'>Account Registration:</span> Some features or services on the Website may require users to create an account. By registering for an account, you represent and warrant that all information provided is accurate, current, and complete, and that you will maintain and update this information as necessary.</li><br />
            <li><span className='font-bold'>Suspension or Termination:</span> Epiidosis Investments LLC reserves the right to suspend or terminate access to the Website, or any part thereof, to any user who violates these terms and conditions or engages in conduct that Epiidosis Investments LLC deems inappropriate, harmful, or illegal.</li><br />
          </ul>
          <p>By accessing or using the Website, you acknowledge that Epiidosis Investments LLC may verify your eligibility at any time, and that failure to meet the eligibility requirements may result in the suspension or termination of your access to the Website.</p><br />
          
          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Account Registration and Security</h2><br />
          <p>By registering an account on <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a>, users agree to provide accurate, current, and complete information as prompted by the registration form. Users are responsible for maintaining the confidentiality of their account credentials and for all activities that occur under their account. Epiidosis Investments LLC reserves the right to suspend or terminate accounts found to be in violation of these Terms & Conditions or engaged in fraudulent or unauthorized activities. Users are required to promptly notify Epiidosis Investments LLC of any unauthorized use of their account or any other breach of security. Epiidosis Investments LLC shall not be liable for any loss or damage arising from unauthorized access to or use of a user's account.</p><br />
          
          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>User Content</h2><br />
          <p>By using our website, <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a>, you agree to abide by the following terms and conditions regarding user-generated content</p><br />
          <ul className='list-decimal ml-10 '>
            <li><span className='font-bold'>Ownership:</span>  Any content, including but not limited to text, images, videos, audio clips, or any other materials submitted, posted, or displayed by users on our website ("User Content"), remains the sole property of the respective users who contributed it.</li><br />
            <li><span className='font-bold'>License:</span> By submitting User Content on our website, you grant Epiidosis Investments LLC a worldwide, non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable license to use, reproduce, modify, adapt, publish, translate, distribute, perform, and display such User Content in connection with the operation and promotion of the website and our business.</li><br />
            <li><span className='font-bold'>Responsibility:</span> You are solely responsible for the User Content you submit, post, or display on our website. You represent and warrant that you have all necessary rights, permissions, and consents to submit such User Content and grant the licenses described herein.</li><br />
            <li><span className='font-bold'>Accuracy:</span> You agree that any User Content you submit will be accurate, lawful, and not violate the rights of any third party, including intellectual property rights, privacy rights, or publicity rights.</li><br />
            <li><span className='font-bold'>Prohibited Content:</span> You may not submit any User Content that is unlawful, defamatory, obscene, harassing, threatening, abusive, or otherwise objectionable. Epiidosis Investments LLC reserves the right to remove or delete any User Content that violates these terms or our community guidelines.</li><br />
            <li><span className='font-bold'>Monitoring:</span> While we do not actively monitor all User Content, we reserve the right to review, edit, or remove any User Content at our discretion, without prior notice or liability.</li><br />
            <li><span className='font-bold'>No Endorsement:</span> The views expressed in User Content do not necessarily reflect the views of Epiidosis Investments LLC. We disclaim any responsibility or liability for any User Content posted by users on our website.</li><br />
            <li><span className='font-bold'>Feedback:</span> We welcome feedback, comments, suggestions, and ideas regarding our website and services. However, any feedback or suggestions you provide are voluntarily given, and we may use such feedback without any obligation to compensate you.</li><br />
          </ul>
          <p>By submitting User Content on our website, you acknowledge and agree to the above terms and conditions regarding the use of User Content. If you do not agree with these terms, please refrain from submitting any User Content on our website</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Prohibited Activities</h2><br />
          <p>Users of the website <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a>, operated by Epiidosis Investments LLC, Dubai, are prohibited from engaging in the following activities:</p><br />
          <ul className='list-decimal ml-10 '>
            <li><span className='font-bold'>Unauthorized Access:</span> Users shall not attempt to gain unauthorized access to any portion of the website, server, or any other systems or networks connected to the website.</li><br />
            <li><span className='font-bold'>Malicious Use:</span> Users shall not engage in any activity that may interfere with, disrupt, or damage the proper functioning of the website, including the introduction of viruses, malware, or any other harmful code.</li><br />
            <li><span className='font-bold'>Unauthorized Use:</span> Users shall not use the website or its contents for any unlawful or unauthorized purpose, including but not limited to infringement of intellectual property rights, violation of privacy rights, or transmission of illegal or objectionable content.</li><br />
            <li><span className='font-bold'>Data Mining:</span> Users shall not engage in any data mining, scraping, harvesting, or similar activities to extract or collect information from the website without prior authorization.</li><br />
            <li><span className='font-bold'>False Representation:</span> Users shall not impersonate any person or entity or falsely represent their affiliation with any person or entity while using the website.</li><br />
            <li><span className='font-bold'>Commercial Use:</span> Users shall not use the website for any commercial purposes without obtaining prior written consent from Epiidosis Investments LLC.</li><br />
            <li><span className='font-bold'>Spamming:</span> Users shall not engage in spamming, phishing, or other unsolicited communication activities on the website.</li><br />
            <li><span className='font-bold'>Violation of Security:</span> Users shall not violate or attempt to violate the security or integrity of the website, including but not limited to bypassing security measures, probing, scanning, or testing vulnerabilities.</li><br />
            <li><span className='font-bold'>Reverse Engineering:</span> Users shall not reverse engineer, decompile, or disassemble any part of the website or its underlying technology.</li><br />
            <li><span className='font-bold'>Misuse of User Accounts:</span> Users shall not share, transfer, or assign their user accounts or login credentials to any third party without prior consent from Epiidosis Investments LLC.</li><br />
            <li><span className='font-bold'>Violation of Law:</span> Users shall not use the website in any manner that violates applicable laws, regulations, or third-party rights.</li><br />
          </ul>
          <p>Epiidosis Investments LLC reserves the right to take appropriate action, including but not limited to suspension or termination of user accounts and legal recourse, against any user found to be engaging in prohibited activities on the website. Users are encouraged to report any suspected violations of these terms to the designated contact provided on the website.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Third party links</h2><br />
          <p>Our website, <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a>, may contain links to third-party websites or services that are not owned or controlled by Epiidosis Investments LLC. We do not endorse or assume any responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that Epiidosis Investments LLC shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services. We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Intellectual Property Rights</h2><br />
          <p>All content and materials available on <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a>, including but not limited to text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, are the property of Epiidosis Investments LLC or its licensors and are protected by copyright, trademark, and other intellectual property laws.</p><br />
          <p>Users are granted a limited, non-exclusive, non-transferable license to access and use the website and its content for personal, non-commercial purposes only. This license does not permit any resale or commercial use of the website or its contents, any derivative use of the website or its contents, or any use of data mining, robots, or similar data gathering and extraction tools.</p><br />
          <p>Except as expressly permitted by these Terms & Conditions, users may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the website's content without the prior written consent of Epiidosis Investments LLC.</p><br />
          <p>All trademarks, service marks, trade names, and logos displayed on the website are the property of their respective owners and may not be used without the prior written consent of the trademark owner. Any unauthorized use of the website's content or trademarks may violate copyright, trademark, and other applicable laws and could result in legal action.</p><br />
          <p>Epiidosis Investments LLC reserves all rights not expressly granted in these Terms & Conditions, and users agree to abide by all copyright notices, trademark rules, information, and restrictions contained on the website.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Copyright Policy</h2><br />
          <p>Epiidosis Investments LLC respects the intellectual property rights of others and expects users of <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a> to do the same. This Copyright Policy outlines our commitment to protecting copyright holders' rights and explains the procedures for addressing copyright infringement claims related to content posted on our website.</p><br />
          <ul className='list-decimal ml-10 '>
            <li><span className='font-bold'>Ownership of Content:</span> All content, including text, images, graphics, videos, audio clips, software, and other materials available on <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a>, is the property of Epiidosis Investments LLC or its licensors and is protected by copyright laws. Users are prohibited from reproducing, distributing, modifying, or otherwise using copyrighted content without authorization from the copyright owner, except as permitted by law.</li><br />
            <li><span className='font-bold'>Notice of Copyright Infringement:</span>  If you believe that your copyrighted work has been used or displayed on <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a> in a manner that constitutes copyright infringement, please provide our designated Copyright Agent with a written notice ("Infringement Notice") containing the following information: <br />
                <p><span className='font-bold'>2.1.</span> Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works are covered by a single notification, a representative list of such works.</p>
                <p><span className='font-bold'>2.2.</span> Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit Epiidosis Investments LLC to locate the material.</p>
                <p><span className='font-bold'>2.3.</span> Information reasonably sufficient to permit Epiidosis Investments LLC to contact you, such as an address, telephone number, and, if available, an email address.</p>
                <p><span className='font-bold'>2.4.</span> A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law</p>
                <p><span className='font-bold'>2.5.</span> A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</p>
            </li><br />
            <li><span className='font-bold'>Designated Copyright Agent:</span> Infringement Notices should be sent to our designated Copyright Agent:
                <p><span className='font-bold'>Legal Department <br />
                                              Epiidosis Investments LLC </span><br />
                                              Address: 818, Park Lane Tower, Business Bay, Dubai – 415203, United Arab Emirates <br />
                                              Email: <a href="mailto:legal@epiidosisinvestments.com" className='text-[#007AFF] '>legal@epiidosisinvestments.com</a> <br />
                                              Phone: <span className='text-[#007AFF]'>+971-4-884-8644</span>
                </p>
            </li><br />
            <li><span className='font-bold'>Counter-Notification:</span> If you believe that material you posted on <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a> was removed or access to it was disabled by mistake or misidentification, you may file a counter-notification ("Counter-Notification") with our Copyright Agent. The Counter-Notification must include: <br />
                <ul className='list-disc ml-10'>
                    <li>Identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or access was disabled.</li>
                    <li>A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification.</li>
                    <li>Your name, address, and telephone number, and a statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which your address is located (or a United States district court, if your address is outside of the United States), and that you will accept service of process from the person who provided the Infringement Notice or an agent of such person.</li>
                </ul>
            </li><br />
            <li><span className='font-bold'>Repeat Infringers:</span> Epiidosis Investments LLC may terminate access to the website for users who are found to be repeat infringers of copyrighted content.</li><br />
            <li><span className='font-bold'>Modification of Policy:</span> This Copyright Policy may be revised from time to time without notice, and any changes will be effective immediately upon posting on epiidosisinvestments.com.</li><br />
          </ul>
          <p>By accessing or using epiidosisinvestments.com, you agree to comply with this Copyright Policy and all applicable copyright laws and regulations. Failure to adhere to these terms may result in the removal of infringing content and termination of access to the website.</p><br />
          
          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Trademarks</h2><br />
          <p>All trademarks, service marks, trade names, logos, and other intellectual property rights displayed on <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a> are the property of Epiidosis Investments LLC, its affiliates, or third-party licensors. Users are prohibited from using any of the trademarks or logos without the prior written permission of Epiidosis Investments LLC or the respective trademark owner. Unauthorized use of trademarks may constitute infringement and could result in legal action. By accessing and using the website, users agree to respect the intellectual property rights of Epiidosis Investments LLC and its affiliates.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>User-Generated Content</h2><br />
          <p>By accessing and using the website <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a>, ("the Website"), owned and operated by Epiidosis Investments LLC ("the Company"), users acknowledge and agree to abide by the following terms and conditions regarding user-generated content.</p><br />
          <ul className='list-decimal ml-10 '>
            <li><span className='font-bold'>Responsibility:</span> Users are solely responsible for any content they contribute, submit, or post on the Website, including but not limited to comments, reviews, suggestions, feedback, and other materials ("User-Generated Content").</li><br />
            <li><span className='font-bold'>Ownership:</span> Users retain ownership of their User-Generated Content. However, by submitting content on the Website, users grant the Company a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, distribute, and display such content worldwide in any media.</li><br />
            <li><span className='font-bold'>Compliance:</span> Users agree that their User-Generated Content will comply with all applicable laws, regulations, and third-party rights, including but not limited to copyright, trademark, privacy, publicity, and defamation laws.</li><br />
            <li><span className='font-bold'>Prohibited Content:</span> Users must not submit any User-Generated Content that is unlawful, defamatory, obscene, offensive, abusive, harassing, threatening, discriminatory, or otherwise objectionable. The Company reserves the right to remove or refuse to publish any User-Generated Content that violates these Terms & Conditions</li><br />
            <li><span className='font-bold'>Monitoring:</span>  While the Company does not pre-screen User-Generated Content, reserves the right to monitor, edit, or remove any content that violates these Terms & Conditions or is otherwise deemed inappropriate, in its sole discretion.</li><br />
            <li><span className='font-bold'>Liability:</span> The Company disclaims any liability for User-Generated Content posted by users. Users acknowledge that they may be exposed to User-Generated Content that is inaccurate, offensive, indecent, or objectionable and agree to use the Website at their own risk.</li><br />
            <li><span className='font-bold'>Indemnification:</span> Users agree to indemnify and hold the Company harmless from any claims, damages, losses, liabilities, costs, and expenses (including legal fees) arising out of or related to their User-Generated Content, including but not limited to any violation of these Terms & Conditions or infringement of third-party rights.</li><br />
            <li><span className='font-bold'>Modification:</span> The Company reserves the right to modify, suspend, or discontinue any aspect of the User-Generated Content feature on the Website at any time without prior notice.</li><br />
          </ul>
          <p>By contributing User-Generated Content on the Website, users acknowledge that they have read, understood, and agreed to be bound by these Terms & Conditions. Failure to comply with these terms may result in the removal of User-Generated Content and/or suspension or termination of user accounts.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Digital Millennium Copyright Act (DMCA) Compliance</h2><br />
          <p>Epiidosis Investments LLC, operator of the website epiidosisinvestments.com, is committed to upholding the principles of copyright protection and compliance with the Digital Millennium Copyright Act (DMCA). We respect the intellectual property rights of others and expect our users to do the same</p><br />
          <p>As part of our commitment to DMCA compliance, we have implemented the following measures:</p>
          <ul className='list-decimal ml-10 '>
            <li><span className='font-bold'>Notice and Takedown Procedure:</span> We have established a notice and takedown procedure to address claims of copyright infringement on our website. If you believe that your copyrighted work has been used in a manner that constitutes copyright infringement, please notify our designated DMCA agent using the contact information provided below.</li><br />
            <li><span className='font-bold'>DMCA Agent Contact Information:</span>  Our designated DMCA agent is responsible for receiving and processing notifications of alleged copyright infringement. You may contact our DMCA agent using the following details:
                <p><span className='font-bold'>Legal Department <br />
                                              Epiidosis Investments LLC </span><br />
                                              Address: 818, Park Lane Tower, Business Bay, Dubai – 415203, United Arab Emirates <br />
                                              Email: <a href="mailto:legal@epiidosisinvestments.com"className='text-[#007AFF] '>legal@epiidosisinvestments.com</a> <br />
                                              Phone: <span className='text-[#007AFF]'>+971-4-884-8644</span>
                </p>
            </li><br />
            <li><span className='font-bold'>Notification Requirements:</span>  To submit a valid DMCA notification, please ensure that your notice includes the following information: <br />
                <ul className='list-disc ml-10'>
                    <li>A physical or electronic signature of the copyright owner or authorized representative.</li>
                    <li>Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works are covered by a single notification, a representative list of such works.</li>
                    <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit the service provider to locate the material.</li>
                    <li>Information reasonably sufficient to permit the service provider to contact the complaining party, such as an address, telephone number, and, if available, an email address.</li>
                    <li>A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law</li>
                    <li>
                    A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
                </ul>
            </li><br />
            
            <li><span className='font-bold'>Counter-Notification Procedure:</span> If you believe that material you posted on our website was removed or access to it was disabled by mistake or misidentification, you may submit a counter-notification to our DMCA agent. Your counter-notification must include: <br />
                <ul className='list-disc ml-10'>
                    <li>Your physical or electronic signature.</li>
                    <li>Identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or access was disabled.</li>
                    <li>A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification.</li>
                    <li>Your name, address, and telephone number, and a statement that you consent to the jurisdiction of the federal district court for the judicial district in which your address is located, or if your address is outside of the United States, for any judicial district in which the service provider may be found, and that you will accept service of process from the person who provided the original notification of infringement.</li>
                </ul>
            </li><br />
            <li><span className='font-bold'>Repeat Infringers:</span> We have implemented a repeat infringer policy in accordance with the DMCA. Users who repeatedly infringe copyrights may have their accounts terminated or access to our website suspended.</li><br />
            <li><span className='font-bold'>Removal of Infringing Content:</span> Upon receipt of a valid DMCA notification, we will promptly remove or disable access to the allegedly infringing material. We may also terminate the accounts of users who infringe copyrights.</li><br />
          </ul>
          <p>By using our website, you acknowledge and agree to comply with our DMCA compliance measures. If you have any questions or concerns about copyright infringement or our DMCA compliance procedures, please contact our DMCA agent using the information provided above.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Disclaimer of Warranties</h2><br />
          <p>At Epiidosis Investments LLC, we strive to provide accurate and up-to-date information on our website, <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a>. However, we make no representations or warranties of any kind, express or implied, regarding the accuracy, completeness, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website for any purpose.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>No Endorsement</h2><br />
          <p>Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of our website.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>No Guarantee of Uninterrupted Access</h2><br />
          <p>We do not guarantee that our website will be available uninterrupted or error-free, or that defects will be corrected. Furthermore, we do not warrant that the servers that make our website available will be free of viruses or other harmful components. You acknowledge that it is your responsibility to implement sufficient procedures and virus checks (including anti-virus and other security checks) to satisfy your particular requirements for the accuracy of data input and output.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>No Legal or Financial Advice</h2><br />
          <p>The information provided on epiidosisinvestments.com is for general informational purposes only and does not constitute legal, financial, or other professional advice. Therefore, before making any decisions or taking any actions based upon such information, we encourage you to consult with qualified professionals who can provide advice tailored to your specific circumstances.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Changes and Updates</h2><br />
          <p>We reserve the right to modify, suspend, or discontinue any aspect of our website at any time without prior notice. Additionally, we may revise these Terms & Conditions from time to time without notice. By continuing to use our website after any such changes, you agree to be bound by the revised Terms & Conditions.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Your Acceptance of These Terms</h2><br />
          <p>By using our website, you signify your acceptance of this Disclaimer of Warranties. If you do not agree to this Disclaimer, please refrain from using our website. Your continued use of the website following the posting of changes to this Disclaimer will be deemed your acceptance of those changes.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Limitation of Liability</h2><br />
          <p>By accessing or using the website <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a>, you agree that Epiidosis Investments LLC, its affiliates, officers, directors, employees, agents, and licensors shall not be liable to you or any third party for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your access to or use of the website, including but not limited to:</p><br />
          <ul className='list-disc ml-8 '>
            <li>Any errors, inaccuracies, or omissions in the content displayed on the website.</li>
            <li>Any unauthorized access to or use of our servers and/or any personal information stored therein.</li>
            <li>Any interruption or cessation of transmission to or from the website.</li>
            <li>Any bugs, viruses, Trojan horses, or the like that may be transmitted to or through the website by any third party.</li>
            <li>Any loss or damage of any kind incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available via the website.</li>
            <li>Any reliance on any information obtained from the website.</li>
          </ul><br />
          <p>This limitation of liability applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if Epiidosis Investments LLC has been advised of the possibility of such damages.</p><br />
          <p>You specifically acknowledge that Epiidosis Investments LLC shall not be liable for any defamatory, offensive, or illegal conduct of any third party and that the risk of harm or damage from the foregoing rests entirely with you.</p><br />
          <p>In jurisdictions that do not allow the exclusion or limitation of liability for consequential or incidental damages, the liability of Epiidosis Investments LLC is limited to the fullest extent permitted by law.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Indemnification</h2><br />
          <p>As a condition of using our website <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a>, you agree to indemnify and hold harmless Epiidosis Investments LLC, its subsidiaries, affiliates, officers, agents, and employees from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your use of the website, any content you submit or transmit through the website, your violation of these Terms & Conditions, or your violation of any rights of another.</p><br />
          <p>You agree to cooperate as reasonably required by Epiidosis Investments LLC in the defense of any claim. Epiidosis Investments LLC reserves the right to assume the exclusive defense and control of any matter subject to indemnification by you, and you will not in any event settle any claim without the prior written consent of Epiidosis Investments LLC.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Governing Law and Jurisdiction</h2><br />
          <p>As a user of <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a>, you agree that these Terms & Conditions and your use of the website shall be governed by and construed in accordance with the laws of the United Arab Emirates (UAE) without regard to its conflict of law provisions.</p><br />
          <p>Any dispute arising out of or related to your use of the website shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE. You expressly consent to the personal jurisdiction of such courts and waive any objection to the venue or jurisdiction of such courts.</p><br />
          <p>By accessing or using our website, you agree to submit to the jurisdiction of the courts of Dubai, UAE for the resolution of any disputes arising from or related to these Terms & Conditions or your use of the website.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Severability</h2><br />
          <p>In the event that any provision of these Terms & Conditions is determined to be unlawful, void, or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms & Conditions. The validity and enforceability of the remaining provisions shall not be affected thereby, and they shall remain in full force and effect.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Waiver of Class Action</h2><br />
          <p>As a user of <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a>, you acknowledge and agree that any dispute resolution proceedings will be conducted on an individual basis and not in a class, consolidated, or representative action. You hereby waive any right to participate in class or collective actions to resolve disputes. This waiver applies to any claims or controversies arising out of or relating to your use of the website, including but not limited to claims under consumer protection laws, privacy laws, and other statutory or common law claims. By agreeing to these Terms & Conditions, you expressly waive any right to bring, join, or participate in any class action lawsuit or class-wide arbitration against Epiidosis Investments LLC or its affiliates. If any court or arbitrator determines that the waiver of class action is unenforceable, then the dispute shall be resolved in accordance with the Arbitration section outlined in these Terms & Conditions.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Arbitration</h2><br />
          <p>As part of the Terms & Conditions for using <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a> ("the Website"), a corporate website of Epiidosis Investments LLC headquartered in Dubai, users agree to resolve any disputes or claims arising from the use of the Website through arbitration. Arbitration offers a streamlined and efficient alternative to traditional litigation, promoting cost-effective resolution while minimizing the burden on the parties involved.</p><br />
          <ul className='list-disc ml-10 '>
            <li><span className='font-bold'>Arbitration Agreement:</span><br />By accessing or using the Website, users agree to submit any disputes, claims, or controversies arising out of or relating to the use of the Website, including but not limited to the interpretation, applicability, enforceability, or formation of these Terms & Conditions, to binding arbitration. This agreement to arbitrate encompasses all disputes, regardless of whether they arise from contract, tort, statute, or other legal theory, and applies to claims seeking monetary, injunctive, or equitable relief.</li><br />
            <li><span className='font-bold'>Arbitration Process:</span><br />Arbitration proceedings shall be conducted in accordance with the rules and procedures of a mutually agreed-upon arbitration provider, such as the American Arbitration Association (AAA) or the International Chamber of Commerce (ICC), unless the parties mutually agree otherwise. The arbitration shall be conducted by a single arbitrator appointed in accordance with the chosen arbitration provider's rules.</li><br />
            <li><span className='font-bold'>Arbitration Location:</span><br /> The arbitration shall take place in Dubai, United Arab Emirates, unless the parties agree to an alternative location. The language of the arbitration shall be English, unless otherwise agreed by the parties or required by applicable law.</li><br />
            <li><span className='font-bold'>Arbitration Awards:</span><br />The arbitrator's decision shall be final and binding on all parties and may be entered as a judgment in any court of competent jurisdiction. The prevailing party in arbitration proceedings shall be entitled to recover its reasonable attorneys' fees and costs incurred in connection with the arbitration.</li><br />
            <li><span className='font-bold'>Waiver of Class Action:</span><br />By agreeing to arbitration, users waive their right to participate in any class action lawsuit or class-wide arbitration. All disputes shall be resolved on an individual basis, and users may not consolidate their claims with those of other users or participate in any representative capacity.</li><br />
           </ul>
          
           <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Opt-Out Provision </h2><br />
          <p>Users have the right to opt out of this arbitration agreement within thirty (30) days of first accessing or using the Website. To exercise this right, users must provide written notice of their decision to opt out by contacting <a href="mailto:legal@epiidosisinvestments.com" className='text-[#007AFF] italic'>legal@epiidosisinvestments.com</a>.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Continued Use</h2><br />
          <p>Continued use of the Website after opting out of arbitration constitutes acceptance of these Terms & Conditions, including the arbitration agreement.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Contact Information</h2><br />
          <p>For inquiries or concerns regarding arbitration or these Terms & Conditions, users can contact Epiidosis Investments LLC at <a href="mailto:legal@epiidosisinvestments.com" className='text-[#007AFF] '>legal@epiidosisinvestments.com</a>. </p>
          <p>This Arbitration section governs the resolution of disputes arising from the use of the Website and ensures that users understand their rights and obligations in the event of a dispute.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Changes to Terms & Conditions</h2><br />
          <p>At Epiidosis Investments LLC, we reserve the right to modify or update these Terms & Conditions at any time without prior notice. Users are encouraged to review this section periodically for any changes. By continuing to access or use our website after any revisions become effective, you agree to be bound by the revised Terms & Conditions. If you do not agree to the new Terms & Conditions, please discontinue use of the website.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Notification of Changes</h2><br />
          <p>At Epiidosis Investments LLC, we reserve the right to modify or update these Terms & Conditions at any time, without prior notice, to reflect changes in our practices, legal requirements, or website functionalities. Any updates or amendments to the Terms & Conditions will be effective immediately upon posting on our website, <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a>.</p>
          <p>We encourage users to review these Terms & Conditions periodically to stay informed about any changes or updates. Your continued use of our website after the posting of any modifications indicates your acceptance of the updated terms.</p>
          <p>In the event of significant changes that may affect your rights or obligations, we may provide additional notification through email or prominent notices on our website.</p>
          <p>If you have any questions or concerns about these Terms & Conditions or any changes thereto, please contact us at <a href="mailto:legal@epiidosisinvestments.com" className='text-[#007AFF] '>legal@epiidosisinvestments.com</a>.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Electronic Communications</h2><br />
          <p>At Epiidosis Investments LLC, we may communicate with users electronically for various purposes related to the use of our website, <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a>. By using our website and providing your contact information, you consent to receive electronic communications from us, including but not limited to:</p><br />
          <ul className='list-decimal ml-10 '>
            <li><span className='font-bold'>Email Communications:</span>We may send you emails regarding account registration, updates, newsletters, promotions, and other relevant information related to our services.</li><br />
            <li><span className='font-bold'>Notifications:</span>You may receive electronic notifications, alerts, or messages regarding your account activity, changes to our website, or important updates that may affect your user experience.</li><br />
            <li><span className='font-bold'>Consent Confirmation:</span>By providing your email address or other contact information, you acknowledge and agree that we may use electronic communications as a method of confirming your consent to various actions, such as subscribing to newsletters or receiving promotional offers.</li><br />
            <li><span className='font-bold'>Opt-Out Options:</span>Users have the option to unsubscribe from receiving electronic communications from us at any time by following the instructions provided in the communication or by contacting our support team.</li><br />
            <li><span className='font-bold'>Retention of Communications:</span> We may retain records of electronic communications sent to and received from users for administrative, legal, or compliance purposes</li><br />
            <li><span className='font-bold'>Security of Communications:</span> While we take reasonable measures to secure electronic communications transmitted through our website, users should be aware that no method of electronic transmission or storage is completely secure. Users should exercise caution when sharing sensitive information electronically.</li><br />
            </ul>
          <p>By providing your consent to receive electronic communications from Epiidosis Investments LLC, you acknowledge and agree that electronic communications constitute a legally binding form of communication and consent. If you have any questions or concerns regarding electronic communications or wish to update your communication preferences, please contact us using the contact information provided in the Terms & Conditions.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Entire Agreement</h2><br />
          <p>As part of your use of the website <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a>, owned and operated by Epiidosis Investments LLC, based in Dubai, you agree that these Terms & Conditions constitute the entire agreement between you and Epiidosis Investments LLC regarding the subject matter herein.</p>
          <p>By accessing or using the website, you acknowledge and agree that these Terms & Conditions supersede any prior agreements, communications, or understandings, whether oral or written, between you and Epiidosis Investments LLC regarding the use of the website.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Assignment and Transfer</h2><br />
          <p>At Epiidosis Investments LLC, users acknowledge and agree that they may not assign, transfer, or delegate their rights or obligations under these Terms & Conditions without prior written consent from Epiidosis Investments LLC. Any attempted assignment, transfer, or delegation without such consent shall be null and void. Epiidosis Investments LLC reserves the right to assign, transfer, or delegate any of its rights or obligations under these Terms & Conditions without restriction.</p>
          <p>Furthermore, in the event of a merger, acquisition, reorganization, or sale of assets involving Epiidosis Investments LLC, users acknowledge and agree that their personal information and other data may be transferred to the acquiring entity as part of the transaction. Users consent to such transfer of data and agree to be bound by any successor entity's terms and policies regarding the use and protection of their information.</p>
          <p>Any assignment or transfer in violation of these Terms & Conditions shall be deemed a material breach and may result in the termination of user access to the website and services provided by Epiidosis Investments LLC.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Language</h2><br />
          <p>As part of our commitment to inclusivity and accessibility, we provide translations of the terms and conditions into other languages for users of our website, <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a>. Epiidosis Investments LLC, headquartered in Dubai, recognizes the importance of ensuring that all users understand their rights and obligations regarding the use of our website and services. Therefore, if our website or services are offered in multiple languages, we will make the terms and conditions available in those languages to accommodate the diverse linguistic preferences of our users. This approach aims to enhance transparency and comprehension, enabling users to make informed decisions about their use of our website and services.</p>

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Feedback and Suggestions</h2><br />
          <p>At Epiidosis Investments LLC, we value your feedback and suggestions as they help us improve our services and enhance your user experience on our website, <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a>. We encourage you to share your thoughts, ideas, and recommendations with us to help us better understand your needs and preferences. Your feedback is instrumental in shaping our future developments and ensuring that we continue to meet and exceed your expectations.</p><br />
          <ul className='list-disc'>
            <li><span className='font-bold'>How to Provide Feedback and Suggestions</span><br />
                <p>We welcome feedback and suggestions through various channels, including:</p><br />
                <ul className='list-decimal ml-10'>
                    <li><span className='font-bold'>Contact Form:</span>You can use the contact form provided on our website to submit your feedback and suggestions directly to our team. Please ensure to provide accurate contact information so that we can respond to your inquiry promptly.</li>
                    <li><span className='font-bold'>Email:</span>Feel free to send us an email at <a href="mailto:feedback@epiidosisinvestments.com" className='text-[#007AFF] '>feedback@epiidosisinvestments.com</a> with your feedback and suggestions. Our dedicated team will review your message and take appropriate action based on your input.</li>
                    <li><span className='font-bold'>Customer Support:</span> If you have specific concerns or suggestions related to our products or services, you can reach out to our customer support team for assistance. They are available to address any questions or issues you may encounter.</li>   
                </ul><br />
                <p>Guidelines for Providing Feedback and Suggestions, to ensure that we can effectively address your feedback and suggestions, please adhere to the following guidelines:</p><br />
                <ul className='list-decimal ml-10'>
                    <li><span className='font-bold'>Be Specific:</span>Clearly articulate your feedback or suggestion, providing detailed information to help us understand the issue or improvement you are proposing.</li>
                    <li><span className='font-bold'>Be Constructive:</span>Offer constructive criticism and practical suggestions for improvement. We value constructive feedback that helps us identify areas for enhancement and implement meaningful changes.</li>
                    <li><span className='font-bold'>Be Respectful:</span> Maintain a respectful and courteous tone when providing feedback or suggestions. We value open and honest communication but expect all interactions to be conducted in a professional manner.</li>   
                    <li><span className='font-bold'>Provide Contact Information:</span> If you would like us to follow up on your feedback or suggestion, please provide accurate contact information so that we can reach out to you if necessary.</li>   
                </ul><br />
            </li>
            <li><span className='font-bold'>Our Commitment to Feedback and Suggestions</span><br />
            <p>At Epiidosis Investments LLC, we are committed to actively listening to our users and incorporating their feedback into our decision-making processes. Your input is invaluable to us, and we are dedicated to continuously improving our website and services based on your suggestions.</p><br />
            <p>By providing feedback and suggestions, you contribute to our ongoing efforts to deliver a seamless and user-friendly experience for all visitors to our website. We appreciate your engagement and look forward to hearing from you.</p><br />
            </li>
          </ul>

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>No Unlawful or Prohibited Use</h2><br />
          <p>Users of <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a>, a corporate website of Epiidosis Investments LLC, Dubai, are prohibited from engaging in any unlawful or prohibited activities while accessing or using the website. This includes, but is not limited to:</p><br />
          <ul className='list-disc ml-8 '>
            <li>Violating any applicable laws, regulations, or ordinances.</li>
            <li>Infringing upon the rights of others, including intellectual property rights.</li>
            <li>Transmitting or posting any material that is unlawful, defamatory, obscene, or offensive.</li>
            <li>Interfering with the operation of the website or the servers and networks connected to it.</li>
            <li>Attempting to gain unauthorized access to any portion or feature of the website, or any other systems or networks connected to the website.</li>
            <li>Engaging in any conduct that could damage, disable, overburden, or impair the website or interfere with any other party's use and enjoyment of the website.</li>
          </ul><br />
          <p>Users found violating these terms may be subject to legal action and termination of their access to the website. Epiidosis Investments LLC reserves the right to investigate and take appropriate legal action against anyone who, in its sole discretion, violates this provision, including without limitation, reporting such activity to law enforcement authorities.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Headings and Construction</h2><br />
          <p>In drafting the terms and conditions for the use of our website, <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a>, we employ clear headings and construction to ensure ease of understanding and navigation. Each section of the terms and conditions is organized under specific headings, allowing users to locate relevant information efficiently. Our commitment to clarity and transparency extends to the structure and formatting of the document, facilitating comprehension and compliance with the outlined terms.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Contact Information</h2><br />
          <p>As part of our commitment to transparency and accessibility, we provide contact information for users to reach out to us regarding any inquiries, concerns, or feedback related to the terms and conditions of using our website, <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a>.</p><br />
          <p>For any questions or assistance regarding the Terms & Conditions, please contact us using the following details</p><br />
          <p>Email: <a href="mailto:legal@epiidosisinvestments.com"className='text-[#007AFF] '>legal@epiidosisinvestments.com</a> <br />
             Phone: <span className='text-[#007AFF]'>+971-4-884-8644</span>
          </p><br />
          <p>Our dedicated support team is available to address your queries and ensure clarity on any aspect of the Terms & Conditions. We value your feedback and strive to provide timely and efficient assistance to all users of our website.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Effective Date</h2><br />
          <p><span className='font-bold'>As of 15th of March, 2024</span>, these Terms & Conditions govern your use of the website <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a> (the "Website") operated by Epiidosis Investments LLC ("Epiidosis Investments," "we," "us," or "our"). By accessing or using the Website, you agree to comply with these Terms & Conditions. If you do not agree with any part of these Terms & Conditions, you must not use the Website.</p><br />
          <p>These Terms & Conditions constitute a legally binding agreement between you and Epiidosis Investments. Please read these Terms & Conditions carefully before using the Website.</p><br />
          <p>We reserve the right to modify or update these Terms & Conditions at any time without prior notice. Any changes to these Terms & Conditions will be effective immediately upon posting on the Website. Your continued use of the Website after the posting of any modifications constitutes acceptance of those changes.</p><br />
          <p>It is your responsibility to review these Terms & Conditions periodically for any updates or changes. If you do not agree with the modified Terms & Conditions, you must discontinue using the Website.</p>
          <p>This comprehensive list covers all essential aspects of the terms and conditions governing the use of the website, providing clarity and transparency for users.</p><br />
        </div>
      ) 
    },



    { name: 'Privacy policy', content: (
        <div>
          <h2 className='text-2xl md:text-2xl font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Epiidosis Investments L.L.C Privacy Policy</h2>
          <h4 className='text-[#71839B]'>Last Updated: 05 Sep 2024</h4><br />
          <p>Welcome to the privacy policy of Epiidosis Investments LLC, headquartered in Dubai. This policy outlines our commitment to protecting the privacy and confidentiality of your personal information when you visit our website, <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a>. As a leading investment firm offering diversified asset management services, we recognize the importance of safeguarding your privacy rights and ensuring the security of your data.</p><br />
          <p>This privacy policy applies to al	l users of our website, including visitors, clients, and prospective clients. By accessing or using our website, you consent to the collection, use, and disclosure of your personal information in accordance with this policy. Please take the time to review this policy carefully to understand how we collect, process, and protect your data.</p><br />
          <p>At Epiidosis Investments LLC, we are committed to complying with applicable data protection laws and regulations, including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other relevant privacy laws. This policy is designed to provide transparency about our data practices and to inform you about your rights regarding the collection and processing of your personal information.</p><br />
          <p>We may update this privacy policy from time to time to reflect changes in our data processing practices or legal requirements. Any updates will be posted on this page, and we encourage you to review the policy periodically for any changes. Your continued use of our website after the posting of any modifications indicates your acceptance of the updated policy.</p><br />
          <p>If you have any questions or concerns about our privacy practices or this policy, please contact us at <a href="dpo@epiidosisinvestments.com"className='text-[#007AFF] italic'>dpo@epiidosisinvestments.com</a>. Thank you for entrusting Epiidosis Investments LLC with your personal information.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Consent</h2><br />
          <p>At Epiidosis Investments LLC, we are committed to ensuring the privacy and security of our users' personal information. By using the website or services provided on epiidosisinvestments.com, users explicitly consent to the collection, use, and processing of their personal information in accordance with our Privacy Policy.</p><br />
          <p>When users access our website or utilize our services, they provide implied consent to the 
          collection of certain information, such as their IP address, browser type, device information, and browsing activity. This information is collected automatically through cookies and similar technologies and is used for analytical purposes, website optimization, and security monitoring.</p><br />
          <p>In addition to implied consent, users may also provide explicit consent when prompted to do so, such as when signing up for newsletters, submitting contact forms, or engaging with interactive features on the website. By voluntarily providing personal information in these instances, users consent to the specific purposes outlined at the time of collection, such as communication, marketing, or account management.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Children's Information</h2><br />
          <p>Epiidosis Investments LLC, as the operator of epiidosisinvestments.com, acknowledges the importance of protecting the privacy of children online. Our website and services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under the age of 13. If you are under the age of 13, please do not provide any personal information on our website. If we become aware that we have inadvertently collected personal information from a child under the age of 13, we will take immediate steps to delete such information from our records. If you believe that we may have collected personal information from a child under the age of 13, please contact us promptly so that we can address the issue accordingly.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Cookies and Similar Technologies</h2><br />
          <p>At Epiidosis Investments LLC, we use cookies, web beacons, and similar technologies to enhance your browsing experience and provide personalized content and services. These technologies allow us to analyze website traffic, track user interactions, and gather information about your preferences to tailor our website to your needs.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>What are Cookies?</h2><br />
          <p>Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They contain information about your browsing activity, such as your preferences, settings, and login credentials, which helps the website recognize you and improve your user experience.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>How We Use Cookies:</h2><br />
          <ul className='list-disc ml-10 '>
            <li><span className='font-bold'>Essential Cookies:</span> These cookies are necessary for the functioning of our website and cannot be disabled. They enable core functionalities such as page navigation, access to secure areas, and form submission.</li><br />
            <li><span className='font-bold'>Analytical Cookies:</span> We use analytical cookies to gather information about how visitors use our website, such as which pages they visit most frequently and if they encounter any errors. This data helps us optimize our website performance and improve user experience.</li><br />
            <li><span className='font-bold'>Preference Cookies:</span> Preference cookies allow us to remember your preferences and settings (such as language preferences and font size) to provide a more personalized browsing experience.</li><br />
            <li><span className='font-bold'>Marketing Cookies:</span> Marketing cookies track your online activity and browsing habits to deliver targeted advertisements and promotional content based on your interests and behavior.</li><br />
          </ul><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Managing Cookie Preferences:</h2><br />
          <p>You have the option to accept or decline cookies when you visit our website. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. However, please note that disabling cookies may impact your ability to access certain features and functionalities of our website.</p><br />
          <p>Additionally, you can manage your cookie preferences through our cookie consent banner, which allows you to choose which types of cookies you consent to use.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Web Beacons and Similar Technologies:</h2><br />
          <p>In addition to cookies, we may also use web beacons (also known as pixel tags or clear gifs) and similar technologies for tracking and analytics purposes. Web beacons are small graphic images embedded in web pages or emails that allow us to track user interactions and collect data such as IP addresses, browser types, and referring pages.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Data Transfers: </h2><br />
          <p>At Epiidosis Investments LLC, we prioritize the protection of personal information and adhere to stringent data transfer protocols to ensure the privacy and security of user data. </p>
          <p>It is important to note that personal information collected through our website, <a href="https://epiidosisinvestments.com/" className='text-[#007AFF] italic'>epiidosisinvestments.com</a>, may be transferred to third parties or stored in locations outside of the user's country. These data transfers are conducted in accordance with applicable data protection laws and regulations, and we take measures to ensure that adequate safeguards are in place to protect the data.</p>
          <p>When personal information is transferred to third parties, we disclose this information in our privacy policy to provide transparency to our users. Additionally, we outline the safeguards implemented to safeguard the confidentiality, integrity, and availability of the data during transit and storage. These safeguards may include encryption, access controls, contractual agreements with third-party service providers, and adherence to industry best practices for data security.</p>
          <p>By accessing and using our website, users consent to the transfer of their personal information as described in our privacy policy. We are committed to maintaining the highest standards of data protection and privacy compliance, and we continuously monitor and update our practices to adapt to evolving regulatory requirements and best practices in data management. If users have any questions or concerns about data transfers or data protection practices, they can contact our privacy team for further assistance.</p><br />

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Legal Basis for Processing: </h2><br />
          <p>At Epiidosis Investments LLC, we process personal data in accordance with the applicable legal framework, ensuring transparency, fairness, and respect for individual rights. The legal basis for processing personal data may vary depending on the specific circumstances and purposes of processing. Below are the primary legal bases for processing personal data: </p><br />
          <ul className='list-disc ml-10 '>
            <li><span className='font-bold'>Consent:</span> In certain cases, we may rely on the explicit consent of individuals to process their personal data for specific purposes. Consent will be obtained through clear and unambiguous consent mechanisms, and individuals will have the right to withdraw their consent at any time.</li><br />
            <li><span className='font-bold'>Contract Performance:</span> When processing personal data is necessary for the performance of a contract with the data subject or for taking pre-contractual measures at the data subject's request, we may rely on contract performance as the legal basis for processing.</li><br />
            <li><span className='font-bold'>Legitimate Interests:</span>We may process personal data based on our legitimate interests or the legitimate interests of third parties, provided that such processing does not outweigh the fundamental rights and freedoms of the data subjects. We will conduct a legitimate interests assessment to ensure that the processing is necessary and proportionate.</li><br />
            <li><span className='font-bold'>Compliance with Legal Obligations:</span>We may process personal data when it is necessary for compliance with legal obligations to which we are subject, such as regulatory requirements, tax obligations, or court orders.</li><br />
          </ul><br />
          <p>Regardless of the legal basis for processing personal data, we are committed to upholding the highest standards of data protection and privacy. We will ensure that personal data is processed lawfully, fairly, and transparently, and that the rights of data subjects are respected at all times. If you have any questions or concerns about the legal basis for processing personal data, please contact us using the details provided in this Privacy Policy.</p>

          <h2 className='text-3xl md:text-3xl text-[#095681] font-bold ' style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Legal Basis for Processing: </h2><br />
          <p>At Epiidosis Investments LLC, we process personal data in accordance with the applicable legal framework, ensuring transparency, fairness, and respect for individual rights. The legal basis for processing personal data may vary depending on the specific circumstances and purposes of processing. Below are the primary legal bases for processing personal data: </p><br />
          <ul className='list-disc ml-10 '>
            <li><span className='font-bold'>Consent:</span> In certain cases, we may rely on the explicit consent of individuals to process their personal data for specific purposes. Consent will be obtained through clear and unambiguous consent mechanisms, and individuals will have the right to withdraw their consent at any time.</li><br />
            <li><span className='font-bold'>Contract Performance:</span> When processing personal data is necessary for the performance of a contract with the data subject or for taking pre-contractual measures at the data subject's request, we may rely on contract performance as the legal basis for processing.</li><br />
            <li><span className='font-bold'>Legitimate Interests:</span>We may process personal data based on our legitimate interests or the legitimate interests of third parties, provided that such processing does not outweigh the fundamental rights and freedoms of the data subjects. We will conduct a legitimate interests assessment to ensure that the processing is necessary and proportionate.</li><br />
            <li><span className='font-bold'>Compliance with Legal Obligations:</span>We may process personal data when it is necessary for compliance with legal obligations to which we are subject, such as regulatory requirements, tax obligations, or court orders.</li><br />
          </ul><br />
        </div>
      ) 
    },



    { name: 'Cookies', content: (
        <div>
          <h2>Cookies Policy</h2>
          <p>We use cookies to enhance your experience on our website...</p>
        </div>
      )
    }
  ];

  return (
    <div className="container flex flex-col md:flex-row h-screen mx-auto">
      {/* Sidebar - Hidden on mobile */}
      <div className="w-1/5 p-8 hidden md:block">
        <div className="space-y-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`w-full py-2 px-4 text-left cursor-pointer rounded-lg font-bold ${
                selectedTab === index ? 'bg-[#E8F6FC] text-black' : 'bg-white'
              }`}
              onClick={() => setSelectedTab(index)}
              style={{
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>
  
      {/* Divider Line - Hidden on mobile */}
      <hr className="hidden md:block mt-6 w-1 bg-[#095681] h-36"></hr>
  
      {/* Content Section with scrollbar on desktop only */}
      <div className="w-full md:w-2/3 p-8 py-2 pr-20 flex items-center justify-center text-justify overflow-auto md:overflow-auto custom-scrollbar">
        <div className="content-wrapper h-full" style={{ fontFamily: 'Lato, sans-serif' }}>
          {tabs[selectedTab].content}
        </div>
      </div>
    </div>
  );
}  

export default Sidebar;