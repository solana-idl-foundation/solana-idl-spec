<div align="center">
  <h1>Solana IDL Spec</h1>
  <p><strong>Standardizing a Solana IDL Standard, originally built by Coral's Anchor Framework.</strong></p>
  <p>
    <a href="https://github.com/solana-idl-foundation/solana-idl-spec/actions"><img alt="Build Status" src="https://github.com/solana-idl-foundation/solana-idl-spec/actions/workflows/lint.yaml/badge.svg" /></a>
    <a href="https://github.com/solana-idl-foundation/solana-idl-spec/blob/main/spec/package.json"><img alt="Spec Version" src="https://img.shields.io/github/package-json/v/solana-idl-foundation/solana-idl-spec?filename=spec%2Fpackage.json&label=Version" /><a/>
    <a href="https://github.com/solana-idl-foundation/solana-idl-spec/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/github/license/solana-idl-foundation/solana-idl-spec?color=blue&label=License" /></a>
  </p>
</div>

## Goals of Standardizing the IDL

1. Increase composability across the Solana ecosystem
2. Allow developer tools other than Anchor to target the IDL

## Requested Updates

1. Explicit instruction discriminators
2. Explicit account discriminators
3. A list of standardized types (Array/Vec, Solana Pubkey, etc)
4. Serialization format (borsh, bincode, etc)
5. Security information
6. A typed "metadata" object
