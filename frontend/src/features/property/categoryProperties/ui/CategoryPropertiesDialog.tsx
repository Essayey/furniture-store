import { Dialog, DialogContent,  DialogTitle, DialogTrigger,  Button } from '@/shared/ui';
import { useAddPropertyToCategoryMutation, useRemovePropertyFromCategoryMutation } from "@/entities/category"
import { useFindAllPropertiesByCategoryIdQuery, useFindExcludedPropertiesByCategoryIdQuery } from "@/entities/property"


type CategoryPropertiesDialogProps = {
    categoryId: number;
    categoryName: string;
};

export const CategoryPropertiesDialog = (props: CategoryPropertiesDialogProps) => {
    const { categoryId, categoryName } = props;

    const { data: includedProperties, isLoading: isIncludedLoading } = useFindAllPropertiesByCategoryIdQuery({ id: categoryId });
    const { data: excludedProperties, isLoading: isExcludedLoading } = useFindExcludedPropertiesByCategoryIdQuery({ id: categoryId });

    const [addPropertyToCategory] = useAddPropertyToCategoryMutation();
    const [removePropertyFromCategory] = useRemovePropertyFromCategoryMutation();

    const handleAddPropertyToCategory = (propertyId: number) => {
        addPropertyToCategory({ categoryId, propertyId });
    };

    const handleConfirmRemoveProperty = (propertyId: number) => {
        removePropertyFromCategory({ categoryId, propertyId: propertyId });
    };

    if (isExcludedLoading || isIncludedLoading) return null;

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    Свойства категории
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogTitle>Управление свойствами категории {categoryName}</DialogTitle>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h3 className="mb-4">Существующие свойства</h3>
                        {excludedProperties?.map((property) => (
                            <div key={property.id} className="bg-gray-200 p-4 cursor-pointer" onClick={() => handleAddPropertyToCategory(property.id)}>
                                {property.name}
                            </div>
                        ))}
                    </div>
                    <div>
                        <h3 className="mb-4">Свойства категории {categoryName}</h3>
                        {includedProperties?.map((property) => (
                            <div key={property.id} className="bg-blue-200 p-4 cursor-pointer" onClick={() => handleConfirmRemoveProperty(property.id)}>
                            {property.name}
                        </div>
                        ))}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

