// const mongoose=require('mongoose');
import * as mongooseLibrary from "mongoose";
const mongoose = mongooseLibrary;

const connectionString='mongodb+srv://Esther:stk8356@cluster0.8tohzdl.mongodb.net/Shopping?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(connectionString);

const connection=mongoose.connection;


