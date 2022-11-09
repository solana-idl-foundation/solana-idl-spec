export type Idl = {
    /**
     * Version of the contract
     */
    version: string;
    /**
     * Name of the program described by this IDL
     */
    name: string;
    docs?: string[];
    instructions: IdlInstruction[];
    state?: IdlState;
    accounts?: IdlAccountDef[];
    types?: IdlTypeDef[];
    events?: IdlEvent[];
    errors?: IdlErrorCode[];
    constants?: IdlConstant[];
    metadata?: IdlMetadata;
};

/**
 * Metadata for IDL origination and program identification
 */
export type IdlMetadata = {
    origin?: string;
    deployments?: IdlMetadataDeployments[]
};

export type IdlMetadataDeployments = {
    chainId: string
    address: string;
    slot?: number
}

export type IdlConstant = {
    name: string;
    type: IdlType;
    value: string;
};

/**
 * Event information that should be indexed by the program
 */
export type IdlEvent = {
    /**
     * Name of the Event being described.
     *
     * Names may be overloaded.
     *
     * Events are identified by their discriminator
     */
    name: string;
    fields: IdlEventField[];
};

export type IdlEventField = {
    name: string;
    type: IdlType;
    /**
     * If index is true, then this information should be saved
     */
    index: boolean;
};


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

export type IdlState = {
    struct: IdlTypeDef;
    methods: IdlStateMethod[];
};

export type IdlStateMethod = IdlInstruction;

export type IdlAccountItem = IdlAccount | IdlAccounts;

export type IdlAccount = {
    name: string;
    isMut: boolean;
    isSigner: boolean;
    docs?: string[];
    relations?: string[];
    pda?: IdlPda;
};

export type IdlPda = {
    seeds: IdlSeed[];
    programId?: IdlSeed;
};

export type IdlSeed = any; // TODO

// A nested/recursive version of IdlAccount.
export type IdlAccounts = {
    name: string;
    docs?: string[];
    accounts: IdlAccountItem[];
};

export type IdlField = {
    name: string;
    docs?: string[];
    type: IdlType;
};

/**
 * Program-defined types necessary for constructing program instruction arguments
 * or program state
 */
export type IdlTypeDef = {
    name: string;
    docs?: string[];
    type: IdlTypeDefTy;
};

export type IdlAccountDef = {
    name: string;
    docs?: string[];
    type: IdlTypeDefTyStruct;
};

export type IdlTypeDefTyStruct = {
    kind: "struct";
    fields: IdlTypeDefStruct;
};

export type IdlTypeDefTyEnum = {
    kind: "enum";
    variants: IdlEnumVariant[];
};

export type IdlTypeDefTy = IdlTypeDefTyEnum | IdlTypeDefTyStruct;

export type IdlTypeDefStruct = Array<IdlField>;

export type IdlType =
    | "bool"
    | "u8"
    | "i8"
    | "u16"
    | "i16"
    | "u32"
    | "i32"
    | "f32"
    | "u64"
    | "i64"
    | "f64"
    | "u128"
    | "i128"
    | "bytes"
    | "string"
    | "publicKey"
    | IdlTypeDefined
    | IdlTypeOption
    | IdlTypeCOption
    | IdlTypeVec
    | IdlTypeArray;

export type IdlTypeDefined = {
    defined: string;
};

export type IdlTypeOption = {
    option: IdlType;
};

export type IdlTypeCOption = {
    coption: IdlType;
};

export type IdlTypeVec = {
    vec: IdlType;
};

export type IdlTypeArray = {
    array: [idlType: IdlType, size: number];
};

export type IdlEnumVariant = {
    name: string;
    fields?: IdlEnumFields;
};

export type IdlEnumFields = IdlEnumFieldsNamed | IdlEnumFieldsTuple;

export type IdlEnumFieldsNamed = IdlField[];

export type IdlEnumFieldsTuple = IdlType[];

/**
 * Errors produced by this program.
 */
export type IdlErrorCode = {
    /**
     * Errors are identified by their code number.
     *
     * Errors may not be described twice in the IDL.
     */
    code: number;
    /**
     * Name of the Error
     *
     * Names may be overloaded.
     */
    name: string;
    /**
     * Message to be shown
     */
    msg?: string;
};
