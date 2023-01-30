import styled from '@emotion/styled';


const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 8px;
  row-gap: 8px;
  border: 1px solid black;
  border-radius: 5px;
  width: 200px;
`;

const Status = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

const Avatar = styled.img`
  width: 48px;
`;

const Name = styled.p`
  font-weight: 600;
  font-size: 24px;
`;

export { FriendItem, Status, Avatar, Name };
