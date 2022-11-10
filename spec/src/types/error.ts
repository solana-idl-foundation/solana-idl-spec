/**
 * Errors produced by the program.
 */
export type IdlErrorCode = {
  /**
   * Errors are identified by their code number.
   *
   * Errors may not be described twice in the IDL.
   */
  code: number;
  /**
   * Name of the Error
   *
   * Names may be overloaded.
   */
  name: string;
  /**
   * Message to be shown
   */
  msg?: string;
};
