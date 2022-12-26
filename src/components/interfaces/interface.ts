export interface ICardProps {
  img: string;
  title: string;
  avg: number;
  promoPrice?: number;
  price: number;
  installment?: number;
  quantity?: string;
}
export default interface IitemProps {
  item: ICardProps;
}
