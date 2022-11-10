import { IdlTypeDef } from "./definedTypes";
import { IdlInstruction } from "./instruction";

// FIXME: add documentation on why we think state methods
// should be separate from normal instructions
export type IdlState = {
  struct: IdlTypeDef;
  methods: IdlStateMethod[];
};

export type IdlStateMethod = IdlInstruction;
