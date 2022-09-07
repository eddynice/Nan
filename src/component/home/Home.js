import classes from "./home.module.css"
const Home =()=>{ 

    return(
        <div className={classes.home}>
            <div className={classes.home1}>
            <h3 >Hi, my name is</h3>
            <h1>
                <span className={classes.span}>Osareniye Osazee</span>
            </h1>
            <h3>Full Stack Developer and Graphic designer. I enjoy building things for the web.</h3>
        <h3>View my Projects,<a href="/#"> My Resume,</a> <a href="/#">Skills,</a>, or send me an email at <a href="/#">adekaeatwork@gmail.com</a></h3>
       <div className={classes.button}>
        <button>AVAILABLE FOR WORK</button>
        </div>
        </div>
        </div>
    )
}
export default Home