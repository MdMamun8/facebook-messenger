/* eslint-disable react/prop-types */
const Dates = ({ register }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let dates = [];
  for (let i = 1; i <= 31; i++) {
    dates.push(i);
  }
  // year
  let years = [];
  for (let y = 2000; y < 2024; y++) {
    years.push(y);
  }
  return (
    <div>
      <div className='heading'>
        <h3 className='flex text-start pl-8 mt-3'>Birthday</h3>
      </div>
      <div className='flex justify-center gap-4'>
        <div className='months'>
          <select
            className=' border-2 '
            name='month'
            {...register("month", { required: true })}
            id='month'>
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>

        <div className='dates'>
          <select
            name='dates'
            {...register("dates", { required: true })}
            className='w-24 border-2'>
            {dates.map((date, index) => (
              <option key={index} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>

        <div className='years'>
          <select
            name='years'
            {...register("years", { required: true })}
            className='w-24 border-2'>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Dates;

// const Dates = () => {
//     return (
//       <div className="flex">
//           <div className='months'>
//         <p>Birthday</p>
//         <select name='' id=''>
//           <option value=''>January</option>
//           <option value=''>February</option>
//           <option value=''>March</option>
//           <option value=''>April</option>
//           <option value=''>May</option>
//           <option value=''>June</option>
//           <option value=''>July</option>
//           <option value=''>August</option>
//           <option value=''>September</option>
//           <option value=''>Actober</option>
//           <option value=''>November</option>
//           <option value=''>December</option>
//         </select>
//       </div>

//       </div>
//     );
// };

// export default Dates;
