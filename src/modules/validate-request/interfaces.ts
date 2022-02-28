import type { Headers } from "interfaces/event";

export interface RequestIsAllowed {
  headers: Headers;
  path: string;
  method: string;
}
