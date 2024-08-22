import datetime from '@/helpers/datetime';

describe('customFormatPlugin', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    const fakeDate = new Date(2018, 11, 10, 21, 49, 51, 141);
    jest.setSystemTime(fakeDate);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should format only date correctly', () => {
    const formattedDate = datetime().onlyDate();
    expect(formattedDate).toBe('2018-12-10');
  });

  it('should format display date correctly', () => {
    const formattedDate = datetime().displayDate();
    expect(formattedDate).toBe('2018/12/10');
  });

  it('should format only time correctly', () => {
    const formattedTime = datetime().onlyTime();
    expect(formattedTime).toBe('21:49');
  });

  it('should format date and time correctly', () => {
    const formattedDatetime = datetime().displayDatetime();
    expect(formattedDatetime).toBe('2018/12/10 21:49');
  });

  it('should format only year correctly', () => {
    const formattedYear = datetime().onlyYear();
    expect(formattedYear).toBe('2018');
  });

  it('should format input utc to display datetime with correctly timezone', () => {
    const formattedDate = datetime().displayDatetime();
    expect(formattedDate).toBe('2018/12/10 21:49');
  });

  it('should format input datetime with timezone to utc with correctly time', () => {
    const formattedDate = datetime().toISOString();
    expect(formattedDate).toBe('2018-12-10T13:49:51.141Z');
  });
});
