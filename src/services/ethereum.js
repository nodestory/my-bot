import Web3 from "web3";
import BloctoSDK from "@blocto/sdk";

const bloctoSDK = new BloctoSDK({
    ethereum: {
        chainId: "0x4", // (required) chainId to be used
        rpc: `https://rinkeby.infura.io/v3/ef5a5728e2354955b562d2ffa4ae5305` // (required for Ethereum) JSON RPC endpoint
    }
});

const web3 = new Web3(bloctoSDK.ethereum);

export { web3, bloctoSDK };
