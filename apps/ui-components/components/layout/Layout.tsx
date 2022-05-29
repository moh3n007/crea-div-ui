import { FC } from 'react';
import styled, { useTheme } from 'styled-components';
import Sidebar from './partials/Sidebar/Sidebar';

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 250px auto;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  padding: 12px 32px;
  overflow-y: auto;
`;

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: FC<LayoutProps> = (props) => {
    const theme = useTheme();
    console.log(theme);
    
  return (
    <Wrapper>
      <Sidebar />
      <Main>{props.children}</Main>
    </Wrapper>
  );
};

export default Layout;
