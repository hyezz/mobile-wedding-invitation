import styled from '@emotion/styled';

/* lhj 구글 캘린더 추가하기 */
const RoundButton = styled.button`
  padding: 0.5em 1em;
  border-radius: 20px;
  outline: none;
  box-shadow: none;
  font-size: 0.9rem;
  cursor: pointer;
  color:rgb(77, 68, 73);
  text-decoration: none;
  background-color: #e6ece1;
`.withComponent('a');

export default RoundButton;
