import Image from "next/image";

interface GoogleBrandLogoProps {
  size?: number;
  className?: string;
}

export function GoogleBrand({ size = 24, className }: GoogleBrandLogoProps) {
  return (
    <Image
      src="/icons/icon-google.png"
      alt="IconGoogleBrand"
      width={size}
      height={size}
      className={className}
    />
  );
}
