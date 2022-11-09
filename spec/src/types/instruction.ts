import { IdlField } from './field';
import { IdlType } from './type';

/**
 * Instructions represent separate execution paths by a program
 * 
 * An instruction is identified by its discriminator.
 * 
 * One program may describe multiple instructions with the same name
 */
export type IdlInstruction = {
    /**
     * Name of the instruction
     * 
     * Names can be overloaded by having different instruction args
     */
    name: string;
    /**
     * Developer documentation for the instruction
     */
    docs?: string[];
    /**
     * Accounts required by the instruction execution
     */
    accounts: IdlAccountItem[];
    /**
     * Instruction arguments required for the instruction execution.
     * 
     * Remaining bytes beyond what is specified in the InstructionArgs
     * may be used for other processing.
     */
    args: IdlField[];
    returns?: IdlType;
};

export type IdlAccount = {
    name: string;
    isMut: boolean;
    isSigner: boolean;
    docs?: string[];
    relations?: string[];
    pda?: IdlPda;
};

// A nested/recursive version of IdlAccount.
export type IdlAccounts = {
    name: string;
    docs?: string[];
    accounts: IdlAccountItem[];
};

export type IdlAccountItem = IdlAccount | IdlAccounts;


export type IdlPda = {
    seeds: IdlSeed[];
    programId?: IdlSeed;
};

export type IdlSeed = any; // TODO
