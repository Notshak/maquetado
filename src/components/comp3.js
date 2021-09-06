import React from 'react'

export default function Comp3() {
   let array = [
        {title:"2 in 1",img:"https://raw.githubusercontent.com/Notshak/images/main/cat_1.png"},
        {title:"Home Laptops",img:"https://raw.githubusercontent.com/Notshak/images/main/cat_2.png"},
        {title:"ThinkPad Laptops",img:"https://raw.githubusercontent.com/Notshak/images/main/cat_3.png"},
        {title:"Desktops",img:"https://raw.githubusercontent.com/Notshak/images/main/cat_4.png"},
        {title:"Monitors",img:"https://raw.githubusercontent.com/Notshak/images/main/cat_5.png"},
        {title:"Accesories",img:"https://raw.githubusercontent.com/Notshak/images/main/cat_6.png"},
        {title:"Clearanse",img:"https://raw.githubusercontent.com/Notshak/images/main/cat_7.png"},
        {title:"Outlet",img:"https://raw.githubusercontent.com/Notshak/images/main/cat_8.png"}
    ]
    
    return (
        <div className="categories" >
<style>@import url('https://fonts.googleapis.com/css2?family=Mukta&family=Roboto:wght@400;900&display=swap');</style>           

            {array && array.map((e)=>{
                return <a href="http://localhost:3000" key={e.title} className={`cat_${array.indexOf(e)} pos`}>
                    <img className={`cat_img_${array.indexOf(e)} im`} src={e.img}/>
                    <span className={`cat_e_${array.indexOf(e)} ct`} key={`${array.indexOf(e)}`} >{e.title}</span>
                    </a>
            })}
        </div>
    )
}