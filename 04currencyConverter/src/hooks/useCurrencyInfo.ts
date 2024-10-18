// Example of useCurrencyInfo hook
import { useEffect, useState } from "react";

const useCurrencyInfo = (baseCurrency: string) => {
  const [currencyInfo, setCurrencyInfo] = useState<
    { [key: string]: number } | undefined
  >(undefined);
  // const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`;

  useEffect(() => {
    const fetchCurrencyInfo = async () => {
      try {
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
        );
        const data = await response.json();
        setCurrencyInfo(data.rates); // Assuming 'rates' contains the currency rates
      } catch (error) {
        console.error("Failed to fetch currency info", error);
      }
    };

    fetchCurrencyInfo();
  }, [baseCurrency]);

  return currencyInfo; // Return the currency info
};

export default useCurrencyInfo;
