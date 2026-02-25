import clsx from 'clsx';
import "./titledSection.scss";

interface TitledSectionProps extends React.HTMLAttributes<HTMLElement> {
  heading: string;
  children: React.ReactNode;
}

export const TitledSection = ({ heading, children, className = '', ...rest }: TitledSectionProps) => {
  return (
    <section className={clsx('titled__section', className ?? '')} {...rest}>
      <h2 className="titled__heading">
        <span>{heading}</span>
        <div className="titled__heading__line"></div>
      </h2>
      {children}
    </section>
  )
}