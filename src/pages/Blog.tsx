import { Todo } from "../components/Todo";

function Blog() {
  return (
    <main className="flex-grow flex">
      <div className="flex justify-center items-center flex-grow">
        <Todo />
      </div>
    </main>
  );
}

export default Blog;
