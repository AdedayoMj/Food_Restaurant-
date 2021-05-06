import { of } from "rxjs";
import { delay } from "rxjs/operators";
import packagerice from "../Image/package.jpg";
import jollof from "../Image/jollof.jpg";
import fried from "../Image/fried.jpg";
import coleslaw from "../Image/coleslaw.jpg";
import turkey from "../Image/turkey.jpg";
import meat from "../Image/meat.jpg";
import zobo from "../Image/zobo.jpg";

const messagesList = [
  {
    id: 1,
    category: "Food",
    description: "The Kramitastybyte package consiste of Jollof rice, coleslaw, peppered turkey, peppered meat, puff puff and zobo ",
    image: packagerice,
    price: 15,
    title: "Kramitastybites Package",
    amount: 0,
  },
  {
    id: 2,
    category: "Food",
    description: "African Jollof",
    image: jollof,
    price: 8,
    title: "Jollof Rice",
    amount: 0,
  },
  {
    id: 3,
    category: "Food",
    description: "Fried Rice",
    image: fried,
    price: 8,
    title: "Fried Rice",
    amount: 0,
  },
  {
    id: 4,
    category: "Meat",
    description: "Peppered Turkey",
    image: turkey,
    price: 4,
    title: "Peppered Turkey",
    amount: 0,
  },
  {
    id: 5,
    category: "Meat",
    description: "Jollof Rice",
    image: meat,
    price: 5,
    title: "Peppered Beef",
    amount: 0,
  },
  {
    id: 6,
    category: "Salad",
    description: "Coleslaw",
    image: coleslaw,
    price: 2,
    title: "Coleslaw",
    amount: 0,
  },
  {
    id: 7,
    category: "Drinks",
    description: "Zobo",
    image: zobo,
    price: 3,
    title: "Zobo",
    amount: 0,
  },
];
export const rawData = [...messagesList];
export const getDataList = () => of(rawData).pipe(delay(200));
