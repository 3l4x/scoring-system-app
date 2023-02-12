import React from 'react'
import Highlight from 'react-highlight'
import '../assets/style/monokai-sublime.css';
import js_beautify from 'js-beautify';
import { Segment, Header } from 'semantic-ui-react'
const FormattedCode = ({ title = 'Random title', obj }) => {
    return (
        <div>

            <Segment inverted>
                <Header as='h2'>{title}</Header>
            </Segment>
            <div className="hljs" style={{ textAlign: 'left', height: '400px', width: '300px' }}>
                <Highlight className='javascript'>
                    {js_beautify(JSON.stringify(obj))}
                </Highlight>
            </div>
        </div>
    )
}

export default FormattedCode