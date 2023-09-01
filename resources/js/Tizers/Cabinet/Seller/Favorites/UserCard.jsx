

export default (props) => {
    return <>
        <div className="product-card favourite-client-card">
            <button className="btn-plain product-card-favourite active">
                <i className="icon icon-favourite-gray"></i>
            </button>
            <div className="favourite-client-card-content">
                <div className="favourite-client-card-img">
                    <img src="" alt="" />
                </div>
                <div className="favourite-client-card-name">
                    <p>Имя Фамилия</p>
                </div>
            </div>
        </div>
    </>
}