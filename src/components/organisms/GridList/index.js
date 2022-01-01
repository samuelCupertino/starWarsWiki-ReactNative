import { Text, Container } from '~/components/atoms'
import { Card } from '~/components/molecules'
import { NoDataImage, ContainerGridList } from './styles'
import noDataFound from '../../../../assets/no-data-search.png'

export const GridList = ({ data, m, mt, mr, mb, ml }) => (
    <ContainerGridList>
        {data.length
            ? (
                data.map((item, index) => (
                    <Card item={item} {...{m, mt, mr, mb, ml}} size="large" key={index}/>
                ))
            )
            : (
                <Container justify="center" align="center" h={500}>
                    <NoDataImage
                        resizeMode="contain"
                        source={noDataFound}
                    />
                    <Text fontFamily="semiBold" size={14} mt={12}>
                        Nenhum dado encontrado.
                    </Text>
                </Container>
            )
        }
    </ContainerGridList>
)
