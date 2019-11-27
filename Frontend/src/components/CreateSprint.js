import React, { Component } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom'
import Select from 'react-select';


import { formatDate, parseDate } from 'react-day-picker/moment';

 
const users = [  { value: 'a', label: 'a' },
 { value: 'b', label: 'b' },]

 class CreateProject extends Component {
    constructor(props) {
    super(props);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.mySubmitHandler = this.mySubmitHandler.bind(this);
    this.taskSubmit = this.taskSubmit.bind(this);

        this.state = {
         from: undefined,
         to: undefined, 
          task: '',
          description:'',
          type:'',
          selectedOptions: [],

      
        };
  
      }

      mySubmitHandler = (event) => {
        event.preventDefault();
        console.log(event)
        this.setState({
           from: event.target.value ,
           to: event.target.value  , 
           selectedOptions: users,
        
        })

      }
      taskSubmit = (event) => {
        event.preventDefault();
        console.log(event)
        this.setState({
          
           task: event.target.value  ,
           description:event.target.value  ,
           type:event.target.value ,
        
        })

      }
      backHandler = () =>{
        this.props.history.push("/sprint/"+this.props.match.params.projectId);
      }


      handleChange = (selectedOptions) => {
        this.setState({ selectedOptions });
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
          <h2>Sprint </h2>
     
      {/* Pop Up */}
        <br/>
       <div className="container">
         <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Add Task</button>
           <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                   <h5 className="modal-title" id="exampleModalLabel">New Task</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                 </div>
              <div className="modal-body">
               <form>
                 <div className="form-group">
                   <label for="recipient-name" className="col-form-label">Task:</label>
                   <input type="text" className="form-control" name="task"/>
                 </div>

                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">Description:</label>
                  <input type="text" className="form-control" name="description"/>
                </div>

                <div className="form-group">
                  <label for="message-text" className="col-form-label">Type:</label>
                  <textarea className="form-control" name="type"></textarea>
                </div>
              </form>
          </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button> <br/>
                  <button type="submit" className="btn btn-primary" onSubmit={this.taskSubmit}>Save</button>
                </div>
            </div>
          </div>
      </div>
   </div>
 {/* end pop up */}

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
        options={users}/>
      {/* {this.state.selectedOptions.map(o => <p>{o.value}</p>)} */}
      </React.Fragment>
          <br/>
          <br/>
      
      <Button className="waves-effect btn-small"
          id="SendButton"         
          variant="contained"
          name="action"
          onClick={this.backHandler}>   
          Back
  
     </Button>

     <Button 
         variant="contained"
         id="SendButton"
        color="primary"
        type="submit"
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