import React from 'react'
import { Header, Segment, Grid } from 'semantic-ui-react'
import ScoringSystem from '../components/ScoringSystem'
const IndexView = () => {
    return (
        <Grid textAlign='center' style={{ height: '60vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 800 }}>
                <Grid.Row style={{ height: 'auto', marginBottom: '20px' }}>
                    <Segment style={{ padding: '5px' }} inverted color='blue'>
                        <Header as='h1'>Scoring System</Header>
                    </Segment>
                </Grid.Row>
                <Grid.Row>
                    <ScoringSystem></ScoringSystem>
                </Grid.Row>
            </Grid.Column>
        </Grid>
    )
}

export default IndexView