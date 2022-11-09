import { z } from "zod";
import type {
  IdlAccountDef,
  IdlConstant,
  IdlErrorCode,
  IdlEvent,
  IdlInstruction,
  Idl,
} from "./idl";
import {
  IdlTypeDefSchema,
  StructTypeSchema,
  IdlTypeSchema,
  IdlInstructionAccountSchema,
  IdlInstructionArgSchema,
} from "./types";

import { Idl, IdlAccountDef, IdlConstant, IdlErrorCode, IdlEvent, IdlInstruction } from "./types/index";

export const Accounts: z.ZodSchema<IdlAccountDef[]> = z.array(
  z.object({
    name: z.string({ description: "Name of the program account type" }),
    type: StructTypeSchema,
    docs: z.optional(z.array(z.string())),
  })
);

export const Constants: z.ZodSchema<IdlConstant[]> =
  z.array(
    z.object({
      name: z.string({ description: "Name of the constant variable" }),
      type: IdlTypeSchema,
      value: z.string(),
    }),
    { description: "Constant values defined within the smart contract" }
  )

export const Errors: z.ZodSchema<IdlErrorCode[]> =
  z.array(
    z.object({
      code: z.number(),
      name: z.string(),
      msg: z.optional(z.string()),
    })
  )

export const Events: z.ZodSchema<IdlEvent[]> =
  z.array(
    z.object({
      name: z.string(),
      fields: z.array(z.object({
        name: z.string(),
        type: IdlTypeSchema,
        index: z.boolean(),
      })
      ),
    })
  );

export const Instructions: z.ZodSchema<IdlInstruction[]> = z.array(
  z.object({
    name: z.string(),
    docs: z.optional(z.array(z.string())),
    accounts: z.array(IdlInstructionAccountSchema),
    args: z.array(IdlInstructionArgSchema),
    defaultOptionalAccounts: z.optional(z.boolean()),
  })
);

export const Metadata =
  z.object({
    address: z.optional(z.string()),
    origin: z.optional(z.string()),
    chainId: z.optional(z.string())
  });

export const Name = z.string({ description: "Name of the smart contract" });

export const Types = z.optional(
  z.array(
    z.object({
      name: z.string(), // FIXME:
      type: IdlTypeDefSchema,
    })
  )
);

export const Version = z
  .string({
    description: "Semantic version of the smart contract",
  })
  .regex(
    /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/,
    "Invalid semantic version format"
  );

const IdlSchema: z.ZodSchema<Idl> = z.object({
  version: Version,
  name: Name,
  instructions: Instructions,
  accounts: Accounts.optional(),
  errors: Errors.optional(),
  types: Types.optional(),
  events: Events.optional(),
  constants: Constants.optional(),
  metadata: Metadata.optional(),
});

export default IdlSchema;
