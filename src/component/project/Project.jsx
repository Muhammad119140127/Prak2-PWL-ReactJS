import React from 'react'
import {createUseStyles} from 'react-jss'
import {useNavigate} from "react-router-dom";

const Project = () => {
  const classes = useStyles()
  let navigate = useNavigate();
  return (
    <div className={classes.container}>
        <div>
            <ul className={classes.ul}>
                <li><a href="/"                          className={classes.a}> Home </a></li>
                <li><a href="/"                           className={classes.a}> Portofolio     </a></li>
                <li><a href="/project"                    className={classes.a}> Project    </a></li>
                <li><a href="/skill"                      className={classes.a}> Skill      </a></li>
            </ul>
        </div>

        <div className={classes.body}>
            <h1 className={classes.judul}>Project</h1>
            <div className={classes.wrapGallery}> 
                <div className={classes.gallery}> 
                    <button className={classes.btn} 
                     >
                        <img className={classes.galleryImg} src="https://asset.kompas.com/crops/Nv8sLqjTKAQf5sb8y2ho0uzeqXc=/0x0:0x0/750x500/data/photo/2013/04/18/0732436-project-pop-780x390.jpg" alt="sena" />  
                        <div className={classes.desc}>Project 1</div> 
                    </button>   
                </div>

                <div className={classes.gallery}>  
                    <button className={classes.btn}
                    >
                        <img className={classes.galleryImg} src="https://d1d8o7q9jg8pjk.cloudfront.net/p/lg_5eff226cd6428.jpg" alt="sena" />  
                        <div className={classes.desc}>Project 2</div> 
                    </button>      
                </div>

                <div className={classes.gallery}>  
                    <button className={classes.btn}
                    >
                        <img className={classes.galleryImg} src="https://images.philips.com/is/image/PhilipsConsumer/NPX643_INT-IMS-en_ID?$jpglarge$&wid=960" alt="sena" />  
                        <div className={classes.desc}>Project 3</div> 
                    </button>     
                </div>

                <div className={classes.gallery}>  
                    <button className={classes.btn}
                    >
                        <img className={classes.galleryImg} src="https://i1.sndcdn.com/avatars-000689513420-uf8vyh-t500x500.jpg" alt="sena" />  
                        <div className={classes.desc}>Project 4</div> 
                    </button>      
                </div>

                <div className={classes.gallery}>  
                    <button className={classes.btn}
                    >
                        <img className={classes.galleryImg} src="https://i0.wp.com/adammuiz.com/wp-content/uploads/2022/01/Pengertian-Kuli.jpg?resize=460%2C350&ssl=1" alt="sena" />  
                        <div className={classes.desc}>Project 5</div> 
                    </button>      
                </div>
            </div>
        </div>
    </div>
  )
}

const useStyles = createUseStyles({
    container: {
        backgroundColor : '#ffffff',
        margin: 0,
        color : 'white',
    },
    gallery : {
        margin: '10px',
        padding : '5px',
        border: '2px solid #ffffff',
        width : '20%',
        boxShadow : '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition : '0.3s',
    },
    galleryImg : {
        width : '100%',
    },
    desc : {
        padding : '15px',
        textAlign : 'center',
        color : '#B2002D',
        backgroundColor :'white',
        fontWeight : 'bold',
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
        margin: 0,
        padding: 0, 
        width : '100%',
        alignItems :'center',
        textAlign : 'center',
        top : '50%',
        left : '50%',
        color : '#B2002D',
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
    title : {
        float : 'left',
        color : '   #B2002D',
        fontSize : 40,
        fontWeight : 'bold',
    },
    btn : {
        backgroundColor : 'white',
        border : 'none',
    }
})
export default Project;