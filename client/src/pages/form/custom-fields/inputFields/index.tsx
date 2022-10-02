import { ErrorMessage } from 'formik';

interface Props {
    field: any;
    form: any;
    type: any;
    label: any;
    placeholder: any;
    disable: any;
    
}

const InputFiled: React.FC<any> = (props) => {
    const {
        field, form,
        type, label, placeholder, disabled
    } = props;

    const {name, value, onChange, onBlur} = field;
    const {errors, touched} = form;
    const showError = errors[name] && touched[name];

    return (
        <div className="mt-4">
            <label htmlFor={name}>{label}</label>
            <input className="w-full px-4 py-1 bg-transparent border-b border-solid border-color_06" 
                id={name}
                {...field}

                type={type} 
                disabled={disabled}
                placeholder={placeholder}
            />
            {showError ? <p className='text-sm text-[#ff7600]'>{errors[name]}</p> : <p className='text-sm opacity-0'>khanh</p>}
        </div>
    );
};

export default InputFiled;