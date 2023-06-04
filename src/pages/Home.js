import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
function Home() {
  return (
    <div className="pageContainer homePage">
      <div className="container">
        <FontAwesomeIcon icon={faCircleXmark} />
      </div>
      <h2>HomePage</h2>
    </div>
  );
}
export default Home;
