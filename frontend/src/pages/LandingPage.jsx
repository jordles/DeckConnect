import BackgroundAnim from '../components/BackgroundAnim'
import './LandingPage.css'
import NavBar from '../components/NavBar'
import Logo from '../components/Logo'
const LandingPage = () => {
  return (
    <BackgroundAnim color="teal" outlineColor="pink" title="Community" showTitle={false}>
      <div className="landing-page">
        <header>
          <NavBar />
        </header>
        <main>
          <Logo />
          <div className="slogan">Grab a Deck and Let's Connect!</div>
        </main>
      </div>
    </BackgroundAnim>
  )
}

export default LandingPage