import { HeroSection } from "@pages/homePage/ui/sections";
import { ServicesSection } from "@pages/homePage/ui/sections";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />

      <section>
        {Array(30)
          .fill('')
          .map((item, i) => <p key={i}>pururu</p>)
        }
      </section>
    </>
  )
}