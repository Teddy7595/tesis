import { Cascade } from "@mikro-orm/core";

export const CascadeBundle = [Cascade.PERSIST, Cascade.MERGE, Cascade.REMOVE]
export const CascadePersistMerge = [Cascade.PERSIST, Cascade.MERGE]
export const CascadeAll = [Cascade.ALL]