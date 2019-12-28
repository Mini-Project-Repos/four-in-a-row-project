class Board {
  constructor() {
    this.rows = 6;
    this.columns = 7;
    this.spaces = this.createSpaces();
  }

  /**
   * Generates 2D array of spaces.
   * @return  {Array}     An array of space objects
   */

  /*
   Info on how to make nested array:
   https://www.geeksforgeeks.org/how-to-create-two-dimensional-array-in-javascript/

   */
  createSpaces() {
    const spaces = [];

    for (var x = 0; x < this.columns; x++) {
      const column = [];

      for (var y = 0; y < this.rows; y++) {
        const space = new Space(x, y);
        column.push(space);
      }
      spaces.push(column);
    }
    console.log(spaces);
    return spaces;
  }
}
