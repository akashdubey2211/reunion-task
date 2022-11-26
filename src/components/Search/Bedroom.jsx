import { Select } from '@chakra-ui/react'
import { useContext } from 'react';
import { HouseContext } from '../../context/HouseContext';

const BedRoom = () => {

  const {setBedRoom, bedRooms} = useContext(HouseContext);

  const bedRoomHandler = (event)=> {
    setBedRoom(event.target.value);
  }

  return (
    <Select placeholder='select bedroom' onChange={bedRoomHandler}>
      {
        bedRooms.map((bedRooms, index)=> 
          <option key={index}>{bedRooms}</option>
        )
      }
    </Select>
  );
};

export default BedRoom;