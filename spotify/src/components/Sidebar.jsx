import React from "react";
import styled from "styled-components";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import Playlists from "./Playlists";
import { useStateProvider } from "../utils/StateProvider";
import { CgProfile } from "react-icons/cg";

export default function Sidebar() {
  const [{ userInfo }] = useStateProvider();
  return (
    <Container>
      <div className="top__links">
        <div className="logo">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="spotify"
          />
        </div>
        <ul>
          <li>
            <MdHomeFilled />
            <span>For You</span>
          </li>
          <li>
            <MdSearch />
            <span>Top Tracks</span>
          </li>
          <li>
            <IoLibrary />
            <span>Favourites</span>
          </li>
          <li>
            <IoLibrary />
            <span>Recently Played</span>
          </li>
        </ul>
      </div>
      {/* <Playlists /> */}
      <div className="avatar">
        <a href={userInfo?.userUrl}>
          <CgProfile />
          {/* <span>{userInfo?.userName}</span> */}
        </a>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .top__links {
    display: flex;
    flex-direction: column;
    .logo {
      text-align: center;
      margin: 1rem 0;
      img {
        max-inline-size: 80%;
        block-size: auto;
      }
    }
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      li {
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
  }
  .avatar {
    position: absolute;
    width: 68px;
    height: 68px;
    left: 40px;
    top: 450px;
    svg {
      width: 58px;
      height: 58px;
    }

    // background-color: black;
    // padding: 0.3rem 0.4rem;
    // padding-right: 1rem;
    // border-radius: 2rem;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // a {
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    //   gap: 0.5rem;
    //   text-decoration: none;
    //   color: white;
    //   font-weight: bold;
    //   svg {
    //     font-size: 1.3rem;
    //     background-color: #282828;
    //     padding: 0.2rem;
    //     border-radius: 1rem;
    //     color: #c7c5c5;
    //   }
    // }
  }
`;
