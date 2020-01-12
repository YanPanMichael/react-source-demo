// https://github.com/pomber/react-lazy-preload-demo/blob/master/src/App.js

import React from "react";
import StockTable from "./StockTable";

// import StockChart from "./StockChart";

// const StockChart = React.lazy(() =>
//   import(/* webpackChunkName: 'StockChart' */ "./StockChart")
// );

const StockChart = React.lazy(() =>
  new Promise(resolve => setTimeout(resolve, 3000))
    .then(() => import(/* webpackChunkName: 'StockChart' */ "./StockChart"))
    .catch(err => {
      console.log(err);
    })
);

const StockChart2 = React.lazy(() =>
  Promise.all([
    import(/* webpackChunkName: 'StockChart' */ "./StockChart"),
    new Promise(resolve => setTimeout(() => resolve(), 3000))
  ])
    .then(([modulesExports]) => modulesExports)
    .catch(err => {
      console.log(err);
    })
);

class App extends React.Component {
  state = {
    selectedStock: null
  };
  render() {
    const { stocks } = this.props;
    const { selectedStock } = this.state;
    return (
      <React.Fragment>
        <React.Suspense fallback={<div>Loading...</div>}>
          <StockTable
            stocks={stocks}
            onSelect={selectedStock => this.setState({ selectedStock })}
          />
          {selectedStock && (
            <StockChart
              stock={selectedStock}
              onClose={() => this.setState({ selectedStock: false })}
            />
          )}
        </React.Suspense>
      </React.Fragment>
    );
  }
}

export default App;
