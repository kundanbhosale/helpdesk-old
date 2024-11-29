import "@shopify/shopify-api/adapters/web-api"

import {
  DeliveryMethod,
  LATEST_API_VERSION,
  LogSeverity,
  Session,
  shopifyApi,
} from "@shopify/shopify-api"

import { AppInstallations } from "./appInstallation"

let webhooksInitialized = false

export function addHandlers() {
  if (!webhooksInitialized) {
    webhooksInitialized = true

    shopify.webhooks.addHandlers({
      CUSTOMERS_DATA_REQUEST: {
        deliveryMethod: DeliveryMethod.Http,
        callbackUrl: "/api/webhooks",
        callback: async (_topic, shop, _body) => {
          console.log("CUSTOMERS_DATA_REQUEST" + shop)
        },
      },
      CUSTOMERS_REDACT: {
        deliveryMethod: DeliveryMethod.Http,
        callbackUrl: "/api/webhooks",
        callback: async (_topic, shop, _body) => {
          console.log("CUSTOMERS_REDACT" + shop)
        },
      },
      SHOP_REDACT: {
        deliveryMethod: DeliveryMethod.Http,
        callbackUrl: "/api/webhooks",
        callback: async (_topic, shop, _body) => {
          console.log("SHOP_REDACT" + shop)
        },
      },
    })
    shopify.webhooks.addHandlers({
      APP_UNINSTALLED: {
        deliveryMethod: DeliveryMethod.Http,
        callbackUrl: "/api/webhooks",
        callback: async (_topic, shop, _body) => {
          console.log("Uninstalled app from shop: " + shop)
          await AppInstallations.delete(shop)
        },
      },
    })
    console.log("Added handlers")
  } else {
    console.log("Handlers already added")
  }
}

export async function registerWebhooks(session: Session) {
  addHandlers()
  const responses = await shopify.webhooks.register({ session })
  console.log("Webhooks added", responses)
}

export const shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_API_KEY || "",
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  scopes: process.env.SCOPES?.split(",") || ["write_products"],
  hostName: process.env.HOST?.replace(/https?:\/\//, "") || "",
  hostScheme: "https",
  isEmbeddedApp: true,
  apiVersion: LATEST_API_VERSION,
  logger: {
    level:
      process.env.NODE_ENV === "development"
        ? LogSeverity.Debug
        : LogSeverity.Error,
  },
})
