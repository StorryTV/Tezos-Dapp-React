import { BeaconWallet } from "@taquito/beacon-wallet";

export const wallet = new BeaconWallet({
  name: "StorryTV - Tezos Dapp",
  preferredNetwork: "mainnet",
});

export const connectWallet = async () => {
  await wallet.requestPermissions({ network: { type: "mainnet" } });
};

// TODO 2.c - Setup getAccount function
export const getAccount = async () => {
  const activeAccount = await wallet.client.getActiveAccount();
  if (activeAccount) {
    return activeAccount.address;
  } else {
    return "";
  }
};
