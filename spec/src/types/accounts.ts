import { IdlTypeDefTyStruct } from "./definedTypes";

/**
 * Definitions for account state stored on solana
 */
export type IdlAccountDef = {
  name: string;
  discriminator: number[];
  docs?: string[];
  type: IdlTypeDefTyStruct; // FIXME: add enum structs
  // FIXME: add account discriminator
};
