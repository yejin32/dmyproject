import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Link } from "react-router-dom";

const SSidebarForm = styled.div`
  width: 260px;
  height: 100vh;
  border-right: 2px solid #616161;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #2d2d2d;
  }

  p {
    padding: 20px 0;
  }
`;

const SNavForm = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #2d2d2d;
  /* margin-left: 60px; */

  ul {
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    margin: auto;

    :hover {
      border-radius: 7px;
      background-color: #c4e3cb;
    }
  }

  li {
    display: flex;
    align-items: center;
    padding: 10px;
    padding-left: 60px;
    margin: 10px;
  }

  .nav_icon {
    margin-right: 30px;
  }
`;

const Sidebar = () => {
  return (
    <SSidebarForm>
      <Link to="/">
        <p>Logo Img</p>
      </Link>
      <SNavForm>
        <ul>
          <li>
            <Link to="/">
              <HomeIcon className="nav_icon" />홈
            </Link>
          </li>
          <li>
            <Link to="/">
              <CalendarTodayIcon className="nav_icon" />
              달력
            </Link>
          </li>
          <li>
            <Link to="/">
              <PersonSearchIcon className="nav_icon" />
              프로필
            </Link>
          </li>
          <li>
            <Link to="/">
              <NotificationsActiveIcon className="nav_icon" />
              알림
            </Link>
          </li>
        </ul>
      </SNavForm>
    </SSidebarForm>
  );
};

export default Sidebar;
