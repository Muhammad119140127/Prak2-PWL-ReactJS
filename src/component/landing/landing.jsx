import React from 'react'
import {createUseStyles} from 'react-jss'
import sena from './../../assets/sena.png'
import {useNavigate} from "react-router-dom";

const Landing = () => {
  const classes = useStyles()
  return (

    <div className={classes.container}>
        <div>
            <ul className={classes.ul}>
                <li><a href="/"                             className={classes.a}> Home </a></li>
                <li><a href="/"                           className={classes.a}> Portofolio     </a></li>
                <li><a href="/project"                    className={classes.a}> Project    </a></li>
                <li><a href="/skill"                      className={classes.a}> Skill      </a></li>
            </ul>
        </div>

        <div className={classes.body}>
            <div className={classes.wrapFoto}>
                <img src={sena} className={classes.foto} alt="sena" />
            </div>
            <div className={classes.wrapText}>
                <h1 className={classes.introduce}> Halo!</h1>
                <h2 className={classes.introduce2}> THIS IS Wirasena.</h2>
            </div>
        </div>

    </div>
  )
}

const useStyles = createUseStyles({
    container: {
        backgroundColor : '#ffffff',
        margin: 'auto',
        color : 'white',
        width: '100%',
        height : '100%',
    },
    introduce : {
        fontSize : 50,
        margin: 0,
        padding: 0, 
        width : '100%',
        alignItems :'center',
        textAlign : 'center',
        top : '50%',
        left : '50%',
        color : '#B2002D',
    },
    introduce2 : {
        fontSize : 40,
        margin: 0,
        padding: 0, 
        width : '100%',
        alignItems :'center',
        textAlign : 'center',
        top : '50%',
        left : '50%',
        color : '#B2002D',
    },
    foto : {
        width : '100%',
        height : '100%',       
    },
    wrapText : {
        width : '50%',
        height : '100%',
        alignItems : 'center',  
        alignSelf : 'center',     
    },
    wrapFoto : {
        width : '70%',
        height : '100%',       
    },
    body : {
        display : 'flex',
        flexDirection : 'row',
    },
    ul : {
        position : 'fixed', 
        width : '100%',
        listStyle : 'none',
        marginTop: 0,
        padding: 0,
        backgroundColor : '#ffffff',
    }, 
    a : {
        float : 'right',
        alignItems : 'center',
        textAlign : 'center',
        color : '#B2002D',
        padding : '16px',
        textDecoration : 'none',
        fontWeight :'bold',
        fontSize: 20,
    },
   
})

export default Landing;