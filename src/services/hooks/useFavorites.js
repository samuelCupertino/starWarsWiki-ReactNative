import AsyncStorage from '@react-native-async-storage/async-storage'

const DB_KEY = '@StarWarsWiki:favorites'

export const useFavorites = () => {
    const addFavorite = async (data) => {
        try {
            const dbJson = await AsyncStorage.getItem(DB_KEY)
            const newDb = dbJson ? [...JSON.parse(dbJson), data] : [data]

            await AsyncStorage.setItem(DB_KEY, JSON.stringify(newDb))

            return newDb
        } catch (error) {
            console.log({ error })
            return { error }
        }
    }

    const removeFavorite = async (data) => {
        try {
            const dbJson = await AsyncStorage.getItem(DB_KEY)

            const newDb = dbJson 
                ? JSON.parse(dbJson).filter(({id, type}) => id !== data.id || type !== data.type)
                : []

            await AsyncStorage.setItem(DB_KEY, JSON.stringify(newDb))

            return newDb
        } catch (error) {
            console.log({ error })
            return { error }
        }
    }

    const getFavorites = async () => {
        const favoritesJson = await AsyncStorage.getItem(DB_KEY)
        return favoritesJson ? JSON.parse(favoritesJson) : []
    }

    return {
        addFavorite,
        removeFavorite,
        getFavorites,
    }
}




// import AsyncStorage from '@react-native-async-storage/async-storage'

// const DB_KEY = '@StarWarsWiki:favorites'

// export const useFavorites = () => {
//     const addFavorite = async (data) => {
//         try {
//             const value = await AsyncStorage.getItem(DB_KEY)
//             const newDb = value ? [...JSON.parse(value), data] : [data]

//             await AsyncStorage.setItem(DB_KEY, JSON.stringify(newDb))

//             return newDb
//         } catch (error) {
//             console.log({ error })
//             return { error }
//         }
//     }

//     const getFavorites = async () => {
//         const value = await AsyncStorage.getItem(DB_KEY)
//         return value ? JSON.parse(value) : []
//     }

//     return {
//         addFavorite,
//         getFavorites,
//     }
// }