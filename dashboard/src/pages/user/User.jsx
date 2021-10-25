import {
  Cake,
  EmailOutlined,
  PermIdentity,
  PhoneOutlined,
  PinDropOutlined,
  PublishOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              className="userShowImg"
              src="https://cdn1-www.superherohype.com/assets/uploads/2019/05/stark-quantum-featured-1.jpg"
              alt=""
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Tony Stark</span>
              <span className="userShowUserTitle">Best Avenger</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">ironman28</span>
            </div>
            <div className="userShowInfo">
              <Cake className="userShowIcon" />
              <span className="userShowInfoTitle">28.07.2000</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneOutlined className="userShowIcon" />
              <span className="userShowInfoTitle">+91 9999999990</span>
            </div>
            <div className="userShowInfo">
              <EmailOutlined className="userShowIcon" />
              <span className="userShowInfoTitle">tonystark@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <PinDropOutlined className="userShowIcon" />
              <span className="userShowInfoTitle">PA, California | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">EDIT</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="ironman28"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Tony Stark"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="tonystark@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+91 9999999990"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="PA, California | USA"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJR7duRUdZc1jECoiNbNkTzQeXGWjpNslpcg&usqp=CAU"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <PublishOutlined className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">UPDATE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
