import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import  {Model, NullExpression} from "mongoose";
import { RegisterDto } from './dtos/register.dto'
import { User, UserDocument} from "../user/schemas/user.schemas"
import * as CryptoJS from 'crypto-js';
import { promises } from "dns";



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

    async getUserByLoginPassword(email: string, password: string) : Promise<UserDocument | null>{
        const user = await this.userModel.findOne({email}) as UserDocument;

        if (user){
            const bytes = CryptoJS.AES.decrypt(user.password, process.env.USER_CYPHER_SECRET_KEY);
            const savedPassword = bytes.toString(CryptoJS.enc.Utf8);

            if(password == savedPassword){
                return user
            }
        }

        return null;
    }

}


