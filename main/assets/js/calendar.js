jQuery(document).ready(function() {
    var date = new Date();

    jQuery('#calendar').fullCalendar({
        header: {
            left: 'title',
            right: 'prev, today, next'
        },
        defaultView: 'basicDay',
        buttonText: {
            prev: '<i class="fa fa-chevron-left"></i>',
            next: '<i class="fa fa-chevron-right"></i>',
            today: 'TODAY'
        },
        handleWindowResize: true,
        agendaDay: {
            allDayText: ''
        },
        // for agendaWeek and agendaDay
        editable: false,
        // US Holidays
        events: 'https://www.google.com/calendar/feeds/o8mg61i7naodmcbradubm86mv8%40group.calendar.google.com/private-6ce4bb9a02dd88cc9980676c3d7b557f/basic',

        timeFormat: 'hh:mm( - hh:mm) tt', // uppercase H for 24-hour clock
        eventClick: function(event) {
            // opens events in a popup window
            window.open(event.url, 'gcalevent', 'width=700,height=600');
            return false;
        }
    });

});