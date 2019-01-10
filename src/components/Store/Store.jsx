import _ from 'lodash'
import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const columns = _.times(16, i => (
    <Grid.Column key={i}>
        <FontAwesomeIcon icon="gamepad" />
    </Grid.Column>
))

const GridExampleGrid = () => <Grid>{columns}</Grid>

export default GridExampleGrid
