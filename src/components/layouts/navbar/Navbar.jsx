import logo from "../../../assets/logo.png"
import styles from "./Navbar.module.css"



function Navbar(){
    console.log(styles);

    return(
            <nav> 
                <div className="container">
                    <div className={styles["nav-parent"]}>
                        <div className="nav-logo">
                            <img src={logo} />
                        </div>
                        <div className={`${styles["links-div"]} `}>
                            <ul className={`${styles["links"]} d-flex`}>
                                <li className={styles.activeLink}>Home</li>
                                <li>find job</li>
                                <li>about us</li>
                                <li>contact</li>
                            </ul>
                            <div className="group-btns d-flex align-items-center gap-2">
                                <button className={styles.registerBtn}>Register</button>
                                <button className={styles.signUpBtn}>sign up</button>
                            </div>
                        </div>
                    </div>





                </div>
                
                
                
                
                
                
                
                
            </nav>
            );

}

export default Navbar;