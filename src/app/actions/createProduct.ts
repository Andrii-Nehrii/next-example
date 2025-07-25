
"use server"
import {revalidateTag} from "next/cache"
import {redirect} from "next/navigation"


export async function createProduct(formData:FormData) {
    const title = formData.get("title")?.toString();
    const price = formData.get("price")?.toString();
    const description = formData.get("description")?.toString();
    const categoryId = formData.get("categoryId")?.toString();
    const images = formData.get("images[]")?.toString();
    
    const res = await fetch ("https://api.escuelajs.co/api/v1/products/",{
        method: "POST",
        body: JSON.stringify({title, price, description, categoryId, images}),
        headers:{
            "Content-Type": "Application/JSON"
        },
    });
    revalidateTag("products")
    redirect("/products/server-version")

}