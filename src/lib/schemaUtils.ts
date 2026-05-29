// Utility for generating structured data schemas

export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'ANtwix Technologies',
  url: 'https://antwix.lk',
  telephone: '+94-11-295-8898',
  email: 'antwix.an@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ragama',
    postalCode: '11010',
    addressCountry: 'LK',
  },
  image: 'https://antwix.lk/og-image.png',
  sameAs: [],
});

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const generateArticleSchema = (data: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: data.headline,
  description: data.description,
  image: data.image,
  datePublished: data.datePublished,
  dateModified: data.dateModified,
  author: {
    '@type': 'Person',
    name: data.author,
  },
  url: data.url,
  publisher: {
    '@type': 'Organization',
    name: 'ANtwix',
    url: 'https://antwix.lk',
  },
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});
