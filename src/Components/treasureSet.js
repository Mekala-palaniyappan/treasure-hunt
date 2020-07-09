import React, { Component } from 'react';
let i, j;

class TreasureSet extends Component {
  componentDidMount() {
    this.updateRowAndColumn();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.row !== this.props.row ||
      prevProps.column !== this.props.column
    ) {
      this.updateRowAndColumn();
    }
  }

  updateRowAndColumn = () => {
    const { row, column } = this.props;
    document.getElementById('myList').innerHTML = '';
    for (i = 0; i < row; i += 1) {
      let rowBox = document.createElement('div');
      rowBox.className = 'row';
      rowBox.id = `row${i}`;

      for (j = 0; j < column; j += 1) {
        let box = document.createElement('div');
        box.className = 'box';
        box.id = `box${i}${j}`;
        box.onclick = function(element) {
          console.log(element.target.value);
          // element.innerHTML = element.target.value === 'x' ? '' : 'x';
        };
        rowBox.appendChild(box);
      }
      document.getElementById('myList').appendChild(rowBox);
    }
  };
  
  render() {
    return <div className={'op-container'} id={'myList'}></div>;
  }
}
export default TreasureSet;
