import { useContext, useEffect } from 'react';
import { createContext, useState } from 'react';

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = 'Carrinho';

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
    const [productQuantity, setProductQuantity] = useState(0);
    const [cartTotalValue, setCartTotalValue] = useState(0);

    return (
        <CarrinhoContext.Provider value=
            {{
                carrinho,
                setCarrinho,
                productQuantity,
                setProductQuantity,
                cartTotalValue,
                setCartTotalValue
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    const {
        carrinho,
        setCarrinho,
        productQuantity,
        setProductQuantity,
        cartTotalValue,
        setCartTotalValue
    } = useContext(CarrinhoContext);

    function handleQuantity(id, quantity) {
        return carrinho.map(cartItem => {
            if (cartItem.id === id) cartItem.quantidade += quantity;
            return cartItem;
        });
    }

    function addProduct(newProduct) {
        const hasProduct = carrinho.some(product => product.id === newProduct.id);

        if (!hasProduct) {
            newProduct.quantidade = 1;
            return setCarrinho(product => [...product, newProduct]);
        }

        setCarrinho(handleQuantity(newProduct.id, 1));
    }

    function removeProduct(id) {
        const currentProduct = carrinho.find(product => product.id === id);

        if (currentProduct.quantidade === 1)
            return setCarrinho(previousCart =>
                previousCart.filter(cartItem => cartItem.id !== currentProduct.id));

        setCarrinho(handleQuantity(currentProduct.id, -1));
    }

    useEffect(() => {
        const { newTotal, newQuantity } = carrinho.reduce((counter, product) => ({
            newTotal: counter.newTotal + (product.valor * product.quantidade),
            newQuantity: counter.newQuantity + product.quantidade
        }), {
            newTotal: 0,
            newQuantity: 0
        })
        setProductQuantity(newQuantity);
        setCartTotalValue(newTotal);
    }, [carrinho, setProductQuantity, setCartTotalValue])


    return {
        carrinho,
        setCarrinho,
        addProduct,
        removeProduct,
        productQuantity,
        setProductQuantity,
        cartTotalValue
    }
}
