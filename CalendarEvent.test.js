const CalendarEvent = require('./CalendarEvent');

describe('CalendarEvent', () => {
  test('should create a CalendarEvent object correctly', () => {
    const event = new CalendarEvent(
      'Meeting',
      'Discuss project',
      '2025-10-30T10:00:00Z',
      '2025-10-31T11:00:00Z'
    );

    expect(event.name).toBe('Meeting');
    expect(event.description).toBe('Discuss project');
    expect(event.startDate).toBeInstanceOf(Date);
    expect(event.thruDate).toBeInstanceOf(Date);
  });

  test('getDurationDays() should calculate duration in days', () => {
    const event = new CalendarEvent(
      'Workshop',
      'Learn Jest',
      '2025-10-30T00:00:00Z',
      '2025-11-02T00:00:00Z'
    );
    expect(event.getDurationDays()).toBe(3);
  });

  test('isOngoing() should return true when currentDate is inside the range', () => {
    const event = new CalendarEvent(
      'Hackathon',
      'Coding event',
      '2025-10-29T00:00:00Z',
      '2025-10-31T23:59:59Z'
    );
    const currentDate = new Date('2025-10-30T12:00:00Z');
    expect(event.isOngoing(currentDate)).toBe(true);
  });

  test('isOngoing() should return false when currentDate is outside the range', () => {
    const event = new CalendarEvent(
      'Old Event',
      'Past event',
      '2025-10-20T00:00:00Z',
      '2025-10-21T23:59:59Z'
    );
    const currentDate = new Date('2025-10-25T00:00:00Z');
    expect(event.isOngoing(currentDate)).toBe(false);
  });

  test('hasValidDates() should return true for real dates', () => {
    const event = new CalendarEvent(
      'Valid Dates',
      'All good',
      '2025-01-01T00:00:00Z',
      '2025-01-02T00:00:00Z'
    );
    expect(event.hasValidDates()).toBe(true);
  });

  test('hasValidDates() should return false if any date is invalid', () => {
    const eventBad = new CalendarEvent(
      'Bad Dates',
      'Typo date',
      'not-a-date',
      '2025-01-02T00:00:00Z'
    );
    expect(eventBad.hasValidDates()).toBe(false);
  });

  test('hasValidInterval() should return true when start <= thru', () => {
    const event = new CalendarEvent(
      'Normal Interval',
      'Forward in time',
      '2025-03-10T08:00:00Z',
      '2025-03-10T10:00:00Z'
    );
    expect(event.hasValidInterval()).toBe(true);
  });

  test('hasValidInterval() should return false when start > thru', () => {
    const event = new CalendarEvent(
      'Backwards Interval',
      'Thru before start',
      '2025-03-10T12:00:00Z',
      '2025-03-10T10:00:00Z'
    );
    expect(event.hasValidInterval()).toBe(false);
  });

  test('assertValidInterval() should NOT throw for valid interval', () => {
    const event = new CalendarEvent(
      'Good',
      'Valid interval',
      '2025-05-01T09:00:00Z',
      '2025-05-01T11:00:00Z'
    );
    expect(() => event.assertValidInterval()).not.toThrow();
  });

  test('assertValidInterval() should throw if start > thru', () => {
    const event = new CalendarEvent(
      'Bad Order',
      'Start after end',
      '2025-05-01T12:00:00Z',
      '2025-05-01T10:00:00Z'
    );
    expect(() => event.assertValidInterval()).toThrow(
      'startDate must be before or equal to thruDate'
    );
  });

  test('assertValidInterval() should throw if one of the dates is invalid', () => {
    const event = new CalendarEvent(
      'Bad Date',
      'Invalid date literal',
      'totally-not-a-date',
      '2025-05-01T10:00:00Z'
    );
    expect(() => event.assertValidInterval()).toThrow(
      'Invalid date(s) on CalendarEvent'
    );
  });
});
