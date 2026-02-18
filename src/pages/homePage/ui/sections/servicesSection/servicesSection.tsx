import { TitledSection } from "@pages/homePage/ui/titledSection/titledSection";
import "./servicesSection.scss";

export const ServicesSection = ({ heading }) => {
  return (
    <>
      <TitledSection heading={heading} className="services__section">
        Services Section content
      </TitledSection>
    </>
  )
}