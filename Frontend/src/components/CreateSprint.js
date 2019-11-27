import React, { Component } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import Icon from '@material-ui/core/Icon';
// import Button from '@material-ui/core/Bautton';
import Button from 'react-bootstrap/Button'
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom'
import Select from 'react-select';


import { formatDate, parseDate } from 'react-day-picker/moment';

const options = [
  { value: 'a', label: 'a' },
  { value: 'b', label: 'b' },
];

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
          task: '',
          description:'',
          type:'',
          selectedOptions: [],

      
        };
      }

      mySubmitHandler = (event) => {
        event.preventDefault();
  
      }
      handleChange = (selectedOptions) => {
        this.setState({ selectedOptions });
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
        const { selectedOption } = this.state;
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };
        return (
          <form id="formPosition" onSubmit={this.mySubmitHandler}>
          <h2>Sprint {this.state.username} </h2>
     
          {/* <p>Sprint name:</p>
          <input
            type='text'
            name='username'
            onChange={this.myChangeHandler} /> */}
        <br/>
       <div class="container">
         <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Add Task</button>
           <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                   <h5 class="modal-title" id="exampleModalLabel">New Task</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                 </div>
              <div class="modal-body">
               <form>
                 <div class="form-group">
                   <label for="recipient-name" class="col-form-label">Task:</label>
                   <input type="text" class="form-control" id="recipient-name"/>
                 </div>

                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">Description:</label>
                  <input type="text" class="form-control" id="recipient-name"/>
                </div>

                <div class="form-group">
                  <label for="message-text" class="col-form-label">Type:</label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
              </form>
          </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button> <br/>
                  <button type="button" class="btn btn-primary">Save</button>
                </div>
            </div>
          </div>
      </div>
   </div>
 
<br/>
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
          <br/>
      <React.Fragment>
      <Select
        isMulti
        value={selectedOption}
        onChange={this.handleChange}
        options={options}/>
      {/* {this.state.selectedOptions.map(o => <p>{o.value}</p>)} */}
      </React.Fragment>
          <br/>
          <br/>
      
      <Button class="waves-effect btn-small"
          id="SendButton"         
          variant="contained"
          name="action">   
          <Link to="/Sprint">
            Back
           </Link>   
     </Button>

     <Button 
         variant="contained"
         id="SendButton"
        color="primary"
        // className={classes.button}

        endIcon={<Icon>save</Icon>} >
         Save
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