import './FriendsPage.css'
import ProfileCard from '../components/ProfileCard'
import BackgroundAnim from "../components/BackgroundAnim"
import SearchBar from '../components/SearchBar'
import GoogleIcon from '../components/GoogleIcon'
const FriendsPage = () => {
  return (
    <BackgroundAnim color="blue" outlineColor="yellow" title="Friends">
      <div className="friends-page">
        <header>
          <SearchBar placeholder="Search Friends" color="blue" style={{marginLeft: '225px', paddingLeft: '184px'}}/>
          <ProfileCard shape="circle" size="50px" cardStyle="square" color="blue" style={{marginRight: '25px'}}>
            <GoogleIcon icon = "add" size="25px" onClick={() => console.log('Add friend')} color="blue" />
            <GoogleIcon icon = "qr_code" size="25px" onClick={() => console.log('Search friend')} color="blue" />
          </ProfileCard>
        </header>
        <main>
          <div className="profile-grid">
            {Array.from({ length: 35 }, (_, index) => (
              <ProfileCard 
                key={index}
                shape="circle" 
                size="100%" 
                cardStyle="square" 
                color="blue"
              >
                <div>Alex</div>
              </ProfileCard>
            ))}
          </div>
        </main>
      </div>
    </BackgroundAnim>
  )
}

export default FriendsPage