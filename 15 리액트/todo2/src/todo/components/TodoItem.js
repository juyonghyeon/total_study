import { RiCheckboxCircleFill, RiCheckboxCircleLine } from 'react-icons/ri';
import { FaWindowClose } from 'react-icons/fa';

const TodoItem = ({ id, title, content, checked, onToggle, onRemove }) => {
  return (
    <li>
      <span onClick={() => onToggle(id)}>
        {checked ? <RiCheckboxCircleFill /> : <RiCheckboxCircleLine />}
      </span>
      {title} / {content}
      <FaWindowClose onClick={() => onRemove(id)} />
    </li>
  );
};

export default TodoItem;
