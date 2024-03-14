import type { User } from "@/model/users";
import { reactive } from "vue";

const session = reactive({
  user: null as User | null
})

// session.user = {firstName: "John", lastName: "Doe", email: "hello@gmail.com"} as User

export const refSession = () => session;

export function login(user: User) {
  session.user = user
}

export function logout() {
  session.user = null
}