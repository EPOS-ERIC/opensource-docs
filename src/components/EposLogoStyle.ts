import styled from 'styled-components';

export const Demo = styled.div`
  font-family: monospace;
  white-space: pre;           
  background-color: black;
  color: white;
  border: 5px solid #457945;
  border-radius: 5px;
  font-size: 2px;            
  line-height: 1.4;           
  text-align: left;           
  padding: 20px;              
  width: 100%;                
  max-width: 300px;          
  height: 135px;              /* FIXED height */
  overflow-x: visible;        
  overflow-y: auto;           /* scroll if content exceeds box */
  margin: 40px auto;          

  @media (max-width: 1024px) {
    font-size: 12px;
    padding: 16px;
    max-width: 95%;
    height: 350px;
  }

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 12px;
    max-width: 95%;
    height: 300px;
  }

  @media (max-width: 414px) {
    font-size: 9px;
    padding: 8px;
    max-width: 100%;
    height: 250px;
  }
`;
