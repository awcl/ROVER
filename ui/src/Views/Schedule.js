import React from 'react'
import moment from 'moment'
import Scheduler, {SchedulerData, ViewTypes, DATE_FORMAT} from 'react-big-scheduler'
import 'react-big-scheduler/lib/css/style.css'


const Schedule = ({ vehicle }, {reservation}) => {
let resources = {

    id: vehicle.map(vehicle.id),
    vehicleType: vehicle.map(vehicle.vehicle_type)

};
        let schedulerData = new SchedulerData(new moment("2022-12-18").format(DATE_FORMAT), ViewTypes.Month, false, false,{  displayWeekend: false, eventItemPopoverEnabled: false,
            views: [
                {viewName: 'Weekly Scheduling', viewType: ViewTypes.Week, showAgenda: false, isEventPerspective: false},

            ],
        });


        schedulerData.setResources(resources);

    	let events = {
            id: reservation.map(reservation.id),
            start: reservation.map(reservation.start_date),
            end: reservation.map(reservation.end_date)

        }

schedulerData.setEvents(events);

    //     this.state = {
    //         viewModel: schedulerData
    //     }
    // }

    //     const {viewModel} = this.state;
    //     console.log(DemoData.events);
    //      const prevClick = (schedulerData)=> {
    //     schedulerData.prev();
    //     schedulerData.setEvents(DemoData.events);
    //     this.setState({
    //         viewModel: schedulerData
    //     })
    // }

    // const nextClick = (schedulerData)=> {
    //     schedulerData.next();
    //     schedulerData.setEvents(DemoData.events);
    //     this.setState({
    //         viewModel: schedulerData
    //     })
    // }

    // const onViewChange = (schedulerData, view) => {
    //     schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);

    //     this.setState({
    //         viewModel: schedulerData
    //     })
    // }

    // const onSelectDate = (schedulerData, date) => {
    //     schedulerData.setDate(date);

    //     this.setState({
    //         viewModel: schedulerData
    //     })
    // }

    // const eventClicked = (schedulerData, event) => {
    //     alert(`You just clicked an event: {id: ${event.id}, title: ${event.title}}`);
    // };

    // const newEvent = (schedulerData, start, end, type, item) => {
    //     let newFreshId = 0;
    //     schedulerData.events.forEach((item) => {
    //         if(item.id >= newFreshId)
    //             newFreshId = item.id + 1;
    //     });

    //     let newEvent = {
    //         id: newFreshId,
    //         title: '',
    //         start: start,
    //         end: end,
    //         resourceId: slotId,
    //         bgColor: '#488FAB'
    //     }
    //     schedulerData.addEvent(newEvent);
    //     this.setState({
    //         viewModel: schedulerData
    //     })
    // }

    // const updateEventStart = (schedulerData, event, newStart) => {
    //     schedulerData.updateEventStart(event, newStart);
    //     this.setState({
    //         viewModel: schedulerData
    //     })
    // }

    // const updateEventEnd = (schedulerData, event, newEnd) => {
    //     schedulerData.updateEventEnd(event, newEnd);
    //     this.setState({
    //         viewModel: schedulerData
    //     })
    // }

    // const moveEvent = (schedulerData, event, slotId, start, end) => {
    //     schedulerData.moveEvent(event, start, end);
    //     this.setState({
    //         viewModel: schedulerData
    //     })


        return (
                <div>
                    <Scheduler
                    // schedulerData={resources}
                    //            prevClick={this.prevClick}
                    //            nextClick={this.nextClick}
                    //            onSelectDate={this.onSelectDate}
                    //            onViewChange={this.onViewChange}
                    //            eventItemClick={this.eventClicked}
                    //            updateEventStart={this.updateEventStart}
                    //            updateEventEnd={this.updateEventEnd}
                    //            moveEvent={this.moveEvent}
                    //            newEvent={this.newEvent}
                    />
                </div>
        )



    }


export default Schedule
