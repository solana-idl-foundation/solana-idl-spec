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
