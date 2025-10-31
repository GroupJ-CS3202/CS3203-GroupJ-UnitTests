class CalendarEvent {
    constructor(date, timeHours, timeMinutes, eventName, eventDesc) {
        this.date = date;
        this.timeHours = timeHours;
        this.timeMinutes = timeMinutes;
        this.eventName = eventName;
        this.eventDesc = eventDesc;
    }
}

const correctEvent = new CalendarEvent('2025-10-31', 0, 0, "Halloween", "Spooky Time");

describe('CalendarEvent', () => {
  it('Should be able to correctly create an event with valid date, time, name, and description', () => {
    const instance = new CalendarEvent('2025-10-31', 0, 0, "Halloween", "Spooky Time");
    expect(typeof instance.date).toBe('string');
    expect(typeof instance.timeHours).toBe('number');
    expect(typeof instance.timeMinutes).toBe('number');
    expect(typeof instance.eventName).toBe('string');
    expect(typeof instance.eventDesc).toBe('string');
  });
});