import "server-only"

export enum ROLES {
  OWNER = "owner",
  ADMIN = "admin",
  EDITOR = "editor",
  AGENT = "agent",
}

export const roles = {
  [ROLES.OWNER]: {
    label: "Owner",
    description: "Access to everything",
    scopes: ["read_personal"],
  },
  [ROLES.ADMIN]: {
    label: "Admin",
    description: "Access to everything except payments & subscription",
    scopes: [],
  },
  [ROLES.EDITOR]: {
    label: "Editor",
    description: "Can add, edit and delete business data.",
    scopes: [],
  },
  [ROLES.AGENT]: {
    label: "Agent",
    description: "Helpdesk level access.",
    scopes: [],
  },
} as const

export const roleGroups = {
  owner: [ROLES.OWNER],
  admin: [ROLES.OWNER, ROLES.ADMIN],
  helpdesk: [ROLES.OWNER, ROLES.ADMIN, ROLES.AGENT],
  editor: [ROLES.OWNER, ROLES.ADMIN, ROLES.EDITOR],
}
