import { useEffect, useState } from 'react'
import '../../styles/App.css'
import { sampleText } from '../../utils/data/sampleText'
import MarkdownRender from '../MarkdownRender'

function App() {
    const [content, setContent] = useState('')

    useEffect(() => {
        const savedContent = localStorage.getItem('content')
        setContent(savedContent ? savedContent : sampleText)
    }, [])

    const handleChange = (event) => {
        setContent(event.target.value)
    }

    useEffect(() => {
        localStorage.setItem('content', content)
    }, [content])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <textarea
                        className="form-control"
                        rows="35"
                        value={content}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="col-md-6">
                    <MarkdownRender content={content} />
                </div>
            </div>
        </div>
    )
}

export default App
