import asyncHandler from 'express-async-handler';
import { prisma } from '../config/prismaConfig.js';

//function to create a user
export const createUser = asyncHandler(async (req, res) => {
  console.log('creating a user');
  let { email } = req.body;

  const userExist = await prisma.user.findUnique({ where: { email: email } });

  if (!userExist) {
    const user = await prisma.user.create({ data: req.body });
    res.send({
      user: user,
      message: 'User registered successfully',
    });
  } else res.status(201).json({ message: 'User already exist' });
});

//function to get all user
export const getAllUsers = asyncHandler(async (req, res) => {
  console.log('Get all Users');
  const users = await prisma.user.findMany({});
  res.send(users);
});

//function to get a specific user
export const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    res.send(user);
  } catch (error) {
    throw new Error(error.message);
  }
});
