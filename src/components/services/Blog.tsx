import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
       title: "Corporate lawyer near me delhi noida",
    date: "July 21, 2025",
    excerpt:"In the rapidly evolving business landscape of Delhi, legal compliance and corporate governance are vital for any company's success. I, Advocate Ruby Kumari, am a dedicated Corporate Lawyer in Delhi, providing strategic legal solutions tailored to the needs of businesses of all sizes, from startups to multinational corporations. "
    },

    {
      title: 'Divorce lawyers near me delhi noida',
      date: 'July 21, 2025',
      excerpt:
        'Looking for divorce lawyers near you in Delhi & Noida? Advocate Ruby Kumari specializes in handling mutual consent and contested divorces, child custody, alimony, and property division. Read our comprehensive guide on legal separation.',
    },
     {
      title: 'Lawyers near me Delhi & Noida',
      date: 'July 21, 2025',
      excerpt:
      'As an experienced advocate, I, Ruby Kumari, understand the complexities of the legal landscape in Delhi and Noida. Whether you require legal support for property disputes, criminal cases, family matters, or corporate affairs, finding the right lawyer is crucial. This comprehensive guide will help you navigate your search for the best legal professionals near you.',
    },
    {
      title: 'Understanding Property Law in India',
      date: 'July 10, 2025',
      excerpt:
        'Property laws in India are complex and vary between states. This post covers the basics you need to know...',
    },
    {
      title: '5 Common Myths About Divorce Laws',
      date: 'June 22, 2025',
      excerpt:
        'Divorce law is often misunderstood. Here are five common myths and the facts that debunk them...',
    },
    {
      title: 'How to Choose the Right Lawyer',
      date: 'May 30, 2025',
      excerpt:
        'Choosing the right advocate can make or break your case. Here’s a guide to help you evaluate wisely...',
    },
    {
      title: 'Lawyers in Delhi',
      date: 'July 18, 2025',
      excerpt:
      'Find Trusted & Experienced Lawyers in Delhi | Are you searching for lawyers near you in Delhi who are experienced',
    },
    {
      title: 'The Legality of Live-in Relationships in India: What You Need to Know in 2025',
      date: 'July 16, 2025',
      excerpt:
        'Wondering if live-in relationships are legal in India? This 2025 guide explores the legal status, rights, and challenges of live-in couples under Indian law. Know your rights today!',
    },
    
    
  ];

  const generateSlug = (title) =>
    title
      .toLowerCase()
      .replace(/:/g, '') // remove colons
      .replace(/[^a-z0-9\s-]/g, '') // remove special chars
      .trim()
      .replace(/\s+/g, '-'); // replace spaces with dash

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Legal Insights & Blog</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => {
            const slug = generateSlug(post.title);

            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300"
              >
                <h2 className="text-xl font-semibold text-blue-700 mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${slug}`}
                  className="inline-block mt-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
