import "./Header.css"

function Header() {
    return (
    <div className="header-container">
        <h1 className="name">林 兴</h1>
        <p className="job-position">Android开发工程师</p>
        <div className="contact-container">
            <div className="contact-info">电话: 135-7036-2046</div>
            <div className="contact-info">GitHub: <a href="https://github.com/RockyLin">https://github.com/RockyLin</a></div>
            <div className="contact-info">邮箱: thebestofrocky@gmail.com</div> 
            <div className="contact-info">LinkedIn: www.linkedin.com/in/thebestofrocky</div>
        </div>
    </div>
    )
}

export default Header;