import { useState } from 'react';
import Header from './components/Header.jsx';
import PostForm from './components/PostForm.jsx';
import PostList from './components/PostList.jsx';
import QuickView from './components/QuickView.jsx'
import './App.css';

function App() {
  const [showList, setShowList] = useState(true);

  return (
    <main>
      <header className="panel header">
        <div>
          <h1>board-lab</h1>
          <Header />
        </div>
        <button type="button" onClick={() => setShowList(!showList)}>
          {showList ? '목록 접기' : '목록 펼치기'}
        </button>
      </header>
      <QuickView></QuickView>
      <PostForm />
      {showList && <PostList />}
    </main>
  );
}

export default App;
