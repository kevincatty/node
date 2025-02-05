// @generated by protoc-gen-es v1.3.0 with parameter "target=dts"
// @generated from file zetachain/zetacore/pkg/chains/chains.proto (package zetachain.zetacore.pkg.chains, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum zetachain.zetacore.pkg.chains.ReceiveStatus
 */
export declare enum ReceiveStatus {
  /**
   * some observer sees inbound tx
   *
   * @generated from enum value: created = 0;
   */
  created = 0,

  /**
   * @generated from enum value: success = 1;
   */
  success = 1,

  /**
   * @generated from enum value: failed = 2;
   */
  failed = 2,
}

/**
 * ChainName represents the name of the chain
 *
 * @generated from enum zetachain.zetacore.pkg.chains.ChainName
 */
export declare enum ChainName {
  /**
   * @generated from enum value: empty = 0;
   */
  empty = 0,

  /**
   * @generated from enum value: eth_mainnet = 1;
   */
  eth_mainnet = 1,

  /**
   * @generated from enum value: zeta_mainnet = 2;
   */
  zeta_mainnet = 2,

  /**
   * @generated from enum value: btc_mainnet = 3;
   */
  btc_mainnet = 3,

  /**
   * @generated from enum value: polygon_mainnet = 4;
   */
  polygon_mainnet = 4,

  /**
   * @generated from enum value: bsc_mainnet = 5;
   */
  bsc_mainnet = 5,

  /**
   * @generated from enum value: goerli_testnet = 6;
   */
  goerli_testnet = 6,

  /**
   * @generated from enum value: mumbai_testnet = 7;
   */
  mumbai_testnet = 7,

  /**
   * @generated from enum value: ganache_testnet = 8;
   */
  ganache_testnet = 8,

  /**
   * @generated from enum value: baobab_testnet = 9;
   */
  baobab_testnet = 9,

  /**
   * @generated from enum value: bsc_testnet = 10;
   */
  bsc_testnet = 10,

  /**
   * @generated from enum value: zeta_testnet = 11;
   */
  zeta_testnet = 11,

  /**
   * @generated from enum value: btc_testnet = 12;
   */
  btc_testnet = 12,

  /**
   * @generated from enum value: sepolia_testnet = 13;
   */
  sepolia_testnet = 13,

  /**
   * @generated from enum value: goerli_localnet = 14;
   */
  goerli_localnet = 14,

  /**
   * @generated from enum value: btc_regtest = 15;
   */
  btc_regtest = 15,

  /**
   * @generated from enum value: amoy_testnet = 16;
   */
  amoy_testnet = 16,
}

/**
 * Network represents the network type of the chain
 *
 * @generated from enum zetachain.zetacore.pkg.chains.Network
 */
export declare enum Network {
  /**
   * @generated from enum value: eth = 0;
   */
  eth = 0,

  /**
   * @generated from enum value: zeta = 1;
   */
  zeta = 1,

  /**
   * @generated from enum value: btc = 2;
   */
  btc = 2,

  /**
   * @generated from enum value: polygon = 3;
   */
  polygon = 3,

  /**
   * @generated from enum value: bsc = 4;
   */
  bsc = 4,
}

/**
 * NetworkType represents the network type of the chain
 *
 * @generated from enum zetachain.zetacore.pkg.chains.NetworkType
 */
export declare enum NetworkType {
  /**
   * @generated from enum value: mainnet = 0;
   */
  mainnet = 0,

  /**
   * @generated from enum value: testnet = 1;
   */
  testnet = 1,

  /**
   * @generated from enum value: privnet = 2;
   */
  privnet = 2,

  /**
   * @generated from enum value: devnet = 3;
   */
  devnet = 3,
}

/**
 * Vm represents the virtual machine type of the chain to support smart
 * contracts
 *
 * @generated from enum zetachain.zetacore.pkg.chains.Vm
 */
export declare enum Vm {
  /**
   * @generated from enum value: no_vm = 0;
   */
  no_vm = 0,

  /**
   * @generated from enum value: evm = 1;
   */
  evm = 1,
}

/**
 * Consensus represents the consensus algorithm used by the chain
 *
 * @generated from enum zetachain.zetacore.pkg.chains.Consensus
 */
export declare enum Consensus {
  /**
   * @generated from enum value: ethereum = 0;
   */
  ethereum = 0,

  /**
   * @generated from enum value: tendermint = 1;
   */
  tendermint = 1,

  /**
   * @generated from enum value: bitcoin = 2;
   */
  bitcoin = 2,
}

/**
 * @generated from message zetachain.zetacore.pkg.chains.Chain
 */
export declare class Chain extends Message<Chain> {
  /**
   * @generated from field: zetachain.zetacore.pkg.chains.ChainName chain_name = 1;
   */
  chainName: ChainName;

  /**
   * @generated from field: int64 chain_id = 2;
   */
  chainId: bigint;

  /**
   * @generated from field: zetachain.zetacore.pkg.chains.Network network = 3;
   */
  network: Network;

  /**
   * @generated from field: zetachain.zetacore.pkg.chains.NetworkType network_type = 4;
   */
  networkType: NetworkType;

  /**
   * @generated from field: zetachain.zetacore.pkg.chains.Vm vm = 5;
   */
  vm: Vm;

  /**
   * @generated from field: zetachain.zetacore.pkg.chains.Consensus consensus = 6;
   */
  consensus: Consensus;

  /**
   * @generated from field: bool is_external = 7;
   */
  isExternal: boolean;

  /**
   * @generated from field: bool is_header_supported = 8;
   */
  isHeaderSupported: boolean;

  constructor(data?: PartialMessage<Chain>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.pkg.chains.Chain";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Chain;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Chain;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Chain;

  static equals(a: Chain | PlainMessage<Chain> | undefined, b: Chain | PlainMessage<Chain> | undefined): boolean;
}

