/* eslint-disable */

export const access_ctrl = {
  address: {
    1: "0xC6115aF2198f73C6a9a7445395BE71ca76467405", // main
    3: "0x4Ef975d87CC75bB9db79B719F8DBfFBf542f72d9", // ropsten
    4: "", // rinkeby
    42: "", // kovan
    5: "0x1a75CfB6B656Bcd8De519d31Df5CD30E92b029aC" // goerli
  },
  abi: [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "beneficiary",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "caller",
          type: "address"
        }
      ],
      name: "AdminRoleGranted",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "beneficiary",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "caller",
          type: "address"
        }
      ],
      name: "AdminRoleRemoved",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "beneficiary",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "caller",
          type: "address"
        }
      ],
      name: "MinterRoleGranted",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "beneficiary",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "caller",
          type: "address"
        }
      ],
      name: "MinterRoleRemoved",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "beneficiary",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "caller",
          type: "address"
        }
      ],
      name: "OperatorRoleGranted",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "beneficiary",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "caller",
          type: "address"
        }
      ],
      name: "OperatorRoleRemoved",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "previousAdminRole",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "newAdminRole",
          type: "bytes32"
        }
      ],
      name: "RoleAdminChanged",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address"
        }
      ],
      name: "RoleGranted",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address"
        }
      ],
      name: "RoleRevoked",
      type: "event"
    },
    {
      inputs: [],
      name: "DEFAULT_ADMIN_ROLE",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "MINTER_ROLE",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "OPERATOR_ROLE",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "_address", type: "address" }],
      name: "addAdminRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "_address", type: "address" }],
      name: "addMinterRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "_address", type: "address" }],
      name: "addOperatorRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
      name: "getRoleAdmin",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        { internalType: "bytes32", name: "role", type: "bytes32" },
        { internalType: "uint256", name: "index", type: "uint256" }
      ],
      name: "getRoleMember",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
      name: "getRoleMemberCount",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        { internalType: "bytes32", name: "role", type: "bytes32" },
        { internalType: "address", name: "account", type: "address" }
      ],
      name: "grantRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "_address", type: "address" }],
      name: "hasAdminRole",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "_address", type: "address" }],
      name: "hasMinterRole",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "_address", type: "address" }],
      name: "hasOperatorRole",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        { internalType: "bytes32", name: "role", type: "bytes32" },
        { internalType: "address", name: "account", type: "address" }
      ],
      name: "hasRole",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "_address", type: "address" }],
      name: "removeAdminRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "_address", type: "address" }],
      name: "removeMinterRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "_address", type: "address" }],
      name: "removeOperatorRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        { internalType: "bytes32", name: "role", type: "bytes32" },
        { internalType: "address", name: "account", type: "address" }
      ],
      name: "renounceRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        { internalType: "bytes32", name: "role", type: "bytes32" },
        { internalType: "address", name: "account", type: "address" }
      ],
      name: "revokeRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }
  ]
};

export const gaze_coin = {
  address: {
    1: "0x4ac00f287f36a6aad655281fe1ca6798c9cb727b", // main
    3: "0xcc5292d5f04948fE682CEDfB8b3C4b4533e81613", // ropsten
    4: "", // rinkeby
    42: "", // kovan
    5: "0xFed11e3BBe7281E440D8cc3c32d21b5fE7805cFd" // goerli
  }
};

export const weth = {
  address: {
    1: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // main
    3: "0x347ecdAd522222eb171814289dbAA334aD270CAf", // ropsten
    4: "", // rinkeby
    42: "", // kovan
    5: "0xF45649df80F70F4B7C943F1852151f0F3AcEd8c2" // goerli
  },
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "src",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "guy",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "wad",
          type: "uint256"
        }
      ],
      name: "Approval",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "dst",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "wad",
          type: "uint256"
        }
      ],
      name: "Deposit",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "src",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "dst",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "wad",
          type: "uint256"
        }
      ],
      name: "Transfer",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "src",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "wad",
          type: "uint256"
        }
      ],
      name: "Withdrawal",
      type: "event"
    },
    {
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "address", name: "", type: "address" }
      ],
      name: "allowance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        { internalType: "address", name: "guy", type: "address" },
        { internalType: "uint256", name: "wad", type: "uint256" }
      ],
      name: "approve",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "deposit",
      outputs: [],
      stateMutability: "payable",
      type: "function"
    },
    {
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        { internalType: "address", name: "dst", type: "address" },
        { internalType: "uint256", name: "wad", type: "uint256" }
      ],
      name: "transfer",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        { internalType: "address", name: "src", type: "address" },
        { internalType: "address", name: "dst", type: "address" },
        { internalType: "uint256", name: "wad", type: "uint256" }
      ],
      name: "transferFrom",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [{ internalType: "uint256", name: "wad", type: "uint256" }],
      name: "withdraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    { stateMutability: "payable", type: "receive" }
  ]
};

