export const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];


  export const genders = ['male', 'female'];

  export const semesterStatusOptions = [
    { value: 'UPCOMING', label: 'Upcoming' },
    { value: 'ONGOING', label: 'Ongoing' },
    { value: 'ENDED', label: 'Ended' },
  ];
  
  export const monthOptions = monthNames.map((item) => ({
    value: item,
    label: item,
  }));
  export const genderOptions = genders.map((item) => ({
    value: item,
    label: item,
  }));