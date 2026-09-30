type ArrowProps = { diagonal?: boolean; className?: string };

export function Arrow({ diagonal = false, className = "" }: ArrowProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className={`sp-arrow ${className}`}>
      {diagonal ? <path d="M4 12 12 4M5 4h7v7" /> : <path d="M2.5 8h10m-4-4 4 4-4 4" />}
    </svg>
  );
}