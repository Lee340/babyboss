import {
  faUtensils,
  faDemocrat,
  faBicycle,
  faPersonSwimming,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import { Card } from "./Card";
import { Icon } from "./Icon";
import "./HomeRoute.css";

export function Tab({ selectedTab, setSelectedTab }) {
  return (
    <>
      <Card color="light" className="main-tabselector">
        <Button
          onClick={() => setSelectedTab(0)}
          className={selectedTab === 0 ? "selected-tab" : null}
          type="light"
        >
          Brunch&nbsp;&nbsp;
          <Icon size="l" icon={faUtensils} />
        </Button>
        <Button
          onClick={() => setSelectedTab(1)}
          className={selectedTab === 1 ? "selected-tab" : null}
          type="light"
        >
          Softplay&nbsp;&nbsp;
          <Icon size="l" icon={faDemocrat} />
        </Button>
        <Button
          onClick={() => setSelectedTab(2)}
          className={selectedTab === 2 ? "selected-tab" : null}
          type="light"
        >
          Park&nbsp;&nbsp;
          <Icon size="l" icon={faBicycle} />
        </Button>
        <Button
          onClick={() => setSelectedTab(3)}
          className={selectedTab === 3 ? "selected-tab" : null}
          type="light"
        >
          Pool&nbsp;&nbsp;
          <Icon size="l" icon={faPersonSwimming} />
        </Button>
        <Button
          onClick={() => setSelectedTab(4)}
          className={selectedTab === 4 ? "selected-tab" : null}
          type="light"
        >
          Event Venue&nbsp;&nbsp;
          <Icon size="l" icon={faFlag} />
        </Button>
      </Card>
      ;
    </>
  );
}
