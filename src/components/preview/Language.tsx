import React from 'react';

interface Language {
 language: string;
 proficiency: string;
}

interface LanguageProps {
 title: string;
 languages: Language[];
}

const Language: React.FC<LanguageProps> = ({ title, languages }) => {
 if (languages.length === 0) {
   return null;
 }

 return (
   <div>
     <h2 className="section-title mb-1 border-b-2 border-gray-300">
       {title}
     </h2>
     <p className="sub-content">
       {languages.map(lang => `${lang.language} (${lang.proficiency})`).join(", ")}
     </p>
   </div>
 );
};

export default Language;