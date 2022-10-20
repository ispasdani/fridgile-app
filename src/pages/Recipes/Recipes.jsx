import productIcon from "../../assets/recipesimages/products.png"


export default function Recipes() {

    return(
        <section className="recipespage">

            <div className="titleandicon">
                <p>Recipes</p>
                <img src={productIcon} alt="producticon" />
            </div>

            <div className="description">
                Here you can find recipes that match the contents of your fridge the most.
            </div>



        </section>
    )

}