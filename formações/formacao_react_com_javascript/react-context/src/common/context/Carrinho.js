import { useContext } from 'react';
import { createContext, useState } from 'react';

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = 'Carrinho';

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);

    return (
        <CarrinhoContext.Provider value=
            {{
                carrinho,
                setCarrinho
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext);

    function addProduct(newProduct) {
        const hasProduct = carrinho.some(product => product.id === newProduct.id);

        if (!hasProduct) {
            newProduct.quantidade = 1;
            return setCarrinho(product => [...product, newProduct]);
        }

        setCarrinho(previousCart => previousCart.map(cartItem => {
            if (cartItem.id === newProduct.id) cartItem.quantidade += 1;
            return cartItem;
        }))
    }

    function removeProduct(id) {
        const currentProduct = carrinho.find(product => product.id === id);

        setCarrinho(previousCart => previousCart.map(cartItem => {
            if (currentProduct.id === cartItem.id) cartItem.quantidade -= 1;
            return cartItem;
        }))
    }

    return {
        carrinho,
        setCarrinho,
        addProduct,
        removeProduct
    }
}
