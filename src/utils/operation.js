import { tezos } from "./tezos";

export const buySTVOperation = async () => {
  try {
    const contractInstance = await tezos.wallet.at("KT1EDKhwYY9h8UuoxN6KpexoCT8xoaTRVAzv");
    const op = await contractInstance.methods.tezToTokenPayment(10000, 'tz1eo3APJNdYst3mu7axpyZsJBPEqwxm8Sv1').send({
      amount: 10000,
      mutez: true,
    });
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};

export const sellSTVOperation = async () => {
  try {
    const contractInstance = await tezos.wallet.at("KT1EDKhwYY9h8UuoxN6KpexoCT8xoaTRVAzv");
    const op = await contractInstance.methods.tokenToTezPayment().send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};
