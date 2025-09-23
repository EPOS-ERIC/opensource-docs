import styled from 'styled-components';

export const Demo = styled.div`
  font-family: monospace;
  white-space: pre;           
  background-color: black;
  color: white;
  border: 5px solid #457945;
  border-radius: 5px;
  font-size: 8.5px;            
  line-height: 1.4;           
  text-align: left;          
  padding: 0;              
  width: 975px;                
  height: 500px;              /* FIXED height */
  overflow-x: visible;        
  overflow-y: auto;           /* scroll if content exceeds box */
  margin: 0;  
  display: flex;
  flex-direction: column;     /* stack text vertically */
  justify-content: center;    /* vertical centering */
  align-items: flex-start;    /* left alignment */        
`;
