import { Container } from "@/components/container"
import Image from "next/image"
import head1 from "../../../public/headphone1.jpeg"




interface HeadphoneItemProps {
  title: string,
  text: string,
}
export function HeadphoneCard({title, text}: HeadphoneItemProps) {
  return (
    <Container>
      <div className='w-full flex  border border-slate-500 rounded-lg'>
        <div className='w-96 bg-slate-700/30 text-white rounded-xl px-8 py-8'>
          <h1 className='text-3xl text-center  py-6 text-blue-200 font-medium'>
            {title}
          </h1>
          <div className="w-full rounded-xl">
            <Image src={head1} alt='' width={500} height={500} quality={100} priority={true} style={{objectFit: "cover", border: "solid  rgba(14, 41, 62, 0.503) 0.75rem", boxShadow: "0 1rem 2rem  rgb(40, 98, 122)",borderRadius: "2%", }}/>
          </div>
          <p className='text-center leading-relaxed text-blue-200 my-6'>
            {text}
          </p>
          <div className='flex justify-between '>
            <button className='bg-blue-500/80 px-12 py-2 rounded-md text-white font-medium'>Iniciar</button>
            <button className='bg-slate-900/40 px-10 py-2 rounded-md text-white font-medium'>Comprar</button>
          </div>
        </div>
      </div>
    </Container>
  )
}