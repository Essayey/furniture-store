import { ProductCard, useAllProductsQuery } from "@/entities/product"


export const CatalogPage = () => {
    const {data, isLoading} = useAllProductsQuery()

    if (isLoading) return null

    return (
        <div className="grid grid-cols-4">
            {data?.map(product => <ProductCard {...product} onAddToCart={() => {}} img={`http://localhost:7000/${product.img}`}/>)}
        </div>
    )
}