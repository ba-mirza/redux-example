import { createStore } from "redux";

const initialState = {
    items: [
        { id: "#1", name: "iPad 4 Mini", price: 500, count: 0},
        { id: "#2", name: "H&M T-Shirt White", price: 10, count: 0 },
        { id: "#3", name: "Charli XCX - Sucker CD", price: 699, count: 0 },
    ]
};

function myReducer(state = initialState, action) {
    const {type, playload} = action;

    switch(type) {
        //если нужно доабвить продукт
        case "Добавить продукт":
            return {
                ...state,
                items: state.items.map((item) => {
                    if(item.id === playload.id) {
                        return {
                            ...item,
                            count: item.count + 1,
                        };
                    }

                    return item;
                })
            };

            case "Убрать продукт":
                return {
                    ...state,
                    items: state.items.map((item) => {
                        if(item.id === playload.id) {
                            return {
                                ...item,
                                count: item.count - 1,
                            };
                        }

                        return item;
                    }),
                };

                default:
                    return state;
    }
}

export default createStore(myReducer);