import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

interface InnerTitleProps {
    focused: boolean;
}

const Wrapper = styled.a`
    display: flex;
    padding: 8px 24px;
    `;

const Title = styled.p<InnerTitleProps>`
  font-size: 20px;
  color: ${props => props.focused ? '#1890ff' : '#666'};
`;

interface ComponentItemProps {
  title: string;
  href: string;
  focused: boolean;
}

const ComponentItem: FC<ComponentItemProps> = (props) => {
  const { title, href, focused } = props;

  return (
    <Link href={href} passHref>
      <Wrapper>
        <Title focused={focused}>{title}</Title>
      </Wrapper>
    </Link>
  );
};

export default ComponentItem;
