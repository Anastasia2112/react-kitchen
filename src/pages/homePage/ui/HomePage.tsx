import { HeroSection } from "@widgets/heroSection";
import { ServicesSection } from "@widgets/servicesSection";

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