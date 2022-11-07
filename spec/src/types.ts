import { z } from "zod";

export const Field = z.object({
  name: z.string(),
  docs: z.optional(z.array(z.string())),
  type: z.any(), // FIXME:
  index: z.optional(z.boolean()),
});

export const Fields = z.array(Field);

export const EnumType = z.object({
  kind: z.literal("enum"),
  variants: z.array(
    z.object({
      name: z.string(),
      fields: z.optional(Fields),
    })
  ),
});

export const StructType = z.object({
  kind: z.literal("struct"),
  fields: z.array(
    z.object({
      name: z.string(),
      docs: z.optional(z.array(z.string())),
      type: z.any(), // FIXME:
    })
  ),
});

export const IdlType = z.discriminatedUnion("kind", [EnumType, StructType]);
