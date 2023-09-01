import { useLayout } from "@/Contexts/LayoutContext";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { useState } from "react";



const ConfirmDelete = (props) => {

    const { confirm = () => { }, reject = () => { }, title = `Вы уверены?` } = props

    const [open, setOpen] = useState(false)

    return <>
        <div className="btn-plain product-delete relative cursor-pointer" onClick={e => {
            e.preventDefault()
            setOpen(true)
        }}>
            <i className="icon icon-close"></i>
            <div style={{
                position: `absolute`,
                display: open ? `block` : `none`,
                top: `100%`,
                right: 0,
                background: `white`,
                padding: `.5rem .75rem`,
                borderRadius: `.25rem`,
                fontSize: `smaller`,
                border: `1px solid lightgray`
            }}>
                <div>{title}</div>
                <div className={`flex`}>
                    <button className={`btn btn-xs btn-primary mr-3`} onClick={(e) => {
                        e.stopPropagation();
                        reject()
                        setOpen(false);
                    }}>Нет</button>
                    <button className={`btn btn-xs btn-primary`} onClick={(e) => {
                        e.stopPropagation();
                        confirm()
                        setOpen(false);
                    }}>Да</button>
                </div>
            </div>
        </div>
    </>
}

export default (props) => {

    const { priceFormat } = useLayout();

    const { item } = props

    const deleteItem = () => {
        Inertia.delete(route(`cabinet.trucks.destroy`, {
            truck: item.uniqid
        }))
    }

    return <div className="product-card seller-product-card">
        <ConfirmDelete confirm={() => deleteItem()} />
        <div className="product-card-img">
            {item.images && item.images.length ? <img src={item.images[0]} alt="" /> : ``}
        </div>
        <div className="product-card-caption">
            <div className="product-name">
                <p>{item.title}</p>
            </div>
            <div className="product-category">
                <p>{item.category.title}</p>
            </div>
            <div className="product-detail">
                <div className="product-detail-item">
                    <p>Арт:</p>
                    <span>{item.article}</span>
                </div>
                <div className="product-detail-item">
                    <p>Код:</p>
                    <span>{item.code}</span>
                </div>
            </div>
        </div>
        <div className="product-card-price">
            <p>{priceFormat(item.price)}</p>
            <Link href={route(`cabinet.trucks.edit`, {
                truck: item.uniqid
            })} className="btn btn-main btn-sm product-card-btn" >
                <i className="icon icon-edit"></i>
                <span>Редактировать товар</span>
            </Link>
        </div>
    </div>
}