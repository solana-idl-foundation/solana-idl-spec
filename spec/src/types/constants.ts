import { IdlType } from "./type";

/**
 * Constants allow IDLs to reference constant values
 * by a name value
 */
export type IdlConstant = {
  name: string;
  type: IdlType;
  value: string;
};
