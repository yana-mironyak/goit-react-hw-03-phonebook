import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import css from '../ContactsForm/ContactsForm.module.css';

const phoneRegExp = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup.string().min(2, 'Your name is too short').required(),
  number: yup.string().matches(phoneRegExp, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +').required(),
})

const ContactsForm = ({initialValues, onSubmit}) => {
    return <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
        <Form autoComplete='on'>
        <label className={css.contact} htmlFor='name'>
            Name
            <Field className={css.contactInput}type='text' name='name'/>
            <ErrorMessage className={css.contactError} name='name' component='div'/>
        </label>
        <label className={css.contact} htmlFor='number'>
            Number
            <Field className={css.contactInput}type="tel" name="number"/>
            <ErrorMessage className={css.contactError} name='number' component='div'/>
        </label>
        <button type='submit' className={css.contactButton}>Add contact</button>
        </Form>
    </Formik>
}

export default ContactsForm;

ContactsForm.propTypes = {
    initialValues: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }),
    onSubmit: PropTypes.func.isRequired,
}

