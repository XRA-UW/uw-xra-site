import hitenderOswal from "@/assets/people/hitender-oswal.webp";
import takaharuTanaka from "@/assets/people/takaharu-tanaka.webp";
import evelynneJung from "@/assets/people/evelynne-jung.webp";
import hariNeelamegam from "@/assets/people/hari-neelamegam.webp";
import henryNguyen from "@/assets/people/henry-nguyen.webp";
import minhNguyen from "@/assets/people/minh-nguyen.webp";

export interface Person {
  name: string;
  position: string;
  /** Square headshot, 384px, cropped head-and-shoulders so the circular
   *  avatar does not clip it. Without one the card shows initials. */
  photo?: string;
}

export const officers: Person[] = [
  { name: "Hitender Oswal", position: "President", photo: hitenderOswal },
  { name: "Takaharu Tanaka", position: "Officer", photo: takaharuTanaka },
  { name: "Evelynne Jung", position: "Graphics and Marketing Lead", photo: evelynneJung },
  { name: "Hari Neelamegam", position: "Associate Officer", photo: hariNeelamegam },
  { name: "Henry Nguyen", position: "Associate Officer", photo: henryNguyen },
  { name: "Minh Nguyen", position: "Event Lead", photo: minhNguyen },
];

export const formerExecutiveBoard: Person[] = [
  { name: "Boe Zhou", position: "Former President" },
  { name: "Dawson Harris", position: "Former President" },
  { name: "Evan Zhao", position: "Former Officer" },
  { name: "Jun Wang", position: "Former Officer" },
  { name: "Shaan Chattrath", position: "Former Officer" },
  { name: "Aaron Roberts", position: "Former Officer" },
  { name: "Kevin Baron", position: "Former Officer" },
  { name: "Sparsh Dadhich", position: "Former Officer" },
];

export const advisors: Person[] = [
  { name: "Laura Estela Luna Castillo", position: "Advisor" },
  { name: "John Akers", position: "Advisor" },
];
