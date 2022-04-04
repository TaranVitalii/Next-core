import { useMemo } from "react"

const Text = ({ tag, text }) => {
    const Tag = useMemo(()=>(tag || 'h1'),[tag])

    return <Tag>{text}</Tag>
}

export default Text