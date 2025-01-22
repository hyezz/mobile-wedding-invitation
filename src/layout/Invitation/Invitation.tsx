import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';
import calendarImg from '@/assets/images/calendar.png';

function Invitation() {
  const { greeting } = data;
  return (
    <InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>
      <Host />
      <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
      <CalendarImg src={calendarImg} />
    </InvitationWrapper>
  );
}

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const CalendarImg = styled.img`
  /*border-radius: 200px 200px 0 0;*/
  width: 100%;
  max-width: 450px;
  /*padding-top: 20px;*/
`;
