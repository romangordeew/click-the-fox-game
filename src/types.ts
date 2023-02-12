export interface iScore {
  name: string;
  date: string;
  score: number;
}

export type DogsResult = {
  status: string;
  message: string[];
};

export type Animal = {
  animalType: "dog" | "fox";
  url: string;
};
