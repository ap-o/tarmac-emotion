import 'clear.css';
import styles from 'styles.css';
import React from 'react';
import {render} from 'react-dom';

import styled from 'emotion/react';

class Tarmac extends React.Component {
  render () {

    const Container = styled('section')`
      display: flex;
      flex-direction: column;
      background-color: #e0e0e0;
      min-height: 100vh;
      flex: 1 0 100%;
    `;

    const HeaderOne = styled('h1')`
      font-size: 3.4rem;
      line-height: 1em;
      margin: 0 0 0.67em 0;
    `;

    return (
      <Container>
        <HeaderOne>Tarmac</HeaderOne>
      </Container>
    )
  }
}

render(
  <Tarmac />,
  document.getElementById('root')
)
