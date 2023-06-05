import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {faker} from '@faker-js/faker';

const addUser = createAsyncThunk("users/add", async () => {
    const response = await axios.post("https://jsonplaceholder.typicode.com/users", {
        name: faker.name.fullName(),
    });
    return response.data;
});

export { addUser };