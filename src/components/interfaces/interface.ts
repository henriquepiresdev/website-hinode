export interface ICardProps {
  img: string;
  title: string;
  avg: number;
  promoPrice?: number;
  price: number;
}
export default interface IitemProps {
  item: ICardProps;
}
