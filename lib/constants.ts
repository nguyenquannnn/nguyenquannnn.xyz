import { Error } from "mongoose";

export enum Language {
  ENGLISH = "en",
  VIETNAMESE = "vi",
  FRENCH = "fr",
}

export const dateDisplayOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};