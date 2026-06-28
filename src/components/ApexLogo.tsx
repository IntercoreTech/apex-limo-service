export function ApexLogo({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="30,6 54,50 6,50" fill="none" stroke="#C9A84C" strokeWidth="3.5" strokeLinejoin="round" />
      <line x1="15" y1="36" x2="45" y2="36" stroke="#C9A84C" strokeWidth="3.5" />
    </svg>
  );
}
