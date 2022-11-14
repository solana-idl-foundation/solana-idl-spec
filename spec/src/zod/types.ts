import { z } from "zod";
import type {
  IdlAccount,
  IdlField,
  IdlType,
  IdlTypeArray,
  IdlTypeCOption,
  IdlTypeDefTy,
  IdlTypeDefTyEnum,
  IdlTypeDefTyStruct,
  IdlTypeOption,
  IdlTypeVec,
} from "../types/index";

// -----------------
// Literal types
// -----------------
const publicKeyLiteral = z.literal("publicKey");
const stringLiterals = z.literal("string");
const numberLiterals = z.union([
  z.literal("u8"),
  z.literal("u16"),
  z.literal("u32"),
  z.literal("u64"),
  z.literal("u128"),
  z.literal("i8"),
  z.literal("i16"),
  z.literal("i32"),
  z.literal("i64"),
  z.literal("i128"),
  z.literal("bool"),
]);

const typeLiterals = z.union([
  publicKeyLiteral,
  stringLiterals,
  numberLiterals,
]);

// -----------------
// Idl Type
// -----------------
export const IdlTypeSchema: z.ZodSchema<IdlType> = z.lazy(() =>
  z.union([
    typeLiterals,
    IdlTypeDefinedSchema,
    IdlTypeOptionSchema,
    IdlTypeCOptionSchema,
    IdlTypeVecSchema,
    IdlTypeArraySchema,
  ])
);

const IdlTypeDefinedSchema = z.object({
  defined: z.string(),
});

const IdlTypeOptionSchema: z.ZodSchema<IdlTypeOption> = z.lazy(() =>
  z.object({
    option: IdlTypeSchema,
  })
);

const IdlTypeCOptionSchema: z.ZodSchema<IdlTypeCOption> = z.lazy(() =>
  z.object({
    coption: IdlTypeSchema,
  })
);

const IdlTypeVecSchema: z.ZodSchema<IdlTypeVec> = z.lazy(() =>
  z.object({
    vec: IdlTypeSchema,
  })
);

const IdlTypeArraySchema: z.ZodSchema<IdlTypeArray> = z.lazy(() =>
  z.object({
    array: z.tuple([IdlTypeSchema, z.number()]),
  })
);

const idlEnumVariantSchema = z.object({
  name: z.string(),
});

const idlTypeScalarEnumSchema = z.object({
  kind: z.literal("enum"),
  name: z.string().optional(),
  variants: z.array(idlEnumVariantSchema),
});

const IdlFieldSchema: z.ZodSchema<IdlField> = z.lazy(() =>
  z.object({
    name: z.string(),
    type: IdlTypeSchema,
    attrs: z.optional(z.array(z.string())),
  })
);

// Enum variants
const idlDataEnumVariantWithNamedFieldsSchema = z.object({
  name: z.string(),
  fields: z.array(IdlFieldSchema),
});

const idlDataEnumVariantWithUnnamedFieldsSchema = z.object({
  name: z.string(),
  fields: z.array(IdlTypeSchema),
});

const idlDataEnumVariantSchema = z.union([
  idlDataEnumVariantWithNamedFieldsSchema,
  idlDataEnumVariantWithUnnamedFieldsSchema,
  idlEnumVariantSchema,
]);

const idlTypeDataEnumSchema = z.object({
  kind: z.literal("enum"),
  name: z.optional(z.string()),
  variants: z.array(idlDataEnumVariantSchema),
});

// -----------------
// Instruction
// -----------------
export const IdlInstructionArgSchema = z.object({
  name: z.string(),
  type: IdlTypeSchema,
});

export const IdlInstructionAccountSchema: z.ZodSchema<IdlAccount> = z.object({
  name: z.string(),
  isMut: z.boolean(),
  isSigner: z.boolean(),
  docs: z.string().array().optional(),
  optional: z.boolean().optional(),
  // FIXME: pda
  // FIXME: relations
});

// -----------------
// Account
// -----------------

export const FieldSchema: z.ZodSchema<IdlField> = z.object({
  name: z.string(),
  docs: z.optional(z.array(z.string())),
  type: IdlTypeSchema,
});

export const FieldsSchema = z.array(FieldSchema);

export const EnumTypeSchema: z.ZodSchema<IdlTypeDefTyEnum> = z.union([
  idlTypeScalarEnumSchema,
  idlTypeDataEnumSchema,
]);

export const StructTypeSchema: z.ZodSchema<IdlTypeDefTyStruct> = z.object({
  kind: z.literal("struct"),
  fields: z.array(IdlFieldSchema),
});

export const IdlTypeDefSchema: z.ZodSchema<IdlTypeDefTy> = z.union([
  EnumTypeSchema,
  StructTypeSchema,
]);
