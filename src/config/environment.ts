// Mapper for environment variables
const environment = (process.env["NODE_ENV"] ?? "production") as
  | "production"
  | "development";

if (environment === "development") require("dotenv").config();

export const AWS = {
  region: process.env["AW_REGION"] ?? "",
  accountId: process.env["AW_ACCOUNT_ID"] ?? "",
  apiId: process.env["AW_API_ID"] ?? "",
  stage: process.env["AW_STAGE"] ?? "",
  httpVerb: process.env["AW_HTTP_VERB"] ?? "*",
  resource: process.env["AW_RESOURCE"] ?? "*",
  childResources: process.env["AW_CHILD_RESOURCES"] ?? "*",
};
