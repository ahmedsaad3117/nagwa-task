import { RequestHandler } from "express";
import { generateRandomWords } from "../model/DBHandler"; 
import { arrayShuffling } from "../utils/helpers"; 


export const getRandomWords : RequestHandler = (req, resp) => {
    try {
      resp.json({data: arrayShuffling(generateRandomWords()),
      message: "Scuess!"
      });
    } catch (e) {
      resp.status(500).send();
    }
  }