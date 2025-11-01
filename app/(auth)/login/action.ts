

import { z } from "zod";
import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/lib/session";


const testUser = {
  id: "1",
  email: "sn.mousavi77@gmail.com",
  password: "12345678",
};


const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});

export async function login(formData: FormData) {
  console.log(formData)

  const result = loginSchema.safeParse(formData);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }


  const { email, password } = result.data;

 
  if (email !== testUser.email || password !== testUser.password) {
    return {
      errors: {
        email: ["Invalid email or password"],
      },
    };
  }


  await createSession(testUser.id);


  redirect("/dashboard");
}

export async function logout() {

  await deleteSession();
  

  redirect("/login");
}
