import Image from "next/image";
import Link from "next/link";
import logoTrxHead from "../../../public/logotrxhead.svg"
import { RiLogoutCircleRLine } from "react-icons/ri";

export function Header() {
  return (
    <nav className='w-full flex justify-between items-center py-4 text-white bg-slate-950/40 '>
      <div className="w-full flex justify-between mx-auto md:w-5xl">
        <Link href='/' className='w-64 justify-self-start'>
          <Image
            src={logoTrxHead}
            alt='Logo of site Trx Head'
            quality={100}
            priority={true}
            width={300}
            height={200}
          />
      </Link>
      <div className='flex  gap-4 justify-center items-center tracking-wider text-slate-200'>
        <Link href='/product' className='flex'>
          Basic
        </Link><Link href='/serv' className='flex'>
          Standard
        </Link>
        <Link href='/about' className='flex'>
          Premium
        </Link>
        <button className='flex text-gray-400  ml-16 rounded-md gap-2 tracking-wider justify-center items-center'>
          Sair 
          <RiLogoutCircleRLine size={24}/>
        </button>
      </div>
      </div>
    </nav>
  );
}
