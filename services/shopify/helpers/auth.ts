import { shopify } from "./init"

function beginShopifyAuth(
  shop: string,
  isOnline: boolean,
  rawRequest: Request,
  rawResponse: Response
) {
  return shopify.auth.begin({
    shop,
    callbackPath: "/api/auth/callback",
    isOnline,
    rawRequest,
    rawResponse,
  })
}
