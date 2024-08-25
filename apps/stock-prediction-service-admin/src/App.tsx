import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { HistoricalStockDataList } from "./historicalStockData/HistoricalStockDataList";
import { HistoricalStockDataCreate } from "./historicalStockData/HistoricalStockDataCreate";
import { HistoricalStockDataEdit } from "./historicalStockData/HistoricalStockDataEdit";
import { HistoricalStockDataShow } from "./historicalStockData/HistoricalStockDataShow";
import { RealTimeSocialMediaList } from "./realTimeSocialMedia/RealTimeSocialMediaList";
import { RealTimeSocialMediaCreate } from "./realTimeSocialMedia/RealTimeSocialMediaCreate";
import { RealTimeSocialMediaEdit } from "./realTimeSocialMedia/RealTimeSocialMediaEdit";
import { RealTimeSocialMediaShow } from "./realTimeSocialMedia/RealTimeSocialMediaShow";
import { RealTimeNewsList } from "./realTimeNews/RealTimeNewsList";
import { RealTimeNewsCreate } from "./realTimeNews/RealTimeNewsCreate";
import { RealTimeNewsEdit } from "./realTimeNews/RealTimeNewsEdit";
import { RealTimeNewsShow } from "./realTimeNews/RealTimeNewsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Stock Prediction Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="HistoricalStockData"
          list={HistoricalStockDataList}
          edit={HistoricalStockDataEdit}
          create={HistoricalStockDataCreate}
          show={HistoricalStockDataShow}
        />
        <Resource
          name="RealTimeSocialMedia"
          list={RealTimeSocialMediaList}
          edit={RealTimeSocialMediaEdit}
          create={RealTimeSocialMediaCreate}
          show={RealTimeSocialMediaShow}
        />
        <Resource
          name="RealTimeNews"
          list={RealTimeNewsList}
          edit={RealTimeNewsEdit}
          create={RealTimeNewsCreate}
          show={RealTimeNewsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
