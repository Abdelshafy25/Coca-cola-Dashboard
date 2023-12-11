import "./factorylist.css";
import Stats from "../Dashboard/Stats";

export function FactoryList({ handleFactoryDetails }) {
  return (
    <>
      <div className="info">
        <div className="production">Dashboard / Production</div>
        <div className="category">
          <button>SKU</button>
          <button className="active-btn">producrion</button>
        </div>
      </div>
      <div className="factoryList">
        <List handleFactoryDetails={handleFactoryDetails} />
        <List handleFactoryDetails={handleFactoryDetails} />
        <List handleFactoryDetails={handleFactoryDetails} />
        <List handleFactoryDetails={handleFactoryDetails} />
        <List handleFactoryDetails={handleFactoryDetails} />
        <List handleFactoryDetails={handleFactoryDetails} />
        <List handleFactoryDetails={handleFactoryDetails} />
        <List handleFactoryDetails={handleFactoryDetails} />
      </div>
    </>
  );
}

function List({ handleFactoryDetails }) {
  return (
    <div className="listItem" onClick={handleFactoryDetails}>
      <div className="factoryName">
        <div>Factory Name</div>
      </div>

      <div className="container">
        <div className="property">
          <div className="property-group-left">
            <div className="icons">
              <svg
                id="speed"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  id="Path_703"
                  data-name="Path 703"
                  d="M0,0H24V24H0Z"
                  fill="none"
                />
                <circle
                  id="Ellipse_273"
                  data-name="Ellipse 273"
                  cx="2"
                  cy="2"
                  r="2"
                  transform="translate(10 11)"
                  fill="none"
                  stroke="#2c3e50"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
                <line
                  id="Line_195"
                  data-name="Line 195"
                  y1="2.05"
                  x2="2.05"
                  transform="translate(13.45 9.5)"
                  fill="none"
                  stroke="#2c3e50"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
                <path
                  id="Path_704"
                  data-name="Path 704"
                  d="M6.4,20a9,9,0,1,1,11.2,0Z"
                  fill="none"
                  stroke="#2c3e50"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            <div className="titles">Actual speed</div>
          </div>
          <div className="results">
            5,000 <span>L/s</span>
          </div>
        </div>
        <div className="property">
          <div className="property-group-left">
            <div className="icons">
              <svg
                id="production"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  id="Path_700"
                  data-name="Path 700"
                  d="M0,0H24V24H0Z"
                  fill="none"
                />
                <path
                  id="Path_701"
                  data-name="Path 701"
                  d="M10.325,4.317a1.724,1.724,0,0,1,3.35,0,1.724,1.724,0,0,0,2.573,1.066,1.725,1.725,0,0,1,2.37,2.37,1.724,1.724,0,0,0,1.065,2.572,1.724,1.724,0,0,1,0,3.35,1.724,1.724,0,0,0-1.066,2.573,1.725,1.725,0,0,1-2.37,2.37,1.724,1.724,0,0,0-2.572,1.065,1.724,1.724,0,0,1-3.35,0,1.724,1.724,0,0,0-2.573-1.066,1.725,1.725,0,0,1-2.37-2.37,1.724,1.724,0,0,0-1.065-2.572,1.724,1.724,0,0,1,0-3.35A1.724,1.724,0,0,0,5.383,7.752a1.725,1.725,0,0,1,2.37-2.37,1.723,1.723,0,0,0,2.572-1.065Z"
                  fill="none"
                  stroke="#2c3e50"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
                <path
                  id="Path_702"
                  data-name="Path 702"
                  d="M10,9v6l5-3Z"
                  fill="none"
                  stroke="#2c3e50"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            <div className="titles">Actual production</div>
          </div>
          <div className="results">
            20,000 <span>L</span>
          </div>
        </div>
        <div className="property">
          <div className="property-group-left">
            <div className="icons">
              <svg
                id="cycle"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  id="Path_705"
                  data-name="Path 705"
                  d="M0,0H24V24H0Z"
                  fill="none"
                />
                <path
                  id="Path_706"
                  data-name="Path 706"
                  d="M4.05,11a8,8,0,1,1,.5,4m-.5,5V15h5"
                  fill="none"
                  stroke="#2c3e50"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            <div className="titles">Last hour cycle time</div>
          </div>
          <div className="results">
            20 <span>s</span>
          </div>
        </div>
        <div className="property">
          <div className="property-group-left">
            <div className="icons">
              <svg
                id="active"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  id="Path_707"
                  data-name="Path 707"
                  d="M0,0H24V24H0Z"
                  fill="none"
                />
                <path
                  id="Path_708"
                  data-name="Path 708"
                  d="M3,12H7l3,8L14,4l3,8h4"
                  fill="none"
                  stroke="#2c3e50"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            <div className="titles">Ratio of active lines</div>
          </div>
          <div className="results">5:2</div>
        </div>
      </div>

      <div className="separator">
        <hr />
        <div className="shift">Last Shift</div>
        <hr />
      </div>

      <div className="stats">
        <div>
          <Stats color={["#FF9F1C"]} />
          <div>OEE</div>
        </div>
        <div>
          <Stats color={["#00D1DE"]} />
          <div>SLE</div>
        </div>
        <div>
          <Stats color={["#CA4E82"]} />
          <div>USLE</div>
        </div>
      </div>
      <div className="container">
        <div className="property">
          <div className="property-group-left">
            <div className="icons">
              <svg
                id="volume"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  id="Path_711"
                  data-name="Path 711"
                  d="M0,0H24V24H0Z"
                  fill="none"
                />
                <g
                  id="Group_801"
                  data-name="Group 801"
                  transform="translate(5 7)"
                >
                  <line
                    id="Line_199"
                    data-name="Line 199"
                    y2="5"
                    transform="translate(0 6)"
                    fill="none"
                    stroke="#2c3e50"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                  <line
                    id="Line_200"
                    data-name="Line 200"
                    y2="9"
                    transform="translate(9 2)"
                    fill="none"
                    stroke="#2c3e50"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                  <line
                    id="Line_201"
                    data-name="Line 201"
                    y2="10"
                    transform="translate(5 1)"
                    fill="none"
                    stroke="#2c3e50"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                  <line
                    id="Line_202"
                    data-name="Line 202"
                    y2="11"
                    transform="translate(14)"
                    fill="none"
                    stroke="#2c3e50"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                </g>
              </svg>
            </div>
            <div className="titles">Production volume</div>
          </div>
          <div className="results">
            500 <span>L</span>
          </div>
        </div>
        <div className="property">
          <div className="property-group-left">
            <div className="icons">
              <svg
                id="quality"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  id="Path_714"
                  data-name="Path 714"
                  d="M0,0H24V24H0Z"
                  fill="none"
                />
                <circle
                  id="Ellipse_274"
                  data-name="Ellipse 274"
                  cx="6"
                  cy="6"
                  r="6"
                  transform="translate(6 3)"
                  fill="none"
                  stroke="#2c3e50"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
                <path
                  id="Path_715"
                  data-name="Path 715"
                  d="M0,0V6.831L3.014,4.822,6.028,6.831V0"
                  transform="translate(12.002 15.017) rotate(-30)"
                  fill="none"
                  stroke="#2c3e50"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
                <path
                  id="Path_716"
                  data-name="Path 716"
                  d="M0,0V6.831L3.014,4.822,6.028,6.831V0"
                  transform="translate(6.778 12.004) rotate(30)"
                  fill="none"
                  stroke="#2c3e50"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            <div className="titles">Production quality</div>
          </div>
          <div className="results">5,000</div>
        </div>
      </div>
    </div>
  );
}
