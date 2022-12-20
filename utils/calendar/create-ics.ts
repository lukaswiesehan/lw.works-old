export const createICS = (): {event: string | null; error: any} => {
  const ics = require('ics')
  const {error, value} = ics.createEvent({
    start: [2022, 12, 26, 14, 30],
    duration: {hours: 0, minutes: 30},
    title: 'Test-Termin',
    description: 'Das ist die Beschreibung des Termins...\n\nLink: https://us05web.zoom.us/j/4981010345?pwd=YVR0NUlXUnJDaXFMYm5DRXJHNHRDQT09',
    location: 'Zoom Meeting',
    status: 'CONFIRMED',
    busyStatus: 'BUSY',
    organizer: {name: 'Lukas Wiesehan', email: 'mail@lukaswiesehan.de'},
    attendees: [
      {name: 'Lukas Wiesehan', email: 'mail@lukaswiesehan.de', rsvp: false, partstat: 'ACCEPTED', role: 'REQ-PARTICIPANT'},
      {name: 'Der Gast', email: 'lukas.wiesehan@icloud.com', rsvp: true, role: 'REQ-PARTICIPANT'}
    ]
  })
  if (error) return {event: null, error}
  return {event: value, error: null}
}
