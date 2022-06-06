function NavBar({user}) {
    const isCurrentPath = (path, text) => {
        return (window.location.pathname === path) && text;
    }

    let navList;
    if (user['isAuthed']) {
        navList = <div className="navbar-nav me-auto mb-2 mb-md-0">
                      <a className={`nav-item nav-link ${isCurrentPath('/', 'active')}`} id="home" href="/"
                         aria-current={isCurrentPath('/', 'page')}>首頁</a>
                      <a className={`nav-item nav-link ${isCurrentPath('/add-entry', 'active')}`} id="add-entry" href="/add-entry"
                         aria-current={isCurrentPath('/add-entry', 'page')}>加入詞條</a>
                      <a className={`nav-item nav-link ${isCurrentPath('/usage', 'active')}`} id="usage-guide" href="/usage"
                         aria-current={isCurrentPath('/usage', 'page')}>凡例</a>
                  </div>
    } else {
        navList = <div className="navbar-nav me-auto mb-2 mb-md-0">
                      <a className={`nav-item nav-link ${isCurrentPath('/login', "active")}`} id="login" href="/login"
                         aria-current={isCurrentPath('/login', 'page')}>登入</a>
                      <a className={`nav-item nav-link ${isCurrentPath('/sign-up', "active")}`} id="signup" href="/sign-up"
                         aria-current={isCurrentPath('/sign-up', 'page')}>申請帳戶</a>
                  </div>
    }

    const userMenu = <div>
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item dropdown">
                                <a id="user" href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                   aria-haspopup="true" aria-expanded="false"> {user['user_name']} </a>
                                <div className="dropdown-menu dropdown-menu-dark" aria-labelledby="user">
                                    <a className="nav-link" href="/logout">登出</a>
                                    <a className={`nav-link ${isCurrentPath('/settings', "active")}`} href="/settings"
                                       aria-current={isCurrentPath('/settings', 'page')}>設定</a>
                                </div>
                            </li>
                        </ul>
                    </div>;

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <div className="container-fluid justify-content-between">
                    <a className="navbar-brand" href="/">CantoDict</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar">
                        {navList}
                        {user['isAuthed'] && userMenu}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
