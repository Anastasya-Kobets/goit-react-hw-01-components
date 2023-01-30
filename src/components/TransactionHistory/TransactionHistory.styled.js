import styled from '@emotion/styled';
const Table = styled.table`
  margin: 0 auto;
  width: 70%;
  margin-top: 32px;
  border-color: #e5e5e5;
`;

const Thead = styled.thead`
  background-color: #03bcd2;
  color: white;
`;

const Tr = styled.tr`
  :nth-of-type(2n) {
    background-color: #f2f2f2;
  }
`;
const Tbody = styled.tbody`
  text-align: center;
  padding: 8px;
`;

const Th = styled.th`
  padding: 8px;
`;

const Td = styled.td`
  padding: 8px;
  //   text-align: left;
`;
export { Table, Thead, Tr, Tbody, Th, Td };


