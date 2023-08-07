import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import  {Model} from "mongoose";
import { RegisterDto } from './dtos/register.dto'
import { User, UserDocument} from "../user/schemas/user.schemas"
import * as CryptoJS from 'crypto-js';



@Injectable()
export class UserService{
    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>){}

    async create(dto: RegisterDto){
        dto.password = CryptoJS.AES.encrypt(dto.password, process.env.USER_CYPHER_SECRET_KEY)

        const createUser = new this.userModel(dto);
        await createUser.save();
    }

    async existsByEmail(email : String) : Promise<boolean>{
        const result = await this.userModel.findOne({email});

        if(result){
            return true;
        }

        return false;
    }
}


