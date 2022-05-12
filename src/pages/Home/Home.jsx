
import Banner from "../../components/Banner";
import BtnExplore from "../../components/BtnExplore";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import ProductItem from "../../components/ProductItem/ProductItem";
import Line from "../../components/Line";
import products from '../../services/products.json'

import { ContainerList } from "./style";


export default function Home({open,setOpen}){

    return(
        <div>
            <Header  open={open} setOpen={setOpen}/>
            <Banner />
            <Line />
            <ContainerList>
                {products.map((product, index) =>
                        <ProductItem 
                        key={index}
                        titulo={product.title}
                        src={product.src}
                        preco={product.price}
                        />   
                )}
            </ContainerList>
            <BtnExplore />
            <Footer />
            
        </div>
    
    )
}