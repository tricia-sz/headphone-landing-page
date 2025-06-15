import { Container } from "@/components/container";
import { HeadphoneCard } from "@/components/HeadphoneCard";

export default function Home() {
  return (
    <>
       <main className="items-center justify-center flex mt-28" >
        <Container>
          <div className="flex mb-24">
            <HeadphoneCard
            title="Trx-70 Basics" 
            text="O melhor para os melhores. Ouça música por 72h, se conseguir. Bateria 400Am, estofado blab bla" 
            />
            <HeadphoneCard
            title="Trx-80 Standard" 
            text="O melhor para os melhores. Ouça música por 72h, se conseguir. Bateria 400Am, estofado blab bla" 
            />
            <HeadphoneCard
            title="Trx-90 Premium" 
            text="O melhor para os melhores. Ouça música por 72h, se conseguir. Bateria 400Am, estofado blab bla" 
            />
          </div>
        </Container>
      </main>
      
    </>
  )
}
