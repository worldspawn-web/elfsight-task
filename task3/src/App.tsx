// import { getCharacter } from 'rickmortyapi';

import styles from './App.module.css';
import { Header, HeaderImage } from './common';

function App() {
  return (
    <div className={styles.page}>
      <Header>
        <HeaderImage src="./public/banner.jpg" />
      </Header>
    </div>
  );
}

export default App;
