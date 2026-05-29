export default function SchemaOrgData() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'ANtwix Technologies',
    description: 'ANtwix designs and builds high-performance websites and applications tailored for growth.',
    url: 'https://antwix.lk',
    telephone: '+94-11-295-8898',
    email: 'antwix.an@gmail.com',
    sameAs: [
      // Add social media profiles as they become available
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ragama',
      postalCode: '11010',
      addressLocality: 'Ragama',
      addressRegion: 'Western Province',
      addressCountry: 'LK',
    },
    areaServed: ['LK', 'Global'],
    priceRange: '$$',
    knowsAbout: [
      'Web Development',
      'Next.js',
      'React',
      'UI/UX Design',
      'Web Design',
      'Software Development',
      'Full Stack Development',
    ],
    image: 'https://antwix.lk/og-image.png',
    founder: {
      '@type': 'Person',
      name: 'ANtwix Team',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
