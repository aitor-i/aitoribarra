import React, { useReducer } from "react";

import Wrapper from "./TabView.styles";

interface state {
  isTab1Open: boolean;
  isTab2Open: boolean;
  isTab3Open: boolean;
}
interface props {
  tab1: string;
  tab2: string;
  tab3: string;
  text1: string;
  text2: string;
  text3: string;
}

const tabsReducer = (state: state, action: string) => {
  switch (action) {
    case "tab1":
      return { isTab1Open: true, isTab2Open: false, isTab3Open: false };
    case "tab2":
      return { isTab1Open: false, isTab2Open: true, isTab3Open: false };
    case "tab3":
      return { isTab1Open: false, isTab2Open: false, isTab3Open: true };

    default:
      return { isTab1Open: true, isTab2Open: false, isTab3Open: false };
  }
};

const TabView = (props: props) => {
  const initialTabState = {
    isTab1Open: true,
    isTab2Open: false,
    isTab3Open: false,
  };
  const [tabsState, tabsDispatch] = useReducer(tabsReducer, initialTabState);
  const dispatchHandler = (tab: string) => {
    tabsDispatch(tab);
  };

  const setActive = (isOpen: boolean) => {
    return isOpen ? "active" : "inactive";
  };
  return (
    <Wrapper>
      <div className="container">
        <div className="tags">
          <h2
            onClick={() => dispatchHandler("tab1")}
            className={setActive(tabsState.isTab1Open)}
          >
            {props.tab1}
          </h2>
          <h2
            onClick={() => dispatchHandler("tab2")}
            className={setActive(tabsState.isTab2Open)}
          >
            {props.tab2}
          </h2>
          <h2
            onClick={() => dispatchHandler("tab3")}
            className={setActive(tabsState.isTab3Open)}
          >
            {props.tab3}
          </h2>
        </div>
        <div className="text">
          {tabsState.isTab1Open && <p>{props.text1}</p>}
          {tabsState.isTab2Open && <p>{props.text2}</p>}
          {tabsState.isTab3Open && <p>{props.text3}</p>}
        </div>
      </div>
    </Wrapper>
  );
};

export default TabView;
