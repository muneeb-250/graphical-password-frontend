const Layout = () => {
    return <main>
        <h1>Graphical <span>Password</span></h1>
        <div className="left">
            <img src={file ? file : defaultImage} />
            <h3>Your image</h3>
        </div>
        <div className="right">
            <Login setFile={setFile} />
            <p>Don't have an account? <span>Sign up!</span></p>
        </div>
    </main>
}


export default Layout;