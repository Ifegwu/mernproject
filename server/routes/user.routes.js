import express from 'express'
import userCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'

const userRoutes = express.Router()

userRoutes.route('/api/users')
  .get(userCtrl.list)
  .post(userCtrl.create)

userRoutes.route('/api/users/:userId')
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove)

userRoutes.param('userId', userCtrl.userByID)

export default userRoutes