// import React, { useEffect, useContext, useState } from 'react';
// import moment from 'moment';
// import Scheduler, { SchedulerData, ViewTypes, DATE_FORMAT } from 'react-big-scheduler';
// import 'react-big-scheduler/lib/css/style.css';
// import config from '../config';
// import Context from '../components/Context';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import { DndProvider } from 'react-dnd';
// const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

// const Schedule = () => {
//   const { session } = useContext(Context);
//   const [fevents, setfEvents] = useState([]);

//   useEffect(() => {
//     fetch(`${API_URL}/reservation`)
//       .then(response => response.json())
//       .then(data => {
//         let working = [];
//         for (let i = 0; i < data.length; i++) {
//           working.push({ id: i + 1, start: data[i].start_date, end: data[i].end_date, resourceId: 'r0', title: `Vehicle ID ${data[i].vehicle_id} Taken`, bgColor: '#135CA5' })
//         }
//         setfEvents(working)
//         console.log(working)
//       })
//       .catch(e => console.log(e));
//   }, []);

//   let schedulerData = new SchedulerData(new moment().format(DATE_FORMAT), ViewTypes.Month, false, true);
//   moment.locale('en-US');
//   schedulerData.setLocaleMoment(moment);
//   schedulerData.setResources([{ id: 'r0', name: 'Vehicle Reservations', groupOnly: true }]);
//   schedulerData.setEvents(fevents);

//   const prevClick = (schedulerData)=> {
//     schedulerData.prev();
//     schedulerData.setEvents(fevents);
// }
//   const nextClick = (schedulerData)=> {
//     schedulerData.next();
//     schedulerData.setEvents(fevents);
// }
//   const onViewChange = (schedulerData, view) => {
//     schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
//     schedulerData.setEvents(fevents);
// }
//   const onSelectDate = (schedulerData, date) => {
//     schedulerData.setDate(date);
//     schedulerData.setEvents(fevents);
// }
//   const eventClicked = (schedulerData, event) => {
//     alert(`Clicked event id ${event.id}`);
// };

//     return (
//       <div>
//         {fevents.length > 0 && <DndProvider backend={HTML5Backend}><Scheduler
//           schedulerData={schedulerData}
//           prevClick={prevClick}
//           nextClick={nextClick}
//           onSelectDate={onSelectDate}
//           onViewChange={onViewChange}
//           eventClicked={eventClicked}
//         /></DndProvider>}
//       </div>
//     )
//   };

// export default Schedule;