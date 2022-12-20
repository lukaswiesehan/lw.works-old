export const createICS = (): {event: string | null; error: any} => {
  const ics = require('ics')
  const {error, value} = ics.createEvent({
    start: [2022, 12, 26, 14, 30],
    duration: {hours: 0, minutes: 30},
    title: 'Test-Termin',
    description: 'Das ist die Beschreibung des Termins...',
    location: 'https://us05web.zoom.us/j/4981010345?pwd=YVR0NUlXUnJDaXFMYm5DRXJHNHRDQT09'
  })
  if (error) return {event: null, error}
  return {event: value, error: null}
}
