/*
 * Copyright 2022 Solana IDL Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { IdlField } from "./field";
import { IdlType } from "./type";

/**
 * Instructions represent separate execution paths by a program
 *
 * An instruction is identified by its discriminator.
 *
 * One program may describe multiple instructions with the same name
 */
export type IdlInstruction = {
  /**
   * Name of the instruction
   *
   * Names can be overloaded by having different instruction args
   */
  name: string;
  /**
   * Sighash discriminator of the isntruction
   */
  discriminator: number[];
  /**
   * Developer documentation for the instruction
   */
  docs?: string[];
  /**
   * Accounts required by the instruction execution
   */
  accounts: IdlAccountItem[];
  /**
   * Instruction arguments required for the instruction execution.
   *
   * Remaining bytes beyond what is specified in the InstructionArgs
   * may be used for other processing.
   */
  args: IdlField[];
  returns?: IdlType;
};

/**
 * This describes an Instruction Account, not a program-defined
 * account for parsing on-chain state.
 */
export type IdlAccount = {
  name: string;
  isMut: boolean;
  isSigner: boolean;
  docs?: string[];
  // FIXME: add documentation on what these do
  relations?: string[];
  pda?: IdlPda;
};

// A nested/recursive version of IdlAccount.
export type IdlAccounts = {
  name: string;
  docs?: string[];
  accounts: IdlAccountItem[];
};

export type IdlAccountItem = IdlAccount | IdlAccounts;

// FIXME: add documentation on what these do
export type IdlPda = {
  seeds: IdlSeed[];
  programId?: IdlSeed;
};
export type IdlSeed = any; // TODO