export const lp_token = {
  address: {
    1: "0x1845d8d12846d7d7c6908bc5df48cfe29a7283c7", // main
    3: "0x89236A06a5FAa558F01c74F4fFdbe8FF976afFD9", // ropsten
    4: "", // rinkeby
    42: "", // kovan
    5: "0x8b3e78453F42847511b377cdAF1dE6Dc1F15BE40" // goerli
  },
  abi: [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }
      ],
      name: "Approval",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount0",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount1",
          type: "uint256"
        },
        { indexed: true, internalType: "address", name: "to", type: "address" }
      ],
      name: "Burn",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount0",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount1",
          type: "uint256"
        }
      ],
      name: "Mint",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount0In",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount1In",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount0Out",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount1Out",
          type: "uint256"
        },
        { indexed: true, internalType: "address", name: "to", type: "address" }
      ],
      name: "Swap",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint112",
          name: "reserve0",
          type: "uint112"
        },
        {
          indexed: false,
          internalType: "uint112",
          name: "reserve1",
          type: "uint112"
        }
      ],
      name: "Sync",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address"
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }
      ],
      name: "Transfer",
      type: "event"
    },
    {
      inputs: [],
      name: "DOMAIN_SEPARATOR",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "MINIMUM_LIQUIDITY",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "PERMIT_TYPEHASH",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "address", name: "", type: "address" }
      ],
      name: "allowance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" }
      ],
      name: "approve",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "to", type: "address" }],
      name: "burn",
      outputs: [
        { internalType: "uint256", name: "amount0", type: "uint256" },
        { internalType: "uint256", name: "amount1", type: "uint256" }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "factory",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "getReserves",
      outputs: [
        { internalType: "uint112", name: "_reserve0", type: "uint112" },
        { internalType: "uint112", name: "_reserve1", type: "uint112" },
        { internalType: "uint32", name: "_blockTimestampLast", type: "uint32" }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        { internalType: "address", name: "_token0", type: "address" },
        { internalType: "address", name: "_token1", type: "address" }
      ],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "kLast",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "to", type: "address" }],
      name: "mint",
      outputs: [
        { internalType: "uint256", name: "liquidity", type: "uint256" }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "nonces",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" },
        { internalType: "uint256", name: "deadline", type: "uint256" },
        { internalType: "uint8", name: "v", type: "uint8" },
        { internalType: "bytes32", name: "r", type: "bytes32" },
        { internalType: "bytes32", name: "s", type: "bytes32" }
      ],
      name: "permit",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "price0CumulativeLast",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "price1CumulativeLast",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "to", type: "address" }],
      name: "skim",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        { internalType: "uint256", name: "amount0Out", type: "uint256" },
        { internalType: "uint256", name: "amount1Out", type: "uint256" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "bytes", name: "data", type: "bytes" }
      ],
      name: "swap",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "sync",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "token0",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "token1",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" }
      ],
      name: "transfer",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" }
      ],
      name: "transferFrom",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function"
    }
  ]
};

