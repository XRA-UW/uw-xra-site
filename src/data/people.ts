export interface Person {
  name: string;
  position: string;
}

export const officers: Person[] = [
  { name: "Hitender Oswal", position: "President" },
  { name: "Takaharu Tanaka", position: "Officer" },
  { name: "Evelynne Jung", position: "Graphics and Marketing Lead" },
  { name: "Hari Neelamegam", position: "Associate Officer" },
  { name: "Henry Nguyen", position: "Associate Officer" },
  { name: "Minh Nguyen Nguyen", position: "Event Lead" },
];

export const formerExecutiveBoard: Person[] = [
  { name: "Boe Zhou", position: "Former President" },
  { name: "Dawson Harris", position: "Former Officer" },
  { name: "Evan Zhao", position: "Former Officer" },
  { name: "Jun Wang", position: "Former Officer" },
  { name: "Shaan Chattrath", position: "Former Officer" },
  { name: "Aaron Roberts", position: "Former Officer" },
  { name: "Kevin Baron", position: "Former Officer" },
];

export const advisors: Person[] = [
  { name: "Laura Estela Luna Castillo", position: "Advisor" },
  { name: "John Akers", position: "Advisor" },
];
