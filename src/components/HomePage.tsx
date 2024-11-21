import React from 'react';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

const HomePage = () => {
    return (
        <div>
            <TodoAdd/>
            <TodoList/>
        </div>
    );
};

export default HomePage;