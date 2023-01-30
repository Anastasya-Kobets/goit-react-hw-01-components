import Profiles from "./Profile/Profiles";
import user from './user.json';
import Statistics from './Statistics/Statistics';
import data from './data.json';
import FriendList from './FriendList/FriendList';
import friends from './friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './transactions.json';
import Container from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profiles
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/*<Statistics stats={data} />*/}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};

console.log(user.stats)
