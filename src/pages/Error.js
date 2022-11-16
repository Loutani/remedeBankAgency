import './../assets/css/layout/_error.css';

function Error() {
    return (
        <div className="main">
            <p className="error-code">ERROR <span>404</span></p>
            <p className="error-description">Something went wrong</p>
            <p className="redirect">Go to <a href="/">Home</a> page</p>
        </div>
    )
}

export default Error