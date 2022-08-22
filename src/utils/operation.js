// TODO 6 - Call buy_ticket entrypoint in the Lottery contract
import { tezos } from "./tezos";

export const buyTicketOperation = async () => {
  try {
    const contractInstance = await tezos.wallet.at("KT1EDKhwYY9h8UuoxN6KpexoCT8xoaTRVAzv");
    const op = await contractInstance.methods.tezToTokenPayment().send({
      amount: 1,
      mutez: false,
    });
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};

// TODO 10 - Call end_game entrypoint in the Lottery contract
export const endGameOperation = async () => {
  try {
    const contractInstance = await tezos.wallet.at("KT1EDKhwYY9h8UuoxN6KpexoCT8xoaTRVAzv");
    const op = await contractInstance.methods.tokenToTezPayment().send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};
