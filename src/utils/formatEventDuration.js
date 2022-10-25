import { formatDistanceStrict } from 'date-fns';

export const formatEventDuration = (start, end) => {
    // console.log(new Date(start));
    // console.log(start, end);
  return formatDistanceStrict(new Date(start), new Date(end));
};
