import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaWindowClose } from 'react-icons/fa';

const TodoItem = ({id, title, content, checked, onToggle, onRemove}) => {
    return (
      <li>
        <span onClick={() => onToggle(id)}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </span>
        {title} / {content}
        <FaWindowClose onClick={() => onRemove(id)} />
      </li>
    );
};

export default TodoItem;