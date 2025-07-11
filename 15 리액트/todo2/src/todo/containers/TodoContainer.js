import { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoItems from "../components/TodoItems";



const TodoContainer = () => {
    const [form, setForm] = useState({});
    const [items, setItems] = useState([]);

    const [errors, setErrors] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();

        let hasE = false;
        const required = {
            title: '제목을 입력하세요.',
            content: '내용을 입력하세요.',
        };
        const errors = {};
        for (const [field, message] of Object.entries(required)) {
            if (!form[field] || !form[field]?.trim()) {
                errors[field] = message;
                hasE = true;
            }
        }

        setErrors(errors);
        if (hasE) return;
        setItems(items.concat({...form, id: Date.now()}));

        setForm({});

    };

    const onChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
    
    const onToggle = (id) => {
        setItems((prev) => prev.map(item => item.id === id ? ({...item, checked: !item.checked}): item));
    };

    const onRemove = (id) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const onRemoveAll = () => {
        setItems(items.filter(({checked}) => !checked));
    };



    return (
        <>
            <TodoForm onSubmit={onSubmit} onChange={onChange} form={form} errors={errors} />
            <TodoItems items={items} onToggle={onToggle} onRemove={onRemove} onRemoveAll={onRemoveAll} />
        </>

    );

};

export default TodoContainer;