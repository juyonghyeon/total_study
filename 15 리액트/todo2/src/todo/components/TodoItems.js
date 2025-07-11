import { FaInfoCircle } from "react-icons/fa";
import TodoItem from "./TodoItem";

const TodoItems = ({items, onToggle, onRemove, onRemoveAll}) => {

    if (!items || items.length === 0) {
        return (
          <div>
            <FaInfoCircle /> 등록된 스케줄이 없습니다.
          </div>
        );
      }

    return (
        <>
            <ul>
                {items.map((props) => (
                    <TodoItem key={props.id} {...props} onToggle={onToggle} onRemove={onRemove} />
                ))}
            </ul>
            <button type="button" onClick={onRemoveAll}>선택 스케쥴 삭제</button>
        </>
    );

};

export default TodoItems;