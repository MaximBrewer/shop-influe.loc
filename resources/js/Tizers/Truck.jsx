import { useLayout } from "@/Contexts/LayoutContext";
import PurchaseModal from "@/Modals/Purchase";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";

export default (props) => {

    const { item, favorites, auth } = props
    const { priceFormat, setModal } = useLayout();

    const purchase = () => {
        setModal(<PurchaseModal {...props} truck={item.uniqid}/>)
    }

    const favorite = () => {
        if (auth.user)
            Inertia.patch(route(`cabinet.favorite.trucks.toggle`), {
                item: item.uniqid
            }, {
                preserveScroll: true
            })
        else
            Inertia.patch(route(`favorite.trucks.toggle`), {
                item: item.uniqid
            }, {
                preserveScroll: true
            })
    }

    return <div className={`product-card`}>
        {!auth.user || auth.user.type === 'BUYER' ? <button className={`btn-plain product-card-favourite ${favorites.trucks.indexOf(item.uniqid) > -1 ? `active` : ``}`}
            onClick={() => {
                favorite()
            }}>
            <i className={`icon icon-favourite-gray`}></i>
        </button> : ``}
        <div className={`product-card-img`}>
            <img src={item.image} alt={item.title} />
            <Link href={route(`trucks.show`, {
                truck: item.uniqid
            })} className={`absolute-link`}></Link>
        </div>
        <div className={`product-card-caption`}>
            <div className={`product-name`}>
                <p>{item.title}</p>
                <Link href={route(`trucks.show`, {
                    truck: item.uniqid
                })} className={`absolute-link`}></Link>
            </div>
            <div className={`product-category`}>
                <p>{item.category.title}</p>
            </div>
            <div className={`product-detail`}>
                <div className={`product-detail-item`}>
                    <span>{item.brand.title}</span>
                </div>
                <div className={`product-detail-item`}>
                    <span>{item.model.title}</span>
                </div>
            </div>
        </div>
        {!auth.user || auth.user.type === 'BUYER' ? <div className={`product-card-price`}>
            <p>{priceFormat(item.price)}</p>
            <a href="#" onClick={(e) => {
                e.preventDefault()
                purchase()
            }} className={`btn btn-main btn-sm product-card-btn`}>
                <div className={`product-card-btn-left`}>
                    <span>Оставить заявку</span>
                </div>
            </a>
        </div> : ``}
    </div>
}