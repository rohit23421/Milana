import { Visibility } from "@material-ui/icons";
import "./widgetSm.css";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://i.pinimg.com/736x/db/38/29/db382916e20ffe546ff6e5ae6a1b0de0.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Tony Stark</span>
            <span className="widgetSmUserTitle">Avenger</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/47/1542988952-captain-america-civil-war-128.png?crop=0.417xw:1.00xh;0.269xw,0&resize=480:*"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Steve Roggers</span>
            <span className="widgetSmUserTitle">Captain America</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://media.wired.com/photos/5c6ec75004bf062cbff2b89a/1:1/w_1597,h_1597,c_limit/Culture_Monitor_Hemsworth-861011330.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Thor</span>
            <span className="widgetSmUserTitle">God of thunder</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn-cafcd.nitrocdn.com/aFmWzabWDJaERlGWjQpaIybOtmbHEHUw/assets/static/source/wp-content/uploads/2020/04/bd788e0544ed388772d16228f0c8d182.2019.08.19-03.11-boundingintocomics-5d5abc076745b.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Stephen Strange</span>
            <span className="widgetSmUserTitle">Dr Strange</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://www.looper.com/img/gallery/why-hawkeye-will-be-more-important-than-you-think-in-endgame/intro-1544459212.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Clint Barton</span>
            <span className="widgetSmUserTitle">Hawkeye</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
