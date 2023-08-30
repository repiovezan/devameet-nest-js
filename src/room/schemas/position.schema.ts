import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Meet } from "src/meet/schemas/meet.schema";
import { User } from "../../user/schemas/user.schemas";

export type PositionDocument = HydratedDocument<Position>

@Schema()
export class Position {

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Meet.name})
    meet: Meet;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: User.name})
    user: User;

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    avatar: string;

    @Prop({required: true})
    clientId: string;

    @Prop({type:mongoose.Schema.Types.Number, required : true})
    x:number;

    @Prop({type:mongoose.Schema.Types.Number, required : true})
    y:number;

    @Prop({type:mongoose.Schema.Types.String, required : true})
    orientation: string;

    @Prop({ default: false })
    muted: boolean;
  
    @Prop({ default: false })
    inRoom: boolean;
  }
  
  export const PositionSchema = SchemaFactory.createForClass(Position);