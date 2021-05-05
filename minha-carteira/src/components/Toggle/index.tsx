import { findAllByDisplayValue } from '@testing-library/dom';
import React from 'react';


import { Container, ToggleLabel, ToggleSelector } from './styles';


const Toggle: React.FC = () => {
    return <Container>
        <ToggleLabel>Light</ToggleLabel>
        <ToggleSelector
          checked 
          uncheckedIcon={false}
          checkedIcon={false}
          onChange = {() => console.log ('mudou')}
        ></ToggleSelector>
        <ToggleLabel>Dark</ToggleLabel>
    </Container>;
}

export default Toggle;