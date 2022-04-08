export interface Bank {
    name: string;
    address: string;
    country: string;
    telephoneNumber: string;
    SWIFT: string;
};

// enum transferStatesEnum {
//     processing = 'processing',
//     sent = 'sent',
//     finished = 'finished',
//     failed = 'failed',
// };

export interface Transfer {
    amount: number;
    currency: string;
    creationDate: Date;
    confirmationDate: Date;
    originBank: Bank;
    destinyBank: Bank;
    state: transferStatesEnum;
    description?: string | undefined;
};

type transferStatesEnum = "processing" | "failed" | "sent" | "confirmed";

export const isInternalTransfer = (transfer: Transfer): boolean => {
    const stringOrigin = JSON.stringify(transfer.originBank);
    const stringDestiny = JSON.stringify(transfer.destinyBank);

    return stringOrigin === stringDestiny;
}

// Serie de Fibonacci
// Va a retornar un number.
export const Fibonacci = (n: number): number => {
    if (n === 1) return 0;
    if (n === 2) return 1;

    let lastValue = 0, actualValue = 1, result = 0, aux;

    for(let i = 2; i < n; i++) {
        aux = lastValue;
        lastValue = actualValue;
        actualValue = aux + actualValue;
    }

    return actualValue;
}

const FiboList = {};
export const FibonacciRecursive = (n: number): number => {
    if (n === 1) return 0;
    if (n === 2) return 1;

    if(FiboList[n - 1] === undefined)
        FiboList[n - 1] = FibonacciRecursive(n - 1)
    if(FiboList[n - 2] === undefined)
        FiboList[n - 2] = FibonacciRecursive(n - 2)

    return FiboList[n - 1] + FiboList[n - 2]
}

export const Factorial = (n: number): number => {
    if (n === 0 || n === 1) return 1;

    let result = 1;

    for(let i = n; i > 1; i--){
        result = result * i;
    }
    return result;
}