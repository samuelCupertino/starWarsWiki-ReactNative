import { useState, useEffect } from 'react'
import {
    ScreenScrollContainer,
    Text,
    GridList,
    Input,
    Loader,
    Container,
} from '~/components'
import { useGetData } from '~/services/hooks'

export const Search = () => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const [searchTimeId, setSearchTimeId] = useState(null)
    const [loading, setLoading] = useState(false)
    const { getSearchResult } = useGetData()

    const callGetSearchResult = () => {
        clearTimeout(searchTimeId)
        const time = setTimeout(async () => {
            setLoading(true)
            const result = await getSearchResult(query)
            setResults(result)
            setLoading(false)
        }, 500)
        setSearchTimeId(time)
    }

    useEffect(callGetSearchResult, [query])

    return (
        <ScreenScrollContainer withPadding>
            <Text fontFamily="bold" size={28} mb={20}>
                Pesquisar
            </Text>
            <Input
                mb={20}
                value={query}
                onChangeText={(text) => setQuery(text)}
                placeholder="Filme ou nome do personagem"
            />
            {loading 
                ? (
                    <Container h={500} justify="center" align="center">
                        <Loader />
                    </Container>
                ) 
                : (
                    <GridList mb={15} data={results} />
                )
            }
        </ScreenScrollContainer>
    )
}
