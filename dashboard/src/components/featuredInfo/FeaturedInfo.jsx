import { ArrowDownwardOutlined, ArrowUpwardOutlined } from "@material-ui/icons";
import "./featuredInfo.css";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₹1999</span>
          <span className="featuredMoneyRate">
            -299 <ArrowDownwardOutlined className="featuredIcon negative" />{" "}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₹1999</span>
          <span className="featuredMoneyRate">
            -29.9 <ArrowDownwardOutlined className="featuredIcon negative" />{" "}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₹1999</span>
          <span className="featuredMoneyRate">
            +22.49 <ArrowUpwardOutlined className="featuredIcon" />{" "}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
