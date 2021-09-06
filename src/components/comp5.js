import React from 'react'

export default function Comp5() {
    let array= [
        {title:'Legion Y520 15"', img:"https://raw.githubusercontent.com/Notshak/images/main/it_1.png"},
        {title:"Legion Y920", img:"https://raw.githubusercontent.com/Notshak/images/main/it_2.png"},
        {title:'Legion Y700 17"', img:"https://raw.githubusercontent.com/Notshak/images/main/it_3.png"},
        {title:'IdeaCentre Y900 RE', img:"https://raw.githubusercontent.com/Notshak/images/main/it_4.png"}
    ]
    let it= {
        subtitle: "Crank up every setting to the max.",
        price: 729.99,
        saved: 200,
        shipping: true,
        starsAverage: 5.0,
        starsTotal: 120,
        components: [
        {cat:"Processor",name:"Intel Core i3"},
        {cat: "Operating System",name:"Windows 10 Profesional"},
        {cat:"Memory",name:"16 GB RAM"},
        {cat:"Hard Drive",name:"512 GB SSd"},
        {cat:"Graphics",name:"NVIDIA Graphics 4"}]
    }
    return (
        <div className="items" >
            {array.map((e)=>
                <div key={e.img} className={`item_${array.indexOf(e)} item_card`}>
                    <span className="item_cat">DOORBUSTER</span>
                    <a className="item_img_place"></a>
                    <img className={`item_img im_${array.indexOf(e)}`} src={e.img}/>
                    <a className="item_title">{e.title}</a>
                    <span className="item_subtitle">{it.subtitle}</span>
                    <a className="sep_4"></a>
                    <span className="item_sale">Sale Price starting at:</span>
                    <span className="item_price">{`$${it.price}`}</span>
                    <a className="sep_2"></a>
                    <span className="item_saved">{`You save: $200`}</span>
                    <a className="sep_2"></a>
                    <span><b>Use eCoupon: DEALS</b></span>
                    <a className="sep_2"></a>
                    <a className="sep_2"></a>
                    {it.shipping == true? <span className="item_shipping"><b>Free Shipping!</b></span>:<span></span>}
                    <a className="sep_4"></a>
                    <a>
                    <img src="https://raw.githubusercontent.com/Notshak/images/main/stars.png" className="item_stars"/>
                    <span ><b>{` 5.0`}</b></span>
                    <span >{` (${it.starsTotal})`}</span>
                    </a>
                    <a className="separador"></a>
                    <a className="items_buy" href="">SHOP NOW</a>
                    <a className="separador"></a>
                    {it.components.map((el)=>
                    <>
                        <span className="item_comp_cat">{el.cat}</span>
                        <a className="sep_2"></a>
                        <span className="item_comp_name">{el.name}</span>
                        <a className="sep_3"></a>
                        <a className="sep_4"></a>
                    </>  
                    )}
                    <span className="item_cfull">{`See Full Specs >`}</span>
                </div>
            )}
        </div>
    )
}