import { Button } from '@crea-div-ui/core';
import styled from 'styled-components';

const List = styled.div<{ column?: boolean; verticalCenter?: boolean }>`
  display: flex;
  grid-gap: 18px;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  align-items: ${(props) => (props.verticalCenter ? 'center' : 'flex-start')};
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ButtonPage = () => {
  return (
    <List column>
      <div>
        <Title>Basic Button</Title>
        <List>
          <Button>Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </List>
      </div>
      <div>
        <Title>Color</Title>
        <List>
          <Button color="secondary">Secondary</Button>
          <Button color="cancel">Cancel</Button>
        </List>
      </div>
      <div>
        <Title>Bordered Variant</Title>
        <List>
          <Button variant="bordered" color="secondary">
            Secondary Bordered
          </Button>
        </List>
      </div>
      <div>
        <Title>Focused and Disabled</Title>
        <List>
          <Button disabled>Disabled</Button>
          <Button focused>Focused</Button>
        </List>
      </div>
      <div>
        <Title>Icon on the left or right</Title>
        <List>
          <Button leftIcon={<span>Left Icon</span>}>Button</Button>
          <Button rightIcon={<span>Right Icon</span>}>Button</Button>
        </List>
      </div>
      <div>
        <Title>Size</Title>
        <List verticalCenter>
          <Button size="large">Large</Button>
          <Button>Medium</Button>
          <Button size="small">Small</Button>
        </List>
      </div>
      <div>
        <Title>Loading</Title>
        <List>
          <Button loading>loading</Button>
        </List>
      </div>
    </List>
  );
};

export default ButtonPage;
