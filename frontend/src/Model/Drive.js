import {Model} from 'vue-mc'
import User from "./User"
/**
 * Task model
 */
class Drive extends Model {

    // Default attributes that define the "empty" state.
    defaults() {
        return {
            id:   null,
            user: null,
            from: "",
            to: "",
            cost: ""
        }
    }

    // Attribute mutations.
    mutations() {
        return {
            id:   (id) => Number(id) || null,
            firstName: String,
        }
    }

    // Attribute validation
    validation() {
        return {
            id:   integer.and(min(1)).or(equal(null)),
            from: string.and(required),
            to: string.and(required),
            cost: string.and(required)
        }
    }

    // Route configuration
    routes() {
        return {
            fetch: '/drive/{id}',
            save:  '/drive',
        }
    }
}