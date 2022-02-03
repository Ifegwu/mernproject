import React from 'react'
import {Routes, Switch} from 'react-router-dom'
import Home from './core/Home'
import About from './core/About'
// import Users from './user/Users'
// import Signup from './user/Signup'
// import Signin from './auth/Signin'
// import EditProfile from './user/EditProfile'
// import Profile from './user/Profile'
// import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'

const MainRouter = () => {
    return (<div>
      {/* <Menu /> */}
      <Switch>
        <Routes exact path="/" component={Home}/>
        <Routes path="/about" component={About} />
        {/* <Route path="/users" component={Users}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/> */}
      </Switch>
    </div>)
}

export default MainRouter