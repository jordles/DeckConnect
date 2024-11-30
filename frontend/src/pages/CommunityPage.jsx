import BackgroundAnim from "../components/BackgroundAnim";
import "./CommunityPage.css";
import CommunityDeck from "./CommunityBoardPage.jsx";

const CommunityPage = () => {
  return (
    <BackgroundAnim color="teal" outlineColor="pink" title="Community">
      {/* <div className="community-page">
        <header></header>
      </div> */}
      <CommunityDeck />
    </BackgroundAnim>
  );
};

export default CommunityPage;
