import { db } from './db';
import firebase from 'firebase';


export const addItem = (type,itemNumber, floor, location, modelType, weight) => {
  db.ref('/items').push({
    type: type,
    itemNumber: itemNumber,
    floor: floor,
    location: location,
    modelType: modelType,
    weight: weight,
  });
}
