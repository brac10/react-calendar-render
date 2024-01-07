import React from 'react';
import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import '../App.css';
import moment from 'moment';

const customItemRenderer = ({ item, timelineContext, itemContext, getItemProps, getResizeProps }) => {
    // You can use item, timelineContext, itemContext here to render your custom component
    return (
        <div {...getItemProps()}>
            {/* Custom rendering logic */}
            {item.title}
        </div>
    );
};

class MyTimeline extends React.Component {
  render() {
    // Define your groups and items here
    const groups = [
     {id: 1, title: 'PDS-RME01'},
     {id: 2, title: 'PDS-RME03'},
     {id: 3, title: 'PDS-RME04'}];
    const items = [
      {
        id: 1, group: 1, 
        title: 'Galaxy-5',
        start_time: moment(),
        end_time: moment().add(1, 'hour'),
        color: 'red'
      },
      {
       id: 2,
        group: 2,
        title: 'ISS-1',
        start_time: moment(),
        end_time: moment().add(1, 'hour'),
        color: 'green'
      },

      // ...
    ];

    return (
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-12, 'hour')}
        defaultTimeEnd={moment().add(12, 'hour')}
        itemRenderer={customItemRenderer} // Custom renderer for items
      />
    );
  }
}
export default MyTimeline;
