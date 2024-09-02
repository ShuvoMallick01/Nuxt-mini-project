export default defineEventHandler(async (event) => {
  // // handle query params
  // const { name } = getQuery(event);

  // // handle post data
  // const { age } = await readBody(event);

  // apiCall with private key
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/currencies?apikey=cur_live_dqj6I6A6FE3XJ1zD1llIrTcrHrXE3wBDYWryBeA1"
  );

  return data;
});
