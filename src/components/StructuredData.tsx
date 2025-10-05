// src/components/StructuredData.tsx
export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Baha Yıldız",
    "jobTitle": "Computer Engineer & Frontend Developer",
    "description": "Bilgisayar mühendisi ve frontend developer. React, TypeScript, C# ve .NET ile modern web uygulamaları geliştiriyorum.",
    "url": "https://bahayildiz.com",
    "email": "06baha06@gmail.com",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Bilgisayar Mühendisliği"
    },
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "C#",
      ".NET Core",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Web Development",
      "Frontend Development"
    ],
    "sameAs": [
      "https://github.com/06baha06",
      "https://www.linkedin.com/in/baha-yıldız-1451222b3"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "İzmit",
      "addressRegion": "Kocaeli",
      "addressCountry": "TR"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}