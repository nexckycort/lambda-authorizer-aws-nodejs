export interface Event {
  type: string;
  methodArn: string;
  resource: string;
  path: string;
  httpMethod: string;
  headers: Headers;
  multiValueHeaders: any;
  queryStringParameters: any;
  multiValueQueryStringParameters: any;
  pathParameters: any;
  stageVariables: any;
  requestContext: RequestContext;
}

interface RequestContext {
  resourceId: string;
  resourcePath: string;
  httpMethod: string;
  extendedRequestId: string;
  requestTime: string;
  path: string;
  accountId: string;
  protocol: string;
  stage: string;
  domainPrefix: string;
  requestTimeEpoch: number;
  requestId: string;
  identity: Identity;
  domainName: string;
  apiId: string;
}

interface Identity {
  cognitoIdentityPoolId?: any;
  accountId?: any;
  cognitoIdentityId?: any;
  caller?: any;
  sourceIp: string;
  principalOrgId?: any;
  accessKey?: any;
  cognitoAuthenticationType?: any;
  cognitoAuthenticationProvider?: any;
  userArn?: any;
  userAgent: string;
  user?: any;
}

export interface Headers {
  [key: string]: string | undefined;
}
