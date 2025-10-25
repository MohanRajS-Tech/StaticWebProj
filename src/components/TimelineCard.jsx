
export default function TimelineCard({ alignment, title, subtitle, detail, color, gifUrl }) {
  const alignmentClasses = alignment === 'left' 
    ? 'text-left md:pr-8'
    : 'md:ml-auto md:pl-8 text-right';

  const dotAlignment = alignment === 'left' 
    ? 'md:left-0 md:-translate-x-1/2'
    : 'md:right-0 md:translate-x-1/2';

  const cardBorderColor = `border-${color}-500`;
  const dotBgColor = `bg-${color}-500`;

  return (
    <div className={`md:flex items-center w-full mb-8`}>
      <div className={`w-full md:w-1/2 ${alignmentClasses}`}>
        <div className={`p-6 rounded-lg shadow-lg bg-gray-800 border-t-4 ${cardBorderColor}`}>
          <h3 className="text-2xl font-bold text-gray-100">{title}</h3>
          <p className="text-md text-gray-400 mb-4">{subtitle}</p>
          <img src={gifUrl} alt={title} className="w-full h-auto my-4 rounded-lg shadow-md" />
          <p className="text-gray-300">{detail}</p>
        </div>
      </div>

      {/* Dot in the center */}
      <div className={`absolute w-6 h-6 rounded-full ${dotBgColor} ${dotAlignment} hidden md:block z-10 shadow-lg`}>
        <div className={`w-3 h-3 rounded-full bg-gray-200 m-auto mt-1.5`}></div>
      </div>
    </div>
  );
}
