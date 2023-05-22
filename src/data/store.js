import { reactive } from 'vue'

export const store = reactive({
    apiUrl: "http://127.0.0.1:8000/api/",
    sponsoredApartmentsUrl: "http://127.0.0.1:8000/api/sponsored-apartments",
    user_name: "",
    user_surname: "",
    user_email: "",
});