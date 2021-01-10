import React, { PureComponent } from 'react';

class Habit extends PureComponent {

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    // 아직 이 부분이 이해가 가지 않는다, 없던 count객체를 새로 생성해줘서 업데이트되는건가?
    // 그럼 아무 상관없는 데이터 객체를 생성해줘도 상관없는건가? 값이 그대로인 name을 줘도 되나? -안되네
    // 아니 객체로 전달받았어도 결국 habit의 상태를 변경하는거아닌가? 뭔소린지 모르겠네 나는
    // 어쨋든간에 객체형태로 자식한테 보내주면 된다 이거지..?일단.. ㅇㅋ
    //const { count } = this.props;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
