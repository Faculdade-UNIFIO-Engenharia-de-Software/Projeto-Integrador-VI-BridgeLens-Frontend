import Image from "next/image";

interface GithubbrandLogoProps {
  size?: number;
  className?: string;
}

export function GitHubBrand({ size = 24, className }: GithubbrandLogoProps) {
  return (
    <Image
      src="/icons/icon-github.png"
      alt="IconGoogleBrand"
      width={size}
      height={size}
      className={className}
    />
  );
}
