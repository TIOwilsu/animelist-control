export default {
  name: 'ListControl',
  data: () => ({
    fields: ['selected', 'name', 'episodies',],
    allItems: [
      { id: 1, name: 'Naruto', episodies: 220,},
      { id: 2, name: 'Bleach', episodies: 366, },
      { id: 3, name: 'One Piece', episodies: 1034,},
      { id: 4, name: 'Dragon Ball', episodies: 153, },
    ],
    allItemsSelected: [],
    addedItems: [],
    addedItemsSelected: [],
    
  }),
  methods: {
    rowSelected (key, items,) {
      this[`${key}Selected`] = items;
    },

    addItems (addedKey, selectedkey,) {
      this[addedKey] = [...this[addedKey], ...this[`${selectedkey}Selected`],];
    },

    removeItems (key,) {
      const itemsSelected = this[`${key}Selected`];
      const items = this[key];
      const filteredItems = items.filter((item,) => {
        const findedItem = itemsSelected.find((itemSelected,) => 
          item.id === itemSelected.id, );
        return  !findedItem;
      },);

      this[key] = filteredItems;
    },
  },
};
