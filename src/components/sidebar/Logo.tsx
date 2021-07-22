import styled from 'styled-components';

const H3 = styled.h3`
  color: #253186;
`;

const LogoImg = styled.img`
  width: 180px;
  height: 100px;
`;


const Logo = (props: any) => (
    <>
      <LogoImg
        alt="Logo"
        src="/static/bailey.svg"
        {...props}
      />
    </>
  );
  
  export default Logo;
  