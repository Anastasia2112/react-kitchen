import { TitledSection } from "@pages/homePage/ui/titledSection/titledSection";
import { highlightSubstrings } from "@shared/lib/highlight";
import "./servicesSection.scss";

export const ServicesSection = () => {
  const listData = [
    { text: 'Получите консультацию и эскиз мебели', highlight: ['эскиз мебели'], imgUrl: './assets/images/card-1' },
    { text: 'Подберем материалы сочетая цену и качество', highlight: ['сочетая цену и качество'], imgUrl: './assets/images/card-1' },
    { text: 'Подберем фурнитуру для удобства и комфорта', highlight: ['удобства и комфорта'], imgUrl: './assets/images/card-1' },
    { text: 'Разработаем бесплатно 3D проект', highlight: ['бесплатно 3D'], imgUrl: './assets/images/card-1' },
    { text: 'Поможем сэкономить 20% от стоимости', highlight: ['сэкономить 20%'], imgUrl: './assets/images/card-1' },
  ];

  const getImgUrl = (index) => {
    return new URL(`./assets/images/card-${index+1}.png`, import.meta.url).href;
  };

  return (
    <>
      <TitledSection
        heading={"Все еще не можете определиться с выбором кухни?"}
        className="services__section"
      >
        <ul className="services__cards-list">
          {listData.map((item, i) => (
            <li
              key={i}
              className="services__card"
              style={{backgroundImage: `url(${getImgUrl(i)})`}}
            >
            <span className="services__card__text">
              {highlightSubstrings(item.text, item.highlight, 'services__card__highlight')}
            </span>
            </li>
          ))}
        </ul>
      </TitledSection>
    </>
  )
}