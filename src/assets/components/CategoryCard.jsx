import React from 'react'

const CategoryCard = ({category}) => {
  return (
    <li className="category-item " data-reveal>
            <a href="#" className="category-card">
              <h3 className="h4 card-title text-white-a25 mb-[10px] text-center duration-transition-2">{category.name}</h3>
              <figure className="card-banner img-holder" style={{ '--width' : 600, '--height' : 690 }}>
                <img
                  src={category.image}
                  alt={category.name}
                  className="img-cover"
                  width={600}
                  height={690}
                  loading="lazy"
                />
              </figure>
            </a>
          </li>
  )
}

export default CategoryCard