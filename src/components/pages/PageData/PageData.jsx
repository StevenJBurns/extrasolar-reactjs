import React from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from "react-redux";
import { actionTypes } from '../../../redux/actionTypes';
import { Page } from '../Page/Page';
import{ BarChart}  from "../../charts/BarChart";
import { StarsPieChart } from "../../charts/StarsPieChart";
// import { ScatterPlotChart } from "../../ui/ScatterPlotChart";
import DataOGG from '../../../assets/audio/data.ogg';
import "./PageData.scss";

export const PageData = ({stars, planets, ...props}) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({type: actionTypes.ui.CHANGE_AUDIO_SOURCE, payload: DataOGG});
  }, []);

  let setPlanetCount = new Set();
  let arrPlanetCount = [];

  // if (stars) {
  //   stars.forEach((star) => setPlanetCount.add(star.pl_pnum));
  //   arrPlanetCount = [...setPlanetCount].sort().map((count, index) => ({"planetCount" : count, "count" : 0}))

  //   for (let size of arrPlanetCount) {
  //     for (let star of stars) {
  //       if (star.pl_pnum === size["planetCount"]) size["count"]++;
  //     }
  //   }
  // }

  return (
    <Page {...props}>
      <div className="page-data">
        <h1>Data</h1>
        <hr></hr>
        <p>The available data from NASA comes from a SQL table view that combines star and planet data together. While this allows for compact and less-effort storage, the hierarchical or relationship of planets to stars is lost. Those relationships are rebuilt in JavaScript files of these web pages.</p>
        <p>Some exoplanet data is incomplete, as is the stellar data of their host stars. The aim of this simple web site is to visually plot and animate a rough estimation of the geometry and scale of these distant star systems. Without some of the variables, a section of stars and planets can not be plotted and therefore are not included in the snapshot of data used here.</p>
        <p>In cases where it makes sense, some data can be 'nudged' to a default value.  For example, if the oribital eccentricity of a planet is unknown, the value can be set to 0.0 (a perfect circle) for plotting purposes.  While inaccurate, that estimated orbit will be highlighted as 'estimated' when the planet's orbit is plotted on the Solar System page while still presenting an acceptable map of that solar system. </p>
        <hr></hr>
        <h3>Most Recent Data</h3>
        <section id="section-live-data">
          <p>Total Star Count: {stars ? stars.length : 0}</p>
          <p>Total Planet Count: {planets ? planets.length : 0}</p>
        </section>
        <hr></hr>
        <section id="section-chart-categorical" className="section-chart-container">
          <table>
            <caption>CATEGORICAL PLANET COUNTS</caption>
            <thead>
              <tr colSpan={2}>
                <th>Planet Count</th>
                <th># of Systems</th>
              </tr>
            </thead>
            <tbody>
              {
                arrPlanetCount.map(x => {
                  return (<tr key={x["planetCount"]}>
                    <td>{x["planetCount"]}</td>
                    <td>{x["count"]}</td>
                  </tr>)
                })
              }
            </tbody>
            <tfoot>
              <tr>
                <th colSpan={2}>Total Planets: {planets ? planets.length: 0}</th>
              </tr>
            </tfoot>
          </table>
          { arrPlanetCount ? <BarChart planetData={ arrPlanetCount } /> : null }
          <p>The ability to find exoplanets is obviously very limited given current technology and the vast distances to even the closest stars. Most solar systems have only been observed to have 1 single planet as shown in the table and chart above. Systems containing 7 and 8 planets have only been discovered once. Because of the large disparity in that data the chart plots the number of exo-systems containing X planets on an exponential Y scale. Scientists estimate the average exo system should contain several planets of varying sizes but discovering them will require advances in detection technology. </p>
        </section>
        <section>
          {/* <StarsPieChart starData={stars} /> */}
        </section>
      </div>
    </Page>
  );
};

