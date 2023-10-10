import React, { useEffect, useState} from "react";
import Navbar from "../../components/navbar/navbar";
import Feed from "../../components/feed/Feed";
import RightSidebar from "../../components/rightsidebar/RightSideBar";
import Submit from "../../components/submit/submit";
import styles from "./home.module.css"
import Friends from "../../components/friends/friends";
import NavbarPlaceholder from "../../components/navbarPlaceholder/navbarplaceholder";
import UserProfileCard from "../../components/userprofilecard/userprofilecard";

const Home = ({ navigate }) => {
  
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    if(token) {
      fetch("/users/home", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(async data => {
          window.localStorage.setItem("token", data.token)
          setToken(window.localStorage.getItem("token"))
          setUser(data.user);
        })
    }
  }, [token, setToken, setUser])
  
  const logout = () => {
    window.localStorage.removeItem("token")
    navigate('/login')
  }

  if(token) {
    return(
      <>
      <div id='homepage' className={styles.homepage}>

        <nav id="header" className={styles.header}>
          <Navbar logout={logout} user = {user}/>
          <NavbarPlaceholder/>
          <h1>GameBook {user.username}</h1>
        </nav>

        <section id='homepage-left' className={styles.left}>
            <UserProfileCard user = {user}/>
            <Friends token={token} setToken={setToken}/>
        </section>

        <main id='homepage-feed' className={styles.main}>
              <Submit setPosts={setPosts} token={token} setToken={setToken}/>
              <Feed className={StyleSheet.feed} posts={posts} setPosts={setPosts} logout={logout} token={token} setToken={setToken}/>
        </main>

        
        
        <aside id='homepage-right' className={styles.right}>
          {<RightSidebar />}
        </aside>
            
        <footer id='homepage-footer' className={styles.footer}>
        </footer>
        
        </div>
      </>
    )
  } else {
    navigate('/login')
  }
}

export default Home;