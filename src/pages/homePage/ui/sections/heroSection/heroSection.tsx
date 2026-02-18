import "./heroSection.scss";
import MarkerIcon from "./assets/icons/marker-icon.svg?react";
import { highlightSubstrings } from "@shared/lib/highlight";

export const HeroSection = () => {
  const listData = [
    { text: 'Бесплатный дизайн проект', highlight: ['Бесплатный'] },
    { text: 'Гарантия лучшей Цены', highlight: ['лучшей Цены'] },
    { text: 'Производство от 25 до 45 дней', highlight: ['25 до 45 дней'] },
    { text: 'Гарантийное обслуживание 5 лет', highlight: ['обслуживание 5 лет'] },
  ];

  return (
    <section className="hero__section">
      <div className="hero__content">
        <h1 className="hero__heading">Кухни на заказ</h1>
        <h4 className="hero__subheading">Стильная кухня от производителя по цене на 20% ниже рынка</h4>
        <ul className="hero__list">
          {listData.map((item, i) => (
            <li key={i}>
              <MarkerIcon className="hero__list__marker" />
              <span>
                {highlightSubstrings(item.text, item.highlight, 'hero__list__highlight')}
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
