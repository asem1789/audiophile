import { ProductsData } from "../constants/products-data";

export const getProductById = (id) => {
  let result;

  const keys = Object.keys(ProductsData);

  for (let i = 0; i < keys.length; i++) {
    const temp = ProductsData[keys[i]].find((el) => el.id === id);
    if (temp) {
      result = temp;
      break;
    }
  }

  return result ? result : null;
};

export const getSuggestProducts = (currentId) => {
  const keys = Object.keys(ProductsData);
  const allProducts = keys.reduce((acc, curr) => {
    return [...acc, ...ProductsData[curr]];
  }, []);

  const result = [];
  const max = allProducts.length;

  while (result.length < 3) {
    const randomIndex = Math.floor(Math.random() * max); // from 0 to length-1
    const tempProduct = allProducts[randomIndex];
    let isAdded = false;

    for (let i = 0; i < result.length; i++) {
      if (result[i].id === tempProduct.id) {
        isAdded = true;
        break;
      }
    }

    if (isAdded || tempProduct.id === currentId) {
      continue;
    }

    result.push(tempProduct);
  }

  return result;
};
