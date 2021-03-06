import { writable } from "svelte/store";
import categories_data from "../data/categories.js";

export const filter = writable("");
export const categories = writable(categories_data);
export const original_data = writable(categories_data);
