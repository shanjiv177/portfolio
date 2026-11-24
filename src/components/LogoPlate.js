import Image from "next/image";

// A fixed-size white plate that fits square marks and long wordmarks alike.
export default function LogoPlate({ src }) {
  return (
    <div className="relative h-14 w-36 shrink-0 border-2 border-ink bg-panel">
      <Image src={src} alt="" fill sizes="144px" className="object-contain p-2.5" />
    </div>
  );
}
