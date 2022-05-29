import Image from 'next/image';
import styled from 'styled-components';

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 768px;
  padding-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  color: rgba(55, 65, 81, 1);
  width: 100%;
`;

const Welcome = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 2.5rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: -0.025em;
  line-height: 1;
  margin-right: 20px;
  & > span {
    display: block;
    font-size: 1.875rem;
    font-weight: 300;
    line-height: 2.25rem;
    margin-bottom: 0.5rem;
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <Wrapper>
        <Container>
          <Welcome>
            <Title>
              <span> Hello there, </span>
              Welcome to CreaDiv UI Kit
            </Title>
            <Image
              src="/Creadiv.svg"
              alt="creadiv-logo"
              width="80px"
              height="80px"
            />
          </Welcome>
        </Container>
      </Wrapper>
    </StyledPage>
  );
}

export default Index;
