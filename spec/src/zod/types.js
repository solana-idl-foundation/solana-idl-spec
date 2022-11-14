"use strict";
exports.__esModule = true;
exports.IdlTypeDefSchema = exports.StructTypeSchema = exports.EnumTypeSchema = exports.FieldsSchema = exports.FieldSchema = exports.IdlInstructionAccountSchema = exports.IdlInstructionArgSchema = exports.IdlTypeSchema = void 0;
var zod_1 = require("zod");
// -----------------
// Literal types
// -----------------
var publicKeyLiteral = zod_1.z.literal("publicKey");
var stringLiterals = zod_1.z.literal("string");
var numberLiterals = zod_1.z.union([
    zod_1.z.literal("u8"),
    zod_1.z.literal("u16"),
    zod_1.z.literal("u32"),
    zod_1.z.literal("u64"),
    zod_1.z.literal("u128"),
    zod_1.z.literal("i8"),
    zod_1.z.literal("i16"),
    zod_1.z.literal("i32"),
    zod_1.z.literal("i64"),
    zod_1.z.literal("i128"),
    zod_1.z.literal("bool"),
]);
var typeLiterals = zod_1.z.union([
    publicKeyLiteral,
    stringLiterals,
    numberLiterals,
]);
// -----------------
// Idl Type
// -----------------
exports.IdlTypeSchema = zod_1.z.lazy(function () {
    return zod_1.z.union([
        typeLiterals,
        IdlTypeDefinedSchema,
        IdlTypeOptionSchema,
        IdlTypeCOptionSchema,
        IdlTypeVecSchema,
        IdlTypeArraySchema,
    ]);
});
var IdlTypeDefinedSchema = zod_1.z.object({
    defined: zod_1.z.string()
});
var IdlTypeOptionSchema = zod_1.z.lazy(function () {
    return zod_1.z.object({
        option: exports.IdlTypeSchema
    });
});
var IdlTypeCOptionSchema = zod_1.z.lazy(function () {
    return zod_1.z.object({
        coption: exports.IdlTypeSchema
    });
});
var IdlTypeVecSchema = zod_1.z.lazy(function () {
    return zod_1.z.object({
        vec: exports.IdlTypeSchema
    });
});
var IdlTypeArraySchema = zod_1.z.lazy(function () {
    return zod_1.z.object({
        array: zod_1.z.tuple([exports.IdlTypeSchema, zod_1.z.number()])
    });
});
var idlEnumVariantSchema = zod_1.z.object({
    name: zod_1.z.string()
});
var idlTypeScalarEnumSchema = zod_1.z.object({
    kind: zod_1.z.literal("enum"),
    name: zod_1.z.string().optional(),
    variants: zod_1.z.array(idlEnumVariantSchema)
});
var IdlFieldSchema = zod_1.z.lazy(function () {
    return zod_1.z.object({
        name: zod_1.z.string(),
        type: exports.IdlTypeSchema,
        attrs: zod_1.z.optional(zod_1.z.array(zod_1.z.string()))
    });
});
// Enum variants
var idlDataEnumVariantWithNamedFieldsSchema = zod_1.z.object({
    name: zod_1.z.string(),
    fields: zod_1.z.array(IdlFieldSchema)
});
var idlDataEnumVariantWithUnnamedFieldsSchema = zod_1.z.object({
    name: zod_1.z.string(),
    fields: zod_1.z.array(exports.IdlTypeSchema)
});
var idlDataEnumVariantSchema = zod_1.z.union([
    idlDataEnumVariantWithNamedFieldsSchema,
    idlDataEnumVariantWithUnnamedFieldsSchema,
    idlEnumVariantSchema,
]);
var idlTypeDataEnumSchema = zod_1.z.object({
    kind: zod_1.z.literal("enum"),
    name: zod_1.z.optional(zod_1.z.string()),
    variants: zod_1.z.array(idlDataEnumVariantSchema)
});
// -----------------
// Instruction
// -----------------
exports.IdlInstructionArgSchema = zod_1.z.object({
    name: zod_1.z.string(),
    type: exports.IdlTypeSchema
});
exports.IdlInstructionAccountSchema = zod_1.z.object({
    name: zod_1.z.string(),
    isMut: zod_1.z.boolean(),
    isSigner: zod_1.z.boolean(),
    docs: zod_1.z.string().array().optional(),
    optional: zod_1.z.boolean().optional()
});
// -----------------
// Account
// -----------------
exports.FieldSchema = zod_1.z.object({
    name: zod_1.z.string(),
    docs: zod_1.z.optional(zod_1.z.array(zod_1.z.string())),
    type: exports.IdlTypeSchema
});
exports.FieldsSchema = zod_1.z.array(exports.FieldSchema);
exports.EnumTypeSchema = zod_1.z.union([
    idlTypeScalarEnumSchema,
    idlTypeDataEnumSchema,
]);
exports.StructTypeSchema = zod_1.z.object({
    kind: zod_1.z.literal("struct"),
    fields: zod_1.z.array(IdlFieldSchema)
});
exports.IdlTypeDefSchema = zod_1.z.union([
    exports.EnumTypeSchema,
    exports.StructTypeSchema,
]);
