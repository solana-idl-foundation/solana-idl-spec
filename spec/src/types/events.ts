import { IdlType } from "./type";

/**
 * Event information that should be indexed by the program
 */
export type IdlEvent = {
  /**
   * Name of the Event being described.
   *
   * Names may be overloaded.
   *
   * Events are identified by their discriminator
   */
  name: string;
  fields: IdlEventField[];
};

export type IdlEventField = {
  name: string;
  type: IdlType;
  /**
   * If index is true, then this information should be saved
   */
  index: boolean;
};
