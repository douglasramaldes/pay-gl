import { Transaction } from "../../models/Transaction";

const mockData: Transaction[] = [
  {
    id: 1,
    date: "2023-10-01",
    description: "Payment for goods",
    amount: 100,
  },
  {
    id: 2,
    date: "2023-10-02",
    description: "Rent payment",
    amount: 100,
  },
  {
    id: 3,
    date: "2023-10-03",
    description: "Payment for goods",
    amount: 100,
  },
  {
    id: 4,
    date: "2023-10-05",
    description: "Rent payment",
    amount: 100,
  },
  {
    id: 5,
    date: "2023-10-07",
    description: "Payment for goods",
    amount: 100,
  },
  {
    id: 6,
    date: "2023-10-08",
    description: "Rent payment",
    amount: 100,
  },
  {
    id: 7,
    date: "2023-10-24",
    description: "Payment for goods",
    amount: 100,
  },
  {
    id: 8,
    date: "2023-10-24",
    description: "Rent payment",
    amount: 100,
  },
];

export const fetchPaymentTransactions = (): Promise<Transaction[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000);
  });
};
