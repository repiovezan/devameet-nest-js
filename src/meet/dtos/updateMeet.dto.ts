import { 
    IsNotEmpty, 
    IsNumber, 
    Min, 
    Max, 
    IsArray, 
    IsString, 
    ValidateNested 
    } from 'class-validator'; 
    import { Type } from 'class-transformer'; 
    import { MeetMessagesHelper } from '../helpers/meetmessages.helper'; 
    import { CreateMeetDto } from './createmeet.dto'; 
    
    export class UpdateMeetDto extends CreateMeetDto { 
    @IsArray({ message: MeetMessagesHelper.UPDATE_OBJECT_NAME_NOT_VALID}) 
    @Type(() => UpdateMeetObject) 
    @ValidateNested({ each: true }) 
    objects: Array<UpdateMeetObject> 
    } 
    
    export class UpdateMeetObject { 
    @IsNotEmpty({ message: MeetMessagesHelper.UPDATE_OBJECT_NAME_NOT_VALID}) 
    name: string; 
    
    @IsNumber({}, { message: MeetMessagesHelper.UPDATE_XY_NOT_VALID}) 
    @Min(0, { message: MeetMessagesHelper.UPDATE_XY_NOT_VALID}) 
    @Max(8, { message: MeetMessagesHelper.UPDATE_XY_NOT_VALID}) 
    x: number; 
    
    @IsNumber({}, { message: MeetMessagesHelper.UPDATE_XY_NOT_VALID}) 
    @Min(0, { message: MeetMessagesHelper.UPDATE_XY_NOT_VALID}) 
    @Max(8, { message: MeetMessagesHelper.UPDATE_XY_NOT_VALID}) 
    y: number; 
    
    @IsNumber({}, { message: MeetMessagesHelper.UPDATE_ZINDEX_NOT_VALID}) 
    zindex: number; 
    
    @IsString({ message: MeetMessagesHelper.UPDATE_ZINDEX_NOT_VALID}) 
    orientation: string; 
    }