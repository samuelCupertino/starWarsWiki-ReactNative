import { Container, TabBar, TabBarItem, TabBarItemPlus, BorderOutSide, CurTabIndicator } from './styles'

import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

import { metrics } from '../../styles/metrics'

export const TabBarTest = ({ navigation }) => {

    return (
        <Container>
            <TabBar>
                <TabBarItem>
                    <FontAwesome5 name="truck" size={metrics.vw(6)} color="rgba(0,0,0, 0.4)" />
                </TabBarItem>
                <TabBarItem>
                    <FontAwesome5 name="map-marked-alt" size={metrics.vw(6)} color="red" />
                </TabBarItem>
                <TabBarItemPlus>
                    <BorderOutSide />
                    <FontAwesome5 name="plus" size={metrics.vw(6)} color="#002945" />
                </TabBarItemPlus>
                <TabBarItem>
                    <FontAwesome5 name="box-open" size={metrics.vw(6)} color="rgba(0,0,0, 0.4)" />
                </TabBarItem>
                <TabBarItem>
                    <FontAwesome5 name="boxes" size={metrics.vw(6)} color="rgba(0,0,0, 0.4)" />
                </TabBarItem>
                <CurTabIndicator />
            </TabBar>
        </Container>
    )
}