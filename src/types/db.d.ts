/**
 * This file was generated by kysely-codegen.
 * Please do not edit it manually.
 */

import type { ColumnType } from "kysely";

export type AccountTypeEnum = "email" | "github" | "google";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Int8 = ColumnType<string, bigint | number | string, bigint | number | string>;

export type Json = JsonValue;

export type JsonArray = JsonValue[];

export type JsonObject = {
  [x: string]: JsonValue | undefined;
};

export type JsonPrimitive = boolean | number | string | null;

export type JsonValue = JsonArray | JsonObject | JsonPrimitive;

export type LipyOrgInvitationStatus = "accepted" | "pending" | "rejected";

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type VerificationTokenTypeEnum = "email" | "sms";

export interface AuthAccounts {
  access_token: string | null;
  created_at: Generated<Timestamp | null>;
  expires_at: Int8 | null;
  id: string;
  id_token: string | null;
  provider: AccountTypeEnum;
  provider_account_id: string;
  refresh_token: string | null;
  scope: string | null;
  token_type: string | null;
  user_id: string;
}

export interface AuthSessions {
  expires_at: Timestamp;
  id: string;
  user_id: string;
}

export interface AuthUsers {
  created_at: Generated<Timestamp | null>;
  email: string;
  email_verified: boolean | null;
  first_name: string | null;
  id: string;
  image: string | null;
  last_name: string | null;
  middle_name: string | null;
  phone: string | null;
}

export interface AuthVerificationTokens {
  expires: Timestamp;
  token: string;
  type: VerificationTokenTypeEnum;
  user_id: string;
}

export interface LipyCoreActivities {
  content: Json | null;
  created_at: Generated<Timestamp | null>;
  deleted_at: Timestamp | null;
  id: string;
  org: string;
  ref_id: string;
  ref_type: string | null;
  updated_at: Generated<Timestamp | null>;
  user: string;
}

export interface LipyCoreComments {
  content: Json | null;
  created_at: Generated<Timestamp | null>;
  deleted_at: Timestamp | null;
  id: string;
  org: string;
  ref_id: string;
  ref_type: string | null;
  updated_at: Generated<Timestamp | null>;
  user: string;
}

export interface LipyCoreNotes {
  authors: string[] | null;
  category: string[] | null;
  content: string | null;
  created_at: Generated<Timestamp | null>;
  created_by: string;
  deleted_at: Timestamp | null;
  id: string;
  org: string;
  public: boolean | null;
  published: boolean | null;
  slug: string;
  tags: string[] | null;
  train_assistant: boolean | null;
  updated_at: Generated<Timestamp | null>;
}

export interface LipyOrgCustomers {
  created_at: Generated<Timestamp | null>;
  deleted_at: Timestamp | null;
  id: string;
  metadata: Json | null;
  updated_at: Generated<Timestamp | null>;
  user: string | null;
}

export interface LipyOrgInvitations {
  email: string;
  id: string;
  invited_at: Generated<Timestamp | null>;
  invited_by: string;
  org: string;
  status: LipyOrgInvitationStatus;
}

export interface LipyOrgList {
  api_key: string | null;
  bio: string | null;
  created_at: Generated<Timestamp | null>;
  deleted_at: Timestamp | null;
  domains: string | null;
  email: string | null;
  id: string;
  industry: string | null;
  name: string;
  owner: string;
  phone: string | null;
  picture: string | null;
  slug: string;
  website: string | null;
}

export interface LipyOrgMembers {
  id: string;
  joined_at: Generated<Timestamp | null>;
  org: string;
  roles: string[];
  scopes: string[] | null;
  team: string[] | null;
  user: string;
}

export interface DB {
  "auth.accounts": AuthAccounts;
  "auth.sessions": AuthSessions;
  "auth.users": AuthUsers;
  "auth.verification_tokens": AuthVerificationTokens;
  "lipy_core.activities": LipyCoreActivities;
  "lipy_core.comments": LipyCoreComments;
  "lipy_core.notes": LipyCoreNotes;
  "lipy_org.customers": LipyOrgCustomers;
  "lipy_org.invitations": LipyOrgInvitations;
  "lipy_org.list": LipyOrgList;
  "lipy_org.members": LipyOrgMembers;
}
