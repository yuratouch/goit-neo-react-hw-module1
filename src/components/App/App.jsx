import style from "./App.module.css";

import Profile from "/src/components/Profile/Profile";
import FriendList from "/src/components/FriendList/FriendList";
import TransactionHistory from "/src/components/TransactionHistory/TransactionHistory";

import userData from "/src/data/user";
import friendsData from "/src/data/friends";
import transactionsData from "/src/data/transactions.json";

const App = () => {
  const { username: name, tag, location, avatar: image, stats } = userData;

  return (
    <main className={style.container}>
      <Profile
        name={name}
        tag={tag}
        location={location}
        image={image}
        stats={stats}
      />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </main>
  );
};

export default App;
