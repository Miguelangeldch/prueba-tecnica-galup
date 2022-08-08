function getDate() {
  const date = new Date();
  const fullDateUTC = date.toISOString().split('T');

  const time = fullDateUTC[1].split('.');

  const FormatedDate = `${fullDateUTC[0]}, ${time[0]} GMT`;

  return FormatedDate;
}

export default getDate;
