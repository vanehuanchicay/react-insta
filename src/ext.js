function renderUserData () {
    return (
      <ul className='nav navbar-nav navbar-right'>
        <li>
          <img className='responsive-img img-user' src={user.photoURL} />
        </li>
        <li>{user.displayName}</li>
        <li>
          <button className='btn' onClick={onLogout}>Logout</button>
        </li>
      </ul>
    )
  }