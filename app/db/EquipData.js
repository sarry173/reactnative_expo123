import Realm from 'realm';

class Item {}
Item.schema = {
  name: 'Item',
  properties: {
    equipmentNo:  'string',
    description: 'string',
    maintenancePlant: 'string',
    currentStatus: 'string',
    nextStatus: 'string'
  },
};

export default new Realm({schema: [Item]})