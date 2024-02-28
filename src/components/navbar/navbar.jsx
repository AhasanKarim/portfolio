import "./navabar.scss";
const Navbar = () => {
    return (
        
        <div className="navbar">
            {/* Sidebar */}
            <div className="wrapper">
                <span>Ahasan Karim</span>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/mdahasanulkarimahasan/"><img src="/public/Linkedin.png" alt="" /></a>
                    <a href="https://www.researchgate.net/profile/Ahasanul-Karim-Ahasan"><img src="/public/RG.png" alt="" /></a>
                    <a href="https://github.com/AhasanKarim"><img src="/public/github.png" alt="" /></a>
                    <a href="https://www.instagram.com/ahasan._.karim/"><img src="/public/instagram.png" alt="" /></a>
                    <a href="https://scholar.google.ca/citations?hl=en&user=de9D2_QAAAAJ"><img src="/public/googleScolar.png" alt="" /></a>
                </div>
            </div>
        </div>    

        
    )
    }

export default Navbar; 