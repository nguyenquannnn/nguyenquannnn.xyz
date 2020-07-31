import { useRef } from "react"

export default function (props: { tags: Array<string> }) {
    const containerRef = useRef()
    return <div ref={containerRef}
        className="flex mt-2 flex-wrap">
        {(props.tags && props.tags.length) > 0 && props.tags.map((tag, index) => {
            return <div className="rounded-full py-1 px-2 md:py-2 md:px-4 bg-gray-300 mr-1 mb-2 text-sm sm:text-md" key={index}>{tag}</div>
        })
        }
    </div >
}