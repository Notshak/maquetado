import React from 'react'
import  '../css/components.css'
import  '../css/Comp2.css'
import  '../css/Comp3.css'
import  '../css/Comp4.css'
import  '../css/Comp5.css'
import Comp1 from './comp1.js'
import Comp2 from './comp2.js'
import Comp3 from './comp3.js'
import Comp4 from './comp4.js'
import Comp5 from './comp5.js'


function Components(){
    return (
        <div className="document">
            <style>@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@600&display=swap');</style>
            <style>@import url('https://fonts.googleapis.com/css2?family=Azeret+Mono&display=swap');</style>

            <Comp1/>
            <Comp2/>
            <Comp3/>
            <Comp4/>
            <Comp5/>
        </div>
    )
}
export default Components