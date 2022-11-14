// Generic helper types
import { IdlType } from "./type";

export type IdlField = {
  name: string;
  docs?: string[];
  type: IdlType;
};

export type IdlEnumVariant = {
  name: string;
  fields?: IdlEnumFields;
};

export type IdlEnumFields = IdlEnumFieldsNamed | IdlEnumFieldsTuple;

export type IdlEnumFieldsNamed = IdlField[];

export type IdlEnumFieldsTuple = IdlType[];
