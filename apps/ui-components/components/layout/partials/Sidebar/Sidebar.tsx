import { useRouter } from 'next/router';
import { FC } from 'react';
import styled from 'styled-components';
import ComponentItem from './partials/ComponentItem';

const list = [
  {
    id: 1,
    title: 'Home',
    href: '/',
  },
  {
    id: 2,
    title: 'Button',
    href: '/button',
  },
];

const Wrapper = styled.div`
  display: flex;
  overflow-y: auto;
  width: 100%;
  border-right: 1px solid #e8e8e8;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Sidebar: FC = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <List>
        {list.map((item) => (
          <ComponentItem
            title={item.title}
            href={item.href}
            key={`component-${item.id}`}
            focused={router.pathname === item.href}
          />
        ))}
      </List>
    </Wrapper>
  );
};

export default Sidebar;
