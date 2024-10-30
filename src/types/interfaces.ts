export interface CardProps {
  key: number;
  name: string;
  cuantity: number;
  // handeler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface DataContextInterface {
  data: CardProps[];
  loading: boolean;
  fetchData: () => void;
}
