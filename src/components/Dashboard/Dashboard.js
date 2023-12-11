import { FactoryList } from "../factorylist/FactoryList";
import "./dashboard.css";
import { FactoryName } from "../factoryName/FactoryName";
import { Line } from "../Line/Line";

export function Dashboard({
  handleFactoryDetails,
  factoryDetails,
  lineDetails,
}) {
  return (
    <div className="dashboardDetails">
      {factoryDetails ? (
        <FactoryName />
      ) : lineDetails ? (
        <Line />
      ) : (
        <FactoryList handleFactoryDetails={handleFactoryDetails} />
      )}
    </div>
  );
}
