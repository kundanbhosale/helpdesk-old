export const AppInstallations = {
  includes: async function (shopDomain: string) {
    //   const shopSessions = await findSessionsByShop(shopDomain);

    //   if (shopSessions.length > 0) {
    //     for (const session of shopSessions) {
    //       if (session.accessToken) return true;
    //     }
    //   }
    console.log("Includes")

    return false
  },

  delete: async function (shopDomain: string) {
    //   const shopSessions = await findSessionsByShop(shopDomain);
    //   if (shopSessions.length > 0) {
    //     await deleteSessions(shopSessions.map((session) => session.id));
    //   }

    console.log("Delete")
  },
}
