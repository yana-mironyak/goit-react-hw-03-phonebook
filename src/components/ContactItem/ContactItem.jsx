import PropTypes from 'prop-types';

import css from '../ContactItem/ContactItem.module.css';

const ContactItem = ({ name, number, id, onDeleteContact }) => {
    return <li className={css.contactItem}>{name}: {number}
        <button type='button' className={css.deleteButton} onClick={() => onDeleteContact(id)}>Delete</button></li>
}

export default ContactItem;

ContactItem.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}