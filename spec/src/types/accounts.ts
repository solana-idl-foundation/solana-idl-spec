
import { IdlTypeDefTyStruct } from "./definedTypes";

export type IdlAccountDef = {
    name: string;
    docs?: string[];
    type: IdlTypeDefTyStruct;
};