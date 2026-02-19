export type Action =
  | { type: "add/bread"; payload: string }
  | { type: "add/avocado"; payload: string }
  | { type: "add/meat"; payload: string }
  | { type: "add/salad"; payload: string }
  | { type: "eatsandwich" };
