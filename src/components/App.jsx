
import { Profile } from "components/Profile/Profile";
import user from '../user.json';

import { Statistics } from 'components/Statistic/Statistic';
import data from '../data.json';

import { Transactions } from "components/Transaction/Transaction";
import transactions from '../transactions.json';

import { FriendList } from "components/Friendlist/Friendlist";
import friends from '../friends.json';


export const App = () => {
  return (
  <>
    <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
    />
    <Statistics 
      stats={data} 
    />
    <FriendList 
      friends={friends} 
    />
    <Transactions 
      items={transactions}
    />
  </>
  );
};