import 'clear.css';
import styles from 'styles.css';
import React from 'react';
import {render} from 'react-dom';

import styled from 'emotion/react';

class Tarmac extends React.Component {
  render () {

    const Container = styled('h1')`
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      flex: 1 0 100%;
    `;

    const HeaderOne = styled('h1')`
      font-size: 3.4rem;
      line-height: 1em;
      margin: 0 0 0.67em 0;
    `;

    return (
      <main className={styles.container}>
        <HeaderOne>Tarmac</HeaderOne>
      </main>
    )
  }
}

render(
  <Tarmac />,
  document.getElementById('root')
)
