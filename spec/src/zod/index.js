"use strict";
exports.__esModule = true;
exports.VersionSchema = exports.TypesSchema = exports.NameSchema = exports.MetadataSchema = exports.InstructionsSchem = exports.EventsSchema = exports.ErrorsSchema = exports.ConstantsSchema = exports.AccountsSchema = void 0;
var zod_1 = require("zod");
var types_1 = require("./types");
exports.AccountsSchema = zod_1.z.array(zod_1.z.object({
    name: zod_1.z.string({ description: "Name of the program account type" }),
    type: types_1.StructTypeSchema,
    docs: zod_1.z.optional(zod_1.z.array(zod_1.z.string()))
}));
exports.ConstantsSchema = zod_1.z.array(zod_1.z.object({
    name: zod_1.z.string({ description: "Name of the constant variable" }),
    type: types_1.IdlTypeSchema,
    value: zod_1.z.string()
}), { description: "Constant values defined within the smart contract" });
exports.ErrorsSchema = zod_1.z.array(zod_1.z.object({
    code: zod_1.z.number(),
    name: zod_1.z.string(),
    msg: zod_1.z.optional(zod_1.z.string())
}));
exports.EventsSchema = zod_1.z.array(zod_1.z.object({
    name: zod_1.z.string(),
    fields: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        type: types_1.IdlTypeSchema,
        index: zod_1.z.boolean()
    }))
}));
exports.InstructionsSchem = zod_1.z.array(zod_1.z.object({
    name: zod_1.z.string(),
    docs: zod_1.z.optional(zod_1.z.array(zod_1.z.string())),
    accounts: zod_1.z.array(types_1.IdlInstructionAccountSchema),
    args: zod_1.z.array(types_1.IdlInstructionArgSchema),
    defaultOptionalAccounts: zod_1.z.optional(zod_1.z.boolean())
}));
exports.MetadataSchema = zod_1.z.object({
    address: zod_1.z.optional(zod_1.z.string()),
    origin: zod_1.z.optional(zod_1.z.string()),
    chainId: zod_1.z.optional(zod_1.z.string())
});
exports.NameSchema = zod_1.z.string({
    description: "Name of the smart contract"
});
exports.TypesSchema = zod_1.z.optional(zod_1.z.array(zod_1.z.object({
    name: zod_1.z.string(),
    type: types_1.IdlTypeDefSchema
})));
exports.VersionSchema = zod_1.z
    .string({
    description: "Semantic version of the smart contract"
})
    .regex(/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/, "Invalid semantic version format");
var IdlSchema = zod_1.z.object({
    version: exports.VersionSchema,
    name: exports.NameSchema,
    instructions: exports.InstructionsSchem,
    accounts: exports.AccountsSchema.optional(),
    errors: exports.ErrorsSchema.optional(),
    types: exports.TypesSchema.optional(),
    events: exports.EventsSchema.optional(),
    constants: exports.ConstantsSchema.optional(),
    metadata: exports.MetadataSchema.optional()
});
exports["default"] = IdlSchema;
