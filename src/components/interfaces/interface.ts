interface ICardProps {
  img: string;
  title: string;
  avg: number;
  promoPrice?: number;
  price: number;
}
export interface IitemProps {
  item: ICardProps;
}
