import './MainContent.css';

const MainContent = () => (
  <main className="main-content">
    <div className="left-column">
      <button className="leaderboard">Leaderboard</button>
      <div className="continue-learning">
        <h3>Continue Learning</h3>
      </div>
    </div>
    <div className="right-column">
      <div className="daily-double">
        <h3>Daily Double</h3>
      </div>
    </div>
  </main>
);

export default MainContent;
