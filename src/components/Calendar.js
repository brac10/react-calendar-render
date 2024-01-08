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
constructor(props) {
  super(props);
  this.timelineRef = React.createRef();
};
handleItemDoubleClick = (itemId) => {
  // Handle double-click on timeline items here
  console.log(`Double-clicked on item with ID: ${itemId}`);
};

handleTimelineDoubleClick = (e) => {
  // Handle double-click on the timeline itself here
  console.log('Double-clicked on the timeline');
  // You can get the click position using e.clientX and e.clientY
};

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
        onItemDoubleClick={this.handleItemDoubleClick}
        onCanvasDoubleClick={this.handleTimelineDoubleClick}
        itemRenderer={customItemRenderer} // Custom renderer for items
      />
    );
  }
}
export default MyTimeline;
