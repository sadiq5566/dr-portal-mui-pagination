interface ProviderConfigInterface {
  domain: string;
  clientId: string;
  audience: string;
  redirectUri: string;
  privatecookieStorage?: string;
}

export const providerConfig: ProviderConfigInterface = {
  domain: `${process.env.REACT_APP_Auth_DOMAIN}`,
  clientId: `${process.env.REACT_APP_CLIENT_ID}`,
  audience: `${process.env.REACT_APP_AUDIENCE}`,
  redirectUri: window.location.origin,
  privatecookieStorage: 'ClientStorage',
};
