import { IdlTypeDef } from './definedTypes'
import { IdlInstruction } from './instruction';

export type IdlState = {
    struct: IdlTypeDef;
    methods: IdlStateMethod[];
};

export type IdlStateMethod = IdlInstruction;
