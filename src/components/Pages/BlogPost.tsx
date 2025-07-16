import React from 'react';
import { useParams } from 'react-router-dom';

const blogData = {
  'understanding-property-law-in-india': {
    title: 'Understanding Property Law in India',
    content: `<section class="py-10 px-6 max-w-5xl mx-auto text-gray-800">
  <h1 class="text-3xl font-bold mb-4">Understanding Property Laws in India (2025)</h1>

  <p class="text-lg mb-4">
    Property laws in India govern ownership, inheritance, tenancy, and land usage. These laws vary across states and require professional guidance to interpret correctly. This comprehensive guide explores everything you need to know in 2025.
  </p>

  <h2 class="text-2xl font-semibold mt-8 mb-2">1. Legal Framework</h2>
  <p class="mb-4">
    Indian property law is a blend of traditional Hindu, Muslim, and colonial British laws. Modern laws include:
  </p>
  <ul class="list-disc pl-6 mb-4">
    <li><strong>Transfer of Property Act, 1882</strong> – Governs sale, lease, mortgage, and exchange.</li>
    <li><strong>Indian Succession Act, 1925</strong> – Manages inheritance among Christians and Parsis.</li>
    <li><strong>Hindu Succession Act, 1956</strong> – Applies to Hindus, Sikhs, Jains, and Buddhists.</li>
    <li><strong>Registration Act, 1908</strong> – Requires formal property registration.</li>
    <li><strong>Real Estate Regulation Act (RERA), 2016</strong> – Regulates real estate transactions and builder responsibilities.</li>
  </ul>

  <h2 class="text-2xl font-semibold mt-8 mb-2">2. Types of Property Ownership</h2>
  <p class="mb-4">
    Property can be owned in various forms. Each type has specific legal implications:
  </p>
  <ul class="list-disc pl-6 mb-4">
    <li><strong>Sole Ownership:</strong> One individual owns the entire property.</li>
    <li><strong>Joint Ownership:</strong> Two or more individuals share ownership. Can be joint tenancy or tenancy-in-common.</li>
    <li><strong>Coparcenary Property:</strong> Under Hindu law, property is inherited equally among family members including daughters post-2005 amendment.</li>
    <li><strong>Nominee Holding:</strong> A nominee can temporarily hold property until it's distributed per will or succession law.</li>
  </ul>

  <h2 class="text-2xl font-semibold mt-8 mb-2">3. Land Classification in India</h2>
  <p class="mb-4">
    Land in India is classified as:
  </p>
  <ol class="list-decimal pl-6 mb-4">
    <li><strong>Private Land:</strong> Fully owned and transferable by individuals.</li>
    <li><strong>Government Land:</strong> Held by central or state government for public use.</li>
    <li><strong>Community Land:</strong> Owned by village panchayats, tribal bodies, or forest dwellers.</li>
  </ol>

  <h2 class="text-2xl font-semibold mt-8 mb-2">4. Transfer of Property</h2>
  <p class="mb-4">
    The <strong>Transfer of Property Act</strong> outlines legal provisions for:
  </p>
  <ul class="list-disc pl-6 mb-4">
    <li><strong>Sale:</strong> Full ownership transferred for a price.</li>
    <li><strong>Gift:</strong> Ownership transferred voluntarily without consideration.</li>
    <li><strong>Lease:</strong> Property rights transferred temporarily.</li>
    <li><strong>Mortgage:</strong> Property pledged as loan security.</li>
  </ul>

  <h2 class="text-2xl font-semibold mt-8 mb-2">5. Registration Requirements</h2>
  <p class="mb-4">
    Under the <strong>Registration Act, 1908</strong>:
  </p>
  <ul class="list-disc pl-6 mb-4">
    <li>All transactions involving immovable property above ₹100 must be registered.</li>
    <li>Stamp duty and registration fees are mandatory and vary by state.</li>
    <li>Non-registration makes property transfers legally invalid.</li>
  </ul>

  <h2 class="text-2xl font-semibold mt-8 mb-2">6. Inheritance and Succession</h2>
  <p class="mb-4">
    Inheritance laws depend on religion and personal law:
  </p>
  <ul class="list-disc pl-6 mb-4">
    <li><strong>Hindu Succession Act:</strong> Daughters have equal rights as sons.</li>
    <li><strong>Indian Succession Act:</strong> Governs Christians and Parsis.</li>
    <li><strong>Muslim Personal Law:</strong> Inheritance is based on Sharia principles.</li>
  </ul>

  <h3 class="text-xl font-medium mt-6 mb-2">Documents required for inheritance:</h3>
  <ul class="list-disc pl-6 mb-4">
    <li>Death certificate of the owner</li>
    <li>Legal heir certificate</li>
    <li>Will (if available)</li>
    <li>Mutation in land records</li>
  </ul>

  <h2 class="text-2xl font-semibold mt-8 mb-2">7. RERA and Builder Accountability</h2>
  <p class="mb-4">
    The <strong>Real Estate (Regulation and Development) Act, 2016</strong> protects homebuyers by:
  </p>
  <ul class="list-disc pl-6 mb-4">
    <li>Mandating registration of real estate projects</li>
    <li>Ensuring timely delivery of possession</li>
    <li>Restricting fund diversion by builders</li>
    <li>Allowing buyer complaints via RERA portal</li>
  </ul>

  <h2 class="text-2xl font-semibold mt-8 mb-2">8. Tenant & Lease Laws</h2>
  <p class="mb-4">
    Most states have specific <strong>rent control acts</strong> to regulate:
  </p>
  <ul class="list-disc pl-6 mb-4">
    <li>Rental hikes</li>
    <li>Eviction terms</li>
    <li>Tenant protection against harassment</li>
  </ul>

  <h2 class="text-2xl font-semibold mt-8 mb-2">9. Dispute Resolution</h2>
  <p class="mb-4">
    Property disputes can be resolved through:
  </p>
  <ul class="list-disc pl-6 mb-4">
    <li>Civil litigation in property courts</li>
    <li>Mediation or arbitration for out-of-court settlement</li>
    <li>Consumer forums (in case of RERA violations)</li>
  </ul>

  <h2 class="text-2xl font-semibold mt-8 mb-2">10. Recent Supreme Court Ruling (2025)</h2>
  <p class="mb-4">
    On June 10, 2025, the Supreme Court ruled that <strong>registration alone is not proof of ownership</strong>. Proper title history and documentation are required to establish ownership. This underscores the importance of:
  </p>
  <ul class="list-disc pl-6 mb-4">
    <li>Title search and chain of ownership</li>
    <li>Encumbrance certificate</li>
    <li>Mutation record</li>
  </ul>

  <h2 class="text-2xl font-semibold mt-8 mb-2">11. Tips for Property Buyers</h2>
  <ul class="list-disc pl-6 mb-4">
    <li>Check title deed and encumbrance certificate</li>
    <li>Register all property transactions</li>
    <li>Get legal opinion before purchase</li>
    <li>Use RERA-registered builders</li>
    <li>Maintain updated land records and tax receipts</li>
  </ul>

  <h2 class="text-2xl font-semibold mt-8 mb-2">12. Conclusion</h2>
  <p class="mb-4">
    Property laws in India are evolving rapidly, especially with the rise in real estate demand and increasing litigation. Whether you're buying, inheriting, or leasing property, a sound understanding of legal procedures, documents, and rights is essential.
  </p>
  <p class="mb-4 font-medium">
    Always consult a property lawyer to ensure due diligence, compliance with the latest regulations, and to avoid disputes in the future.
  </p>
</section>
`,
    date: 'July 10, 2025',
  },
  '5-common-myths-about-divorce-laws': {
    title: '5 Common Myths About Divorce Laws',
    content: `<article>
  <header>
    <h1>5 Common Myths About Divorce Laws</h1>
    <p><strong>Date:</strong> June 22, 2025</p>
  </header>

  <section>
    <p>
      Divorce laws in India have often been subject to misunderstanding and misinformation. Many people base their views on outdated social norms, partial legal knowledge, or television drama portrayals. This has led to persistent myths that often create unnecessary stress and false expectations during divorce proceedings.
    </p>

    <p>
      In this article, we aim to debunk five of the most common myths about divorce laws in India using accurate legal facts, real-life implications, and a closer look at how courts interpret and handle such matters.
    </p>
  </section>

  <section>
    <h2>Myth 1: Men Always Lose Child Custody</h2>
    <p>
      One of the most widespread misconceptions is that mothers are automatically given custody of children after divorce. While Indian courts often award custody of young children to mothers, they base this decision on the <strong>best interest of the child</strong>—not on the parent’s gender.
    </p>
    <p>
      The <strong>Guardians and Wards Act, 1890</strong> and relevant personal laws empower both parents to seek custody. Fathers can and do win custody if they can prove that their care serves the child's welfare better. Joint custody is also gaining popularity, especially in urban courts.
    </p>
  </section>

  <section>
    <h2>Myth 2: Alimony Is Always Guaranteed</h2>
    <p>
      Alimony, or spousal support, is not automatically awarded in every divorce case. The decision depends on several factors including income disparity, duration of the marriage, the spouse's ability to maintain themselves, and the conduct of both parties.
    </p>
    <p>
      Under Section 125 of the <strong>Code of Criminal Procedure (CrPC)</strong>, a wife (including divorced) who cannot maintain herself can claim maintenance. However, if she earns a sufficient income or has remarried, her claim may be denied.
    </p>
    <p>
      Alimony can be one-time (lump-sum) or periodic (monthly), and the amount varies widely by case.
    </p>
  </section>

  <section>
    <h2>Myth 3: Divorce Takes Many Years</h2>
    <p>
      Although some divorce cases drag on due to disputes, uncontested or mutual divorces can be finalized within 6-18 months depending on the court's schedule. Under <strong>Section 13B of the Hindu Marriage Act</strong>, mutual consent divorces require a 6-month waiting period, which can be waived in certain circumstances.
    </p>
    <p>
      Long durations typically result from contested divorces involving property disputes, alimony disagreements, or child custody battles. With proper legal guidance, a divorce need not be a drawn-out affair.
    </p>
  </section>

  <section>
    <h2>Myth 4: Adultery by One Partner Guarantees Divorce in Their Favor</h2>
    <p>
      Adultery can be a valid ground for divorce under various personal laws, but it's not an automatic ticket to favorable settlements or custody. The burden of proof lies on the petitioner, and courts evaluate many other factors while determining alimony, custody, and asset division.
    </p>
    <p>
      Also, after the <strong>2018 Supreme Court ruling in Joseph Shine v. Union of India</strong>, adultery is no longer a criminal offense in India, though it remains a ground for civil divorce.
    </p>
  </section>

  <section>
    <h2>Myth 5: Women Always Get Property Rights in Divorce</h2>
    <p>
      Another common belief is that women automatically receive a share of the husband’s property upon divorce. Indian law does not mandate a share in the husband’s property unless it's jointly owned or part of a settlement.
    </p>
    <p>
      However, courts may grant women a share of assets or order alimony based on her contribution to the household, duration of marriage, and other factors. For ancestral property or inheritance, separate succession laws apply depending on the religion and family structure.
    </p>
  </section>

  <section>
    <h2>Conclusion: Know the Law, Not the Myths</h2>
    <p>
      Divorce can be emotionally and legally challenging. Falling prey to myths and misconceptions only worsens the situation. Understanding the actual provisions of Indian divorce law helps both men and women make informed decisions and ensures fair outcomes.
    </p>
    <p>
      If you're considering a divorce or going through one, always consult a qualified family lawyer who can guide you based on facts, not fears. Laws evolve, and staying informed is your best protection.
    </p>
  </section>

  <footer>
    <h3>Frequently Asked Questions</h3>
    <ul>
      <li><strong>Q:</strong> Can fathers win custody in India?<br/><strong>A:</strong> Yes, if it serves the child’s best interest.</li>
      <li><strong>Q:</strong> Is alimony compulsory?<br/><strong>A:</strong> No, it's based on income, needs, and court discretion.</li>
      <li><strong>Q:</strong> How long does mutual divorce take?<br/><strong>A:</strong> Typically 6-18 months, sometimes less.</li>
      <li><strong>Q:</strong> Does adultery impact property division?<br/><strong>A:</strong> No. It's only a ground for divorce.</li>
      <li><strong>Q:</strong> Do women automatically get husband’s property?<br/><strong>A:</strong> No, unless specified in a joint ownership or settlement.</li>
    </ul>
  </footer>
</article>
`,
    date: 'June 22, 2025',
  },
  'how-to-choose-the-right-lawyer': {
    title: 'How to Choose the Right Lawyer',
    content: `<section class="py-16 bg-white min-h-screen">
  <div class="container mx-auto px-4 max-w-3xl">
    <h1 class="text-3xl font-bold text-gray-900 mb-4">How to Choose the Right Lawyer</h1>
    <p class="text-sm text-gray-500 mb-8">May 30, 2025</p>

    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Selecting the right lawyer can make or break your legal journey. Whether you're dealing with a property dispute, criminal charges, divorce, or drafting a will, having the right legal expert by your side is critical. This guide walks you through essential steps to find the best legal professional suited to your needs.
    </p>

    <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Understand Your Legal Needs</h2>
    <p class="mb-6 text-gray-700">
      The first step in choosing a lawyer is understanding what type of legal issue you're facing. Law is a vast field, and most lawyers specialize in specific areas like:
    </p>
    <ul class="list-disc list-inside mb-6 text-gray-700">
      <li>Family Law (Divorce, Custody, Adoption)</li>
      <li>Criminal Law</li>
      <li>Corporate or Business Law</li>
      <li>Property or Real Estate Law</li>
      <li>Consumer Protection</li>
      <li>Intellectual Property Law</li>
    </ul>
    <p class="mb-6 text-gray-700">
      Once you've identified the nature of your issue, look for lawyers who specialize in that area. A lawyer specializing in family law, for instance, may not be the best fit for a corporate merger case.
    </p>

    <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Research Their Background and Expertise</h2>
    <p class="mb-6 text-gray-700">
      Before making contact, do your homework. Look for information on:
    </p>
    <ul class="list-disc list-inside mb-6 text-gray-700">
      <li>Bar Association Registrations</li>
      <li>Years of experience</li>
      <li>Number of similar cases handled</li>
      <li>Success rate or notable judgments</li>
      <li>Special certifications or law firm reputation</li>
    </ul>
    <p class="mb-6 text-gray-700">
      Many law firm websites or individual LinkedIn profiles provide a good snapshot of the lawyer’s qualifications. For example, a lawyer with 15+ years of experience in criminal defense is likely better equipped for high-stakes criminal cases than someone just starting out.
    </p>

    <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Read Reviews and Get Referrals</h2>
    <p class="mb-6 text-gray-700">
      Word of mouth is a powerful tool in the legal world. Ask friends, family, or colleagues if they have worked with a lawyer in your area of concern. Honest reviews help gauge:
    </p>
    <ul class="list-disc list-inside mb-6 text-gray-700">
      <li>Responsiveness and availability</li>
      <li>Communication style</li>
      <li>Professionalism and ethics</li>
      <li>Affordability</li>
      <li>Track record in achieving favorable outcomes</li>
    </ul>
    <p class="mb-6 text-gray-700">
      Online platforms like JustDial, Avvo, Google Reviews, and Bar Council of India directories can also provide client testimonials and peer reviews.
    </p>

    <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Schedule a Personal Consultation</h2>
    <p class="mb-6 text-gray-700">
      A face-to-face or virtual consultation is crucial before hiring. This interaction allows you to:
    </p>
    <ul class="list-disc list-inside mb-6 text-gray-700">
      <li>Gauge the lawyer’s communication and understanding</li>
      <li>Assess their interest in your case</li>
      <li>Clarify doubts about the legal process</li>
      <li>Understand the time frame and complexity involved</li>
    </ul>
    <p class="mb-6 text-gray-700">
      Always bring relevant documents and prepare questions such as:
    </p>
    <ul class="list-disc list-inside mb-6 text-gray-700">
      <li>How many similar cases have you handled?</li>
      <li>What outcomes can I realistically expect?</li>
      <li>How will we communicate, and how often?</li>
      <li>What are your fees and billing method?</li>
    </ul>

    <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Discuss Fees Transparently</h2>
    <p class="mb-6 text-gray-700">
      Different lawyers have different fee structures:
    </p>
    <ul class="list-disc list-inside mb-6 text-gray-700">
      <li>Hourly rates</li>
      <li>Flat fees (for services like will drafting or contract review)</li>
      <li>Contingency fees (common in personal injury cases)</li>
      <li>Retainer models</li>
    </ul>
    <p class="mb-6 text-gray-700">
      Ensure everything is written in a fee agreement. Look for hidden charges like court appearance fees, drafting fees, travel expenses, etc.
    </p>

    <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Evaluate Their Communication Style</h2>
    <p class="mb-6 text-gray-700">
      The best lawyers are not just legal experts but also great communicators. Notice whether your lawyer:
    </p>
    <ul class="list-disc list-inside mb-6 text-gray-700">
      <li>Listens actively</li>
      <li>Explains legal jargon in simple terms</li>
      <li>Responds promptly to emails or messages</li>
      <li>Is open to your suggestions and questions</li>
    </ul>
    <p class="mb-6 text-gray-700">
      If you feel talked over, ignored, or pressured during initial conversations, that's a red flag.
    </p>

    <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. Check for Ethical Standards and Disciplinary Records</h2>
    <p class="mb-6 text-gray-700">
      A good lawyer abides by a strong code of ethics. Before hiring:
    </p>
    <ul class="list-disc list-inside mb-6 text-gray-700">
      <li>Check if any complaints or disciplinary actions are filed against them with the Bar Council</li>
      <li>Look for professional conduct during your interactions</li>
      <li>Verify licensing and registration with local bar associations</li>
    </ul>

    <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">8. Choose Someone You Trust</h2>
    <p class="mb-6 text-gray-700">
      Legal cases can be emotionally and financially draining. You’ll need to share personal and confidential information with your lawyer. If you don’t trust their judgment, commitment, or honesty, it’s best to look elsewhere.
    </p>

    <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">Conclusion</h2>
    <p class="mb-6 text-gray-700">
      Choosing the right lawyer is an important decision that affects the outcome of your case and your peace of mind. Take your time, evaluate your options, and don’t hesitate to meet multiple lawyers before making a choice.
    </p>
    <p class="mb-6 text-gray-700">
      Remember, a good lawyer not only provides legal guidance but also offers confidence and clarity during difficult times. Whether you’re fighting a legal battle or preparing legal documents, choosing the right legal partner is the first step toward justice.
    </p>
  </div>
</section>
`,
    date: 'May 30, 2025',
  },
  'the-legality-of-live-in-relationships-in-india-what-you-need-to-know-in-2025': {
  title: 'The Legality of Live-in Relationships in India: What You Need to Know in 2025',
  date: 'July 16, 2025',
  content: `
<p><strong>Meta Description:</strong><br>
Wondering if live-in relationships are legal in India? This 2025 guide explores the legal status, rights, and challenges of live-in couples under Indian law. Know your rights today!</p>

<h3>Introduction</h3>
<p>Live-in relationships are no longer taboo in urban India. As societal norms evolve, more couples are choosing to cohabit without getting married. However, many are still unsure about the legality of live-in relationships in India. Are such relationships recognized by law? What rights do partners have? Can they claim maintenance or property rights?</p>
<p>In this comprehensive blog, we answer all these questions and more. If you're planning to enter into a live-in relationship in India or just want to know your legal rights, this guide is for you.</p>

<h3>What Is a Live-in Relationship?</h3>
<p>A live-in relationship is a domestic arrangement where two people who are not married live together in a long-term relationship that resembles a marriage. In India, there is no specific law that defines or governs live-in relationships. However, courts have, over time, interpreted and recognized such arrangements under various laws.</p>

<h3>Is Live-in Relationship Legal in India?</h3>
<p><strong>Yes, live-in relationships are legal in India.</strong> The Supreme Court of India has on multiple occasions upheld the legality of live-in relationships between consenting adults.</p>

<h4>Key Judgments Recognizing Live-in Relationships:</h4>
<ul>
  <li><strong>S. Khushboo v. Kanniammal (2010):</strong> The Supreme Court stated that living together is part of the right to life and liberty under Article 21 of the Constitution. It also said that live-in relationships are not illegal.</li>
  <li><strong>Indra Sarma v. V.K.V. Sarma (2013):</strong> This case defined different types of live-in relationships and extended protection under the Protection of Women from Domestic Violence Act, 2005 (PWDVA) to certain cases.</li>
  <li><strong>Lata Singh v. State of U.P. (2006):</strong> The court ruled that a major girl is free to marry or live with anyone she wishes.</li>
</ul>

<h3>Legal Rights of Couples in a Live-in Relationship</h3>
<ol>
  <li><strong>Right to Live Together:</strong> Under Article 21 of the Indian Constitution, every adult has the right to live with a partner of their choice. This includes same-gender and opposite-gender relationships.</li>
  
  <li><strong>Right to Maintenance:</strong> The PWDVA provides maintenance rights to women in live-in relationships if the relationship is “in the nature of marriage.” The courts look at factors such as:
    <ul>
      <li>Duration of the relationship</li>
      <li>Shared household</li>
      <li>Financial dependence</li>
      <li>Social perception as husband and wife</li>
    </ul>
  </li>

  <li><strong>Child Rights in Live-in Relationships:</strong> Children born from a live-in relationship are considered legitimate. They have the right to inherit property from both parents. However, they cannot claim ancestral property from the extended family unless the relationship is proven to be akin to marriage.</li>

  <li><strong>Protection from Domestic Violence:</strong> Women in live-in relationships can file complaints under the PWDVA if they face abuse, harassment, or violence from their partner.</li>
</ol>

<h3>Live-in Relationships and Indian Society</h3>
<p>Despite legal backing, live-in relationships continue to face social stigma, especially in rural or conservative parts of India. Many landlords refuse to rent homes to unmarried couples. Even law enforcement sometimes lacks clarity, leading to harassment of couples.</p>
<p>However, the scenario is gradually improving, especially in urban areas and among the younger generation.</p>

<h3>Live-in Relationship vs. Marriage: Key Differences</h3>
<table class="w-full border mt-4 text-left text-sm">
  <thead>
    <tr class="bg-gray-200">
      <th class="p-2">Aspect</th>
      <th class="p-2">Live-in Relationship</th>
      <th class="p-2">Marriage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="p-2">Legal Recognition</td>
      <td class="p-2">Limited</td>
      <td class="p-2">Fully recognized</td>
    </tr>
    <tr>
      <td class="p-2">Rights and Duties</td>
      <td class="p-2">Based on court interpretation</td>
      <td class="p-2">Governed by personal and statutory laws</td>
    </tr>
    <tr>
      <td class="p-2">Maintenance</td>
      <td class="p-2">Conditional</td>
      <td class="p-2">Legally mandatory</td>
    </tr>
    <tr>
      <td class="p-2">Inheritance</td>
      <td class="p-2">Limited for partner</td>
      <td class="p-2">Full inheritance rights</td>
    </tr>
    <tr>
      <td class="p-2">Social Acceptance</td>
      <td class="p-2">Increasing</td>
      <td class="p-2">Widely accepted</td>
    </tr>
  </tbody>
</table>

<h3>Can a Live-in Relationship Be Registered in India?</h3>
<p>Currently, there is no provision to register a live-in relationship in India like a marriage. However, couples can:
<ul>
  <li>Sign a Live-in Relationship Agreement to define rights and responsibilities.</li>
  <li>Maintain documentation like joint bank accounts, lease agreements, etc., to establish the relationship in legal disputes.</li>
</ul>
</p>

<h3>How to Protect Your Rights in a Live-in Relationship</h3>
<ol>
  <li><strong>Draft a Live-in Relationship Agreement:</strong>
    <ul>
      <li>Division of expenses</li>
      <li>Ownership of property</li>
      <li>Custody rights (if children involved)</li>
      <li>Maintenance responsibilities</li>
      <li>Exit or separation terms</li>
    </ul>
  </li>
  <li><strong>Keep Records:</strong> Maintain proof of cohabitation—such as bills, letters, photographs, or joint financial statements.</li>
  <li><strong>Legal Consultation:</strong> Consult a lawyer to understand your specific rights and obligations under Indian law.</li>
</ol>

<h3>Live-in Relationships and LGBTQ+ Rights in India</h3>
<p>After the decriminalization of homosexuality in the Navtej Singh Johar v. Union of India case (2018), same-sex couples have begun living together more openly.</p>
<p>While same-sex marriages are not yet legally recognized in India as of 2025, live-in relationships between same-sex partners are legal, and courts have begun to uphold their rights in some domestic violence and custody cases.</p>

<h3>Challenges Faced by Couples in Live-in Relationships</h3>
<ul>
  <li>Social stigma</li>
  <li>Lack of legal clarity</li>
  <li>Property and inheritance disputes</li>
  <li>Difficulty renting homes</li>
  <li>Lack of protection for male partners in abusive relationships</li>
</ul>

<h3>Conclusion: Know Your Rights, Live Freely</h3>
<p>Live-in relationships in India have come a long way. While they are not equivalent to marriage, Indian law does offer certain protections—especially for women and children. It is crucial for couples to understand their legal rights and responsibilities before entering into such an arrangement.</p>
<p>As India modernizes, the law is slowly evolving to keep pace with changing social values. Until then, awareness and legal preparedness are your best tools.</p>

<h3>Frequently Asked Questions (FAQs)</h3>
<ul>
  <li><strong>Q1:</strong> Are live-in relationships legal in India in 2025?<br><strong>A:</strong> Yes, live-in relationships between consenting adults are legal in India and recognized by courts.</li>
  <li><strong>Q2:</strong> Can live-in partners claim maintenance?<br><strong>A:</strong> Yes, a woman in a live-in relationship can claim maintenance under certain conditions if the relationship is in the nature of marriage.</li>
  <li><strong>Q3:</strong> Can children from live-in relationships inherit property?<br><strong>A:</strong> Yes, children from live-in relationships are considered legitimate and have inheritance rights from both parents.</li>
  <li><strong>Q4:</strong> Is there a law to register a live-in relationship in India?<br><strong>A:</strong> No, there is no specific law or registry for live-in relationships in India.</li>
  <li><strong>Q5:</strong> Is a live-in relationship the same as marriage?<br><strong>A:</strong> No. While they may resemble each other, they are different legally, especially regarding rights, responsibilities, and inheritance.</li>
</ul>
  `,
},

};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogData[slug];

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-red-600 font-semibold text-center">
        Post not found.
      </div>
    );
  }

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-8">{post.date}</p>
        <div
          className="text-lg text-gray-700 leading-relaxed [&_p]:mb-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </section>
  );
};

export default BlogPost;
