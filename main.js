const date = '202302';
const time_period = 'm';

const baseUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/inflation';
const url = new URL(baseUrl);

url.searchParams.append('date', date);
url.searchParams.append('period', time_period);
url.searchParams.append('json', '');

console.log(url.toString());