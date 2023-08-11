import {
    IsNotEmpty,
    MinLength,
    Matches
  } from 'class-validator';
  import { MeetMessagesHelper } from '../helpers/meetmessages.helper';


export class CreateMeetDto {

    @IsNotEmpty({ message: MeetMessagesHelper.CREATE_COLOR_NOT_FOUND })
    @Matches(/[0-9A-Fa-f]{6}/g, {
      message: MeetMessagesHelper.CREATE_COLOR_NOT_FOUND,
    })
    color: string;
  
    @IsNotEmpty({ message: MeetMessagesHelper.CREATE_NAME_NOT_FOUND })
    @MinLength(2, { message: MeetMessagesHelper.CREATE_NAME_NOT_FOUND })
    name: string;
  }