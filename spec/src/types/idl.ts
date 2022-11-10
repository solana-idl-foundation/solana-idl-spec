import { IdlInstruction } from "./instruction";
import { IdlErrorCode } from "./error";
import { IdlMetadata } from "./metadata";
import { IdlEvent } from "./events";
import { IdlTypeDef } from "./definedTypes";
import { IdlAccountDef } from "./accounts";
import { IdlConstant } from "./constants";
import { IdlState } from "./state";

/**
 * Describes how to construct instructions, interpret state
 * and index logged events for a program executing on the
 * Solana Virtual Machine (Sealevel runtime).
 *
 * Documentation for named types is provided in their files
 */
export type Idl = {
  /**
   * Version of the contract
   */
  version: string;
  /**
   * Name of the program described by this IDL
   */
  name: string;
  /**
   * Developer docs for interacting with this program
   */
  docs?: string[];
  instructions: IdlInstruction[];
  state?: IdlState;
  accounts?: IdlAccountDef[];
  types?: IdlTypeDef[];
  events?: IdlEvent[];
  errors?: IdlErrorCode[];
  constants?: IdlConstant[];
  metadata?: IdlMetadata;
};
