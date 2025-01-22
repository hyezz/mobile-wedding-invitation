import styled from '@emotion/styled';

export const Heading1 = styled.p`
  font-family: Gyeonggi_Batang_Regular, serif;
  font-size: 1.5rem;
  margin: 10px;
  color: #788D47;
  white-space: pre-line;
`;

export const Heading2 = styled.p`
  font-size: 1rem;
  margin: 10px;
  white-space: pre-line;
`;

export const PointTitle = styled.p`
  font-family: Gyeonggi_Batang_Regular, serif;
  line-height: 1;
  margin: 0;
  color: #788D47;
  white-space: pre-line;
`;

export const Paragraph = styled.p`
  line-height: 2.2rem;
  white-space: pre-line;
`;

export const Caption = styled.p<{ textAlign?: string }>`
  font-family: Gyeonggi_Batang_Regular, serif;
  font-weight: 200;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  white-space: pre-line;
`;
