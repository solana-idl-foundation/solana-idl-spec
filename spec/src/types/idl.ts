import { IdlInstruction } from "./instruction";
import { IdlErrorCode } from "./error";
import { IdlMetadata } from './metadata'
import { IdlEvent } from "./events";
import { IdlTypeDef } from "./definedTypes";
import { IdlAccountDef } from "./accounts";
import { IdlConstant } from "./constants";
import { IdlState } from "./state";

export * from './instruction';
export * from "./error";
export * from './metadata'
export * from "./events";
export * from "./definedTypes";
export * from "./accounts";
export * from "./constants";
export * from "./state";

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
