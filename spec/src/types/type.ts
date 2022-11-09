/**
 * Types, both literal and program-defined, that
 * can be used in a valid IDL
 */
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

