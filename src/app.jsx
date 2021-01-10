import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';
import React, { Component } from 'react';


class App extends Component {
  state = {
    habits: [
      // { id: 1, name: 'Reading', count: 0 },
      // { id: 2, name: 'Running', count: 0 },
      // { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = habit => {
    // 배열로 보내고 함수는 단독으로 처리하네
    // 부모는 함수와 데이터를 자식들에게 보내고, 자식들은 그것을 자기 나름대로 처리하는데,
    // 데이터를 가공해서 메시지를 보낸다. (부모의 메소드를 실행시킴으로서 데이터를 담은 메시지를 보냄.)

    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++;
    //this.setState({ habits });

    // map 이해 return?
    //(필터와 비슷한건가), ++는 안되는건가?
    // ++를 앞에주면 되고, 뒤에 주면 객체는 매번 교체되기때문에 적용 안됨.
    const habits = this.state.habits.map(item=>{
      if(habit.id===item.id){
        return {...habit, count: habit.count+1};
      }
        return item;
    })

    this.setState({habits});
  };

  handleDecrement = habit => {

    const habits = this.state.habits.map(item=>{
      if(habit.id===item.id){
         const count = habit.count - 1;
        return {...habit, count: count < 0 ? 0 : count}
      }
        return item;
    })

    this.setState({habits});
  };

  handleDelete = habit => {
    const habits = this.state.habits.filter(item=>item.name!==habit.name)
    this.setState({habits});
    // console.log(habit);
    // const list = document.querySelectorAll('.habit-name');
    // list.forEach(li => {
    //   if(li.innerHTML==habit.name){
    //     li.parentNode.remove();
    //   }
    // })
  };

  addHandling = name =>{

    const habits = [...this.state.habits, {id:Date(),name,count:0}]

    this.setState({habits});

  }

  handleReset = () => {
    const habits = this.state.habits.map(habit=>{
      if(habit.count>0){
        return {...habit, count:0}
      }else{
        // map이 리턴하는 것은 모두 새로운 것이 아니라, 기존의 객체 그대로를 리턴할수도있다.
        // 즉, 업데이트 되지 않고 그냥 얕은 복사를 해온다는거지?
        return habit
      }
    });

    this.setState({habits});

  };

  render() {
    return <>
    <Navbar
      totalCount={this.state.habits.filter(item=>item.count>0).length}
    />
    <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.addHandling}
          onReset={this.handleReset}
    />
    </>
  }
}

export default App;


/*
오브젝트(state)를 직접 수정하지 않아야한다.

김효민  오후 3:30
2.12 부모는 함수와 데이터를 자식에게 전달하고 자식은 받은 데이터를 자기 방식으로 가공하여 다시 부모의 메소드에 데이터를 담아서 실행 시킨다.(메시지를 보낸다)

김효민  오후 3:45
자식은 컴포넌트(UI)와 데이터가공을 제공한다.
부모는 자신의 데이터를 자식에게 넘겨서 데이터를 가공하여 가공된 데이터를 이용한다.

김효민  오후 3:56
자식이 데이터를 가공하는 과정은, 받은 데이터를 재가공할수도, 새로운 데이터를 만들어 보낼수도 있다.
자식이 Input에 입력된 값을 스스로 만들어내서 부모에게 보낸다. 부모는 응답할 전화번호(함수의 변수명)와 요청(메시지)만 보내면 된다.
*/