import React from 'react'
import {createUseStyles} from 'react-jss'

const Skill = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
        <div>
            <ul className={classes.ul}>
                <li><a href="/"                         className={classes.a}> Home </a></li>
                <li><a href="/"                           className={classes.a}> Portofolio     </a></li>
                <li><a href="/project"                    className={classes.a}> Project    </a></li>
                <li><a href="/skill"                      className={classes.a}> Skill      </a></li>
            </ul>
        </div>

        <h1 className={classes.judul}>Skill</h1> 
        <div className={classes.page1}>
            <div className={classes.wraph1}>
                <h1 className={classes.introduce}> 1. Raja PES</h1>
                {/* <h2 className={classes.introduce2}> I am sena</h2> */}
            </div>
            <div className={classes.wrapFoto}>
                <img src="https://pewarta-indonesia.com/wp-content/uploads/2020/12/maxresdefault-9.jpg" className={classes.foto} alt="sena" />
            </div>
        </div>   

        <div className={classes.page1}>
            <div className={classes.wraph1}>
                <h1 className={classes.introduce}> 2. Newbie FIFA</h1>
                {/* <h2 className={classes.introduce2}> I am sena</h2> */}
            </div>
            <div className={classes.wrapFoto}>
                <img src="https://img.sportstars.id//2021/07/xo11Y7/master_57r244chyO_335.jpeg" className={classes.foto} alt="sena" />
            </div>
        </div>       

        <div className={classes.page1}>
            <div className={classes.wraph1}>
                <h1 className={classes.introduce}> 3. Apex Streamer</h1>
                {/* <h2 className={classes.introduce2}> I am sena</h2> */}
            </div>
            <div className={classes.wrapFoto}>
                <img src="https://statik.tempo.co/data/2022/03/02/id_1091915/1091915_720.jpg" className={classes.foto} alt="sena" />
            </div>
        </div>   

        <div className={classes.page1}>
            <div className={classes.wraph1}>
                <h1 className={classes.introduce}> 4. Dota Archon</h1>
                {/* <h2 className={classes.introduce2}> I am sena</h2> */}
            </div>
            <div className={classes.wrapFoto}>
                <img src="https://gamedaim.com/wp-content/uploads/2022/03/Archon-Dota-2-MMR-800x450.jpg.webp" className={classes.foto} alt="sena" />
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
        // alignItems : 'center',
    },
    gallery : {
        margin: '10px',
        padding : '5px',
        border: '2px solid #B2002D',
        width : '20%',
    },
    galleryImg : {
        width : '100%',
        height : 'auto',
    },
    desc : {
        padding : '15px',
        textAlign : 'center',
        color : 'black',
        backgroundColor :'white',
    },
    wrapGallery : {
        display : 'flex',
        flexDirection : 'row',
        alignItems :'center',
        textAlign : 'center',
        top : '50%',
        left : '50%',
    },
    judul : {
        fontSize : 40,
        // marginTop : '50px',
        margin: 0,
        padding: 0, 
        width : '100%',
        alignItems :'center',
        textAlign : 'center',
        top : '50%',
        left : '50%',
        color : '#B2002D',
    },
    page1 : {
        display : 'flex',
        flexDirection : 'row',

    },
    introduce : {
        fontSize : 20,
        // marginTop : '50px',
        margin: 0,
        marginLeft : '100px',
        padding: 0, 
        width : '100%',
        alignItems :'center',
        // textAlign : 'center',
        top : '50%',
        left : '50%',
        color : '#B2002D',
    },
    foto : {
        width : '100%',
        height : '100%', 
        margin: '10px',
        padding : '5px',
        border: '2px solid #B2002D', 
    },
    wraph1 : {
        width : '60%',
        height : '100%',
        alignItems : 'center',  
        alignSelf : 'center',     
    },
    wrapFoto : {
        width : '30%',
        height : '100%',       
    },
    ul : {
        position : 'fixed', 
        width : '100%',
        listStyle : 'none',
        marginTop: 0,
        padding: 0,
        backgroundColor : '#fff',
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
    title : {
        float : 'left',
        color : '#B2002D',
        fontSize : 40,
        fontWeight : 'bold',
    }
})

export default Skill;