import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import {BsGoogle} from 'react-icons/bs'
import './icons.css'
const Icons = () => {
  return (
    <div class="pl-12">
        <ul class="social_icons">
            <li> <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a> </li>
            <li> <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a> </li>
            <li> <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a> </li>
            <li> <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a> </li>
            <li> <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a> </li>
        </ul>
    </div>
  )
}

export default Icons