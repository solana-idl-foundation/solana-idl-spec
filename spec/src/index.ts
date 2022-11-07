import { z } from "zod";

import sample from "../examples/xnft.json";

const Accounts = z.optional(
  z.array(
    z.object({
      name: z.string(), // FIXME:
      type: z.object({
        kind: z.string(), // FIXME:
        fields: z.array(
          z.object({
            name: z.string(), // FIXME:
            docs: z.optional(z.array(z.string())),
            // type: z.string(),
          })
        ),
      }),
    })
  )
);

const Constants = z.optional(
  z.array(
    z.object({
      name: z.string({ description: "Name of the constant variable" }),
      // type: z.string(), // FIXME:
      value: z.string(), // FIXME:
    }),
    { description: "Constant values defined within the smart contract" }
  )
);

const Errors = z.optional(
  z.array(
    z.object({
      code: z.number(), // FIXME:
      name: z.string(), // FIXME:
      msg: z.optional(z.string()), // FIXME:
    })
  )
);

const Events = z.optional(
  z.array(
    z.object({
      name: z.string(), // FIXME:
      fields: z.array(
        z.object({
          name: z.string(), // FIXME:
          // type: z.string(), // FIXME:
          index: z.boolean(),
        })
      ),
    })
  )
);

const Instructions = z.array(
  z.object({
    name: z.string(), // FIXME:
    docs: z.optional(z.array(z.string())),
    accounts: z.array(
      z.object({
        name: z.string(), // FIXME:
        isMut: z.boolean(),
        isSigner: z.boolean(),
      })
    ),
    args: z.array(
      z.object({
        name: z.string(), // FIXME:
        // type: z.string(), // FIXME:
      })
    ),
  })
);

const Metadata = z.optional(
  z.object({
    address: z.optional(z.string()),
  })
);

const Name = z.string({ description: "Name of the smart contract" });

const Types = z.optional(
  z.array(
    z.object({
      name: z.string(), // FIXME:
      type: z.object({
        kind: z.string(), // FIXME:
        fields: z.optional(
          z.array(
            z.object({
              name: z.string(), // FIXME:
              // type: z.string(), // FIXME:
            })
          )
        ),
      }),
    })
  )
);

const Version = z
  .string({
    description: "Semantic version of the smart contract",
  })
  .regex(
    /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/,
    "Invalid semantic version format"
  );

const IdlSchema = z.object({
  version: Version,
  name: Name,
  constants: Constants,
  instructions: Instructions,
  accounts: Accounts,
  types: Types,
  events: Events,
  errors: Errors,
  metadata: Metadata,
});

export default IdlSchema;

console.log(IdlSchema.safeParse(sample));
