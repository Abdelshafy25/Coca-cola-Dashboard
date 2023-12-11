import "./line.css";
import Radial from "./productionRadialbar";
import LineChart from "./LineChart";
import AreaChart from "./AreaChartbox";

export function Line() {
  return (
    <>
      <div className="production dashboardTitle">Factory Name / Line Name</div>

      <div className="factory-Details">
        <div className="factory-Details-stats">
          <div className="production-details">
            <div className="quantity">
              <div className="quantity-header">
                <div className="quantity-header-icon">
                  <svg
                    id="product"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      id="Path_434"
                      data-name="Path 434"
                      d="M0,0H24V24H0Z"
                      fill="none"
                    />
                    <path
                      id="Path_435"
                      data-name="Path 435"
                      d="M4,7V6A2,2,0,0,1,6,4H8"
                      fill="none"
                      stroke="#2c3e50"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <path
                      id="Path_436"
                      data-name="Path 436"
                      d="M4,17v1a2,2,0,0,0,2,2H8"
                      fill="none"
                      stroke="#2c3e50"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <path
                      id="Path_437"
                      data-name="Path 437"
                      d="M16,4h2a2,2,0,0,1,2,2V7"
                      fill="none"
                      stroke="#2c3e50"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <path
                      id="Path_438"
                      data-name="Path 438"
                      d="M16,20h2a2,2,0,0,0,2-2V17"
                      fill="none"
                      stroke="#2c3e50"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <rect
                      id="Rectangle_283"
                      data-name="Rectangle 283"
                      width="1"
                      height="2"
                      transform="translate(5 11)"
                      fill="none"
                      stroke="#2c3e50"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <line
                      id="Line_121"
                      data-name="Line 121"
                      y2="2"
                      transform="translate(10 11)"
                      fill="none"
                      stroke="#2c3e50"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <rect
                      id="Rectangle_284"
                      data-name="Rectangle 284"
                      width="1"
                      height="2"
                      transform="translate(14 11)"
                      fill="none"
                      stroke="#2c3e50"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <line
                      id="Line_122"
                      data-name="Line 122"
                      y2="2"
                      transform="translate(19 11)"
                      fill="none"
                      stroke="#2c3e50"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
                <div className="quantity-header-title">Total Production</div>
              </div>

              <hr />
              <div className="line-production">
                <div className="line-production-details">
                  <div className="line-production-group">
                    <div className="total-production">
                      7,000 <span>KM</span>
                    </div>
                    <div className="unit">Actual Production</div>
                  </div>
                  <div className="line-production-group">
                    <div className="total-production">
                      5,000 <span>bph</span>
                    </div>
                    <div className="unit">Production /h</div>
                  </div>
                </div>

                <div className="line-production-progress">
                  <div className="bar-container">
                    <div className="progress-bar-production">
                      <span></span>
                    </div>
                    <div>Production Yield</div>
                  </div>
                  <div className="precentege-prog">75%</div>
                </div>
              </div>
            </div>

            <div className="performance">
              <div className="performance-header">
                <div className="performance-icon">
                  <svg
                    id="pereformance"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      id="Path_446"
                      data-name="Path 446"
                      d="M0,0H24V24H0Z"
                      fill="none"
                    />
                    <circle
                      id="Ellipse_135"
                      data-name="Ellipse 135"
                      cx="2"
                      cy="2"
                      r="2"
                      transform="translate(12 4)"
                      fill="none"
                      stroke="#2c3e50"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <line
                      id="Line_123"
                      data-name="Line 123"
                      x2="8"
                      transform="translate(4 6)"
                      fill="none"
                      stroke="#2c3e50"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <line
                      id="Line_124"
                      data-name="Line 124"
                      x2="4"
                      transform="translate(16 6)"
                      fill="none"
                      stroke="#2c3e50"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <circle
                      id="Ellipse_136"
                      data-name="Ellipse 136"
                      cx="2"
                      cy="2"
                      r="2"
                      transform="translate(6 10)"
                      fill="none"
                      stroke="#2c3e50"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <line
                      id="Line_125"
                      data-name="Line 125"
                      x2="2"
                      transform="translate(4 12)"
                      fill="none"
                      stroke="#2c3e50"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <line
                      id="Line_126"
                      data-name="Line 126"
                      x2="10"
                      transform="translate(10 12)"
                      fill="none"
                      stroke="#2c3e50"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <circle
                      id="Ellipse_137"
                      data-name="Ellipse 137"
                      cx="2"
                      cy="2"
                      r="2"
                      transform="translate(15 16)"
                      fill="none"
                      stroke="#2c3e50"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <line
                      id="Line_127"
                      data-name="Line 127"
                      x2="11"
                      transform="translate(4 18)"
                      fill="none"
                      stroke="#2c3e50"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <line
                      id="Line_128"
                      data-name="Line 128"
                      x2="1"
                      transform="translate(19 18)"
                      fill="none"
                      stroke="#2c3e50"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
                <div className="performance-title">
                  Performance Indicator KPI
                </div>
              </div>

              <hr />

              <div className="performance-stats">
                <div className="performance-stats-bar">
                  <div>
                    <Radial color={["#08415C"]} />
                    <div className="oee">OEE</div>
                  </div>
                </div>

                <div class="vl"></div>

                <div className="progress">
                  <div className="progress-group">
                    <div className="progress-bar-line">
                      <div className="bar-line">
                        <span className="performance-pro-line"></span>
                      </div>
                      <div className="progress-property">Pereformance</div>
                    </div>
                    <div className="progress-precentege">80%</div>
                  </div>

                  <div className="progress-group">
                    <div className="progress-bar-line">
                      <div className="bar-line">
                        <span className="quality-pro-line"></span>
                      </div>
                      <div className="progress-property">Quality</div>
                    </div>
                    <div className="progress-precentege">60%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="quantity">
              <div className="quantity-header">
                <div className="quantity-header-icon">
                  <svg
                    id="usage"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      id="Path_735"
                      data-name="Path 735"
                      d="M0,0H24V24H0Z"
                      fill="none"
                    />
                    <line
                      id="Line_214"
                      data-name="Line 214"
                      y2="18"
                      transform="translate(17 3)"
                      fill="none"
                      stroke="#2c3e50"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <path
                      id="Path_736"
                      data-name="Path 736"
                      d="M10,18,7,21,4,18"
                      fill="none"
                      stroke="#2c3e50"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <line
                      id="Line_215"
                      data-name="Line 215"
                      y1="18"
                      transform="translate(7 3)"
                      fill="none"
                      stroke="#2c3e50"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <path
                      id="Path_737"
                      data-name="Path 737"
                      d="M20,6,17,3,14,6"
                      fill="none"
                      stroke="#2c3e50"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
                <div className="quantity-header-title">Power KPI</div>
              </div>

              <hr />

              <div className="line-production">
                <div className="line-production-details">
                  <div className="line-production-group">
                    <div className="total-production">
                      5,000 <span>KWH</span>
                    </div>
                    <div className="unit">Energy Used</div>
                  </div>
                  <div className="line-production-group">
                    <div className="total-production">7,000</div>
                    <div className="unit">Power factor</div>
                  </div>
                </div>

                <div className="line-production-group">
                  <div className="total-production">
                    5,000 <span>KWH</span>
                  </div>
                  <div className="unit">Energy Used</div>
                </div>
              </div>
            </div>
          </div>

          <div className="loss-stats">
            <div className="loss-stats-title">activity</div>
            <hr />
            <LineChart />
          </div>

          <div className="time-line">
            <div className="time-line-header">
              <div className="time-icon">
                <svg
                  id="Activity"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 22 22"
                >
                  <path
                    id="Path_458"
                    data-name="Path 458"
                    d="M0,0H22V22H0Z"
                    fill="none"
                  />
                  <path
                    id="Path_459"
                    data-name="Path 459"
                    d="M3,11.333H6.667l2.75,7.333L13.083,4l2.75,7.333H19.5"
                    transform="translate(-0.25 -0.333)"
                    fill="none"
                    stroke="#2c3e50"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
              <div className="time-line-header-title">Time line</div>
            </div>
            <div className="time-bar-section">
              <div className="line-name">
                <span>LINE</span>
                <span>NAME</span>
              </div>
              <div className="time-bar">
                <span className="one"></span>
                <span className="two"></span>
                <span className="three"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="right-section-group">
            <div className="group-header">
              <div className="dot color-1"></div>
              <div className="group-header-title">CYCLE TIME</div>
              <div className="unit">[seconds]</div>
            </div>
            <hr />
            <div>
              <AreaChart color={["#ff9f1c"]} />
            </div>
          </div>

          <div className="right-section-group">
            <div className="group-header">
              <div className="dot color-2"></div>
              <div className="group-header-title">SPEED</div>
              <div className="unit">[pbh]</div>
            </div>
            <hr />
            <div>
              <AreaChart color={["#CA4E82"]} />
            </div>
          </div>

          <div className="right-section-group">
            <div className="group-header">
              <div className="dot color-3"></div>
              <div className="group-header-title">UPTIME</div>
              <div className="unit">[bottle]</div>
            </div>
            <hr />
            <div>
              <AreaChart color={["#00D1DE"]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
