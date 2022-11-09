import IdlSchema from '../src';
import sample from "../examples/xnft.json";

console.log(IdlSchema.safeParse(sample));