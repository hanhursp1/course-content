import type { User } from "@/model/users";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const session = reactive({
  user: null as User | null
})

export function useLogin() {
  const router = useRouter()
  return ({
    login(user: User) {
      session.user = user
      router.push("/products")
    },
    logout(){
      session.user = null
      router.push("/")
    }
  })
}

// session.user = {firstName: "John", lastName: "Doe", email: "hello@gmail.com"} as User

export const refSession = () => session;

// export function login(user: User) {
//   session.user = user
// }

// export function logout() {
//   const router = useRouter()
//   session.user = null
//   router.push("/login")
// }