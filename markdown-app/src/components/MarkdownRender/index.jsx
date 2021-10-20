import marked from 'marked'
import DOMPurify from 'dompurify'

function MarkdownRender({ content }) {
    const renderText = (text) => {
        const sanitizedText = DOMPurify.sanitize(text)
        const __html = marked(sanitizedText)
        return { __html }
    }

    return <div dangerouslySetInnerHTML={renderText(content)}></div>
}

export default MarkdownRender
