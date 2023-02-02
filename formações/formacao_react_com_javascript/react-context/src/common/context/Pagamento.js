import { useContext } from "react";
import { createContext, useState } from "react";

export const paymentContext = createContext();
paymentContext.displayName = 'Pagamento';

export const PaymentProvider = ({ children }) => {
    const paymentTypes = [
        {
            name: 'Boleto',
            fee: 1,
            id: 1
        },
        {
            name: 'Cartão de crédito',
            fee: 1.3,
            id: 2
        },
        {
            name: 'Pix',
            fee: 1,
            id: 3
        },
        {
            name: 'Crediário',
            fee: 1.5,
            id: 4
        }
    ]

    const [payment, setPayment] = useState(paymentTypes[0]);

    return (
        <paymentContext.Provider value={{
            paymentTypes,
            payment,
            setPayment
        }}>
            {children}
        </paymentContext.Provider>
    )
}

export const usePaymentContext = () => {
    const {
        paymentTypes,
        payment,
        setPayment
    } = useContext(paymentContext);

    function changePayment(id) {
        const currentPayment = paymentTypes.find(paymentForm => paymentForm.id === id);
        setPayment(currentPayment);
    }

    return {
        paymentTypes,
        payment,
        changePayment
    }
}


