import type { Wearable } from "../types/wearable";

type Action =
  | { type: "add"; payload: Wearable }
  | { type: "update"; payload: Wearable }
  | { type: "delete"; payload: { id: string } };
