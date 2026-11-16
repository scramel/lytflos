// adds the .sorten() method to arrays (fixes spanish lists)
if (!Array.prototype.sorten) {
  Object.defineProperty(Array.prototype, 'sorten', {
    value: function () {
      return this.sort((a, b) => a.localeCompare(b, 'en'));
    },
    writable: true,
    configurable: true,
    enumerable: false,
  });
}
