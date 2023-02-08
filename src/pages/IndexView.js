import React from 'react'
import { Header, Segment, Grid } from 'semantic-ui-react'
import ScoringSystem from '../components/ScoringSystem'
import { ScoringUtil } from '../utils/ScoringUtil'

const IndexView = () => {
    return (
        <Grid textAlign='center' style={{ marginTop: '200px'}}>
            <Grid.Column style={{ maxWidth: '800px' }}>
                <Grid.Row style={{ height: 'auto', marginBottom: '20px' }}>
                    <Segment style={{ marginBottom: '2em', padding: '5px' }} inverted color='blue'>
                        <Header as='h1'>Scoring System</Header>
                    </Segment>
                </Grid.Row>
                <Grid.Row>
                    <ScoringSystem data={ScoringUtil}></ScoringSystem>
                </Grid.Row>
            </Grid.Column>
        </Grid>
    )
}

export default IndexView