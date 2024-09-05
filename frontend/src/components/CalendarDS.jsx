import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ScheduleComponent, Week, Month, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { appData } from '../jsons/datasourceDS';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NCaF1cWWhAYVFxWmFZfVpgfV9FZ1ZUQ2YuP1ZhSXxXdk1hUX9XdHZQRGBcVkw=');

const CalendarDS = () => {
    const unavailableSlots = [
        {
            Id: 6,
            Subject: 'Unavailable',
            StartTime: new Date(2024, 8, 5, 14, 0),
            EndTime: new Date(2024, 8, 5, 15, 0),
            IsAllDay: false
        },
        {
            Id: 7,
            Subject: 'Unavailable',
            StartTime: new Date(2024, 8, 6, 9, 0),
            EndTime: new Date(2024, 8, 6, 10, 0),
            IsAllDay: false
        },
        {
            Id: 8,
            Subject: 'Unavailable',
            StartTime: new Date(2024, 8, 7, 13, 0),
            EndTime: new Date(2024, 8, 7, 14, 0),
            IsAllDay: false
        },
        {
            Id: 9,
            Subject: 'Unavailable',
            StartTime: new Date(2024, 8, 8, 16, 0),
            EndTime: new Date(2024, 8, 8, 17, 0),
            IsAllDay: false
        }
    ];

    const eventSettings = {
        dataSource: [...appData, ...unavailableSlots],
        fields: {
            subject: { name: 'Subject' }
        }
    };

    const onEventRendered = (args) => {
        if (args.data.Subject === 'Unavailable') {
            args.element.style.backgroundColor = '#FF0000';
            args.element.style.opacity = '0.5';
            args.element.style.pointerEvents = 'none';
        }
    };

    return (
        <ScheduleComponent
            width='100%' height='100%'
            selectedDate={new Date(2024, 8, 5)}
            eventSettings={eventSettings}
            eventRendered={onEventRendered}
        >
            <ViewsDirective>
                <ViewDirective option='Week' />
                <ViewDirective option='Month' />
            </ViewsDirective>
            <Inject services={[Week, Month]} />
        </ScheduleComponent>
    );
};

export default CalendarDS;
