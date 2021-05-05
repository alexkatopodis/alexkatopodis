import React from 'react';

import {
    Grid,
} from './styles';

const Content : React.FC = ({ children}) => {
    return (
        <Grid>
            {children}
        </Grid>
    );
}

export default Content;
