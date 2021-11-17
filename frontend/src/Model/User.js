import {Model, Collection} from 'vue-mc'

/**
 * Task model
 */
class User extends Model {

    // Default attributes that define the "empty" state.
    defaults() {
        return {
            id:   null,
            firstName: '',
            lastName: false,
            phone: "",
            email: ""
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
            firstName: string.and(required),
            lastName: string.and(required),
        }
    }

    // Route configuration
    routes() {
        return {
            fetch: '/task/{id}',
            save:  '/task',
        }
    }
}