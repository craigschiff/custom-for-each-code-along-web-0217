function forEach(iterable, callback) {
  if (Array.isArray(iterable)) {
    for (i = 0; i<iterable.length; i += 1) {
      const element = iterable[i]
      callback(element, i, iterable)
    }
  }else if (typeof iterable === 'object') {
    for (var key in iterable){
      const value = iterable[key]
      callback(value, key, iterable)
    }
  }
}
