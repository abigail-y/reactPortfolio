import profilePic from '../img/me2.JPG'; // Replace with your actual image file path

const Home = () => {
  return (
    <div className="home-container">
      <img src={profilePic} alt="Abigail Yanos" className="profile-pic" />
      <h1>Abigail Yanos</h1>
      <h2>Digital Media Web Designer & Developer</h2>
      <p>
        Welcome to my portfolio — a place where creativity meets code! <br />
      </p>
    </div>
  );
};

export default Home;
