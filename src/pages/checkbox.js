import React from 'react';
const CheckBox = (props) => {
    return (
        <div>
            <label>
                {props.title}
                <input type="checkbox"
                    onChange={(e) => props.handleChange(e, props.id)}
                    name={props.title} />

            </label>
        </div>
    )

}
export default CheckBox;
