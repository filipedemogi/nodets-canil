import { Response, Request } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/pet";

export const search = (req:Request, res:Response) => {
    let query = req.query.q as string;

    //!query ? res.redirect('/') : false;
    if(!query){
        res.redirect('/');
        return;
    }

    let list = Pet.getFromName(query);
    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    });
}