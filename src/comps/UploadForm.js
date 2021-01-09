import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);


    const types = ['image/png', 'image/jpeg'];

    const handleChange = (e) => {

        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('try a valid image file');
        }
    };

    return (
        <form>
            <label className="active" htmlFor="file">
                <input type="file" id="file" onChange={handleChange} />
                <span role="img" aria-label="camera icon">📷</span>
            </label>
                <div className="output">
                    { error && <div className="error">{ error }</div> }
                    { file && <div>{ file.name }</div> }
                    { file && <ProgressBar file={file} setFile={setFile} /> }
                </div>
        </form>
    );
}

export default UploadForm;