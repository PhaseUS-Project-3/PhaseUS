import React, { Component } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom'


import { formatDate, parseDate } from 'react-day-picker/moment';


 class CreateProject extends Component {
    constructor(props) {
    super(props);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
        this.state = {
         from: undefined,
         to: undefined, 
          username: '',
          collaboraor: '',
          users: '',

      
        };
      }
      mySubmitHandler = (event) => {
        event.preventDefault();
   

      }
      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
      showFromMonth() {
        const { from, to } = this.state;
        if (!from) {
          return;
        }
        if (moment(to).diff(moment(from), 'months') < 2) {
          this.to.getDayPicker().showMonth(from);
        }
      }
    
      handleFromChange(from) {
        // Change the from date and focus the "to" input field
        this.setState({ from });
      }
    
      handleToChange(to) {
        this.setState({ to }, this.showFromMonth);
      }
      render() {
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };
        return (
          <form id="formPosition" onSubmit={this.mySubmitHandler}>
          <h2>Create Project{this.state.username} </h2>
          <br/>
          <br/>
          <p>Sprint name:</p>
          <input
            type='text'
            name='username'
            onChange={this.myChangeHandler}
          />
       
          <br/>
         
          <div className="InputFromTo">
          Duration <br/>
        <DayPickerInput
        
          value={from}
          placeholder="From"
          format="LL"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { after: to },
            toMonth: to,
            modifiers,
            numberOfMonths: 2,
            onDayClick: () => this.to.getInput().focus(),
          }}
          onDayChange={this.handleFromChange}
        />{' '}
        —{' '}
        <span className="InputFromTo-to">
          <DayPickerInput
            ref={el => (this.to = el)}
            value={to}
            placeholder="To"
            format="LL"
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { before: from },
              modifiers,
              month: from,
              fromMonth: from,
              numberOfMonths: 2,
            }}
            onDayChange={this.handleToChange}
          />
        </span>
        <Helmet>
          <style>{`
  .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .InputFromTo .DayPicker-Day {
    border-radius: 0 !important;
  }
  .InputFromTo .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .InputFromTo .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
  .InputFromTo .DayPickerInput-Overlay {
    width: 550px;
  }
  .InputFromTo-to .DayPickerInput-Overlay {
    margin-left: -198px;
  }
`}</style>
        </Helmet>
      </div>

      <br/>
          <p>collaboraor:</p>
          <input
            type='text'
            name='collaboraor'
            onChange={this.myChangeHandler}
          />
       
          <br/>

          <br/>
          <p>Users:</p>
          <input
            type='text'
            name='users'
            onChange={this.myChangeHandler}
          />
       
          <br/>
          <br/>
          <br/>  
          <br/>
          <Button class="waves-effect btn-small"
          id="backButton"         
          variant="contained"
          name="action">   
          <Link to="/Project">
            Back
           </Link>   
           </Button>


          <Button 
         variant="contained"
         id="SendButton"
        color="primary"
        // className={classes.button}
        endIcon={<Icon>send</Icon>} >
         Send
      </Button>
          <br/>
          <br/>
          <br/>  
          <br/>
          <br/>
           </form>
        );
      }
}
export default CreateProject