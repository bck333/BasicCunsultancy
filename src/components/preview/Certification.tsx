import React from 'react';

interface Certification {
  name: string;
  authority: string;
  year: string;
}

interface CertificationProps {
  title: string;
  certifications: Certification[];
}

const Certification: React.FC<CertificationProps> = ({ title, certifications }) => {
  if (certifications.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="section-title mb-1 border-b-2 border-gray-300">{title}</h2>
      <ul className="sub-content list-disc ul-padding">
        {certifications.map((cert, index) => (
          <li key={index}>
            {cert.name} - {cert.authority} ({cert.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certification;