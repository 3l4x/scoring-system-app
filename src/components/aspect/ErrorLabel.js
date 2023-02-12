import React from 'react'
import { Label } from 'semantic-ui-react'
const ErrorLabel = ({labelRef = null, id, errors, pointing = 'left'}) => {
    return (
        <div ref={labelRef}>
            <Label basic color='red' className={!(id in errors) ? 'hidden' : ''} pointing={pointing}>
                {(id in errors) ? errors[id] : ''}
            </Label>
        </div>
    )
}

export default ErrorLabel
