/* global luxon */
const dt = luxon.DateTime.now();
const dateTime = dt.toFormat('MMMM-dd-yyyy HH:mm a');
export default dateTime;
