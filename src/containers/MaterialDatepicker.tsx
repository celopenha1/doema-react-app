// DOCUMENTATION 
// https://next.material-ui.com/api/date-picker/#heading-props
import DateFnsUtils from '@date-io/date-fns';
import { useState } from 'react';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  DatePicker,

} from '@material-ui/pickers';

import { pt } from 'date-fns/locale'

export default function MaterialDatePicker() {

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: any) => {
    console.log(date)
    setSelectedDate(date);
  };

  return (

    <div className="row">
      <div className="col-lg-6 col-md-6">
      <div className="input-group  input-group-lg mb-3"  >
      <MuiPickersUtilsProvider locale={pt} utils={DateFnsUtils}>
        <DatePicker
          value={selectedDate}
          onChange={handleDateChange}
          views={["year", "month", "date"]}
          className="form-control"
          variant="dialog"
          openTo="year"
          
        />
      </MuiPickersUtilsProvider>
    </div>
      </div>
    </div>


  );

}