import styled from 'styled-components';

const Foot = styled.footer`
  border-top: 1px solid rgba(15,23,42,0.06);
  padding: 16px 0;
`;

export default function Footer(){
  return (
    <Foot>
      <div style={{maxWidth:1100, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{fontSize:13,color:'#6b7280'}}>© {new Date().getFullYear()} Lacrei Saúde</div>
        <div>
          <a style={{marginLeft:12}}>Privacidade</a>
        </div>
      </div>
    </Foot>
  );
}
