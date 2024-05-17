
export const useFormatUploadDate = (uploadDate) => {
    const now = new Date();
    const uploadedAt = new Date(uploadDate);
    const timeDiff = now.getTime() - uploadedAt.getTime();

    // Convert milliseconds to minutes, hours, days, months, or years
    const minutes = Math.floor(timeDiff / (1000 * 60));
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));

    // Return the appropriate string based on the time difference
    if (minutes < 60) {
        return `${minutes} ${minutes === 1 ? 'min' : 'mins'} ago`;
    } else if (hours < 24) {
        return `${hours} ${hours === 1 ? 'hr' : 'hrs'} ago`;
    } else if (days < 30) {
        return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    } else if (months < 12) {
        return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else {
        return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    }
};


export const useFormatViewCount = (viewsCount) => {
    if (viewsCount < 1000) {
      return viewsCount;
    } else if (viewsCount < 1000000) {
      const thousands = Math.floor(viewsCount / 1000);
      const remainder = viewsCount % 1000;
      const decimal = remainder >= 100 ? `.${Math.floor(remainder / 100)}` : "";
      return `${thousands}${decimal}k`;
    } else if (viewsCount < 1000000000) {
      const millions = Math.floor(viewsCount / 1000000);
      const remainder = viewsCount % 1000000;
      const decimal =
        remainder >= 100000 ? `.${Math.floor(remainder / 100000)}` : "";
      return `${millions}${decimal}m`;
    } else {
      const billions = Math.floor(viewsCount / 1000000000);
      const remainder = viewsCount % 1000000000;
      const decimal =
        remainder >= 100000000 ? `.${Math.floor(remainder / 100000000)}` : "";
      return `${billions}${decimal}b`;
    }
  };
  