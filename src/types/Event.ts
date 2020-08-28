import { v4 as uuidv4 } from "uuid";

export interface IEvent {
  id: string;
  name: string;
  description: string;
  date: Date;
  place: string;
  imageUrl: string;
}

export const initialEvents: IEvent[] = [
  {
    id: uuidv4(),
    name: "React Day Berlin 2021",
    description: "Reactathon is a developer conference featuring 2 days of technical talks, networking, workshops & activities on all things React. Come hang out with and learn from some of the brightest minds and best speakers in the JS/React community.",
    date: new Date(2022, 0, 20),
    place: "Berlin, Germany",
    imageUrl: "https://picsum.photos/seed/123/400/200",
  },
  {
    id: uuidv4(),
    name: "React Conf 2022",
    description: "Reactathon is a developer conference featuring 2 days of technical talks, networking, workshops & activities on all things React. Come hang out with and learn from some of the brightest minds and best speakers in the JS/React community.",
    date: new Date(2022, 4, 12),
    place: "Medellin, Colombia",
    imageUrl: "https://picsum.photos/seed/145/400/200",
  },
  {
    id: uuidv4(),
    name: "React Day Bangalore 2021",
    description: "Reactathon is a developer conference featuring 2 days of technical talks, networking, workshops & activities on all things React. Come hang out with and learn from some of the brightest minds and best speakers in the JS/React community.",
    date: new Date(2021, 0, 20),
    place: "Bangalore, India",
    imageUrl: "https://picsum.photos/seed/32/400/200",
  },
  {
    id: uuidv4(),
    name: "Reactathon 2020",
    description: "Reactathon is a developer conference featuring 2 days of technical talks, networking, workshops & activities on all things React. Come hang out with and learn from some of the brightest minds and best speakers in the JS/React community.",
    date: new Date(2020, 2, 30),
    place: "San Francisco, CA",
    imageUrl: "https://picsum.photos/seed/43/400/200",
  },
  {
    id: uuidv4(),
    name: "React Alicante",
    description: "Reactathon is a developer conference featuring 2 days of technical talks, networking, workshops & activities on all things React. Come hang out with and learn from some of the brightest minds and best speakers in the JS/React community.",
    date: new Date(2019, 4, 3),
    place: "Alicante, Spain",
    imageUrl: "https://picsum.photos/seed/54/400/200",
  },
  {
    id: uuidv4(),
    name: "ReactEurope 2020",
    description: "Reactathon is a developer conference featuring 2 days of technical talks, networking, workshops & activities on all things React. Come hang out with and learn from some of the brightest minds and best speakers in the JS/React community.",
    date: new Date(2020, 4, 3),
    place: "Paris, France",
    imageUrl: "https://picsum.photos/seed/34/400/200",
  },
  {
    id: uuidv4(),
    name: "React Finland 2018",
    description: "Reactathon is a developer conference featuring 2 days of technical talks, networking, workshops & activities on all things React. Come hang out with and learn from some of the brightest minds and best speakers in the JS/React community.",
    date: new Date(2018, 4, 24),
    place: "Helsinki, FI",
    imageUrl: "https://picsum.photos/seed/62/400/200",
  },
];
