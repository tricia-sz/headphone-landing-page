import Image from "next/image";
import Link from "next/link";
import logoTrxHead from "../../../public/logotrxhead.svg"
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";

export function Footer() {
  return (
    <nav className='w-full flex items-center py-2 text-white bg-slate-950/30 '>
      <div className="w-full flex justify-center mx-auto md:w-5xl items-center gap-2">
        <Link href='/' className=''>
          <Image
            src={logoTrxHead}
            alt='Logo of site Trx Head'
            quality={100}
            priority={true}
            width={200}
            height={200}
          />
       </Link>
         <Link href={`https://tricia-sz.netlify.app/`} target="blank" rel="external" className="">
          <span className="text-md text-sky-50  font-medium  w-full flex items-center justify-center tracking-wider hover:text-slate-900 cursor-pointer ">
            Developed by Parícia Souza{" "}
            <span className="text-sky-950 px-2">
                <FaHeart size={24} color="" />
            </span>{" "}
            2025
          </span>
        </Link>
        
       
      </div>
    </nav>
  );
}
