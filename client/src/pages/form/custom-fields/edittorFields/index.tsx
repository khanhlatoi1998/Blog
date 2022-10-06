import { useState } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import EditorToolbar, { modules, formats } from "../../post/EditorToolbar";

interface Props {
    form: any;
    label: any;
    type: any;
    options: any;
    placeholder: any;
    disable: any;
    className: string;
    defaultNameTouchSelect: string;
}

const EditorFields: React.FC<any> = (props) => {
    const [content, setContent] = useState<string>('');
    const {
        field, form,
        type, label, placeholder, disabled, clasName
    } = props;

    const { name, value, onBlur, onChange } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    const handleChange = (value: string) => {
        setContent(value);
        form.setFieldValue(name, value);
    };

    return (
        <div>
            <EditorToolbar />
            <ReactQuill
                placeholder={placeholder}
                theme="snow"
                modules={modules}
                formats={formats}

                onChange={handleChange}
            />
            <input
                id={name}
                {...field}
                className="hidden"

                type={type}
                disabled={disabled}
            />

            {showError ? <p className='text-sm text-[#ff7600]'>{errors[name]}</p> : <p className='text-sm opacity-0'>success</p>}
            <div className="post__description" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );

};

export default EditorFields;