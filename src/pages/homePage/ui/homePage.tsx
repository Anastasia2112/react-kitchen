import { HeroSection } from "./heroSection/heroSection";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <section>
        {Array(30)
          .fill('')
          .map((item, i) => <p key={i}>pururu</p>)
        }
      </section>
    </>
  )
}