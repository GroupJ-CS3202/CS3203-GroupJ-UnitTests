class CalendarEvent {
  constructor(name, description, startDate, thruDate) {
    this.name = name;
    this.description = description;
    this.startDate = new Date(startDate);
    this.thruDate = new Date(thruDate);
  }

  hasValidDates() {
    return !Number.isNaN(this.startDate.getTime()) &&
           !Number.isNaN(this.thruDate.getTime());
  }

  hasValidInterval() {
    if (!this.hasValidDates()) return false;
    return this.startDate.getTime() <= this.thruDate.getTime();
  }

  assertValidInterval() {
    if (!this.hasValidDates()) {
      throw new Error('Invalid date(s) on CalendarEvent');
    }
    if (!this.hasValidInterval()) {
      throw new Error('startDate must be before or equal to thruDate');
    }
    return true;
  }

  isOngoing(currentDate = new Date()) {
    return currentDate >= this.startDate && currentDate <= this.thruDate;
  }

  getDurationDays() {
    const diffTime = this.thruDate - this.startDate;
    return diffTime / (1000 * 60 * 60 * 24);
  }
}

module.exports = CalendarEvent;
