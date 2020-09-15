import React from 'react'
import './home.css'
import Product from './Product'
export default function Home() {
    return (
        <div className="home">
            <img className="home_img" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Pay/Sept/HeroPC_1500x600._CB406689843_.jpg"></img>
        <div className="home_row">
        <Product 
        id='1'
        title='Boult Audio BassBuds X1 in-Ear Wired Earphones with Mic and 10mm Powerful Driver for Extra Bass and HD Sound (Red)'
        price={15.26}
        rating={4}
        image='https://m.media-amazon.com/images/I/41xdQjDRECL._AC_SR250,230_.jpg'
        />

        <Product 
        id='2'
        title='Boult Audio ProBass Curve Wireless Neckband Earphones with 12 Hour Battery Life & Latest Bluetooth 5.0, IPX5 Sweatproof Headphones with mic (Black)'
        price={12.26}
        rating={4}
        image='https://m.media-amazon.com/images/I/61VGIVPor-L._AC_UY327_QL65_.jpg'
        />
        </div>
        <div className="home_row">
        <Product 
        id='3'
        title='CELLBELL® Folding Study Chair with Cushion & Writing Pad[Black] '
        price={9.26}
        rating={5}
        image='https://m.media-amazon.com/images/I/51GhLCP+xeL._AC_UL480_QL65_.jpg'
        />
        <Product 
        id='4'
        title='Acer Nitro 5 AN515-54 15.6-inch Gaming Laptop (9th Gen Intel Core i5-9300H processor/8GB/1TB+256GB SSD/Windows 10 Home 64-bit/NVIDIA 4GB), Black '
        price={15.26}
        rating={4}
        image='https://m.media-amazon.com/images/I/71QXJg8uOCL._AC_UL480_QL65_.jpg'
        />
         <Product 
        id='5'
        title='HP Pavilion Gaming DK0268TX 15.6-inch Laptop (Core i5-9300H/8GB/512GB SSD/Windows 10 Home/4GB NVIDIA GeForce GTX 1650 Graphics), Shadow Black '
        price={22.81}
        rating={3}
        image='https://m.media-amazon.com/images/I/81pezrPSgOL._AC_UL480_QL65_.jpg'
        />
        </div>
        <div className="home_row">
        <Product 
        id='6'
        title='Samsung 163 cm (65 Inches) Q Series 4K Ultra HD QLED Smart TV QA65Q8CNAK (Black) (2018 model) '
        price={255.26}
        rating={4}
        image='https://m.media-amazon.com/images/I/91i6SX47ClL._AC_UY327_QL65_.jpg'
        />
        </div>
        </div>
    )
}
