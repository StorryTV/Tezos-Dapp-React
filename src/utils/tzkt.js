// TODO 8 - Fetch lottery contract storage

import axios from "axios";

export const fetchStorage = async () => {
  const res = await axios.get(
    "https://api.ithacanet.tzkt.io/v1/contracts/KT1MFaCsTdGXgHVgGNkNGPWpxJ7Q9JKnekSx/storage"
  );
  return res.data;
};
