import "./heroSection.scss";
import MarkerIcon from "../assets/icons/marker-icon.svg?react";
import { highlightSubstrings } from "@shared/lib/highlight";
import { heroListData } from "@widgets/heroSection/model/heroListData";

export const HeroSection = () => {
  return (
    <section className="hero__section">
      <div className="hero__content">
        <h1 className="hero__heading">Кухни на заказ</h1>
        <h4 className="hero__subheading">Стильная кухня от производителя по цене на 20% ниже рынка</h4>
        <ul className="hero__list">
          {heroListData.map((item, i) => (
            <li key={i}>
              <MarkerIcon className="hero__list__marker" />
              <span>
                {highlightSubstrings(item, 'hero__list__highlight')}
              </span>
            </li>
          ))}
        </ul>
        <button className="hero__button">
          Бесплатная Консультация Дизайнера
        </button>
      </div>
    </section>
  )
}