export const rewards = {
  address: {
    1: "0x11A7137a56F2F43D47D28C1F13c0bEAEE9e971E3", // main
    3: "0x629e712A6d4eA2154B2E2dC077a2E86E79E1550d", // ropsten
    4: "", // rinkeby
    42: "", // kovan
    5: "0x7a946360B7C6429a79DCe187Fe56EEB98e616226" // goerli
  },
  abi: [
    {
      inputs: [
        { internalType: "address", name: "_rewardsToken", type: "address" },
        { internalType: "address", name: "_accessControls", type: "address" },
        { internalType: "address", name: "_lpStaking", type: "address" },
        { internalType: "uint256", name: "_startTime", type: "uint256" },
        { internalType: "uint256", name: "_lastRewardTime", type: "uint256" },
        { internalType: "uint256", name: "_lpRewardsPaid", type: "uint256" }
      ],
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "token",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }
      ],
      name: "Recovered",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "addr",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "reward",
          type: "uint256"
        }
      ],
      name: "RewardAdded",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "addr",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "reward",
          type: "uint256"
        }
      ],
      name: "RewardDistributed",
      type: "event"
    },
    {
      inputs: [
        { internalType: "uint256", name: "_from", type: "uint256" },
        { internalType: "uint256", name: "_to", type: "uint256" }
      ],
      name: "LPRewards",
      outputs: [{ internalType: "uint256", name: "rewards", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "accessControls",
      outputs: [
        {
          internalType: "contract GazeAccessControls",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "getCurrentLpWeightPoints",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "getCurrentRewardWeek",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "getCurrentWeek",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "getEthPerRewardPrice",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "getLpDailyAPY",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "getLpStakedEthTotal",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "getRewardPerEthPrice",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "getTotalContributions",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "lastRewardTime",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "lpRewardsPaid",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "lpStaking",
      outputs: [
        { internalType: "contract IGazeStaking", name: "", type: "address" }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        { internalType: "address", name: "tokenAddress", type: "address" },
        { internalType: "uint256", name: "tokenAmount", type: "uint256" }
      ],
      name: "recoverERC20",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "rewardsToken",
      outputs: [
        { internalType: "contract Rewards", name: "", type: "address" }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        { internalType: "uint256", name: "week", type: "uint256" },
        { internalType: "uint256", name: "mW", type: "uint256" }
      ],
      name: "setInitialPoints",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "_addr", type: "address" }],
      name: "setLPStaking",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        { internalType: "uint256[]", name: "rewardWeeks", type: "uint256[]" },
        { internalType: "uint256[]", name: "amounts", type: "uint256[]" }
      ],
      name: "setRewards",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        { internalType: "uint256", name: "_startTime", type: "uint256" },
        { internalType: "uint256", name: "_lastRewardTime", type: "uint256" }
      ],
      name: "setStartTime",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "_addr", type: "address" }],
      name: "setVault",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "startTime",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "totalRewards",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "totalRewardsPaid",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "updateRewards",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "vault",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "weeklyRewardsPerSecond",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "weeklyWeightPoints",
      outputs: [
        { internalType: "uint256", name: "lpWeightPoints", type: "uint256" }
      ],
      stateMutability: "view",
      type: "function"
    }
  ]
};

