import { httpAxios } from "@/helper/httpHelper";

export async function getBlog() {
  try {
    const response = await httpAxios.get("/api/get-blogs");
    return response.data;
  } catch (error) {
    console.log("Error Fetching blogs from api:", error);
    return {
      success: false,
      message: "Failed to fetch blogs",
    };
  }
}
