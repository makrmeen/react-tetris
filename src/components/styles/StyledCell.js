import styled from 'styled-components';

export const StyledCell = styled.div`
  width: auto;
  background: rgba(${props => props.color}, 0.8);
  border: ${props => (props.type === 0 ? '0px solid' : '4px solid')};
  border-bottom-color: rgba(${props => props.color}, 0.1);
  border-right-color: rgba(${props => props.color}, 1);
  border-top-color: rgba(${props => props.color}, 1);
  border-left-color: rgba(${props => props.color}, 0.3);
`
//border: this is  turner operation if  props check if props = 0n means there is no shape so we do not want a border if not give it a 4px border
//border-....-...: this will give the border effect to our shapes