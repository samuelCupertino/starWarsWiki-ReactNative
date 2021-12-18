import { ScreenScrollContainer, Hero, GoBack } from '../../components'
import { useDataStore } from '~/services/stores'

export const Detail = () => {
    const { selectedData } = useDataStore()
    
    return (
        <ScreenScrollContainer>
            <GoBack />
            <Hero item={selectedData} onDetail/>
        </ScreenScrollContainer>
    )
}
