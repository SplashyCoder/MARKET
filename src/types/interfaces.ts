export interface CardProps {
  id?: number;
  name: string;
  cuantity: number;
  price: number;
  ready: boolean;
  handeler: () => void;
}
