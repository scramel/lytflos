export {};

// fixes warnings such as "'sorten' does not exist on type 'string[]'".
declare global {
  interface Array<T> {
    /**
     * Sorts an array of strings using English locale rules.
     */
    sorten(): this;
  }
}
