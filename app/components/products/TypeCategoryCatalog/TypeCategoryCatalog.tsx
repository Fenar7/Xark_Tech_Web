'use client';

import React, { useMemo, useState } from 'react';
import TypeCategoryCards, { TypeCategoryCardItem } from '../TypeCategoryCards/TypeCategoryCards';
import CategoryFilter, { CategoryFilterGroup, CategoryFilterItem } from '../CategoryFilter/CategoryFilter';

interface TypeCategoryCatalogProps {
    applicationOptions: CategoryFilterItem[];
    typeCards: TypeCategoryCardItem[];
    products: {
        productTypeId: string;
        productApplicationIds: string[];
    }[];
}

const TypeCategoryCatalog: React.FC<TypeCategoryCatalogProps> = ({
    applicationOptions,
    typeCards,
    products,
}) => {
    const [activeApplicationId, setActiveApplicationId] = useState<string | null>(null);

    const groups: CategoryFilterGroup[] = useMemo(
        () =>
            [
                {
                    id: 'application',
                    title: 'Products by Application',
                    items: applicationOptions,
                },
            ].filter((group) => group.items.length > 0),
        [applicationOptions],
    );

    const filteredTypeCards = useMemo(() => {
        if (!activeApplicationId) {
            return typeCards;
        }

        const typeIdsWithMatchingProducts = new Set(
            products
                .filter((product) => product.productApplicationIds.includes(activeApplicationId))
                .map((product) => product.productTypeId),
        );

        return typeCards.filter((typeCard) => typeIdsWithMatchingProducts.has(typeCard.id));
    }, [typeCards, products, activeApplicationId]);

    const handleItemSelect = (_groupId: string, item: CategoryFilterItem) => {
        setActiveApplicationId((previous) => (previous === item.id ? null : item.id));
    };

    return (
        <>
            <CategoryFilter
                groups={groups}
                activeSelections={{
                    application: activeApplicationId,
                }}
                onItemSelect={handleItemSelect}
            />
            <TypeCategoryCards
                items={filteredTypeCards}
            />
        </>
    );
};

export default TypeCategoryCatalog;
