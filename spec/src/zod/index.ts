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

import { z } from "zod";
import {
  Idl,
  IdlAccountDef,
  IdlConstant,
  IdlErrorCode,
  IdlEvent,
  IdlInstruction,
} from "../types/index";
import { RX_SEMVER, VALIDATE_DISCRIMINATOR } from "./constants";
import {
  IdlTypeDefSchema,
  StructTypeSchema,
  IdlTypeSchema,
  IdlInstructionAccountSchema,
  IdlInstructionArgSchema,
} from "./types";

export const AccountsSchema: z.ZodSchema<IdlAccountDef[]> = z.array(
  z.object({
    name: z.string({ description: "Name of the program account type" }),
    discriminator: z.array(z.number()).refine(...VALIDATE_DISCRIMINATOR),
    type: StructTypeSchema,
    docs: z.optional(z.array(z.string())),
  })
);

export const ConstantsSchema: z.ZodSchema<IdlConstant[]> = z.array(
  z.object({
    name: z.string({ description: "Name of the constant variable" }),
    type: IdlTypeSchema,
    value: z.string(),
  }),
  { description: "Constant values defined within the smart contract" }
);

export const ErrorsSchema: z.ZodSchema<IdlErrorCode[]> = z.array(
  z.object({
    code: z.number(),
    name: z.string(),
    msg: z.optional(z.string()),
  })
);

export const EventsSchema: z.ZodSchema<IdlEvent[]> = z.array(
  z.object({
    name: z.string(),
    discriminator: z.array(z.number()).refine(...VALIDATE_DISCRIMINATOR),
    fields: z.array(
      z.object({
        name: z.string(),
        type: IdlTypeSchema,
        index: z.boolean(),
      })
    ),
  })
);

export const InstructionsSchem: z.ZodSchema<IdlInstruction[]> = z.array(
  z.object({
    name: z.string(),
    discriminator: z.array(z.number()).refine(...VALIDATE_DISCRIMINATOR),
    docs: z.optional(z.array(z.string())),
    accounts: z.array(IdlInstructionAccountSchema),
    args: z.array(IdlInstructionArgSchema),
    defaultOptionalAccounts: z.optional(z.boolean()),
  })
);

export const MetadataSchema = z.object({
  address: z.optional(z.string()),
  origin: z.optional(z.string()),
  chainId: z.optional(z.string()),
});

export const NameSchema = z.string({
  description: "Name of the smart contract",
});

export const TypesSchema = z.optional(
  z.array(
    z.object({
      name: z.string(), // FIXME:
      type: IdlTypeDefSchema,
    })
  )
);

export const VersionSchema = z
  .string({
    description: "Semantic version of the smart contract",
  })
  .regex(RX_SEMVER, "Invalid semantic version format");

const IdlSchema: z.ZodSchema<Idl> = z.object({
  version: VersionSchema,
  name: NameSchema,
  instructions: InstructionsSchem,
  accounts: AccountsSchema.optional(),
  errors: ErrorsSchema.optional(),
  types: TypesSchema.optional(),
  events: EventsSchema.optional(),
  constants: ConstantsSchema.optional(),
  metadata: MetadataSchema.optional(),
});

export default IdlSchema;
