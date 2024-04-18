import { Category, useAllCategoriesQuery } from "@/entities/category"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from "@/shared/ui/navigation-menu"
import { Link } from "react-router-dom"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs"
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu"


const RenderCategories = (props: { category: Category, level: number }) => {
    const { category, level } = props
    console.log(category.name, level)


    return (
        <>
            {level !== 1 && (category.isFinal ? (
                <NavigationMenuLink>
                    <Link to={`/catalog?category=${category.id}`} className={`text-${5 - level}xl`}>{category.name}</Link>
                </NavigationMenuLink >
            ) : <div className={`text-${5 - level}xl`}>{category.name}</div >)}
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


    if (isLoading || !categories?.length) return null
    console.log(categories)

    return (
        <NavigationMenu>
            <NavigationMenuItem>
                <NavigationMenuTrigger>Каталог</NavigationMenuTrigger>
                <NavigationMenuContent className="h-[850px] w-[1500px]">
                    <div>
                        <Tabs defaultValue={String(categories && categories[0]?.childCategories[0]?.id)} className="flex gap-10">
                            <TabsList className="flex-col items-start">
                                {categories && categories[0].childCategories.map(category => (
                                    <TabsTrigger value={String(category.id)} className="text-2xl text-start">{category.name}</TabsTrigger>
                                ))}
                            </TabsList>
                            {categories && categories[0].childCategories.map(category =>
                                <TabsContent value={String(category.id)} className="w-[1200px]">
                                    <div className="text-5xl mb-8">{category.name}</div>
                                    <div className="grid grid-cols-3 gap-y-24">
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