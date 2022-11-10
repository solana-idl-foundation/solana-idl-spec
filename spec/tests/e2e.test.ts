import IdlSchema from "../src/zod";
import sample from "../examples/xnft.json";

console.log(IdlSchema.safeParse(sample));
