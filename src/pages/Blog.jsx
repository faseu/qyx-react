import { Link } from "react-router-dom"

function Blog() {
    return (
        <div className="flex justify-center items-center min-h-screen flex-col">
            <div className="text-center">

                <h1>This page is still under construction, please come again another time!</h1>
                <h2><Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" to="/">Return</Link></h2>
            </div>
        </div>
    )
}

export default Blog