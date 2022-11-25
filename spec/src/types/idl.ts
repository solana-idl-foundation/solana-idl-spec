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
