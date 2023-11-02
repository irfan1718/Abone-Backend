import asyncHandler from 'express-async-handler';

import { prisma } from '../config/prismaConfig.js';

//function to create product
export const createProduct = asyncHandler(async (req, res) => {
  console.log('creating a product');
  const { title, description, brand, material, image, size } = req.body.data;
  console.log(req.body.data);
  try {
    const product = await prisma.products.create({
      data: {
        title,
        description,
        brand,
        material,
        image,
        size,
      },
    });

    res.send({ message: 'Product created successfully', product });
  } catch (error) {
    throw new Error(error.message);
  }
});

//function to get all products
export const getAllProducts = asyncHandler(async (req, res) => {
  console.log('Get all products');
  const products = await prisma.products.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  res.send(products);
});

//function to get a specific product
export const getProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const product = await prisma.products.findUnique({ where: { id } });
    res.send(product);
  } catch (error) {
    throw new Error(error.message);
  }
});
