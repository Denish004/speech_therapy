// import React from 'react'
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ScheduleComponent, Week, Month, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { appData } from '../jsons/datasourceDS';
import { registerLicense } from '@syncfusion/ej2-base';



// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NCaF1cWWhAYVFxWmFZfVpgfV9FZ1ZUQ2YuP1ZhSXxXdk1hUX9XdHZQRGBcVkw=');
const CalendarDS = () => {

    
  const eventSettings = { dataSource: appData }

  return (<ScheduleComponent width='100%' height='100%' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
    <ViewsDirective>
      <ViewDirective option='Week' dateFormat='dd-MMM-yyyy' />
      <ViewDirective option='Month' showWeekend={false} readonly={true} />
    </ViewsDirective>
    <Inject services={[Week, Month]} />
  </ScheduleComponent>);
}
;



export default CalendarDS