import { KEYSOL_NAME, KEYSOL_URL } from "@/lib/site";

const linkClassName =
  "font-medium text-sky-300 underline decoration-sky-400/40 underline-offset-4 transition hover:text-sky-200";

interface KeySolLinkProps {
  className?: string;
}

export function KeySolLink({ className = linkClassName }: KeySolLinkProps) {
  return (
    <a
      href={KEYSOL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {KEYSOL_NAME}
    </a>
  );
}
