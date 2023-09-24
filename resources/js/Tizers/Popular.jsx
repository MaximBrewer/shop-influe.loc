import { useLayout } from "@/Contexts/LayoutContext";
import AfterCartAdd from "@/Modals/AfterCartAdd";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";

export default (props) => {
    const { auth, item } = props;
    const { priceFormat, setModal } = useLayout();

    const addToCart = () => {
        setModal(<AfterCartAdd />)
        Inertia.post(route(`cart.add`), {
            item: item.uniqid
        }, {
            preserveScroll: true
        })
    }

    const favorite = () => {
        if (props.auth.user)
            Inertia.patch(route(`cabinet.favorite.parts.toggle`), {
                item: item.uniqid
            }, {
                preserveScroll: true
            })
        else
            Inertia.patch(route(`favorite.parts.toggle`), {
                item: item.uniqid
            }, {
                preserveScroll: true
            })
    }

    return <div className={`product-card`}>
        {!auth.user || auth.user.type === 'BUYER' ? <button className={`btn-plain product-card-favourite ${props.favorites.parts.indexOf(item.uniqid) > -1 ? `active` : ``}`}
            onClick={() => {
                favorite()
            }}>
            <i className={`icon icon-favourite-gray`}></i>
        </button> : ``}
        <div className={`product-card-img`}>
            <img src={item.image} alt={item.title} />
            <Link href={route(`parts.show`, {
                part: item.uniqid
            })} className={`absolute-link`}></Link>
        </div>
        <div className={`product-card-caption`}>
            <div className={`product-name`}>
                <p>{item.title}</p>
                <Link href={route(`parts.show`, {
                    part: item.uniqid
                })} className={`absolute-link`}></Link>
            </div>
            <div className={`product-category`}>
                <p>{item.category.title}</p>
            </div>
            <div className={`product-detail`}>
                <div className={`product-detail-item`}>
                    <p>Арт:</p>
                    <span>{item.article}</span>
                </div>
                <div className={`product-detail-item`}>
                    <p>Код:</p>
                    <span>{item.code}</span>
                </div>
            </div>
        </div>
        <div className={`product-card-price`}>
            <p>от {priceFormat(item.price)}</p>
            <a href="#" onClick={(e) => {
                e.preventDefault()
                addToCart()
            }} className={`btn btn-main btn-sm product-card-btn`}>
                <div className={`product-card-btn-left`}>
                    <i className={`icon icon-basket`}></i>
                    <span>Купить</span>
                </div>
                <div className={`product-card-btn-right`}>
                    <span>В наличии: {item.total} шт</span>
                </div>
            </a>
        </div>
    </div>
}
