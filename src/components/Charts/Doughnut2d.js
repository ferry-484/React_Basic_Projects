import React from 'react';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Doughnut2d = ({ data }) => {
  const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        // caption: "Countries With Most Oil Reserves [2017-18]",
        //Set the chart subcaption
        // subCaption: "In MMbbl = One Million barrels",
        //Set the x-axis name
        // xAxisName: "Country",
        //Set the y-axis name
        // yAxisName: "Reserves (MMbbl)",
        // numberSuffix: "K",
        //Set the theme for your chart
        // theme: "fusion",
        caption: "Stars Per Language",
        
        decimals: 0,
        doughnutRadius: "45%",
        showPercentValues: 0,
        theme: 'candy',
        //paletteColors: "#f0db4f",
      },
      // Chart Data
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

// const Pie3D = () => {
//   return <div>chart</div>;
// };

export default Doughnut2d;

