function range(size, startAt = 0) {
	return [...Array(size).keys()].map(i => i + startAt);
}

export default function genPages(totalPosts) {
    const pages = [];
  
    if (totalPosts <= 6) {
      pages.push(range(totalPosts));
    } else {
      pages.push(range(6));
      const additionalPages = Math.ceil((totalPosts - 6) / 5);
  
      for (let i = 0; i < additionalPages; i++) {
        const prevPage = pages[pages.length - 1];
        const prevLast = prevPage[prevPage.length - 1];
        const remaining = totalPosts - prevLast - 1;
        const count = Math.min(5, remaining);
        if (count > 0) {
          const newPage = [prevLast, ...range(count, prevLast + 1)];
          pages.push(newPage);
        }
      }
    }

    return pages;
}