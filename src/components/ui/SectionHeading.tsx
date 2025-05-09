import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  light = false,
}) => {
  return (
    <div className={`mb-8 md:mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? 'text-white' : 'text-primary-800'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-3xl ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-200' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-20 h-1 mt-4 ${centered ? 'mx-auto' : ''} ${light ? 'bg-accent-500' : 'bg-accent-500'}`}></div>
    </div>
  );
};

export default SectionHeading;