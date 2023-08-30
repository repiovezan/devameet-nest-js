import { JoinRoomDto } from './joinroom.dto';
import { IsBoolean } from 'class-validator';
import { RoomMessagesHelper} from '../helpers/roommessages.helper';


export class inRoom extends JoinRoomDto{
  @IsBoolean({ message: RoomMessagesHelper.IN_ROOM_NOT_VALID })
  inRoom: boolean;
}