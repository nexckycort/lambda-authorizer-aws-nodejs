import type { RequestIsAllowed } from "./interfaces";
import { AllowPolicy, DenyPolicy } from "helpers/authorizer-response";

export const ValidateRequestService = {
  async isAllowed(requestIsAllowed: RequestIsAllowed) {
    const { headers } = requestIsAllowed;
    if (headers?.["test"] === "test") return AllowPolicy();
    return DenyPolicy();
  },
};
