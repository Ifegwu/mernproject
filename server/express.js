import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from 'compression'
import cors from 'cors'
import helmet from "helmet";
import Template from '../template'
import theme from "../cleint/theme";
import MainRouter from "../cleint/MainRouter";
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { useRoutes } from 'react-router-dom'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())
app.use("/", userRoutes)
app.use("/", authRoutes)

app.get('/', (req, res) => {
    const sheets = new ServerStyleSheets()
    // const context = {}
    const markup = ReactDOMServer.renderToString(
        sheets.collect(
            // <useRoutes context={context}>
            //     <ThemeProvider theme={theme}>
            //       {/* <MainRouter /> */}
            //       <div>Client Side</div>
            //     </ThemeProvider>
            // </useRoutes>
            function App() {
                let element = useRoutes([
                  {
                    path: "/",
                    element: <div>Client Side</div>,
                    // children: [
                    //   {
                    //     path: "messages",
                    //     element: <DashboardMessages />
                    //   },
                    //   { path: "tasks", element: <DashboardTasks /> }
                    // ]
                  },
                  { path: "team", element: <About /> }
                ]);
              
                return element;
              }
        )
    )
    res.status(200).send(Template({
        markup: markup,
        // css: css
    }))
})

export default app