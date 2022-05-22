/** source/controllers/country.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import * as CountryDetail from '../../models/CountryDetail';


interface Country {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

// getting all posts
const getCountries = async (req: Request, res: Response, next: NextFunction) => {
    // get some posts
    let value: CountryDetail.CountryDetail[] | undefined;;
    const fs = require("fs");
    fs.readFile("countrydetail.json", "utf8", (err: any, jsonString: any) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        let value: CountryDetail.CountryDetail[] = JSON.parse(jsonString);
        let states: CountryDetail.State[] = value[101].states;
        return res.status(200).json({
            message: states
        });
    });


};


export default { getCountries };
