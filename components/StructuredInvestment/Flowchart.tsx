// // components/FlowChart.tsx
// import React, { useState } from 'react';

// const stagesTopRow = [
//   {
//     label: 'Onboarding',
//     description: 'Users register or log in to the Asset Monetization dashboard and undergo KYC verification.',
//   },
//   {
//     label: 'Offer of Engagement',
//     description: 'Epidiosis extends a formal offer to the Asset Company to engage in its Investment Platform.',
//   },
//   {
//     label: 'Due Diligence',
//     description: 'Comprehensive due diligence on the asset company and instrument.',
//   },
// ];

// const stagesBottomRow = [
//   {
//     label: 'Discounting and Fund Transfer',
//     description: 'The discounting process and funds are transferred to the account.',
//   },
//   {
//     label: 'Bank Instrument Monetization',
//     description: 'The bank instrument is monetized and funds are transferred to the Asset Company’s account.',
//   },
//   {
//     label: 'Agreement & Director Appointment',
//     description: 'Final agreements are signed, and the Asset Company appoints a director to oversee the investment.',
//   },
// ];

// const FlowChart: React.FC = () => {
//   return (
//     <div className="relative w-full h-96">
//       {/* SVG Connector Lines */}
//       <svg className="absolute left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
//         {/* Top row horizontal line */}
//         <path d="M 90 80 H 220" stroke="#D4AF37" strokeWidth="2" fill="none" />
//         <path d="M 220 80 H 350" stroke="#D4AF37" strokeWidth="2" fill="none" />
//         <path d="M 350 80 H 480" stroke="#D4AF37" strokeWidth="2" fill="none" />
//         {/* Bottom row horizontal line */}
//         <path d="M 480 220 H 350" stroke="#D4AF37" strokeWidth="2" fill="none" />
//         <path d="M 350 220 H 220" stroke="#D4AF37" strokeWidth="2" fill="none" />
//         <path d="M 220 220 H 90" stroke="#D4AF37" strokeWidth="2" fill="none" />
//         {/* Curved connecting lines between top and bottom rows */}
//         <path d="M 90 80 Q 90 150 90 220" stroke="#D4AF37" strokeWidth="2" fill="none" />
//         <path d="M 480 80 Q 480 150 480 220" stroke="#D4AF37" strokeWidth="2" fill="none" />
//       </svg>

//       {/* First Row (Top Row) */}
//       <div className="flex justify-between items-center mx-16 mt-8">
//         {stagesTopRow.map((stage, index) => (
//           <FlowChartStage key={index} label={stage.label} description={stage.description} />
//         ))}
//       </div>

//       {/* Second Row (Bottom Row) */}
//       <div className="flex justify-between items-center mx-16 mt-24">
//         {stagesBottomRow.map((stage, index) => (
//           <FlowChartStage key={index} label={stage.label} description={stage.description} />
//         ))}
//       </div>
//     </div>
//   );
// };

// interface StageProps {
//   label: string;
//   description: string;
// }

// const FlowChartStage: React.FC<StageProps> = ({ label, description }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="relative flex flex-col items-center"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Diamond shape with rounded corners */}
//       <div className="w-7 h-7 bg-yellow-500 transform rotate-45 rounded-xl flex items-center justify-center">
//         <span className="transform -rotate-45 text-white text-xs font-semibold"></span>
//       </div>

//       {/* Step Label below the diamond */}
//       <div className="mt-2 text-xs font-semibold text-center">
//         {label}
//       </div>

//       {/* Tooltip on hover */}
//       {isHovered && (
//         <div className="absolute -top-20 w-48 bg-gray-700 text-white text-xs rounded-md p-2 shadow-lg">
//           {description}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FlowChart;
// components/FlowChartWithImages.tsx
import React, { useState } from 'react';

const stagesTopRow = [
  {
    label: 'Onboarding',
    description: 'Users register or log in to the Asset Monetization dashboard and undergo KYC verification.',
    image: '/StructuredInvestment/UnionOpen.png',
  },
  {
    label: 'Offer of Engagement',
    description: 'Epidiosis extends a formal offer to the Asset Company to engage in its Investment Platform.',
    image: '/StructuredInvestment/Union.png',
  },
  {
    label: 'Due Diligence',
    description: 'Comprehensive due diligence on the asset company and instrument.',
    image: '/StructuredInvestment/Union.png',
  },
];

const stagesBottomRow = [
  {
    label: 'Discounting and Fund Transfer',
    description: 'The discounting process and funds are transferred to the account.',
    image: '/StructuredInvestment/UnionOpen.png',
  },
  {
    label: 'Bank Instrument Monetization',
    description: 'The bank instrument is monetized and funds are transferred to the Asset Company’s account.',
    image: '/StructuredInvestment/Union.png',
  },
  {
    label: 'Agreement & Director Appointment',
    description: 'Final agreements are signed, and the Asset Company appoints a director to oversee the investment.',
    image: '/StructuredInvestment/Union.png',
  },
];

const FlowChartWithImages: React.FC = () => {
  return (
    <div className="relative w-full h-60">
      {/* SVG Connector Lines */}
      <svg className="absolute left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Top row horizontal line */}
        <path d="M 240 12 H 1180" stroke="#D4AF37" strokeWidth="2" fill="none" />
        <path d="M 230 156 H 1180" stroke="#D4AF37" strokeWidth="2" fill="none" />
        {/* <path d="M 350 80 H 480" stroke="#D4AF37" strokeWidth="2" fill="none" /> */}
        {/* Bottom row horizontal line */}
        {/* <path d="M 480 220 H 350" stroke="#D4AF37" strokeWidth="2" fill="none" />
        <path d="M 350 220 H 220" stroke="#D4AF37" strokeWidth="2" fill="none" />
        <path d="M 220 220 H 90" stroke="#D4AF37" strokeWidth="2" fill="none" /> */}
        {/* Curved connecting lines between top and bottom rows */}
      {/* <path d="M 90 80 Q 90 150 90 220" stroke="#D4AF37" strokeWidth="2" fill="none" />  */}
        <path d="M 480 80 Q 480 150 480 220" stroke="#D4AF37" strokeWidth="2" fill="none" /> 
      </svg>

      {/* First Row (Top Row) */}
      <div className="flex justify-between items-center mx-48 mt-8">
        {stagesTopRow.map((stage, index) => (
          <FlowChartStage key={index} label={stage.label} description={stage.description} image={stage.image} />
        ))}
      </div>

      {/* Second Row (Bottom Row) */}
      <div className="flex justify-between items-center mx-32 mt-24">
        {stagesBottomRow.map((stage, index) => (
          <FlowChartStage key={index} label={stage.label} description={stage.description} image={stage.image} />
        ))}
      </div>
    </div>
  );
};

interface StageProps {
  label: string;
  description: string;
  image: string;
}

const FlowChartStage: React.FC<StageProps> = ({ label, description, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image instead of diamond shape */}
      <img src={image} alt={label} className="w-8 h-6 " />

      {/* Step Label below the image */}
      <div className="mt-2 text-xs font-semibold text-center">
        {label}
      </div>

      {/* Tooltip on hover */}
      {isHovered && (
        <div className="absolute -top-20 w-48 bg-gray-700 text-white text-xs rounded-md p-2 shadow-lg">
          {description}
        </div>
      )}
    </div>
  );
};

export default FlowChartWithImages;
