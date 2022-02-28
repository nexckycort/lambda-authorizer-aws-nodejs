import { DenyPolicy, PolicyError } from "helpers/authorizer-response";
import { Logger } from "helpers/logger";
import type { Event } from "interfaces/event";
import { ValidateRequestService } from "modules/index";

exports.handler = async (event: Event) => {
  try {
    const { headers, path, requestContext } = event;
    const options = {
      headers,
      path,
      method: requestContext?.httpMethod,
    };

    const requestIsAllowed = await ValidateRequestService.isAllowed(options);

    return requestIsAllowed;
  } catch (error) {
    if (error instanceof PolicyError) return error.response;
    Logger.error("handler", error);
    return DenyPolicy();
  }
};
