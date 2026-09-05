import React from "react";

export function MedicalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Ayur Veda Mantra — Ayurveda Panchakarma Treatment & Research Centre",
    "image": "https://ayurvedamantra.com/logo.png",
    "@id": "https://ayurvedamantra.com",
    "url": "https://ayurvedamantra.com",
    "telephone": "+919876543210",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ayur Veda Mantra Road, Near Sree Krishna Temple",
      "addressLocality": "Kochi",
      "addressRegion": "Kerala",
      "postalCode": "682001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 9.9312,
      "longitude": 76.2673
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "medicalSpecialty": [
      "Ayurvedic Medicine",
      "Panchakarma",
      "Holistic Health",
      "Nadi Pariksha"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
