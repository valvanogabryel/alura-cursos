import { createContext, useContext, useState } from "react";


export const FavoritesContext = createContext();
FavoritesContext.displayName = 'Favoritos';

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                setFavorites
            }
            }
        >
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavoriteContext = () => {
    const { favorites, setFavorites } = useContext(FavoritesContext);

    function addFavorite(newFavorite) {
        const repeatedFavorite = favorites.some(item => item.id === newFavorite.id);
        let newList = [...favorites];
        newList = newList.filter(fav => fav.id !== newFavorite.id);

        if (!repeatedFavorite) {
            newList.push(newFavorite);
            return setFavorites(newList);
        }

        return setFavorites(newList);
    }
    return {
        favorites,
        setFavorites,
        addFavorite
    }
}