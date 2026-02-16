import "./heroSection.scss";
import MarkerIcon from './assets/marker-icon.svg?react';

export const HeroSection = () => {
  const highlight = (text) => <span className="hero__list__highlight">{text}</span>;
  const listItems = [
    <span>{highlight('Бесплатный')} дизайн проект</span>,
    <span>Гарантия {highlight('лучшей Цены')}</span>,
    <span>Производство от {highlight('25 до 45 дней')}</span>,
    <span>Гарантийное {highlight('обслуживание 5 лет')}</span>,
  ]

  return (
    <section className="hero__section">
      <div className="hero__content">
        <h1 className="hero__heading">Кухни на заказ</h1>
        <h4 className="hero__subheading">Стильная кухня от производителя по цене на 20% ниже рынка</h4>
        <ul className="hero__list">
          {listItems.map(item =>
            <li><MarkerIcon />{item}</li>
          )}
        </ul>
        <button className="hero__button">
          Бесплатная Консультация Дизайнера
        </button>
      </div>

    </section>
  )
}