export const lpStaking = {
  address: {
    1: "0x66A3c1809a53Fb3aD938BF9C1E96Ee84AC0DA4a7", // main
    3: "0xd65Df4760A43Ae54C723123c05ad1302d453fF1a", // ropsten
    4: "", // rinkeby
    42: "", // kovan
    5: "0xeC941585907947012dAa56C8e703Ec93c3C14970" // goerli
  },
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bool",
          name: "status",
          type: "bool"
        }
      ],
      name: "ClaimableStatusUpdated",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }
      ],
      name: "EmergencyUnstake",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "oldLpToken",
          type: "address"
        },
        {
          indexed: false,
          internalType: "address",
          name: "newLpToken",
          type: "address"
        }
      ],
      name: "LpTokenUpdated",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "reward",
          type: "uint256"
        }
      ],
      name: "RewardPaid",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "oldRewardsToken",
          type: "address"
        },
        {
          indexed: false,
          internalType: "address",
          name: "newRewardsToken",
          type: "address"
        }
      ],
      name: "RewardsContractUpdated",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }
      ],
      name: "Staked",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }
      ],
      name: "Unstaked",
      type: "event"
    },
    {
      inputs: [],
      name: "WETH",
      outputs: [{ internalType: "contract IWETH", name: "", type: "address" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "accessControls",
      outputs: [
        {
          internalType: "contract GazeAccessControls",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        { internalType: "address payable", name: "to", type: "address" }
      ],
      name: "addLiquidityETHOnly",
      outputs: [],
      stateMutability: "payable",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "_user", type: "address" }],
      name: "claimReward",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "emergencyUnstake",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [{ internalType: "uint256", name: "ethAmt", type: "uint256" }],
      name: "getLPTokenPerEthUnit",
      outputs: [
        { internalType: "uint256", name: "liquidity", type: "uint256" }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "_user", type: "address" }],
      name: "getStakedBalance",
      outputs: [{ internalType: "uint256", name: "balance", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "contract IERC20",
          name: "_rewardsToken",
          type: "address"
        },
        { internalType: "address", name: "_lpToken", type: "address" },
        {
          internalType: "contract IWETH",
          name: "_WETH",
          type: "address"
        },
        {
          internalType: "contract GazeAccessControls",
          name: "_accessControls",
          type: "address"
        }
      ],
      name: "initLPStaking",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "lastUpdateTime",
      outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "lpToken",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "rewardsContract",
      outputs: [
        {
          internalType: "contract IGazeRewards",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "_user", type: "address" }],
      name: "rewardsOwing",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "rewardsPerTokenPoints",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "rewardsToken",
      outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "_addr", type: "address" }],
      name: "setLPToken",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "_addr", type: "address" }],
      name: "setRewardsContract",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [{ internalType: "bool", name: "_enabled", type: "bool" }],
      name: "setTokensClaimable",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
      name: "stake",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "stakedEthTotal",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "stakedLPTotal",
      outputs: [{ internalType: "uint128", name: "", type: "uint128" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "stakers",
      outputs: [
        { internalType: "uint256", name: "balance", type: "uint256" },
        {
          internalType: "uint256",
          name: "lastRewardPoints",
          type: "uint256"
        },
        {
          internalType: "uint128",
          name: "rewardsEarned",
          type: "uint128"
        },
        {
          internalType: "uint128",
          name: "rewardsReleased",
          type: "uint128"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "tokensClaimable",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "_user", type: "address" }],
      name: "unclaimedRewards",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
      name: "unstake",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "_user", type: "address" }],
      name: "updateReward",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "zapEth",
      outputs: [],
      stateMutability: "payable",
      type: "function"
    },
    { stateMutability: "payable", type: "receive" }
  ]
};

export const btts_lib = {
  address: {
    1: "", // main
    3: "0x7e14941DE3EB1E4b63448194360dce09B06F5c4C", // ropsten
    4: "", // rinkeby
    42: "", // kovan
    5: "" // goerli
  }
};

export const sushi_factory = {
  address: {
    1: "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac", // main
    3: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4", // ropsten
    4: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4", // rinkeby
    42: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4", // kovan
    5: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" // goerli
  },
  abi: [
    {
      inputs: [
        { internalType: "address", name: "_feeToSetter", type: "address" }
      ],
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "token0",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "token1",
          type: "address"
        },
        {
          indexed: false,
          internalType: "address",
          name: "pair",
          type: "address"
        },
        { indexed: false, internalType: "uint256", name: "", type: "uint256" }
      ],
      name: "PairCreated",
      type: "event"
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "allPairs",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "allPairsLength",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        { internalType: "address", name: "tokenA", type: "address" },
        { internalType: "address", name: "tokenB", type: "address" }
      ],
      name: "createPair",
      outputs: [{ internalType: "address", name: "pair", type: "address" }],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "feeTo",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "feeToSetter",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "address", name: "", type: "address" }
      ],
      name: "getPair",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "migrator",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "pairCodeHash",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      stateMutability: "pure",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "_feeTo", type: "address" }],
      name: "setFeeTo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        { internalType: "address", name: "_feeToSetter", type: "address" }
      ],
      name: "setFeeToSetter",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [{ internalType: "address", name: "_migrator", type: "address" }],
      name: "setMigrator",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }
  ]
};

// "gaze_staking_ropsten":{
//   "access_ctrl":"0x4Ef975d87CC75bB9db79B719F8DBfFBf542f72d9",
//   "gaze_coin": "0xcc5292d5f04948fE682CEDfB8b3C4b4533e81613",
//   "weth":"0x347ecdAd522222eb171814289dbAA334aD270CAf",
//   "lp_token":"0x89236A06a5FAa558F01c74F4fFdbe8FF976afFD9",
//   "rewards":"0x629e712A6d4eA2154B2E2dC077a2E86E79E1550d",
//   "lp_staking":"0xd65Df4760A43Ae54C723123c05ad1302d453fF1a",
//   "btts_lib":"0x7e14941DE3EB1E4b63448194360dce09B06F5c4C",
//   "sushi_factory":"0xc35DADB65012eC5796536bD9864eD8773aBc74C4"
// }
