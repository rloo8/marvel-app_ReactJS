import styles from "./Header.module.css";

function Header(){
    return (
    <header className={styles.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png" alt="marvel" />
    </header>
    )      
}

export default Header;