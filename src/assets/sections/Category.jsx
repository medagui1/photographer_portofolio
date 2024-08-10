import React from "react";
import { categories } from "../constants/categories";
import CategoryCard from "../components/CategoryCard";

const Category = () => {
  return (
    <section className="section category" aria-label="photography category">
      <div className="container">
      <ul className="category-list flex justify-center items-center flex-wrap gap-y-[35px] gap-x-[10px] ">
        {categories.map((category, index) => (
          <CategoryCard category={category} key={`${index}_${category.name}`} />
        ))}
      </ul>
      </div>
    </section>
  );
};

export default Category;
