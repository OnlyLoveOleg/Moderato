import { NextComponentType, NextPageContext } from 'next';
import { CategoryCard } from '@/components/molecules/card';
import { Category } from '@/types/model';

type Props = {
  className?: string;
  categories: Category[];
};

/**
 * @desc Category Select section.
 */
export const SelectSection: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  categories,
}) => {
  return <CategoryCard className={className} categories={categories}></CategoryCard>;
};
