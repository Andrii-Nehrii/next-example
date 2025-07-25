import { createCategory } from "@/app/actions/createCategory";

export default function CreateCategory() {
  return (
    <div>
      <form action={createCategory}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="image" placeholder="Image" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
// Создайте форму добавление продукта, пусть это будет серверный компонент,
//  вам понадобится использовать серверное действие.

