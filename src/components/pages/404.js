import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";
import './404Link.css';
import { Helmet } from "react-helmet";

const Page404 = () => {
    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content={`Error page`}
                />
                <title>Error page</title>
            </Helmet>
            <ErrorMessage />
            <p style={{ 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px' }}>The page doesn't exist...</p>
            <Link style={{ 'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px' }} className="underline-one" to="/">Back to home</Link>
        </div>
    )
}

export default Page404;