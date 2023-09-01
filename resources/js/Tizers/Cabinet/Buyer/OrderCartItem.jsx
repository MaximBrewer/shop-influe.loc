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

    const { item } = props

    return <div className="order-preview-card">
        <div className="order-preview-card-img">
            <img src={item.part.image} alt={item.part.title} />
        </div>
        <div className="order-preview-card-caption">
            <h6>{item.part.title}</h6>
            <p>{item.part.category.title}</p>
            <span>X {item.quantity}</span>
        </div>
    </div>
}