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
    @IsArray({ message: MeetMessagesHelper.UPDATE_OBEJCTNAME_NOT_FOUND }) 
    @Type(() => UpdateMeetObject) 
    @ValidateNested({ each: true }) 
    objects: Array<UpdateMeetObject> 
    } 
    
    export class UpdateMeetObject { 
    @IsNotEmpty({ message: MeetMessagesHelper.UPDATE_OBEJCTNAME_NOT_FOUND }) 
    name: string; 
    
    @IsNumber({}, { message: MeetMessagesHelper.UPDATE_XY_VALIDATION }) 
    @Min(0, { message: MeetMessagesHelper.UPDATE_XY_VALIDATION }) 
    @Max(8, { message: MeetMessagesHelper.UPDATE_XY_VALIDATION }) 
    x: number; 
    
    @IsNumber({}, { message: MeetMessagesHelper.UPDATE_XY_VALIDATION }) 
    @Min(0, { message: MeetMessagesHelper.UPDATE_XY_VALIDATION }) 
    @Max(8, { message: MeetMessagesHelper.UPDATE_XY_VALIDATION }) 
    y: number; 
    
    @IsNumber({}, { message: MeetMessagesHelper.UPDATE_ZINDEX_VALIDATION }) 
    zindex: number; 
    
    @IsString({ message: MeetMessagesHelper.UPDATE_ZINDEX_VALIDATION }) 
    orientation: string; 
    }