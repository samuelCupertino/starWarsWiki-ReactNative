import { Container, Image, Title, Description, Column } from './styles'

export const CardHorizontal = ({ item }) => (
    <Container>
        <Image source={{ uri: item.image_url }} />
        <Column>
            <Title>{item.title}</Title>
            <Description>{item.description.slice(0, 150)}...</Description>
        </Column>
    </Container>
)
