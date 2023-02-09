import React, { useState } from 'react'
import { Header, Segment, Grid } from 'semantic-ui-react'
import FormattedCode from '../components/FormattedCode'
import ScoringSystem from '../components/ScoringSystem'
import { ScoringUtil } from '../utils/ScoringUtil'

const IndexView = () => {
    const [results, setResults] = useState({ results: {} });
    const [error, setError] = useState({ results: {} });
    return (
            <Grid textAlign='center' style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'space-between', margin: 0, }}>
                <Grid.Column style={{ width: 'auto', padding:'0' }}>
                    <FormattedCode title="Input"obj={ScoringUtil} />
                </Grid.Column>

                <Grid.Column style={{ width: 'auto' , minWidth: '700px'}}>
                    <Grid.Row>
                        <Segment style={{ marginBottom: '2em', padding: '5px' }} inverted >
                            <Header as='h1'>Scoring System</Header>
                        </Segment>
                    </Grid.Row>
                    <Grid.Row>
                        <ScoringSystem
                            data={ScoringUtil}
                            results={results}
                            setResults={setResults}
                        />
                    </Grid.Row>
                </Grid.Column>
                <Grid.Column style={{ width: 'auto', padding:'0' }}>
                    <FormattedCode title="Results" obj={results} />
                </Grid.Column>
            </Grid>
    )
}

export default IndexView