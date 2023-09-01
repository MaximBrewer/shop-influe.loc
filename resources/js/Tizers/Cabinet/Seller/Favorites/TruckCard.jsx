

export default (props) => {
    return <>
        <div className="product-card">
            <button className="btn-plain product-card-favourite active">
                <i className="icon icon-favourite-gray"></i>
            </button>
            <div className="product-card-img">
                <img src="img/content/product-img.png" alt="" />
                <a href="" className="absolute-link"></a>
            </div>
            <div className="product-card-caption">
                <div className="product-name">
                    <p>Ashuki 024567846</p>
                    <a href="" className="absolute-link"></a>
                </div>
                <div className="product-category">
                    <p>Рулевое управление</p>
                </div>
                <div className="product-detail">
                    <div className="product-detail-item">
                        <p>Арт:</p>
                        <span>ASK1421</span>
                    </div>
                    <div className="product-detail-item">
                        <p>Код:</p>
                        <span>0654812</span>
                    </div>
                </div>
            </div>
            <div className="product-card-price">
                <p>от 150 000 тг</p>
                <a href="" className="btn btn-main btn-sm product-card-btn">
                    <i className="icon icon-basket"></i>
                    <span>Купить</span>
                </a>
            </div>
        </div>
    </>
}