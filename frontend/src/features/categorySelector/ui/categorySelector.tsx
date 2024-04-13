import { Category, useAllCategoriesQuery } from "@/entities/category"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/shared/ui/navigation-menu"
import { Link } from "react-router-dom"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs"


const RenderCategories = (props: { category: Category, level: number }) => {
    const { category, level } = props
    console.log(category.name, level)


    return (
        <>  
            {level !== 1 && (category.isFinal ? (<Link to={'/product'} className={`text-${5 - level}xl`}>{category.name}</Link>) : <div className={`text-${5 - level}xl`}>{category.name}</div >)}
            {
                !category.isFinal &&
                category.childCategories.map(category =>
                    <ul>
                        <RenderCategories level={level + 1} category={category} key={category.id} />
                    </ul>
                )
            }
        </>
    )
}


export const CategorySelector = () => {
    const { data: categories, isLoading } = useAllCategoriesQuery()


    if (isLoading) return null

    return (
        <NavigationMenu>
            <NavigationMenuItem>
                <NavigationMenuTrigger>Каталог</NavigationMenuTrigger>
                <NavigationMenuContent className="h-[850px] w-[1500px]">
                    <div>
                        <Tabs defaultValue={String(categories && categories[0].childCategories[0].id)} className="flex">
                            <TabsList className="flex-col">
                                {categories && categories[0].childCategories.map(category => (
                                    <TabsTrigger value={String(category.id)} className="text-2xl">{category.name}</TabsTrigger>
                                ))}
                            </TabsList>
                            {categories && categories[0].childCategories.map(category =>
                                <TabsContent value={String(category.id)} className="w-[1200px]">
                                    <div className="text-5xl">{category.name}</div>
                                    <div className="grid grid-cols-4 gap-y-24">
                                        <RenderCategories category={category} level={1} key={category.id} />
                                    </div>
                                </TabsContent >
                            )}
                        </Tabs>
                    </div>
                </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenu>
    )
}