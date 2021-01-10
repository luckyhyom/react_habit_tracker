import React,{ memo } from 'react';

const HabitAddForm = memo(props =>{
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const addHandling = event =>{
        event.preventDefault();

        const name = inputRef.current.value;
        console.log(name);
        name && props.onAdd(name);
        formRef.current.reset();
    }


    return (
        <form className="form" onSubmit={addHandling} ref={formRef}>
            <input 
            ref={inputRef}
            type="text" placeholder="Habits"
                />
            <button >Add</button>
        </form>
    );
});



export default HabitAddForm;