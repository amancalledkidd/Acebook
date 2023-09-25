import React, { useEffect, useState} from "react";
import Navbar from "../../components/navbar/navbar";
import NavbarItem from "../../components/navbar/navbarItem.js";
import { ReactComponent as PlusIcon } from '../../../images/plus.svg';
// import Post from "../../components/post/Post";
import Feed from "../../components/feed/Feed";
import RightSidebar from "../../components/rightsidebar/RightSideBar";
import SteamGamesList from "../../components/steamgameslist/SteamGamesList";
import Dropdown from "../../components/dropdown/dropdown";
import Submit from "../../components/submit/submit";

const Home = ({ navigate }) => {
  
  // const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  // useEffect(() => {
  //   if(token) {
  //     fetch("/posts", {
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     })
  //       .then(response => response.json())
  //       .then(async data => {
  //         window.localStorage.setItem("token", data.token)
  //         setToken(window.localStorage.getItem("token"))
  //         setPosts(data.posts);
  //       })
  //   }
  // }, [])
    

  const logout = () => {
    window.localStorage.removeItem("token")
    navigate('/login')
  }

  if(token) {
    return(
      <>
      <Navbar logout={logout}/>
      <h1>GameBook</h1>
      <Submit token={token} setToken={setToken}/>
      <Feed logout={logout} token={token} setToken={setToken}/>
      {<RightSidebar />}
      </>
    )
  } else {
    navigate('/login')
  }
}

export default Home;