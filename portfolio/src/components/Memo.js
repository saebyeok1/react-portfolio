import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO, DELETE_TODO } from '../store/memo';

export default function Memo() {
    const [text, setText] = useState('');
    // useSelector(): 리덕스 store의 state를 조회
    // 인자로 콜백함수, 콜백함수의 매개변수로 state를 받을 수 있음
    // 자동으로 subscribe을 하고 있기 때문에 데이터가 변형되면 컴포넌트가 재실행됨
    const todos = useSelector((state) => state);

    // dispatch는 우리가 호출할 수 있는 함수
    const dispatch = useDispatch();

    // todo 추가
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ADD_TODO, text });
        setText('');
    };

    // todo 삭제
    const onClick = (id) => {
        dispatch({ type: DELETE_TODO, id });
    };

    return (
        <>
            {/* <h2>To Dos</h2> */}
            <form onSubmit={onSubmit}>
                <input value={text} onChange={(e) => setText(e.target.value)} />
                <button>Add</button>
            </form>
            <ul>
                {todos.map((todo) => {
                    return (
                        <li key={todo.id} id={todo.id}>
                            {todo.text}
                            <button onClick={() => onClick(todo.id)}>
                                삭제
                            </button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
