export function KeyLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Key Head (Cityscape/House) */}
      <path
        d="M30 140V100H50V70H80V40H110V80H130V140"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="55" y="75" width="20" height="65" fill="white" fillOpacity="0.3" />
      <rect x="85" y="45" width="20" height="95" fill="white" fillOpacity="0.5" />
      <rect x="110" y="85" width="15" height="55" fill="white" fillOpacity="0.2" />
      
      {/* Key Body */}
      <path
        d="M30 140C30 160 45 180 80 180C115 180 130 160 130 140"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M80 180V380"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Key Teeth */}
      <path
        d="M80 320H110M80 350H110M80 380H110"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
