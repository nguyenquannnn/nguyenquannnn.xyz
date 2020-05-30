import { useRef } from "react"

export default function (props: { tags: Array<string> }) {
    const containerRef = useRef()
    return <div ref={containerRef}
        className="flex m-2 flex-wrap">
        {(props.tags && props.tags.length) > 0 && props.tags.map(tag => {
            return <div className="rounded-full py-2 px-4 bg-gray-300 mr-1">{tag}</div>
        })
        }
    </div >
}