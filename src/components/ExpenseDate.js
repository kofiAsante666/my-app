function ExpenseDtae(_Paras_from_Appjs) {
  const month = _Paras_from_Appjs.date.toLocaleString("en-US", {
    month: "long",
  });
  const day = _Paras_from_Appjs.date.toLocaleString("en-US", {
    day: "2-digit",
  });
  const year = _Paras_from_Appjs.date.getFullYear();

  return (
    <dv>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </dv>
  );
}

export default ExpenseDtae;
