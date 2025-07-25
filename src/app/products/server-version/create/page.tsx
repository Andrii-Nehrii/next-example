import { createProduct } from "@/app/actions/createProduct";


export default function CreateProduct() {
  return (
    <div>
        <form action={createProduct}>
            <input type="text" name="title" placeholder="Product title"/>
            <input type="text" name="price" placeholder="Price" />
            <input type="text" name="description" placeholder="Product description" />
            <input type="text" name="categoryId" placeholder="Category ID" />
            <input type="text" name = "images[]" placeholder="Images" />
            <button type="submit">Save</button>
        </form>
    </div>
  )
}
