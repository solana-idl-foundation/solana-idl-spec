/**
 * Metadata for IDL origination and program identification
 */
export type IdlMetadata = {
  origin?: string;
  deployments?: IdlMetadataDeployments[];
};

/**
 * Information related to where the relevant program is
 */
export type IdlMetadataDeployments = {
  chainId: string;
  address: string;
  slot?: number;
};
