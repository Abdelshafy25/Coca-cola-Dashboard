import "./factoryName.css";
import Radial from "./productionRadialbar";
import Barchart from "./barchart";
import AreaChart from "./AreaChartbox";

export function FactoryName() {
  return (
    <>
      <div className="production dashboardTitle">Factory Name</div>

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

              <div className="quantity-stats">
                <div className="quantity-stats-row">
                  <div className="row-left-group">
                    <div className="quantity-ststs-icon">
                      <svg
                        id="bottle"
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                      >
                        <path
                          id="Path_718"
                          data-name="Path 718"
                          d="M0,0H24V24H0Z"
                          fill="none"
                        />
                        <path
                          id="Path_719"
                          data-name="Path 719"
                          d="M10,5h4V3a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1Z"
                          fill="none"
                          stroke="#2c3e50"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <path
                          id="Path_720"
                          data-name="Path 720"
                          d="M14,3.5a7.825,7.825,0,0,0,1.45,4.537l.05.07A8.093,8.093,0,0,1,17,12.8V19a2,2,0,0,1-2,2H9a2,2,0,0,1-2-2V12.8A8.091,8.091,0,0,1,8.5,8.107l.05-.07A7.823,7.823,0,0,0,10,3.5"
                          fill="none"
                          stroke="#2c3e50"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <path
                          id="Path_721"
                          data-name="Path 721"
                          d="M7,14.8A2.4,2.4,0,0,0,8,14a2.4,2.4,0,0,1,2-1,2.4,2.4,0,0,1,2,1,2.5,2.5,0,0,0,4,0,2.4,2.4,0,0,1,1-.805"
                          fill="none"
                          stroke="#2c3e50"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                      </svg>
                    </div>
                    <div className="row-left-group-title">bottole</div>
                  </div>
                  <div className="quantity-results">500K</div>
                </div>

                <div className="quantity-stats-row">
                  <div className="row-left-group">
                    <div className="quantity-ststs-icon">
                      <svg
                        id="pack"
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                      >
                        <path
                          id="Path_733"
                          data-name="Path 733"
                          d="M0,0H24V24H0Z"
                          fill="none"
                        />
                        <path
                          id="Path_734"
                          data-name="Path 734"
                          d="M12,3l8,4.5v9L12,21,4,16.5v-9L12,3"
                          fill="none"
                          stroke="#2c3e50"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <line
                          id="Line_210"
                          data-name="Line 210"
                          y1="4.5"
                          x2="8"
                          transform="translate(12 7.5)"
                          fill="none"
                          stroke="#2c3e50"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <line
                          id="Line_211"
                          data-name="Line 211"
                          y2="9"
                          transform="translate(12 12)"
                          fill="none"
                          stroke="#2c3e50"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <line
                          id="Line_212"
                          data-name="Line 212"
                          x1="8"
                          y1="4.5"
                          transform="translate(4 7.5)"
                          fill="none"
                          stroke="#2c3e50"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                      </svg>
                    </div>
                    <div className="row-left-group-title">Pack</div>
                  </div>
                  <div className="quantity-results">50K</div>
                </div>

                <div className="quantity-stats-row">
                  <div className="row-left-group">
                    <div className="quantity-ststs-icon">
                      <svg
                        id="pallete"
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                      >
                        <path
                          id="Path_724"
                          data-name="Path 724"
                          d="M0,0H24V24H0Z"
                          fill="none"
                        />
                        <path
                          id="Path_726"
                          data-name="Path 726"
                          d="M5,10h5.406v5.406H5Z"
                          transform="translate(-1.109 4.703)"
                          fill="none"
                          stroke="#2c3e50"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <path
                          id="Path_727"
                          data-name="Path 727"
                          d="M8,10h5.406v5.406H8Z"
                          transform="translate(1.297 4.703)"
                          fill="none"
                          stroke="#2c3e50"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <path
                          id="Path_728"
                          data-name="Path 728"
                          d="M11,10h5.406v5.406H11Z"
                          transform="translate(3.703 4.703)"
                          fill="none"
                          stroke="#2c3e50"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <path
                          id="Path_729"
                          data-name="Path 729"
                          d="M8,7h5.406v5.406H8Z"
                          transform="translate(1.297 2.297)"
                          fill="none"
                          stroke="#2c3e50"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <path
                          id="Path_730"
                          data-name="Path 730"
                          d="M11,7h5.406v5.406H11Z"
                          transform="translate(3.703 2.297)"
                          fill="none"
                          stroke="#2c3e50"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <path
                          id="Path_731"
                          data-name="Path 731"
                          d="M11,4h5.406V9.406H11Z"
                          transform="translate(3.703 -0.109)"
                          fill="none"
                          stroke="#2c3e50"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                      </svg>
                    </div>
                    <div className="row-left-group-title">Pallete</div>
                  </div>
                  <div className="quantity-results">10K</div>
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
                    <Radial color={["#FF9F1C"]} />
                    <div>OEE</div>
                  </div>
                  <div>
                    <Radial color={["#00D1DE"]} />
                    <div>SLE</div>
                  </div>
                  <div>
                    <Radial color={["#CA4E82"]} />
                    <div>USLE</div>
                  </div>
                </div>

                <div class="vl"></div>

                <div className="progress">
                  <div className="progress-group">
                    <div className="progress-bar">
                      <div className="bar">
                        <span className="performance-pro"></span>
                      </div>
                      <div className="progress-property">Pereformance</div>
                    </div>
                    <div className="progress-precentege">30%</div>
                  </div>

                  <div className="progress-group">
                    <div className="progress-bar">
                      <div className="bar">
                        <span className="quality-pro"></span>
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
                <div className="quantity-header-title">Usage KPI</div>
              </div>

              <hr />

              <div className="kpi-stats">
                <div className="kpi-stats-row">
                  <div className="kpi-left-group">
                    <div className="kpi-ststs-icon">
                      <svg
                        id="energy"
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                      >
                        <path
                          id="Path_738"
                          data-name="Path 738"
                          d="M0,0H24V24H0Z"
                          fill="none"
                        />
                        <path
                          id="Path_739"
                          data-name="Path 739"
                          d="M13,3v7h6L11,21V14H5L13,3"
                          fill="none"
                          stroke="#2c3e50"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                      </svg>
                    </div>
                    <div className="kpi-left-group-title">Energy</div>
                  </div>
                  <div className="kpi-results">
                    <div className="kpi-results-top">Per Liter</div>
                    <div className="kpi-results-bottom">
                      500 <span>J</span>
                    </div>
                  </div>
                </div>

                <div className="kpi-stats-row">
                  <div className="kpi-left-group">
                    <div className="kpi-ststs-icon">
                      <svg
                        id="water"
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                      >
                        <path
                          id="Path_740"
                          data-name="Path 740"
                          d="M0,0H24V24H0Z"
                          fill="none"
                        />
                        <path
                          id="Path_741"
                          data-name="Path 741"
                          d="M6.8,11a6,6,0,1,0,10.4,0L12,3,6.8,11Z"
                          fill="none"
                          stroke="#2c3e50"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                      </svg>
                    </div>
                    <div className="kpi-left-group-title">Water</div>
                  </div>
                  <div className="kpi-results">
                    <div className="kpi-results-top">Per Liter</div>
                    <div className="kpi-results-bottom">
                      500 <span>L</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="loss-stats">
            <div className="loss-stats-title">loss-stats</div>
            <hr />
            <Barchart />
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
