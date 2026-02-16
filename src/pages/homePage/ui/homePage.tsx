import { HeroSection } from "./heroSection/heroSection";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <section>
        {Array(30)
          .fill('')
          .map(item => <p>pururu</p>)
        }
      </section>
    </>
  )
}