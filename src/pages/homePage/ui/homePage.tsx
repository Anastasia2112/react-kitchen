import { HeroSection } from "@pages/homePage/ui/sections";
import { ServicesSection } from "@pages/homePage/ui/sections";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection heading={"Все еще не можете определиться с выбором кухни?"} />

      <section>
        {Array(30)
          .fill('')
          .map((item, i) => <p key={i}>pururu</p>)
        }
      </section>
    </>
  )
}