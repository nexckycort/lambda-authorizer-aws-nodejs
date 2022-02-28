import { AWS } from "config/environment";

interface Policy {
  principalId: string;
  policyDocument: PolicyDocument;
}

interface PolicyDocument {
  Version: string;
  Statement: Statement[];
}

interface Statement {
  Action: string;
  Resource: string[];
  Effect: "Allow" | "Deny";
}

const policy = (auth: "Allow" | "Deny"): Policy => ({
  principalId: "*",
  policyDocument: {
    Version: "2012-10-17",
    Statement: [
      {
        Action: "execute-api:Invoke",
        Resource: [
          `arn:aws:execute-api:${AWS.region}:${AWS.accountId}:${AWS.apiId}/${AWS.stage}/${AWS.httpVerb}/${AWS.resource}/${AWS.childResources}`,
        ],
        Effect: auth,
      },
    ],
  },
});

export const AllowPolicy = (): Policy => policy("Allow");

export const DenyPolicy = (): Policy => policy("Deny");

export class PolicyError extends Error {
  readonly response: Policy;
  constructor() {
    super();
    this.response = DenyPolicy();
  }
}
