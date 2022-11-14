import { IdlField, IdlEnumVariant } from "./field";

/**
 * Program-defined types necessary for constructing program instruction arguments
 * or program state
 */
export type IdlTypeDef = {
  name: string;
  docs?: string[];
  type: IdlTypeDefTy;
};

export type IdlTypeDefTyStruct = {
  kind: "struct";
  fields: IdlTypeDefStruct;
};

export type IdlTypeDefTyEnum = {
  kind: "enum";
  variants: IdlEnumVariant[];
};

export type IdlTypeDefTy = IdlTypeDefTyEnum | IdlTypeDefTyStruct;

export type IdlTypeDefStruct = Array<IdlField>;
