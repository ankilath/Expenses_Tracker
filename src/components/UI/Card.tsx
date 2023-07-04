import './Card.css'

type CardProps = {
  className: string;
  children: React.ReactNode | string;
};

export const Card = (props: CardProps) => {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
};
