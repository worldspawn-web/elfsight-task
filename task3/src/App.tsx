import styles from './App.module.css';
import { Header, HeaderImage } from './common';
import { RenderCards } from './common/renders/renderCards';

export const App = () => {
  return (
    <div className={styles.page}>
      <Header>
        <HeaderImage src="./public/banner.jpg" />
      </Header>
      <RenderCards />
    </div>
  );
};
