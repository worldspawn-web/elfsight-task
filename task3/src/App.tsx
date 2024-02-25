import { Header, HeaderImage } from './common';
import { RenderCards } from './common/renders';

export const App = () => {
  return (
    <div>
      <Header>
        <HeaderImage src="./public/banner.jpg" />
      </Header>
      <RenderCards />
    </div>
  );
};
