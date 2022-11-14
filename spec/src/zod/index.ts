import { z } from "zod";
import {
  Idl,
  IdlAccountDef,
  IdlConstant,
  IdlErrorCode,
  IdlEvent,
  IdlInstruction,
} from "../types/index";
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
  .regex(
    /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/,
    "Invalid semantic version format"
  );

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
