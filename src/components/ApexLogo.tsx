export function ApexLogo({ size = 44 }: { size?: number }) {
  const w = Math.round(size * 1.15);
  const h = size;
  return (
    <svg width={w} height={h} viewBox="0 0 54 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Back peak — darker fill gives depth */}
      <polygon points="3,46 18,5 26,46" fill="#6B4F0A" />
      {/* Front peak — gold outline */}
      <polygon
        points="21,46 34,8 46,46"
        fill="rgba(201,168,76,0.06)"
        stroke="#C9A84C"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
      {/* Crossbar */}
      <line x1="9" y1="30" x2="41" y2="30" stroke="#C9A84C" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
