class CalendarEvent {
    constructor(date, timeHours, timeMinutes, eventName, eventDesc) {
        this.date = date;
        this.timeHours = timeHours;
        this.timeMinutes = timeMinutes;
        this.eventName = eventName;
        this.eventDesc = eventDesc;
    }
}

describe('CalendarEvent', () => {
  it('should correctly create an event with valid date, time, name, and description', () => {
    const instance = new CalendarEvent('2025-10-31', 0, 0, "Halloween", "Spooky Time");
    expect(instance.date).toBe('2025-10-31');
    expect(instance.timeHours).toBe(0);
    expect(instance.timeMinutes).toBe(0);
    expect(instance.eventName).toBe('Halloween');
    expect(instance.eventDesc).toBe('Spooky Time');
  });

  it('should handle single-digit hours and minutes', () => {
    const instance = new CalendarEvent('2025-01-01', 3, 7, "Morning Run", "Jog before sunrise");
    expect(instance.timeHours).toBe(3);
    expect(instance.timeMinutes).toBe(7);
  });

  it('should handle edge time values (23:59)', () => {
    const instance = new CalendarEvent('2025-12-31', 23, 59, "New Year’s Eve", "Countdown party");
    expect(instance.timeHours).toBe(23);
    expect(instance.timeMinutes).toBe(59);
  });

  it('should allow an empty description', () => {
    const instance = new CalendarEvent('2025-05-20', 14, 30, "Meeting", "");
    expect(instance.eventDesc).toBe("");
  });

  it('should allow an empty event name', () => {
    const instance = new CalendarEvent('2025-06-15', 9, 0, "", "Unnamed event");
    expect(instance.eventName).toBe("");
  });

  it('should store date as a string and not modify it', () => {
    const instance = new CalendarEvent('March 5, 2025', 12, 0, "Lunch", "Meeting at noon");
    expect(instance.date).toBe('March 5, 2025');
    expect(typeof instance.date).toBe('string');
  });

  it('should handle numeric date input gracefully', () => {
    const instance = new CalendarEvent(20251031, 8, 45, "Alarm", "Wake up!");
    expect(instance.date).toBe(20251031);
    expect(typeof instance.date).toBe('number');
  });

  it('should correctly store types for all inputs', () => {
    const instance = new CalendarEvent('2025-08-10', 12, 15, "Lunch", "At local café");
    expect(typeof instance.date).toBe('string');
    expect(typeof instance.timeHours).toBe('number');
    expect(typeof instance.timeMinutes).toBe('number');
    expect(typeof instance.eventName).toBe('string');
    expect(typeof instance.eventDesc).toBe('string');
  });

  it('should handle zero values for time', () => {
    const instance = new CalendarEvent('2025-07-04', 0, 0, "Midnight Event", "Starts exactly at midnight");
    expect(instance.timeHours).toBe(0);
    expect(instance.timeMinutes).toBe(0);
  });

  it('should allow undefined or null optional fields', () => {
    const instance = new CalendarEvent('2025-09-09', 10, 15, null, undefined);
    expect(instance.eventName).toBeNull();
    expect(instance.eventDesc).toBeUndefined();
  });

  it('should still create an instance even with missing arguments', () => {
    const instance = new CalendarEvent();
    expect(instance).toBeInstanceOf(CalendarEvent);
    expect(instance.date).toBeUndefined();
    expect(instance.timeHours).toBeUndefined();
    expect(instance.timeMinutes).toBeUndefined();
    expect(instance.eventName).toBeUndefined();
    expect(instance.eventDesc).toBeUndefined();
  });

  it('should not share references between different instances', () => {
    const event1 = new CalendarEvent('2025-01-01', 8, 0, "Breakfast", "Eggs and toast");
    const event2 = new CalendarEvent('2025-01-02', 9, 0, "Meeting", "Team sync");
    expect(event1).not.toBe(event2);
    expect(event1.eventName).not.toBe(event2.eventName);
  });
});

