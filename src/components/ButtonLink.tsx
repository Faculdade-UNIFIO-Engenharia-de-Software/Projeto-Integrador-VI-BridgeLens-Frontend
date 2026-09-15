import { ReactNode } from "react";

interface ButtonProps{
  children: ReactNode;
  icon?: ReactNode;

}

export default function ButtonLink({children, icon }: ButtonProps) {
  return (
    <button
      className="flex w-[191px] h-[40px] items-center justify-evenly cursor-pointer  rounded-lg  border px-6 py-2
      text-md font-geist-pixel  text-text-2 transition hover:bg-[#F8F9FF]">
      {icon}
     <span> {children}</span>
    </button>
  )
}
