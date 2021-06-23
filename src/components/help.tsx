import packageJson from '../../package.json';

export const Help = () => (
    <div className="help">
        <div className="title">
            <h2>Help</h2>
            <small>{packageJson.version}</small>
        </div>
        <div className="search-wrapper">
            <input className="search" placeholder="Search something..." />
            <i className="fas fa-search"></i>
        </div>
        <div className="help-content">
            MD5 is a widely used hash function. It's been used in a variety of security applications and is also commonly used to check the integrity of files. Though, MD5 is not collision resistant, and it isn't suitable for applications like SSL certificates or digital signatures that rely on this property.
        </div>
    </div>
)