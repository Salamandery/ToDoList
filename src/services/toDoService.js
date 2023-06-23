import { ApiServices } from "./apiServices";

const endpoint = 'todo';

export const ToDoService = {
    list() {
        return ApiServices.get(endpoint)
    },
    create(item) {
        return ApiServices.post(endpoint, item)
    },
    remove(id) {
        return ApiServices.delete(endpoint, id)
    }
}