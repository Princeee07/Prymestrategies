interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = '',
  hover = false,
}: CardProps) {
  return (
    <div
      className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 ${
        hover
          ? 'hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
