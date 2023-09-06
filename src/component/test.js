import React, { Component } from 'react';

class RemoveComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: ["عنصر 1", "عنصر 2", "عنصر 3", "عنصر 4"], // المصفوفة الأصلية
    };
  }

  // دالة لإزالة العنصر الأخير من المصفوفة
  removeLastItem = () => {
    const { matrix } = this.state;
    if (matrix.length > 0) {
      matrix.pop();
      this.setState({ matrix });
    }
  }

  render() {
    const { matrix } = this.state;

    return (
      <div>
        <button onClick={this.removeLastItem}>إزالة العنصر الأخير</button>
        <div className="matrix-container">
          {matrix.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default RemoveComponent;