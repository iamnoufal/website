"use server";

import { subscribeMember } from "@/utils/ghost";

export async function subscribe(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;

  if (!email) {
    return { success: false, message: "Email is required" };
  }

  try {
    const res = await subscribeMember(email, email.split("@")[0]);

    if (res && !res.errors) {
      return { success: true, message: "Successfully subscribed!" };
    } else {
      return { success: false, message: "Failed to subscribe. Please try again." };
    }
  } catch (error) {
    return { success: false, message: "An unexpected error occurred." };
  }
}
