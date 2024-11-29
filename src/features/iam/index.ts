// type Comment = {
//     id: string
//     body: string
//     authorId: string
//     createdAt: Date
//   }

import { LipyOrgList, LipyOrgMembers } from "@/types/db"

//   type Todo = {
//     id: string
//     title: string
//     userId: string
//     completed: boolean
//     invitedUsers: string[]
//   }

type Role = "admin" | "moderator" | "user"
type Member = LipyOrgMembers

type PermissionCheck<Key extends keyof Permissions> =
  | boolean
  | ((member: Member, data: Permissions[Key]["dataType"]) => boolean)

type RolesWithPermissions = {
  [R in Role]: Partial<{
    [Key in keyof Permissions]: Partial<{
      [Action in Permissions[Key]["action"]]: PermissionCheck<Key>
    }>
  }>
}

type Permissions = {
  org: {
    dataType: LipyOrgList
    action: "view" | "create" | "update"
  }
  // activites: {
  //   dataType: LipyCoreActivities
  //   action: "view" | "create" | "update" | "delete"
  // }
  // activites: {
  //     // Can do something like Pick<Todo, "userId"> to get just the rows you use
  //     dataType: LipyCoreActivities
  //     action: "view" | "create" | "update" | "delete"
  //   }
}

const ROLES = {
  admin: {
    org: {
      view: true,
      create: true,
      update: true,
    },
  },
  moderator: {
    org: {
      view: (member, data) => member.id === data.owner,
      create: true,
      update: true,
    },
  },
  user: {
    org: {
      view: (member, data) => member.id === data.owner,
      create: false,
      update: false,
    },
    //   todos: {
    //     view: (user, todo) => !user.blockedBy.includes(todo.userId),
    //     create: true,
    //     update: (user, todo) =>
    //       todo.userId === user.id || todo.invitedUsers.includes(user.id),
    //     delete: (user, todo) =>
    //       (todo.userId === user.id || todo.invitedUsers.includes(user.id)) &&
    //       todo.completed,
    //   },
  },
} as const satisfies RolesWithPermissions

export function hasPermission<Resource extends keyof Permissions>(
  member: Member,
  resource: Resource,
  action: Permissions[Resource]["action"],
  data?: Permissions[Resource]["dataType"]
) {
  return (member.roles || []).some((role) => {
    const permission = (ROLES as RolesWithPermissions)[role][resource]?.[action]
    if (permission == null) return false

    if (typeof permission === "boolean") return permission
    return data != null && permission(member, data)
  })
}

//   // USAGE:
//   const user: User = { blockedBy: ["2"], id: "1", roles: ["user"] }
//   const todo: Todo = {
//     completed: false,
//     id: "3",
//     invitedUsers: [],
//     title: "Test Todo",
//     userId: "1",
//   }

//   // Can create a comment
//   hasPermission(user, "comments", "create")

//   // Can view the `todo` Todo
//   hasPermission(user, "todos", "view", todo)

//   // Can view all todos
//   hasPermission(user, "todos", "view")

hasPermission(null, "org", "create")
