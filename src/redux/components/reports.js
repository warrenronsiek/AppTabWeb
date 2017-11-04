import React from 'react'
import InfCalendar, {
  Calendar,
  withRange,
} from 'react-infinite-calendar'
import PropTypes from 'proptypes'
import {Button, ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap'

const CalendarWithRange = withRange(Calendar);
require('../../css/infinate-calendar.css');
require('../../css/bootstrap.min.css');

const today = new Date();
const start = new Date('2017-11-01');

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
  },
  calendarContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    display: 'flex',
  },
  buttonContainer: {
    position: 'relative',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '30px',
    marginBottom: '50px',
  },
  button: {
    width: '140px',
    marginLeft: '5px',
    marginRight: '5px'
  }
};

const Reports = ({reportType, getReportEnabled, interval, updateReportType, updateGroupbyInterval, updateDateRange}) => (
  <div style={styles.container}>
    <div style={styles.calendarContainer}>
      <InfCalendar width={'90%'} height={400} selected={today} minDate={start} min={start}
                   displayOptions={{showHeader: false}} Component={CalendarWithRange}
                   onSelect={selection => updateDateRange(selection.start, selection.end)}/>
    </div>
    <div style={styles.buttonContainer}>
      <ButtonGroup justified style={styles.button}>
        <DropdownButton title={interval || 'Aggregate By'} id='Venue Selection'>
          <MenuItem onClick={() => updateGroupbyInterval('Year')}>Year</MenuItem>
          <MenuItem onClick={() => updateGroupbyInterval('Month')}>Month</MenuItem>
          <MenuItem onClick={() => updateGroupbyInterval('Day')}>Day</MenuItem>
          <MenuItem onClick={() => updateGroupbyInterval('Hour')}>Hour</MenuItem>
        </DropdownButton>
      </ButtonGroup>
    </div>
    <div style={styles.buttonContainer}>
      <Button style={styles.button} disabled={!getReportEnabled} onClick={() => updateReportType('tipsByTable')}>Get Tips by Table</Button>
      <Button style={styles.button} disabled={!getReportEnabled} onClick={() => updateReportType('totals')}>Get Totals</Button>
      <Button style={styles.button} disabled={!getReportEnabled} onClick={() => updateReportType('itemized')}>Get Sales by Item</Button>
    </div>
  </div>
);

Reports.propTypes = {
  reportType: PropTypes.string,
  getReportEnabled: PropTypes.bool.isRequired,
  interval: PropTypes.string,
  updateReportType: PropTypes.func.isRequired,
  updateGroupbyInterval: PropTypes.func.isRequired,
  updateDateRange: PropTypes.func.isRequired
};

export default Reports