import { TitledSection } from "@shared/ui/titledSection";
import { highlightSubstrings } from "@shared/lib/highlight";
import { getImgUrl } from "../lib/getImgUrl";
import { servicesListData } from "../model/servicesListData";
import "./servicesSection.scss";

export const ServicesSection = () => {
  return (
    <>
      <TitledSection
        heading={"Все еще не можете определиться с выбором кухни?"}
        className="services__section"
      >
        <ul className="services__cards-list">
          {servicesListData.map((item, i) => (
            <li
              key={i}
              className="services__card"
              style={{backgroundImage: `url(${getImgUrl(i)})`}}
            >
            <span className="services__card__text">
              {highlightSubstrings(item, 'services__card__highlight')}
            </span>
            </li>
          ))}
        </ul>
      </TitledSection>
    </>
  )
}