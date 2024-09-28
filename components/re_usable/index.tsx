import { FC } from 'react';

interface HeadingProps {
   title: string;
   className?: string;
}

const Heading: FC<HeadingProps> = ({ title, className = '' }) => {
   return (
      <h1 className={`text-2xl font-bold px-8 py-4 mb-3 ${className}`}>
         {title}
      </h1>
   );
};

export default Heading;
