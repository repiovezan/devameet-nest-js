import { Module } from '@nestjs/common'; 
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schemas';

@Module({
 imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
 controllers: [],
 providers: [UserService],
 exports: [MongooseModule, UserService]
})
export class UserModule {}




