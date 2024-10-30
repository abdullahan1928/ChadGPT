import { StaticImageData } from "next/image";
import {
  bateman,
  bateman2,
  chad,
  driver,
  elliot,
  louis,
  tate,
  thomas,
  tyler,
} from "../assets/images";

interface ISliderData {
  id: number;
  image: StaticImageData;
  name: string;
  description: string;
}

export const SliderData: ISliderData[] = [
  {
    id: 1,
    image: bateman,
    name: "Patrick Bateman",
    description: "I have to return some videotapes.",
  },
  {
    id: 2,
    image: bateman2,
    name: "Patrick Bateman",
    description: "Nice. Very nice. Let's see Paul Allen's ChatGPT.",
  },
  {
    id: 3,
    image: chad,
    name: "Giga Chad",
    description: "When you look at this body, you'll understand evolution.",
  },
  {
    id: 4,
    image: driver,
    name: "Driver",
    description:
      "If I drive for you, you give me a time and a place. I give you a five-minute window.",
  },
  {
    id: 5,
    image: elliot,
    name: "Mr. Robot",
    description: "We are in control. Don’t let anyone ever tell you otherwise.",
  },
  {
    id: 6,
    image: louis,
    name: "Louis Bloom",
    description:
      "If you want to win the lottery, you have to make the money to buy a ticket.",
  },
  {
    id: 7,
    image: tate,
    name: "Andrew Tate",
    description: "I don't believe in taking time off, I work every day.",
  },
  {
    id: 8,
    image: thomas,
    name: "Thomas Shelby",
    description:
      "I can charm dogs. Gypsy witchcraft. And those I can't charm, I can kill with my own hands.",
  },
  {
    id: 9,
    image: tyler,
    name: "Tyler Durden",
    description:
      "It's only after we've lost everything that we're free to do anything.",
  },
];
