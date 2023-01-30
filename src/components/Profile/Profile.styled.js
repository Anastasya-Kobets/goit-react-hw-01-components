import styled from '@emotion/styled';


const Card = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
`;

const ProfileDescription = styled.div`
  padding: 16px;
`;

const Image = styled.img`
  width: 120px;
  border-radius: 50%;
  border: 1px solid;
  overflow: hidden;
  margin-bottom: 16px;
`;

const ProfileName = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 8px;
`;

const Tag = styled.p`
  font-weight: 400;
  margin-bottom: 8px;
`;

const Location = styled.p`
  font-weight: 400;
`;

const ProfileStats = styled.ul`
  padding: 0;
  display: flex;
  list-style-type: none;
`;

const ProfileList = styled.li`
  padding: 8px;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 3px;
  background-color: #80808030;
`;

const Label = styled.span`
  font-weight: 400;
`;
const Quantity = styled.span`
  font-weight: 700;
`;

export {
  Image,
  Card,
  ProfileDescription,
  ProfileName,
  Tag,
  Location,
  ProfileStats,
  ProfileList,
  Label,
  Quantity,
};
