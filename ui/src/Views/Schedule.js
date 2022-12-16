import React, { useEffect, useContext, useState } from 'react';
import moment from 'moment';
import Scheduler, { SchedulerData, ViewTypes, DATE_FORMAT } from 'react-big-scheduler';
import 'react-big-scheduler/lib/css/style.css';
import config from '../config';
import Context from '../components/Context';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;



const Schedule = () => {

  const { session } = useContext(Context);
  const [fevents, setfEvents] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/reservation`)
      .then(response => response.json())
      .then(data => {
        let working = [];
        for (let i = 0; i < data.length; i++) {
          working.push({ id: i + 1, start: data[i].start_date, end: data[i].end_date, resourceId: 'r0', title: `Vehicle ID ${data[i].vehicle_id} Taken`, bgColor: '#135CA5' })
        }
        setfEvents(working)
        console.log(working)
      })
      .catch(e => console.log(e));

  }, []);

  let schedulerData = new SchedulerData(new moment().format(DATE_FORMAT), ViewTypes.Week);
  moment.locale('en');
  schedulerData.setLocaleMoment(moment);
  schedulerData.setResources([{ id: 'r0', name: 'Resource0', groupOnly: true }]);
  schedulerData.setEvents(fevents);


    return (
      <div>
        <Scheduler
          schedulerData={{ viewModel: schedulerData }}
          prevClick={prevClick}
          nextClick={nextClick}
          onSelectDate={onSelectDate}
          onViewChange={onViewChange}
          eventItemClick={eventClicked}
        />
      </div>
    )
  };

export default Schedule;