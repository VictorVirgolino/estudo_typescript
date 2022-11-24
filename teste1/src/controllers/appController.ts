import { Request, Response } from "express";

class AppController{

    public home(req: Request, res: Response){
        res.json({
            message: "Deu Certo"
        });
    }
}

export const appController =  new AppController();