import express from 'express'
import authCtrl from '../controllers/auth.controller'

const authRoutes = express.Router()

authRoutes.route('/auth/signin')
    .post(authCtrl.signin)

authRoutes.route('/auth/signout')
    .get(authCtrl.signout)

export default authRoutes

