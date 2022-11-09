

  // z.literal('u256'),
  // z.literal('u512'),
  // z.literal('i256'),
  // z.literal('i512'),

// const compositeLiterals = z.literal('option');
// const enumLiterals = z.union([z.literal("fixedScalarEnum"), z.literal("dataEnum")])

// const aliasLiterals = z.literal("Uint8Array");
// const fixedTupleLiterals = z.union([z.literal("FixedSizeTuple"), z.literal("Tuple")]);
// const mapLiteral = z.literal("Map");
// const setLiteral = z.literal("Set");
// const unitLiteral = z.literal("unit");

// const collectionLiterals = z.union([
//   z.literal('Array'),
//   z.literal('FixedSizeArray'),
//   z.literal('UniformFixedSizeArray'),
//   z.literal('Buffer'),
//   z.literal('FixedSizeUint8Array'),
//   z.literal('Uint8Array')
// ]);
// const stringLiterals = z.union([
//   z.literal('string'),
//   z.literal('fixedSizeString'),
// ]);

// export const idlTypeTupleSchema = z.object({
//   tuple: z.array(idlTypeSchema)
// })

// -----------------
// Maps
// -----------------
// export const idlTypeHashMapSchema = z.object({
//   hashMap: z.tuple([idlTypeSchema, idlTypeSchema])
// });

// export const idlTypeBTreeMapSchema = z.object({
//   bTreeMap: z.tuple([idlTypeSchema, idlTypeSchema])
// });

// export const idlTypeMapSchema = z.union([
//   idlTypeHashMapSchema,
//   idlTypeBTreeMapSchema
// ])

// -----------------
// Sets
// -----------------
// const idlTypeHashSetSchema = z.object({
//   hashSet: idlTypeSchema
// });

// const idlTypeBTreeSetSchema = z.object({
//   bTreeSet: idlTypeSchema,
// })

// const idlTypeSetSchema = z.union([
//   idlTypeHashSetSchema,
//   idlTypeBTreeSetSchema
// ]);

// export const serializersSchema = z.record(z.string())

    // idlTypeEnumSchema,
    // idlTypeDataEnumSchema,
    // idlTypeTupleSchema,
    // idlTypeMapSchema,
    // idlTypeSetSchema,